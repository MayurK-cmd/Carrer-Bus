import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const navigate = useNavigate();

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

    if (form.age < 0) {
      toast.error("Age cannot be negative!");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      toast.error("Invalid password format!");
      return;
    }

    try {
      await API.post("/auth/signup", form);
      toast.success("Signup successful!");
      setTimeout(() => navigate("/login/student"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      toast.error("Signup failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Toaster />
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Student Signup</h2>
        <form onSubmit={handleSignup} className="space-y-3">
          {/* First and Last Name side by side */}
          <div className="flex gap-2">
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-1/2 border rounded-lg p-2"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-1/2 border rounded-lg p-2"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          {/* Password with eye toggle */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          {/* StudyingIn dropdown */}
          <select
            name="studyingIn"
            value={form.studyingIn}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={`Grade ${i + 1}`}>
                Grade {i + 1}
              </option>
            ))}
          </select>

          {/* Gender dropdown */}
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Age input without scroll */}
          <input
            name="age"
            type="number"
            min="0"
            placeholder="Age"
            onChange={handleChange}
            className="w-full border rounded-lg p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          {/* Contact number with country code */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="border rounded-lg p-2"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
            <input
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              className="flex-1 border rounded-lg p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
          >
            Signup
          </button>
        </form>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        <p className="mt-4 text-center">
          Already a user?{" "}
          <Link to="/login/student" className="text-violet-600 font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupStudent;
