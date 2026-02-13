import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import API from "../api";
import { Clock, DollarSign, Target, ArrowLeft, GraduationCap, Sparkles, Loader2, ChevronRight, Briefcase } from "lucide-react";

export default function After12thCourses() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { setError("Unauthorized"); setLoading(false); return; }
        const response = await API.get("/courses/after-12th", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch courses data");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const normalizeCourses = (data) => {
    let coursesArray = [];
    if (!data) return [];
    Object.entries(data).forEach(([category, categoriesData]) => {
      Object.entries(categoriesData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((course) => coursesArray.push({ ...course, title: course.name, category }));
        } else if (typeof value === "object") {
          coursesArray.push({ ...value, title: key.toUpperCase(), category });
        }
      });
    });
    return coursesArray;
  };

  const coursesList = normalizeCourses(data);

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Navigation Bar */}
        <div className="h-16 flex items-center px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30 shrink-0">
          <button 
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 pt-10">
          {loading ? (
            <div className="flex items-center justify-center h-[60vh]">
              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-12 pb-24">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Undergraduate Excellence</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Degrees After 12th</h1>
                <p className="text-slate-500 text-lg">Detailed insights into professional degrees and career trajectories across all streams.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesList.map((course, idx) => (
                  <div key={idx} className="group bg-white p-7 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[340px]">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                          {course.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-xs font-bold">
                          <Clock className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                          {course.duration}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                          <p className="text-[9px] font-bold text-indigo-400 uppercase mb-1">Salary</p>
                          <p className="text-xs font-black text-indigo-900 truncate">{course.expectedSalary}</p>
                        </div>
                        <div className="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                          <p className="text-[9px] font-bold text-emerald-400 uppercase mb-1">Roles</p>
                          <p className="text-xs font-black text-emerald-900">{course.careerPaths?.length || 0} Paths</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white text-slate-900 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                      Full Prospectus <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}