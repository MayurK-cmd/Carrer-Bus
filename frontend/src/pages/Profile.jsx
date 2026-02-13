import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Example as Sidebar } from "../components/RetractingSideBar";
import API from "../api";
import { 
  User, Mail, Phone, MapPin, GraduationCap, 
  Calendar, ShieldCheck, ArrowLeft, Loader2, 
  Settings, LogOut, Camera, Edit3
} from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Session expired. Please log in again.");
          setLoading(false);
          return;
        }

        const res = await API.get("/auth/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFF] flex font-sans selection:bg-indigo-100">
      <Sidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        {/* Top Navigation - Consistent with other dashboard pages */}
        <div className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-slate-100 shrink-0">
          <button 
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 py-10 lg:py-12">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
              <p className="text-slate-400 font-medium">Fetching your profile details...</p>
            </div>
          ) : error ? (
            <div className="bg-rose-50 border border-rose-100 p-6 rounded-[2rem] text-center max-w-md mx-auto mt-20">
               <ShieldCheck className="w-12 h-12 text-rose-400 mx-auto mb-4" />
               <h3 className="text-rose-900 font-bold text-lg">Authentication Error</h3>
               <p className="text-rose-600 text-sm mb-6">{error}</p>
               <button onClick={() => navigate('/login/student')} className="w-full py-3 bg-rose-600 text-white rounded-xl font-bold">Return to Login</button>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Profile Header Card */}
              <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white overflow-hidden shadow-2xl shadow-indigo-100">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="relative group">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-xl border-4 border-white/20 rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-2xl">
                      <span className="text-5xl font-black text-white italic">
                        {profile.firstName?.[0]}{profile.lastName?.[0]}
                      </span>
                    </div>
                    <button className="absolute bottom-2 right-2 p-2 bg-indigo-600 rounded-xl border-2 border-slate-900 hover:bg-indigo-500 transition-colors shadow-lg group-hover:scale-110">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-white/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Student Account</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                      {profile.firstName} {profile.lastName}
                    </h1>
                    <p className="text-slate-400 font-medium text-lg">{profile.email}</p>
                    
                    <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                      <button className="px-6 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center gap-2">
                        <Edit3 className="w-4 h-4" /> Edit Profile
                      </button>
                      <button className="px-6 py-2.5 bg-white/10 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">
                        Account Settings
                      </button>
                    </div>
                  </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
              </div>

              {/* Information Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Contact Info Column */}
                <div className="lg:col-span-1 space-y-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Contact Channels</h3>
                  <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 space-y-4 shadow-sm">
                    {[
                      { icon: Mail, label: "Primary Email", value: profile.email, color: "bg-indigo-50 text-indigo-600" },
                      { icon: Phone, label: "Phone Number", value: profile.contactNumber, color: "bg-emerald-50 text-emerald-600" },
                      { icon: MapPin, label: "Current City", value: profile.city, color: "bg-rose-50 text-rose-600" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                        <div className={`p-3 rounded-xl ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.label}</p>
                          <p className="text-sm font-bold text-slate-700 truncate">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal & Academic Column */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">Academic Profile</h3>
                  <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm h-full">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <div className="group">
                          <div className="flex items-center gap-3 mb-2">
                             <GraduationCap className="w-5 h-5 text-indigo-600" />
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Education Level</span>
                          </div>
                          <p className="text-xl font-bold text-slate-900 ml-8">{profile.studyingIn}</p>
                        </div>

                        <div className="group">
                          <div className="flex items-center gap-3 mb-2">
                             <User className="w-5 h-5 text-indigo-600" />
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Legal Gender</span>
                          </div>
                          <p className="text-xl font-bold text-slate-900 ml-8 capitalize">{profile.gender}</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="group">
                          <div className="flex items-center gap-3 mb-2">
                             <Calendar className="w-5 h-5 text-indigo-600" />
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Age</span>
                          </div>
                          <p className="text-xl font-bold text-slate-900 ml-8">{profile.age} Years</p>
                        </div>

                        <div className="group">
                          <div className="flex items-center gap-3 mb-2">
                             <ShieldCheck className="w-5 h-5 text-emerald-600" />
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Member Since</span>
                          </div>
                          <p className="text-xl font-bold text-slate-900 ml-8">2026 Season</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                       <p className="text-slate-400 text-xs font-medium">Protecting your data according to our Privacy Policy.</p>
                       <button className="text-rose-500 font-bold text-sm flex items-center gap-2 hover:bg-rose-50 px-4 py-2 rounded-xl transition-colors">
                         <LogOut className="w-4 h-4" /> Sign Out
                       </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;