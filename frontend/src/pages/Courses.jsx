import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

function Courses() {
  return (
    <div>
      <DashboardHeader />
      <h2>Courses</h2>
      <div style={btnContainer}>
        <Link to="/courses/after-10th" style={btnStyle}>After 10th</Link>
        <Link to="/courses/after-12th" style={btnStyle}>After 12th</Link>
      </div>
    </div>
  );
}

const btnContainer = { display: "flex", gap: "1rem", marginTop: "1rem" };
const btnStyle = { padding: "0.7rem 1.5rem", background: "#28a745", color: "white", borderRadius: "6px", textDecoration: "none" };

export default Courses;
