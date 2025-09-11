import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function LoginStudent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // store token
      navigate("/home"); // redirect to homepage or dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={formStyle}>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={btnStyle}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Not a user? <Link to="/signup/student">Signup here</Link>
      </p>
    </div>
  );
}

const formStyle = { maxWidth: "400px", margin: "2rem auto", textAlign: "center" };
const inputStyle = { display: "block", width: "100%", margin: "0.5rem 0", padding: "0.5rem" };
const btnStyle = { padding: "0.5rem 1rem", marginTop: "1rem" };

export default LoginStudent;
