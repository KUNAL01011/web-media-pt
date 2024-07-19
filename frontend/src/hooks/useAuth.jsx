import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useLogin = () => {
  const queryClient = useQueryClient();
  const {
    mutate: loginMutation,
    isPending: loginPending,
    isError: loginIsError,
    error: loginError,
  } = useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const res = await fetch("/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      // refetch the authUser
      toast.success("Login Successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });
  return { loginMutation, loginIsError, loginPending, loginError };
};

const useRegister = () => {
  const queryClient = useQueryClient();
  const {
    mutate: registerMutation,
    isError: registerIsError,
    isPending: registerIsPending,
    error: registerError,
  } = useMutation({
    mutationFn: async ({ email, username, fullName, password }) => {
      try {
        const res = await fetch("/api/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, fullName, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create account");
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  return {
    registerMutation,
    registerIsError,
    registerIsPending,
    registerError,
  };
};

const useAuth = () => {
  const { data: authUser, isLoading: authLoading } = useQuery({
    // we use queryKey to give a unique name to our query and refer to it later
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/v1/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });
  return { authUser, authLoading };
};

export { useLogin, useRegister, useAuth };
