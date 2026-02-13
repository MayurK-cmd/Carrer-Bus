import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";
import { motion } from "framer-motion";
import API from "../api"; // Axios instance

export const Example = () => {
  return <Sidebar />;
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    switch (path) {
      case "/home":
        return "Home";
      case "/test":
        return "Take Test";
      case "/connect-advisor":
        return "Connect to a Advisor";
      case "/about":
        return "About Us";
      case "/profile":
        return "Profile";
      default:
        return "Home";
    }
  };

  const [selected, setSelected] = useState(getCurrentPage());

  const handleNavigation = (title, path) => {
    setSelected(title);
    if (path) navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/");
    console.log("User logged out successfully");
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await API.get("/auth/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

//   return (
//     <motion.nav
//       layout
//       className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
//       style={{
//         width: open ? "225px" : "fit-content",
//       }}
//     >
//       <TitleSection open={open} userProfile={userProfile} />

//       <div className="space-y-1">
//         <Option
//           Icon={FiHome}
//           title="Home"
//           selected={selected}
//           onClick={() => handleNavigation("Home", "/home")}
//           open={open}
//         />
//         <Option
//           Icon={FiDollarSign}
//           title="Take Test"
//           selected={selected}
//           onClick={() => handleNavigation("Take Test", "/test")}
//           open={open}
          
//         />
//         <Option
//           Icon={FiMonitor}
//           title="Connect to a Advisor"
//           selected={selected}
//           onClick={() => handleNavigation("Connect to a Advisor", "/404/404/too-early/here/lol")}
//           open={open}
//         />
//         <Option
//           Icon={FiShoppingCart}
//           title="About Us"
//           selected={selected}
//           onClick={() => handleNavigation("About Us", "/404/404/too-early/here/lol")}
//           open={open}
//         />
//         <Option
//           Icon={FiUsers}
//           title="Profile"
//           selected={selected}
//           onClick={() => handleNavigation("Profile", "/profile")}
//           open={open}
//         />
//         <Option
//           Icon={FiLogOut}
//           title="Logout"
//           selected={selected}
//           onClick={handleLogout}
//           open={open}
//           isLogout={true}
//         />
//       </div>

//       <ToggleClose open={open} setOpen={setOpen} />
//     </motion.nav>
//   );
// };

return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-100 bg-white p-4 flex flex-col justify-between"
      style={{ width: open ? "260px" : "88px" }}
    >
      <div>
        <TitleSection open={open} userProfile={userProfile} />
        
        <div className="space-y-2 mt-8">
          <Option Icon={FiHome} title="Home" selected={selected} onClick={() => handleNavigation("Home", "/home")} open={open} />
          <Option Icon={FiTag} title="Take Test" selected={selected} onClick={() => handleNavigation("Take Test", "/test")} open={open} />
          <Option Icon={FiMonitor} title="Connect to a Advisor" selected={selected} onClick={() => handleNavigation("Connect to a Advisor", "/connect-advisor")} open={open} />
          <Option Icon={FiShoppingCart} title="About Us" selected={selected} onClick={() => handleNavigation("About Us", "/about")} open={open} />
          <Option Icon={FiUsers} title="Profile" selected={selected} onClick={() => handleNavigation("Profile", "/profile")} open={open} />
          <Option Icon={FiLogOut} title="Logout" onClick={handleLogout} open={open} isLogout={true} />
        </div>
      </div>

      <div className="space-y-2">
        
        <ToggleClose open={open} setOpen={setOpen} />
      </div>
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, onClick, open, notifs, isLogout }) => {
  return (
    <motion.button
      layout
      onClick={onClick}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors cursor-pointer ${
        selected === title && !isLogout
          ? "bg-indigo-100 text-indigo-800"
          : isLogout
          ? "text-red-500 hover:bg-red-50"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div layout className="grid h-full w-10 place-content-center text-lg">
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open, userProfile }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs text-slate-500">Student Portal</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" />
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100 cursor-pointer"
    >
      <div className="flex items-center p-2">
        <motion.div layout className="grid size-10 place-content-center text-lg">
          <FiChevronsRight className={`transition-transform ${open && "rotate-180"}`} />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
