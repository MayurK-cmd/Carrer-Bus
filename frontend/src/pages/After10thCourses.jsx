import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import API from "../api";
import { Clock, DollarSign, Target } from "lucide-react";

export default function After10thCourses() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDurations, setSelectedDurations] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authorization token is missing.");
          setLoading(false);
          return;
        }

        const response = await API.get("/courses/after-10th", {
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

  const handleDurationChange = (stream, value) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [stream]: value,
    }));
  };

  const renderStream = (stream, streamData) => {
    const durations = streamData.duration.split(",");
    const selectedDuration = selectedDurations[stream] || durations[0].trim();

    return (
      <div
        key={stream}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
            {stream}
          </span>

          {durations.length > 1 ? (
            <div className="relative">
              <select
                value={selectedDuration}
                onChange={(e) => handleDurationChange(stream, e.target.value)}
                className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg px-3 py-1 pr-6 focus:outline-none"
              >
                {durations.map((d, idx) => (
                  <option key={idx} value={d.trim()}>
                    {d.trim()}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {durations[0]}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4">{streamData.description}</p>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <DollarSign className="w-4 h-4 mr-2 text-green-600" />
          Avg. Salary: {streamData.expectedSalary}
        </div>

        <div className="space-y-2 mb-4">
          {streamData.careerPaths.map((path, idx) => (
            <div key={idx} className="flex items-center text-gray-600 text-sm">
              <Target className="w-4 h-4 mr-2 text-blue-600" />
              {path}
            </div>
          ))}
        </div>

        <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition">
          Explore Details
        </button>
      </div>
    );
  };

  const renderCourses = (courses) => {
    if (!Array.isArray(courses)) {
      console.error("Expected an array but got:", courses);
      return null;
    }

    return courses.map((course, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="w-4 h-4 mr-2" />
          {course.duration}
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <DollarSign className="w-4 h-4 mr-2 text-green-600" />
          Avg. Salary: {course.expectedSalary}
        </div>

        <div className="space-y-2 mb-4">
          {course.careerPaths.map((path, idx) => (
            <div key={idx} className="flex items-center text-gray-600 text-sm">
              <Target className="w-4 h-4 mr-2 text-blue-600" />
              {path}
            </div>
          ))}
        </div>

        <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition">
          Explore Details
        </button>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 scroll-smooth">
      {/* Main Content */}
      <div id="top">
        <div className="mt-25">
          <DashboardHeader />
        </div>

        {/* Heading */}
        <div className="flex justify-center items-center mt-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-800" id="stream">
            Courses by Stream
          </h2>
        </div>

        {/* Major Academic Streams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.majorAcademicStreams &&
            Object.entries(data.majorAcademicStreams).map(([stream, streamData]) =>
              renderStream(stream, streamData)
            )}
        </div>

        {/* Diploma & Skill Courses */}
        <div className="mt-10" id="diploma">
          <div className="flex justify-center items-center mt-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Diploma and Skill Courses
            </h2>
          </div>
        </div>
        {Object.entries(data?.diplomaAndSkillCourses || {}).map(([category, courses]) => (
          <div key={category} className="mt-10">
            <h3 className="text-2xl font-semibold mb-5 text-gray-800">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderCourses(courses)}
            </div>
          </div>
        ))}

        {/* Specialized Career Courses */}
        <div className="mt-10" id="specialized">
          <div className="flex justify-center items-center mt-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Specialized Career Courses
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.SpecializedCareerCourses?.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Clock className="w-4 h-4 mr-2" />
                {course.duration}
              </div>

              <div className="flex items-center text-gray-600 text-sm mb-4">
                <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                Avg. Salary: {course.expectedSalary}
              </div>

              <div className="space-y-2 mb-4">
                {course.careerPaths.map((path, idx) => (
                  <div key={idx} className="flex items-center text-gray-600 text-sm">
                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                    {path}
                  </div>
                ))}
              </div>

              <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition">
                Explore Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
