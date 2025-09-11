import { useLocation, Link } from "react-router-dom";
import CardNav from "./CardNav";
//import logo from "./logo.svg";

function DashboardHeader() {
  const location = useLocation();

  // Only show inside dashboard sections
  const isHomeSection =
    location.pathname.startsWith("/home") ||
    location.pathname.startsWith("/colleges") ||
    location.pathname.startsWith("/courses") ||
    location.pathname.startsWith("/exams") ||
    location.pathname.startsWith("/profile");

  if (!isHomeSection) return null;

  const items = [
    {
      label: "Colleges",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Browse", ariaLabel: "Browse Colleges", to: "/colleges" },
        //{ label: "Top Ranked", ariaLabel: "Top Colleges", to: "/colleges?rank=top" }
      ]
    },
    {
      label: "Courses",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "All Courses", ariaLabel: "Browse Courses", to: "/courses" },
        //{ label: "By Stream", ariaLabel: "Courses by Stream", to: "/courses?filter=stream" }
      ]
    },
    {
      label: "Exams",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Exams", ariaLabel: "Exams", to: "/exams" },
        //{ label: "Results", ariaLabel: "Exam Results", to: "/exams?tab=results" }
      ]
    },
    {
      label: "Profile",
      bgColor: "#371E27",
      textColor: "#fff",
      links: [
        { label: "My Profile", ariaLabel: "View Profile", to: "/profile" },
        //{ label: "Settings", ariaLabel: "Profile Settings", to: "/profile/settings" }
      ]
    }
  ];

  return (
    <CardNav
      //logo={logo}
      //logoAlt="Course & Career Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#6D28D9"     // violet theme
      buttonTextColor="#fff"
      ease="power3.out"
      linkComponent={Link}         // <-- integrate react-router links
    />
  );
}

export default DashboardHeader;
