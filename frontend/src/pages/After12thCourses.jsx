import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import API from "../api";
import { Clock, DollarSign, Target } from "lucide-react";

export default function After12thCourses() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authorization token is missing.");
          setLoading(false);
          return;
        }

        const response = await API.get("/courses/after-12th", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses data");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  // 🔹 Helper function to normalize courses into a flat array
  const normalizeCourses = (data) => {
    let coursesArray = [];

    Object.entries(data).forEach(([category, courses]) => {
      Object.entries(courses).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // "others" / "diploma" case → array of objects
          value.forEach((course) => {
            coursesArray.push({
              title: course.name,
              description: course.description,
              duration: course.duration,
              expectedSalary: course.expectedSalary,
              careerPaths: course.careerPaths,
              category: course.category || category,
            });
          });
        } else if (typeof value === "object") {
          // Normal course object
          coursesArray.push({
            title: key.toUpperCase(),
            description: value.description,
            duration: value.duration,
            expectedSalary: value.expectedSalary,
            careerPaths: value.careerPaths,
            category: value.category || category,
          });
        }
      });
    });

    return coursesArray;
  };

  const coursesList = normalizeCourses(data);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 scroll-smooth">
      {/* Main Content */}
      <div id="top">
        <div className="mt-25">
          <DashboardHeader />
        </div>

        {/* Heading */}
        <div className="flex justify-center items-center mt-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Courses After 12th</h2>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesList.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* Badge + Duration */}
              <div className="flex justify-between items-center mb-3">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {course.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
              </div>

              {/* Title + Description */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>

              {/* Salary + Career Paths */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                  Avg. Salary: {course.expectedSalary}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Target className="w-4 h-4 mr-2 text-blue-600" />
                  {course.careerPaths?.length || 0} Career Paths
                </div>
              </div>

              {/* Button */}
              <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition">
                Explore Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
      >
        ^
      </a>
    </div>
  );
}
