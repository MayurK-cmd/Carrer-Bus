import { Link, useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { ArrowLeft, Calendar, Award, ChevronRight, Bell, Sparkles, ClipboardCheck, Target } from "lucide-react";

function Exams() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Navigation Bar - Consistent with Colleges & Courses */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest mx-auto">
              <Bell className="w-3.5 h-3.5" />
              <span>Exam Season 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Entrance & Board Exams
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Master your competitive journey. Access dates, syllabi, and strategy guides for the most critical qualifying exams in India.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Category: After 10th */}
            <Link
              to="/exams/after-10th"
              className="group relative bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">Post-10th Exams</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  National and State level scholarship exams (NTSE), Diploma entrance tests (POLYCET), and Stream-specific qualifying rounds.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['NTSE', 'Diploma CET', 'Olympiads'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 rounded-lg text-[11px] font-bold text-slate-400 border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex items-center text-emerald-600 font-bold group-hover:gap-2 transition-all">
                View Exam Schedule <ChevronRight className="w-5 h-5" />
              </div>
              {/* Background Decoration */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Category: After 12th */}
            <Link
              to="/exams/after-12th"
              className="group relative bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">Post-12th Entrance</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Navigate high-stakes exams like JEE, NEET, CUET, and CLAT. Track registration windows and result dates in real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['JEE / NEET', 'CUET 2026', 'CLAT / IPMAT'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 rounded-lg text-[11px] font-bold text-slate-400 border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex items-center text-indigo-600 font-bold group-hover:gap-2 transition-all">
                Explore Major Exams <ChevronRight className="w-5 h-5" />
              </div>
              {/* Background Decoration */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Quick Support Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Exam Calendar", desc: "Never miss a deadline again.", color: "text-blue-500" },
              { icon: Sparkles, title: "AI Strategy", desc: "Personalized prep plans.", color: "text-purple-500" },
              { icon: Target, title: "Score Predictor", desc: "Estimate your rank easily.", color: "text-rose-500" }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`p-3 bg-slate-50 rounded-2xl ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Exams;