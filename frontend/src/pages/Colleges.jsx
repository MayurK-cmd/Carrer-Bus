import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import API from "../api";

function Colleges() {
  const [data, setData] = useState(null);

  const fetchColleges = async () => {
    try {
      const res = await API.post("/data/colleges", {}); // adjust when backend is ready
      setData(res.data);
    } catch (err) {
      console.error("Error fetching colleges", err);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <h2>Colleges</h2>
      <button onClick={fetchColleges} style={btnStyle}>
        Load Colleges
      </button>
      {data && (
        <pre style={dataStyle}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "0.5rem 1rem",
  margin: "1rem 0",
  background: "#007bff",
  color: "white",
  borderRadius: "5px",
  border: "none",
};

const dataStyle = {
  background: "#f8f9fa",
  padding: "1rem",
  borderRadius: "8px",
  marginTop: "1rem",
  overflowX: "auto",
};

export default Colleges;
