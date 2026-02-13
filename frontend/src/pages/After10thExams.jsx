import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { ArrowLeft, ClipboardCheck, ChevronRight, Loader2, Sparkles, BookOpen } from "lucide-react";

function After10thExams() {
  const navigate = useNavigate();
  const [examsAfter10th, setExamsAfter10th] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { setError("Authorization missing."); setLoading(false); return; }
        const response = await API.get("/exams/after-10th", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExamsAfter10th(response.data);
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
              <p className="text-slate-400 font-medium tracking-tight">Syncing exam database...</p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-16 pb-24">
              {/* Header */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Early Opportunity</span>
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Exams After 10th</h1>
                <p className="text-slate-500 leading-relaxed">Prepare for scholarship tests, diploma entrance exams, and foundation rounds that set the stage for your future.</p>
              </div>

              {Object.entries(examsAfter10th).map(([category, exams]) => (
                <section key={category}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-lg font-bold text-slate-800 whitespace-nowrap">
                      {category.replace(/([A-Z])/g, " $1").replace(/and/g, " &").trim()}
                    </h2>
                    <div className="h-px w-full bg-slate-100" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(exams).map(([examName, description]) => (
                      <div key={examName} className="group bg-white p-7 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <ClipboardCheck className="w-5 h-5" />
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                            {examName}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-4">
                            {description}
                          </p>
                        </div>
                        <button className="w-full py-4 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-600 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                          Guide & Dates <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default After10thExams;