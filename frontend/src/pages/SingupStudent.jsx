import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function SignupStudent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      navigate("/login/student");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={formStyle}>
      <h2>Student Signup</h2>
      <form onSubmit={handleSignup}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} style={inputStyle} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} style={inputStyle} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} />
        <input name="studyingIn" placeholder="Studying In" onChange={handleChange} style={inputStyle} />
        <input name="gender" placeholder="Gender" onChange={handleChange} style={inputStyle} />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} style={inputStyle} />
        <input name="city" placeholder="City" onChange={handleChange} style={inputStyle} />
        <input name="contactNumber" placeholder="Contact Number" onChange={handleChange} style={inputStyle} />
        <button type="submit" style={btnStyle}>Signup</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

const formStyle = { maxWidth: "400px", margin: "2rem auto", textAlign: "center" };
const inputStyle = { display: "block", width: "100%", margin: "0.5rem 0", padding: "0.5rem" };
const btnStyle = { padding: "0.5rem 1rem", marginTop: "1rem" };

export default SignupStudent;
