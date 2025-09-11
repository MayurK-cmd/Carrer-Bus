import DashboardHeader from "../components/DashboardHeader";

const data = {
  majorAcademicStreams: {
    Science: "Includes subjects like Physics, Chemistry, Biology, and Mathematics; leads to careers in engineering, medicine, research, and technology.",
    Commerce: "Focuses on Business Studies, Accountancy, Economics, and Mathematics; pathways include CA, CS, banking, and management.",
    Arts: "Covers History, Geography, Political Science, Psychology, and Sociology; suited for law, journalism, public administration, and teaching.",
  },
  diplomaAndSkillCourses: {
    engineering: ["Mechanical","Civil","Electrical","Electronics","Automobile","Computer","Chemical"],
    medicalAndParamedical: ["Medical Laboratory Technology (MLT)","Nursing","Radiology","Pharmacy","Occupational Therapy"],
    computerAndIT: ["Diploma in Computer Applications","Information Technology"],
    designAndMedia: ["Fashion Design","Interior Design","Animation & Multimedia","Photography","Journalism"],
    businessAndCommerce: ["Accounting","Business Administration","Retail Management","Marketing"],
    hospitalityAndTourism: ["Hotel Management","Food Technology"],
    vocationalTraining: ["Garment Technology","Leather Technology","Library Sciences","Textile Processing"],
  },
  specializedCareerCourses: [
    "Company Secretary (CS)","Chartered Accountancy (CA)","Cost and Management Accountancy (CMA)",
    "Digital Marketing","Entrepreneurship","Animation & VFX","Post Production"
  ]
};

function After12thCourses() {
  return (
    <div>
      <DashboardHeader />
      <h2>Courses After 10th</h2>
      <section>
        <h3>Major Academic Streams</h3>
        <ul>
          {Object.entries(data.majorAcademicStreams).map(([key, value]) => (
            <li key={key}><b>{key}:</b> {value}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Diploma and Skill Courses</h3>
        {Object.entries(data.diplomaAndSkillCourses).map(([key, value]) => (
          <div key={key} style={card}>
            <b>{key}</b>
            <ul>
              {value.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h3>Specialized Career Courses</h3>
        <ul>
          {data.specializedCareerCourses.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>
    </div>
  );
}

const card = { background: "#f0f0f0", padding: "1rem", margin: "0.5rem 0", borderRadius: "8px" };

export default After12thCourses;
