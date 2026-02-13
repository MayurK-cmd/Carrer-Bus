import { Link, useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { ArrowLeft, BookOpen, GraduationCap, ChevronRight, Sparkles, Target, Compass } from "lucide-react";

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Navigation Bar - Matching Colleges UI */}
        <div className="sticky top-0 z-30 h-16 flex items-center px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 shrink-0">
          <button 
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Hero Content Area */}
        <div className="max-w-6xl mx-auto w-full px-6 py-12 lg:py-20">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mx-auto">
              <Compass className="w-3.5 h-3.5" />
              <span>Curriculum Discovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore Your Path
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Choosing the right course is the cornerstone of your career. Whether you've just finished secondary school or your senior years, discover the fields that align with your natural aptitude.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Path: After 10th */}
            <Link
              to="/courses/after-10th"
              className="group relative bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">After Grade 10</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Explore Diploma programs, Vocational training, and specialized streams (Science, Commerce, Arts) to build a strong foundation for your professional life.
                </p>
                <ul className="space-y-3">
                  {['Polytechnic Diplomas', 'Stream Specialization', 'Skill-based Certifications'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex items-center text-emerald-600 font-bold group-hover:gap-2 transition-all">
                Browse Programs <ChevronRight className="w-5 h-5" />
              </div>
              {/* Background Decoration */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Path: After 12th */}
            <Link
              to="/courses/after-12th"
              className="group relative bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">After Grade 12</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Discover Degree programs, Professional courses (B.Tech, MBBS, B.Arch), and creative majors tailored for the global market.
                </p>
                <ul className="space-y-3">
                  {['Engineering & Medical', 'Undergraduate Degrees', 'Integrated Masters'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex items-center text-indigo-600 font-bold group-hover:gap-2 transition-all">
                View Opportunities <ChevronRight className="w-5 h-5" />
              </div>
              {/* Background Decoration */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Additional Info / CTA Section */}
          <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Not sure which one to pick?</h2>
                <p className="text-slate-400 max-w-md">Our AI assessment tool can help you identify your strengths and suggest the ideal path for you.</p>
              </div>
              <button 
                onClick={() => navigate('/test')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                Take Career Test
              </button>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-500/10 blur-[80px]" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Courses;