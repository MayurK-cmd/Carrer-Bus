import { GraduationCap, Users, Brain, ArrowRight, CheckCircle, Star, BookOpen, Target, MessageCircle, Sparkles, ChevronRight, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-[#FAFBFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- NEW CLEAN HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-slate-200/50 px-6 py-3 rounded-2xl shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CareerBus</span>
          </div>

          {/* Nav Links & CTA */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
              <Link to="/features" className="hover:text-indigo-600 transition-colors">Features</Link>
              <div className="h-4 w-[1px] bg-slate-200" /> {/* Vertical Divider */}
            </div>

            <div className="flex items-center gap-3">
              {/* Advisor Portal Link */}
              <Link 
                to="/login/advisor" 
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
              >
                <UserCircle className="w-4 h-4" />
                Advisor Portal
              </Link>

              {/* Student Login Primary CTA */}
              <Link 
                to="/login/student" 
                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md shadow-slate-200 active:scale-95"
              >
                Student Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-4 overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/50 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Next-gen career guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl">
              Design your future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">absolute clarity.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Skip the guesswork. Use data-driven assessments and expert human insight to find the path you were meant to lead.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/signup/student" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-slate-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/login/student" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 rounded-2xl font-semibold text-lg transition-all"
              >
                Try Assessment
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl">Trusted by 50+ Universities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento-Grid Features */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Everything you need to <br />decide your next move.
              </h2>
              <p className="text-slate-600 text-lg">Powerful tools built for the modern student.</p>
            </div>
            <Link to="/features" className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all features <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main AI Feature */}
            <div className="md:col-span-8 bg-[#F8FAFF] border border-blue-100 rounded-[2rem] p-8 md:p-12 hover:shadow-2xl transition-all group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-8 border border-blue-50">
                <Brain className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Assessment</h3>
              <p className="text-slate-600 text-lg max-w-md mb-8">
                Our algorithm analyzes your cognitive strengths and personal interests to map out your top 3 career trajectories.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-blue-100 text-blue-700 shadow-sm">Real-time mapping</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-blue-100 text-blue-700 shadow-sm">Skill gap analysis</span>
              </div>
            </div>

            {/* Expert Card */}
            <div className="md:col-span-4 bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">1-on-1 Mentors</h3>
                <p className="text-slate-400 leading-relaxed">Connect with professionals already working in your dream field.</p>
              </div>
              <div className="mt-8 relative z-10">
                <div className="flex -space-x-3 mb-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700" />
                  ))}
                </div>
                <div className="text-sm font-medium text-indigo-300">Over 200+ Advisors online</div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-600/40 transition-all" />
            </div>

            {/* Database Card */}
            <div className="md:col-span-12 lg:col-span-12 bg-indigo-50/50 border border-indigo-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Comprehensive Career Vault</h3>
                <p className="text-slate-600 max-w-2xl">Access detailed salary data, prerequisite courses, and growth trends for over 500+ modern career paths including Web3, AI, and Sustainable Energy.</p>
              </div>
              <button className="md:ml-auto px-6 py-3 bg-white border border-indigo-200 text-indigo-700 rounded-xl font-bold hover:bg-indigo-100 transition-colors">
                Explore Database
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <div className="h-1.5 w-12 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "UX Designer", content: "The assessment didn't just tell me what to do—it told me WHY I'd be good at it." },
              { name: "Rahul Patel", role: "Full Stack Dev", content: "Finally, a platform that feels like it’s built for students, not just another corporate landing page." },
              { name: "Ananya Singh", role: "Product Manager", content: "Found my mentor within 2 days. The ROI on this platform is unmatched." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 font-medium">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-indigo-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start your career evolution.</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Join 15,000+ students navigating their careers with confidence.</p>
            <Link 
              to="/signup/student" 
              className="inline-flex items-center justify-center px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              Get Started for Free
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-20 -mt-20" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CareerBus</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 Career Bus. Handcrafted for the next generation.
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;