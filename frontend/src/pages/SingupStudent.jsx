import { useState } from "react";
import { Eye, EyeOff, GraduationCap, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; 
import API from "../api";

function SignupStudent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    studyingIn: "Grade 1",
    gender: "Male",
    age: "",
    city: "",
    contactNumber: "",
    countryCode: "+91",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      setPasswordError(!passwordRegex.test(value) 
        ? "Password must be 8+ chars with uppercase, number, and symbol" 
        : ""
      );
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (form.age < 0) { alert("Age cannot be negative!"); setIsSubmitting(false); return; }
    if (!passwordRegex.test(form.password)) { alert("Invalid password format!"); setIsSubmitting(false); return; }

    try {
      await API.post("/auth/signup", form,);
      alert("Signup successful! Please log in.");
    } catch (err) {
      setError("Signup failed. Please check your details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-indigo-100">
      
      {/* Left Side: Branding/Visual (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
        </div>
        
        <Link to="/" className="relative z-10 flex items-center gap-2 text-white group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="relative z-10">
          <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            The first step toward your <br />
            <span className="text-indigo-400 font-serif italic text-5xl xl:text-6xl">dream career.</span>
          </h1>
          <ul className="space-y-4">
            {['Personalized AI Assessments', 'Expert Career Counseling', 'Curated University Database'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="bg-emerald-500/20 p-1 rounded-full">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 text-slate-500 text-sm">
          © 2026 Career Bus. Professional Guidance Platform.
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-[#FAFBFF]">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500">Join the next generation of achievers.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="John"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-rose-500 text-[11px] font-medium leading-tight mt-1">{passwordError}</p>
              )}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Grade</label>
                <select
                  name="studyingIn"
                  value={form.studyingIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Contact Details</label>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-24 px-3 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none text-center"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  name="contactNumber"
                  type="tel"
                  placeholder="9876543210"
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Age & City Row */}
<div className="grid grid-cols-2 gap-4">
  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-slate-700 ml-1">
      Age
    </label>
    <input
      name="age"
      type="number"
      min="5"
      max="100"
      placeholder="16"
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
  </div>

  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-slate-700 ml-1">
      City
    </label>
    <input
      name="city"
      type="text"
      placeholder="Mumbai"
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
    />
  </div>
</div>


            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-slate-800 transition-all font-bold text-lg shadow-xl shadow-slate-200 disabled:opacity-70 mt-4 active:scale-[0.98]"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-rose-50 border border-rose-100 rounded-lg text-rose-600 text-center text-sm font-medium animate-shake">
              {error}
            </div>
          )}

          <p className="mt-8 text-center text-slate-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login/student" 
              className="text-indigo-600 font-bold hover:underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupStudent;