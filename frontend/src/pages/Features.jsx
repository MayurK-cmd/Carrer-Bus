import { useNavigate } from "react-router-dom";
import { 
  Brain, Users, Database, Search, 
  LineChart, MessageCircle, ArrowLeft, 
  Zap, ShieldCheck, Globe 
} from "lucide-react";

function Features() {
  const navigate = useNavigate();

  const featureList = [
    {
      icon: Brain,
      title: "AI Aptitude Engine",
      desc: "Our neural network analyzes your cognitive patterns to suggest careers where you'll naturally excel.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Users,
      title: "Human Mentorship",
      desc: "Connect with verified professionals who have already walked the path you're considering.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: Database,
      title: "Course Repository",
      desc: "A massive library of detailed curriculum data for paths after Grade 10 and 12.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Search,
      title: "Smart College Filter",
      desc: "Filter 500+ Indian institutions by ranking, fees, location, and government status.",
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: LineChart,
      title: "Market Trends",
      desc: "Live data on salary growth and industry demand for the next decade.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: ShieldCheck,
      title: "Verified Exams",
      desc: "Real-time tracking of JEE, NEET, CUET, and other major national entrance timelines.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFF] font-sans selection:bg-indigo-100">
      <nav className="h-16 flex items-center px-6 bg-white border-b border-slate-100 sticky top-0 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Built for the <span className="text-indigo-600 italic">Modern</span> Student.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            We’ve consolidated everything you need into a single workspace. No more 50 open tabs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`p-4 rounded-2xl w-fit mb-6 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Experience it yourself.</h2>
            <button 
              onClick={() => navigate('/signup/student')}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20"
            >
              Get Started for Free
            </button>
          </div>
          <Zap className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5 rotate-12" />
        </div>
      </main>
    </div>
  );
}

export default Features;