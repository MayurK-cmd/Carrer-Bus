import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { ArrowLeft, Award, ChevronRight, Loader2, Sparkles, Target, Zap } from "lucide-react";

function After12thExams() {
  const navigate = useNavigate();
  const [examsAfter12th, setExamsAfter12th] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { setError("Authorization missing."); setLoading(false); return; }
        const response = await API.get("/exams/after-12th", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExamsAfter12th(response.data);
      } catch (err) {
        setError("Failed to fetch exams data");
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navigation Bar */}
        <div className="h-16 flex items-center px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30 shrink-0">
          <button 
            onClick={() => navigate("/exams")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 pt-10 scroll-smooth">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-16 pb-24">
              {/* Header Section */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>National Entrance Gateway</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Exams After 12th</h1>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Navigate the most critical competitive exams in India. Find comprehensive lists for Engineering, Medical, Law, and more.
                </p>
              </div>

              {Object.entries(examsAfter12th).map(([stream, categories]) => (
                <div key={stream} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-900 rounded-lg text-white">
                      <Target className="w-4 h-4" />
                    </div>
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-wider">{stream}</h2>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(categories).map(([category, exams]) => (
                      <div key={category} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-widest mb-6">
                            {category.replace(/([A-Z])/g, " $1")}
                          </span>
                          
                          <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                            {category.replace(/([A-Z])/g, " $1")}
                          </h3>

                          <ul className="space-y-3 mb-8">
                            {exams.map((exam) => (
                              <li key={exam} className="flex items-start gap-3 text-sm font-medium text-slate-500 leading-tight">
                                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                {exam}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="w-full py-4 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-700 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                          View Timeline <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default After12thExams;