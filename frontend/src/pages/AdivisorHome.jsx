import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import { Example as Sidebar } from "../components/RetractingSideBar";
import { Users, LineChart, MessageCircle, Sparkles, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdvisorHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-emerald-100">
      

      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top bar for Advisor Home */}
        <div className="h-16 border-b border-slate-100 bg-white flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
          <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Advisor Dashboard</span>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full space-y-10">
          
          {/* Advisor Intro Section */}
          <section className="space-y-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Expert Impact</span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-white">Your Role as an Advisor</h1>
              <p className="text-slate-500 text-lg leading-relaxed">
                As a verified advisor on CareerBus, you are the bridge between data-driven assessments and real-world success. Your expertise turns student test results into actionable career maps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Connect with Students", desc: "Access a pool of motivated students looking for personalized pathing.", color: "text-blue-500" },
                { icon: LineChart, title: "Analyze Test Results", desc: "Review AI-generated aptitude reports to provide deeper human context.", color: "text-emerald-500" },
                { icon: MessageCircle, title: "1-on-1 Guidance", desc: "Host virtual sessions to answer career-specific queries.", color: "text-purple-500" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
                  <div className={`p-3 rounded-2xl bg-slate-50 w-fit mb-4 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Under Construction Component Integration */}
          <section className="bg-white border border-dashed border-slate-200 rounded-[3rem] overflow-hidden">
             <UnderConstruction />
          </section>

        </div>
      </main>
    </div>
  );
}

export default AdvisorHome;