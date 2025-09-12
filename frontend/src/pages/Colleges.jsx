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
  window.scrollTo({ top: 0, behavior: "smooth" }); // optional
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

  // ✅ Dropdown options
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
    <div>
      <div className="mt-25">
      <DashboardHeader />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Colleges</h2>

      {/* Centered Container */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 bg-gray-100 rounded-md shadow-md w-full max-w-xl text-center"
        >
          {/* Mode Selector */}
          <div>
            <label className="font-medium">Search Mode:</label>
            <select
              value={searchMode}
              onChange={(e) => setSearchMode(e.target.value)}
              className="ml-2 p-2 border rounded w-64"
            >
              <option value="state">By State</option>
              <option value="city">By City</option>
              <option value="search">Search by Name</option>
            </select>
          </div>

          {/* College Type Dropdown */}
          <div>
            <label className="font-medium">College Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="ml-2 p-2 border rounded w-64"
            >
              <option value="">Select type</option>
              {collegeTypes.map((cType, idx) => (
                <option key={idx} value={cType.toLowerCase()}>
                  {cType}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional Inputs */}
          {searchMode === "state" && (
            <div>
              <label className="font-medium">State:</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="ml-2 p-2 border rounded w-64"
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
            <div>
              <label className="font-medium">City:</label>
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="ml-2 p-2 border rounded w-64"
              />
            </div>
          )}

          {searchMode === "search" && (
            <>
              <div>
                <label className="font-medium">Name:</label>
                <input
                  type="text"
                  placeholder="Enter college name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="ml-2 p-2 border rounded w-64"
                />
              </div>

              <div>
                <label className="font-medium">State (optional):</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="ml-2 p-2 border rounded w-64"
                >
                  <option value="">Select state</option>
                  {indianStates.map((st, idx) => (
                    <option key={idx} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-medium">City (optional):</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="ml-2 p-2 border rounded w-64"
                />
              </div>
            </>
          )}

          {/* Govt Filter */}
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={govt}
                onChange={() => setGovt(!govt)}
                className="mr-2"
              />
              Government Colleges Only
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Search
            </button>
            <button
              type="button"
              onClick={clearInputs}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      
{loading && <p className="mt-4 text-center">Loading colleges...</p>}
{error && <p className="text-red-500 mt-4 text-center">{error}</p>}

<div className="mt-6 flex justify-center">
  {colleges.length > 0 ? (
    <div className="w-full max-w-5xl">
      {/* College Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentColleges.map((college, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <strong className="block text-lg font-semibold">{college.name}</strong>
            <p className="text-gray-600">{college.city}, {college.state}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === page + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    !loading && <p className="text-center">No colleges found.</p>
  )}
</div>



    </div>
  );
}

export default Colleges;
