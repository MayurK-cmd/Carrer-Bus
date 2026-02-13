import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff, GraduationCap, ArrowLeft, Loader2, Sparkles } from "lucide-react";

function LoginStudent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Welcome back!");
      setTimeout(() => navigate("/home"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
      toast.error("Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-indigo-100">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Left Side: Visual/Context (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <Link to="/" className="relative z-10 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Return to Landing</span>
        </Link>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Driven Insights</span>
          </div>
          <h1 className="text-4xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
            Welcome back to <br />
            <span className="text-indigo-400">your future.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md">
            Log in to access your personalized career assessments and advisor chats.
          </p>
        </div>

        <div className="relative z-10 text-slate-500 text-sm">
          © 2026 Career Bus. Secure Student Portal.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-[#FAFBFF]">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Logo Visibility */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="bg-indigo-600 p-3 rounded-2xl shadow-xl shadow-indigo-100">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Student Login</h2>
            <p className="text-slate-500">Please enter your details to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link to="/forgot-password" size="sm" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                  className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl hover:bg-slate-800 transition-all font-bold text-lg shadow-xl shadow-slate-200 disabled:opacity-70 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-center text-sm font-medium animate-in fade-in zoom-in duration-300">
              {error}
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup/student" 
                className="text-indigo-600 font-bold hover:underline underline-offset-4 decoration-2"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginStudent;