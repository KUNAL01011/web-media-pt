import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    
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

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
