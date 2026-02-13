import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import API from "../api";
import { Clock, DollarSign, Target, ArrowLeft, BookOpen, Sparkles, Loader2, ChevronRight } from "lucide-react";

export default function After10thCourses() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDurations, setSelectedDurations] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { setError("Session expired. Please login."); setLoading(false); return; }
        const response = await API.get("/courses/after-10th", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleDurationChange = (stream, value) => {
    setSelectedDurations((prev) => ({ ...prev, [stream]: value }));
  };

  const CourseCard = ({ title, description, duration, salary, paths, category, isStream }) => (
    <div className="group bg-white p-7 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isStream ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"
          }`}>
            {category}
          </span>
          <div className="flex items-center text-slate-400 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {duration}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100/50">
            <DollarSign className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-slate-700">Salary: {salary}</span>
          </div>
          <div className="space-y-1.5 pl-1">
            {paths.slice(0, 2).map((path, i) => (
              <div key={i} className="flex items-center text-[11px] font-medium text-slate-400">
                <Target className="w-3 h-3 mr-2 text-indigo-400" />
                {path}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white text-slate-600 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2">
        Curriculum Details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Nav Bar */}
        <div className="h-16 flex items-center px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30 shrink-0">
          <button 
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 pt-10 scroll-smooth">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
              <p className="text-slate-400 font-medium">Curating your future...</p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-20 pb-20">
              
              {/* Header */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Foundational Pathways</span>
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Courses After 10th</h1>
                <p className="text-slate-500 leading-relaxed">Choose between mainstream academic flows or specialized skill-based diplomas to jumpstart your career early.</p>
              </div>

              {/* Major Streams */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-px flex-1 bg-slate-100" />
                   <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Academic Streams</h2>
                   <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data?.majorAcademicStreams && Object.entries(data.majorAcademicStreams).map(([stream, sData]) => (
                    <CourseCard 
                      key={stream}
                      title={stream}
                      description={sData.description}
                      duration={sData.duration}
                      salary={sData.expectedSalary}
                      paths={sData.careerPaths}
                      category="Academic"
                      isStream={true}
                    />
                  ))}
                </div>
              </section>

              {/* Diploma Categories */}
              {Object.entries(data?.diplomaAndSkillCourses || {}).map(([category, courses]) => (
                <section key={category}>
                  <div className="flex items-center gap-3 mb-8">
                     <div className="h-px flex-1 bg-slate-100" />
                     <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                       {category.replace(/([A-Z])/g, " $1")}
                     </h2>
                     <div className="h-px flex-1 bg-slate-100" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((c, i) => (
                      <CourseCard 
                        key={i}
                        title={c.name}
                        description={c.description}
                        duration={c.duration}
                        salary={c.expectedSalary}
                        paths={c.careerPaths}
                        category="Diploma"
                        isStream={false}
                      />
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