import DashboardHeader from "../components/DashboardHeader";
import TextType from "../components/TextType"; 
import Stepper, { Step } from '../components/Stepper';
import { Example as Sidebar } from "../components/RetractingSideBar";
import { GraduationCap, Search, MessageSquare, Sparkles, ArrowRight, BookOpen, Bell, Globe, TrendingUp, ShieldCheck, Zap, Lock } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        {/* Sticky Header Container */}
        <div className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
          <DashboardHeader />
        </div>

        {/* Content Wrapper with added padding-top for the gap */}
        <div className="pt-10 pb-16 px-6 lg:px-10 max-w-7xl mx-auto w-full space-y-12">
          
          {/* 1. Hero Section */}
          <section className="mt-25 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-indigo-100">

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Student Workspace</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
                  <TextType
                    text={["Build your future.", "Navigate with data."]}
                    typingSpeed={60}
                    pauseDuration={2500}
                    textColors={["#fff", "#818cf8"]}
                  />
                </h1>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                  A centralized hub to discover colleges, master entrance exams, and find your professional calling.
                </p>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95">
                    Start Exploration
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Colleges", val: "450+", icon: Globe, color: "text-blue-400" },
                  { label: "Advisors", val: "24/7", icon: MessageSquare, color: "text-indigo-400" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                    <div className="text-3xl font-bold">{stat.val}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          </section>

          {/* 2. Advisor Context Section */}
          <section className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-indigo-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Expert Guidance</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Personalized Advisor Support</h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Our advisors use your <span className="text-indigo-600 font-semibold underline underline-offset-4 decoration-indigo-200">AI Assessment results</span> to map out a 5-year academic plan, helping you choose subjects and colleges that align with your natural strengths.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-500 mt-1" />
                    <span className="text-sm font-medium text-slate-700">Test Score Strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-500 mt-1" />
                    <span className="text-sm font-medium text-slate-700">College Shortlisting</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex w-48 h-48 bg-slate-50 rounded-3xl items-center justify-center border border-slate-100 shrink-0">
                <MessageSquare className="w-16 h-16 text-slate-200" />
              </div>
            </div>

            {/* 3. Launching Soon: Junior Portal */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-indigo-500 mb-4">
                  <Lock className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-widest">Grade 1-9</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Junior Explorer Portal</h3>
                <p className="text-indigo-700/70 text-sm leading-relaxed">
                  Early foundational guidance for younger students to build curiosity and soft skills.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <span className="px-4 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter shadow-md">Launching Summer 2026</span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </section>

          {/* 4. Roadmap Stepper */}
          <section className="bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm">
            <div className="px-8 pt-8 mb-4">
               <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Your Success Roadmap</h2>
               <p className="text-slate-500 text-sm mt-1">Four simple steps to clarify your professional future.</p>
            </div>
            <Stepper
              initialStep={1}
              stepCircleContainerClassName="!border-none !shadow-none"
              stepContainerClassName="!bg-transparent"
              contentClassName="py-10"
            >
              <Step>
                <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Explore Indian Courses</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Dive into thousands of curated courses for the Indian education system.</p>
                </div>
              </Step>
              <Step>
                <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Find Your Ideal College</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Narrow down colleges by ranking, location, and fees.</p>
                </div>
              </Step>
              <Step>
                <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Advisor Chat</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Get unbiased human advice from experts who understand your goals.</p>
                </div>
              </Step>
            </Stepper>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;