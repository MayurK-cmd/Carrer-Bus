import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { 
  Search, MapPin, GraduationCap, Building2, Filter, 
  ChevronLeft, ChevronRight, Loader2, Landmark, Trash2, ArrowLeft 
} from "lucide-react";

function Colleges() {
  const navigate = useNavigate();
  const [searchMode, setSearchMode] = useState("state");
  const [govt, setGovt] = useState(false);
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  const token = localStorage.getItem("token");
  const API_BASE = "https://sih-73ja.onrender.com/api/data";

  const currentColleges = colleges.slice(
    (currentPage - 1) * collegesPerPage, 
    currentPage * collegesPerPage
  );
  const totalPages = Math.ceil(colleges.length / collegesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById('results-view')?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearInputs = () => {
    setType(""); setState(""); setCity(""); setName(""); setGovt(false);
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
      setError("Failed to fetch colleges. Please try again.");
    } finally {
      setCurrentPage(1);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Navigation Bar (Simplified) */}
        <div className="h-16 flex items-center px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30">
          <button 
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Sidebar: Filters */}
          <aside className="w-80 bg-white border-r border-slate-100 hidden lg:flex flex-col overflow-y-auto p-6 pt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Filter className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Filters</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Search Mode</label>
                <div className="grid grid-cols-1 gap-1 p-1 bg-slate-50 rounded-2xl">
                  {['state', 'city', 'search'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSearchMode(m)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all capitalize ${
                        searchMode === m ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {m === 'search' ? 'By Name' : `By ${m}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">College Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Stream</option>
                  {["Engineering", "Medical", "Nursing", "Commerce", "Arts", "Law", "Management", "Pharmacy"].map(t => (
                    <option key={t} value={t.toLowerCase()}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                {(searchMode === "state" || searchMode === "search") && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required={searchMode === "state"}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 outline-none"
                    />
                  </div>
                )}

                {(searchMode === "city" || searchMode === "search") && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required={searchMode === "city"}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 outline-none"
                    />
                  </div>
                )}

                {searchMode === "search" && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Institution Name</label>
                    <input
                      type="text"
                      placeholder="Enter College Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 outline-none"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setGovt(!govt)}
                  className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                    govt ? "bg-indigo-50 border-indigo-200" : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className={`text-sm font-bold ${govt ? "text-indigo-900" : "text-slate-600"}`}>Government Only</span>
                  <div className={`w-10 h-6 rounded-full relative transition-colors ${govt ? "bg-indigo-600" : "bg-slate-200"}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${govt ? "left-5" : "left-1"}`} />
                  </div>
                </button>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Search className="w-5 h-5" /> Search</>}
                </button>
                <button
                  type="button"
                  onClick={clearInputs}
                  className="w-full py-3 text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:text-rose-500 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear
                </button>
              </div>
            </form>
          </aside>

          {/* Right Area: Results */}
          <div id="results-view" className="flex-1 overflow-y-auto p-6 lg:p-10 pt-8 bg-[#FAFBFF]">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-slate-100 rounded-[2.5rem] animate-pulse" />
                ))}
              </div>
            ) : colleges.length > 0 ? (
              <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
                <div className="border-b border-slate-100 pb-6">
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Institutions</h1>
                  <p className="text-slate-500 font-medium">Found {colleges.length} results</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentColleges.map((college, idx) => (
                    <div key={idx} className="group bg-white p-7 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                            {govt ? <Landmark className="w-6 h-6" /> : <Building2 className="w-6 h-6" />}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {college.name}
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin className="w-4 h-4 text-rose-400" />
                          <span className="font-medium">{college.city}, {college.state}</span>
                        </div>
                      </div>

                      <button className="mt-8 w-full py-4 bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-600 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 py-20">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-3 bg-white border border-slate-100 rounded-xl disabled:opacity-30"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="px-6 py-3 bg-white border border-slate-100 rounded-xl font-bold text-slate-400">
                      {currentPage} / {totalPages}
                    </div>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-3 bg-white border border-slate-100 rounded-xl disabled:opacity-30"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-50 max-w-sm">
                  <div className="w-20 h-20 bg-indigo-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Find your college</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Select your search criteria in the filter panel to begin exploring.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Colleges;