import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

function Exams() {
  return (
    <div>
      <DashboardHeader />
      <h2>Exams</h2>
      <div style={btnContainer}>
        <Link to="/exams/after-10th" style={btnStyle}>After 10th</Link>
        <Link to="/exams/after-12th" style={btnStyle}>After 12th</Link>
      </div>
    </div>
  );
}

const btnContainer = { display: "flex", gap: "1rem", marginTop: "1rem" };
const btnStyle = { padding: "0.7rem 1.5rem", background: "#ffc107", color: "black", borderRadius: "6px", textDecoration: "none" };

export default Exams;
