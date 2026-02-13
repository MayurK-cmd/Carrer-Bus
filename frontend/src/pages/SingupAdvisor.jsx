import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Briefcase, 
  UserCheck, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  Lock, 
  MapPin, 
  Phone,
  GraduationCap 
} from "lucide-react";
import API from "../api";

function SignupAdvisor() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    qualification: "",
    city: "",
    contactNumber: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await API.post("/advisors/signup", form);
      navigate("/login/advisor");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-emerald-100">
      
      {/* Left Side: Professional Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[140px]" />
        </div>
        
        <Link to="/" className="relative z-10 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group w-fit">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm uppercase tracking-widest">Back to Hub</span>
        </Link>

        <div className="relative z-10 max-w-md">
          <div className="bg-emerald-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
            <Briefcase className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Join our network of <br />
            <span className="text-emerald-400 italic font-serif">Elite Advisors.</span>
          </h1>
          
          <div className="space-y-6 mt-10">
            {[
              { title: "Empower Students", desc: "Guide the next generation toward their true potential." },
              { title: "Flexible Schedule", desc: "Manage your consultations on your own terms." },
              { title: "Verified Network", desc: "Access a curated community of professional experts." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
          Advisor Portal • CareerBus 2026
        </div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-[#FAFBFF] overflow-y-auto">
        <div className="max-w-lg w-full mx-auto">
          
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Advisor Registration</h2>
            <p className="text-slate-500 font-medium">Please provide your credentials to join the panel.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  name="email"
                  type="email"
                  placeholder="jane@consultancy.com"
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Highest Qualification</label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  name="qualification"
                  placeholder="e.g. Masters in Career Psychology"
                  required
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input
                    name="city"
                    placeholder="Mumbai"
                    required
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Phone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input
                    name="contactNumber"
                    placeholder="+91 00000 00000"
                    required
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200 disabled:opacity-50 mt-6 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Processing..." : "Complete Signup"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-center text-sm font-bold animate-in fade-in zoom-in duration-300">
              {error}
            </div>
          )}

          <p className="mt-8 text-center text-slate-500 text-sm font-medium">
            Already an advisor?{" "}
            <Link
              to="/login/advisor" 
              className="text-emerald-600 font-bold hover:underline underline-offset-4"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupAdvisor;