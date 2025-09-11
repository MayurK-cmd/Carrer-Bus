import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginStudent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      toast.error("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Toaster />
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Student Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full border rounded-lg p-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className="w-full border rounded-lg p-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        <p className="mt-4 text-center">
          Not a user?{" "}
          <Link to="/signup/student" className="text-violet-600 font-medium">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginStudent;
