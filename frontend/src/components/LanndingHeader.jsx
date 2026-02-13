// import { Link, useLocation } from "react-router-dom";
// import { GraduationCap } from "lucide-react";

// function Header() {
//   const location = useLocation();
//   const allowedRoutes = ["/", "/login/student", "/signup/student"];
  
//   if (!allowedRoutes.includes(location.pathname)) {
//     return null;
//   }

//   const isLanding = location.pathname === "/";

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center space-x-2">
//             <GraduationCap className="h-8 w-8 text-purple-600" />
//             <h2 className="text-xl font-bold text-gray-900">Course & Career Advisor</h2>
//           </div>
//           {isLanding && (
//             <div className="flex space-x-4">
//               <Link 
//                 to="/login/student" 
//                 className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
//               >
//                 Student Login
//               </Link>
//               <Link 
//                 to="/login/advisor" 
//                 className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
//               >
//                 Advisor Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;