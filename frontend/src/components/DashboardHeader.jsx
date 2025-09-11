import { Link, useLocation } from "react-router-dom";

function DashboardHeader() {
  const location = useLocation();
  const isHomeSection =
    location.pathname.startsWith("/home") ||
    location.pathname.startsWith("/colleges") ||
    location.pathname.startsWith("/courses") ||
    location.pathname.startsWith("/exams") ||
    location.pathname.startsWith("/profile");

  if (!isHomeSection) return null; // show only inside student dashboard

  return (
    <nav style={navStyle}>
      <Link to="/colleges" style={btnStyle}>Colleges</Link>
      <Link to="/courses" style={btnStyle}>Courses</Link>
      <Link to="/exams" style={btnStyle}>Exams</Link>
      <Link to="/profile" style={btnStyle}>Profile</Link>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  background: "#f0f0f0",
  padding: "1rem",
  marginBottom: "1rem",
};

const btnStyle = {
  padding: "0.5rem 1rem",
  background: "#333",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};

export default DashboardHeader;
