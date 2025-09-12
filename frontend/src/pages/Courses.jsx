import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

function Courses() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mt-20">
      <DashboardHeader />
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Explore Your Path
      </h2>

      <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
        Choosing the right course after school is one of the most important
        decisions you’ll make. Whether you just completed your 10th or 12th,
        we’ve curated a list of courses to help you discover opportunities
        that match your interests and career goals.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          to="/courses/after-10th"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg font-medium"
        >
          After 10th
        </Link>

        <Link
          to="/courses/after-12th"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-lg font-medium"
        >
          After 12th
        </Link>
      </div>
    </div>
  );
}

export default Courses;
