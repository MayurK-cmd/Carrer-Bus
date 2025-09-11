import DashboardHeader from "../components/DashboardHeader";

function Home() {
  return (
    <div>
      <DashboardHeader />
      <h2 style={{ textAlign: "center" }}>Welcome Student 👋</h2>
      <p style={{ textAlign: "center" }}>
        Use the navigation above to explore Colleges, Courses, Exams, and your Profile.
      </p>
    </div>
  );
}

export default Home;
