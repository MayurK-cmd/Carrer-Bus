import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, Mail, Lock, ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import API from "../api";

function LoginAdvisor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await API.post("/advisors/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/advisorhome");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid advisor credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-emerald-100">
      
      {/* Left Side: Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[140px]" />
        </div>

        <Link to="/" className="relative z-10 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium uppercase tracking-widest text-xs">Back to Hub</span>
        </Link>

        <div className="relative z-10">
          <div className="bg-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
            <Briefcase className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Expert <br />
            <span className="text-emerald-400">Portal.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-sm">
            Sign in to access your consultations and provide professional guidance to students.
          </p>
        </div>

        <div className="relative z-10 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
          Certified Advisor Network • 2026
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-[#FAFBFF]">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Advisor Login</h2>
            <p className="text-slate-500 font-medium">Welcome back, Expert. Please enter your details.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  type="email"
                  placeholder="name@expert-panel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                <Link to="#" className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In to Dashboard"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-center text-sm font-bold animate-in fade-in zoom-in">
              {error}
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              New to the panel?{" "}
              <Link to="/signup/advisor" className="text-emerald-600 font-bold hover:underline underline-offset-4">
                Register as Advisor
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdvisor;