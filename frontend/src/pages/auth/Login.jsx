import { useState } from "react";
import { checkValidDate } from "../../utils/validate";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLogin } from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {loginMutation} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = checkValidDate(email, password);
    if (validate) {
      toast.error(validate);
    } else {
      loginMutation({email,password});
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Web Media</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
