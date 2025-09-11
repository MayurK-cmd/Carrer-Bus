import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Show login buttons only on landing page
  const isLanding = location.pathname === "/";

  return (
    <header
      style={{
        background: "#333",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Course & Career Advisor</h2>
      {isLanding && (
        <div>
          <Link to="/login/student" style={buttonStyle}>
            Login as Student
          </Link>
          <Link to="/login/advisor" style={buttonStyle}>
            Login as Advisor
          </Link>
        </div>
      )}
    </header>
  );
}

const buttonStyle = {
  marginLeft: "1rem",
  padding: "0.5rem 1rem",
  background: "white",
  color: "#333",
  borderRadius: "4px",
  textDecoration: "none",
};

export default Header;
