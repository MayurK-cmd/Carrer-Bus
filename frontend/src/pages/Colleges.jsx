import { useState } from "react";
import axios from "axios";
import DashboardHeader from "../components/DashboardHeader";

function Colleges() {
  const [searchMode, setSearchMode] = useState("state"); // "state", "city", "search"
  const [govt, setGovt] = useState(false);
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 27;

  // Calculate indices for pagination
  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = colleges.slice(indexOfFirstCollege, indexOfLastCollege);
  const totalPages = Math.ceil(colleges.length / collegesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const token = localStorage.getItem("token");
  const API_BASE = "https://sih-73ja.onrender.com/api/data";

  const clearInputs = () => {
    setType("");
    setState("");
    setCity("");
    setName("");
    setGovt(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setColleges([]);

    try {
      let url = "";
      let payload = { type };

      if (searchMode === "state") {
        payload.state = state;
        url = govt ? `${API_BASE}/government-college-state` : `${API_BASE}/college-state`;
      } else if (searchMode === "city") {
        payload.city = city;
        url = govt ? `${API_BASE}/government-college-city` : `${API_BASE}/college-city`;
      } else if (searchMode === "search") {
        payload.name = name;
        if (state) payload.state = state;
        if (city) payload.city = city;
        url = govt ? `${API_BASE}/search-government-college` : `${API_BASE}/search-college`;
      }

      const res = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setColleges(res.data || []);
    } catch (err) {
      console.error("Error fetching colleges:", err);
      setError("Failed to fetch colleges. Please try again.");
    } finally {
      setCurrentPage(1);
      setLoading(false);
    }
  };

  const collegeTypes = [
    "Engineering",
    "Medical",
    "Nursing",
    "Commerce",
    "Arts",
    "Law",
    "Management",
    "Pharmacy",
    "Agriculture",
    "Polytechnic",
    "Design",
    "Education",
    "Others",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mt-25">
        <DashboardHeader />
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 px-4">
              Discover Colleges
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Find the perfect college for your future. Search by location, type, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white text-center">Search Colleges</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Search Mode Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-xl">
              {[
                { value: "state", label: "By State", icon: "🏛️" },
                { value: "city", label: "By City", icon: "🏙️" },
                { value: "search", label: "By Name", icon: "🔍" }
              ].map((mode) => (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() => setSearchMode(mode.value)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    searchMode === mode.value
                      ? "bg-white shadow-md text-blue-600 scale-105"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>{mode.icon}</span>
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* College Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  College Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                >
                  <option value="">Select college type</option>
                  {collegeTypes.map((cType, idx) => (
                    <option key={idx} value={cType.toLowerCase()}>
                      {cType}
                    </option>
                  ))}
                </select>
              </div>

              {/* Government Filter */}
              <div className="flex items-center justify-center">
                <label className="inline-flex items-center cursor-pointer bg-gray-50 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={govt}
                    onChange={() => setGovt(!govt)}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded-md border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
                    govt ? "bg-blue-500 border-blue-500" : "border-gray-300"
                  }`}>
                    {govt && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className="text-sm font-medium text-gray-700">Government Colleges Only</span>
                </label>
              </div>
            </div>

            {/* Conditional Inputs */}
            <div className="space-y-4">
              {searchMode === "state" && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Select state</option>
                    {indianStates.map((st, idx) => (
                      <option key={idx} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {searchMode === "city" && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm placeholder-gray-400"
                  />
                </div>
              )}

              {searchMode === "search" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      College Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter college name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      State (Optional)
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Any state</option>
                      {indianStates.map((st, idx) => (
                        <option key={idx} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      City (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Any city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm placeholder-gray-400"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="32">
                        <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                        <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                    Searching...
                  </>
                ) : (
                  <>
                    🔍 Search Colleges
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={clearInputs}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105"
              >
                🗑️ Clear
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2">
            <span className="text-xl">❌</span>
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 text-blue-600">
              <svg className="w-8 h-8 animate-spin" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="32">
                  <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
                </circle>
              </svg>
              <span className="text-lg font-medium">Loading colleges...</span>
            </div>
          </div>
        )}

        {colleges.length > 0 && (
          <div className="space-y-6">
            {/* Results Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Found {colleges.length} College{colleges.length !== 1 ? 's' : ''}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* College Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentColleges.map((college, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {college.name}
                      </h4>
                    </div>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">📍</span>
                        <span className="text-sm">{college.city}, {college.state}</span>
                      </div>
                      
                      {college.type && (
                        <div className="flex items-center gap-2">
                          <span className="text-purple-500">🎓</span>
                          <span className="text-sm capitalize">{college.type}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
                  }`}
                >
                  ← Previous
                </button>

                <div className="flex gap-1">
                  {[...Array(Math.min(5, totalPages)).keys()].map((i) => {
                    let page;
                    if (totalPages <= 5) {
                      page = i + 1;
                    } else if (currentPage <= 3) {
                      page = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      page = totalPages - 4 + i;
                    } else {
                      page = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110"
                            : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {!loading && colleges.length === 0 && (type || state || city || name) && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No colleges found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Colleges;