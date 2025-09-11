import { Routes, Route } from "react-router-dom";
import Header from "./components/LanndingHeader";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import LoginStudent from "./pages/LoginStudent";
import LoginAdvisor from "./pages/LoginAdvisor";
import SignupStudent from "./pages/SingupStudent";
import SignupAdvisor from "./pages/SingupAdvisor";

import Home from "./pages/Home";
import Colleges from "./pages/Colleges";
import Courses from "./pages/Courses";
import Exams from "./pages/Exams";
import Profile from "./pages/Profile";
import After10thCourses from "./pages/After10thCourses";
import After12thCourses from "./pages/After12thCourses";
import After10thExams from "./pages/After10thExams";
import After12thExams from "./pages/After12thExams";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login/student" element={<LoginStudent />} />
          <Route path="/login/advisor" element={<LoginAdvisor />} />
          <Route path="/signup/student" element={<SignupStudent />} />
          <Route path="/signup/advisor" element={<SignupAdvisor />} />
          

          <Route path="/home" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/after-10th" element={<After10thCourses />} />
          <Route path="/courses/after-12th" element={<After12thCourses />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/after-10th" element={<After10thExams />} />
          <Route path="/exams/after-12th" element={<After12thExams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
