import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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

  // Password regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol (!@#$%&*)"
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.age < 0) {
      alert("Age cannot be negative!");
      setIsSubmitting(false);
      return;
    }

    if (!passwordRegex.test(form.password)) {
      alert("Invalid password format!");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await API.post("/auth/signup", form);
      alert("Signup successful! Please log in.");
    } catch (err) {
      setError("Signup failed");
      alert("Signup failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Student Signup</h2>
        
        <div onSubmit={handleSignup} className="space-y-4">
          {/* First and Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />

          {/* Password with eye toggle */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          {passwordError && (
            <p className="text-red-500 text-xs leading-tight">{passwordError}</p>
          )}

          {/* Study Level and Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="studyingIn"
              value={form.studyingIn}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={`Grade ${i + 1}`}>
                  Grade {i + 1}
                </option>
              ))}
            </select>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
            </select>
          </div>

          {/* Age and City */}
          <div className="grid grid-cols-2 gap-3">
            <input
              name="age"
              type="number"
              min="5"
              max="100"
              placeholder="Age"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>

          {/* Contact Number - Fixed mobile layout */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Contact Number</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="w-20 sm:w-24 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent flex-shrink-0"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+86">+86</option>
                <option value="+33">+33</option>
                <option value="+49">+49</option>
              </select>
              <input
                name="contactNumber"
                type="tel"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="flex-1 min-w-0 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSignup}
            disabled={isSubmitting}
            className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-3 text-center text-sm">{error}</p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login/student" 
            className="text-violet-600 font-medium hover:text-violet-700 focus:outline-none focus:underline"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupStudent;