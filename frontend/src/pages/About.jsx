import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Heart, ShieldCheck, Zap, Globe } from "lucide-react";

function About() {
  const navigate = useNavigate();

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

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Story Section */}
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
            <Target className="w-3 h-3" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            We’re solving the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Career Confusion Crisis.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-lg">
            <p>
              Every year, millions of students across India make life-altering decisions based on hearsay or outdated advice. We believe that career choices should be scientific, data-backed, and deeply personal.
            </p>
            <p>
              CareerBus was founded in 2026 to bridge the gap between human ambition and market reality. By combining AI analysis with real human experts, we ensure no student is left guessing about their future.
            </p>
          </div>
        </div>

        {/* Vision Grid */}
        <div className="mt-32 grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-indigo-600 rounded-[3rem] text-white">
            <Heart className="w-10 h-10 mb-6 text-indigo-200" />
            <h3 className="text-2xl font-bold mb-4 text-white">Student First</h3>
            <p className="text-indigo-100 leading-relaxed">
              Our algorithms are unbiased. Our goal isn't to sell a specific college, but to find the one where you belong.
            </p>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
            <Globe className="w-10 h-10 mb-6 text-indigo-600" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Pan-India Reach</h3>
            <p className="text-slate-500 leading-relaxed">
              From the metro cities to the rural heartlands, we provide world-class career tools to every corner of India.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-32 text-center border-t border-slate-100 pt-20">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">The team</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Guided by Educators & Engineers.</h2>
          <div className="flex justify-center gap-4">
             <div className="w-12 h-12 bg-slate-200 rounded-full" />
             <div className="w-12 h-12 bg-slate-200 rounded-full" />
             <div className="w-12 h-12 bg-slate-200 rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;