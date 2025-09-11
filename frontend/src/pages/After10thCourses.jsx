import DashboardHeader from "../components/DashboardHeader";

const data = {
  
    "science": {
        "engineering": "Bachelor of Technology (B.Tech)/Engineering (B.E): For students with Physics, Chemistry, and Mathematics (PCM).",
        "medicine": "MBBS/BDS/BAMS/BHMS: Medicine, Dental, Ayurveda, Homeopathy for students with Biology (PCB).",
        "bsc": "B.Sc. (Pure & Applied Sciences): Physics, Chemistry, Mathematics, Biology, Environmental Science, Biotechnology.",
        "professionalCourses": "Pharmacy, Nursing, Physiotherapy, Agriculture, Veterinary.",
        "computerScience": "BCA/B.Sc. Computer Science: IT and software for science students.",
        "architecture": "B.Arch: For those interested in building design and construction.",
        "others": [
            "Forensics",
            "Food Technology",
            "Nutrition",
            "Data Science",
            "Artificial Intelligence"
        ]
    },
    "commerce": {
        "bcom": "Bachelor of Commerce (B.Com/B.Com Hons): Core accounting, finance, taxation, and business law.",
        "management": "BBA/BMS: Management, entrepreneurship, business operations.",
        "professional": "CA, CMA, CS: Professional accountancy and corporate governance.",
        "economics": "Bachelor of Economics (BE): Economics analysis, finance, policy.",
        "law": "BA LLB / BBA LLB: Integrated law programs after commerce.",
        "computerApplications": "BCA: Software and IT suited for commerce students.",
        "others": [
            "Certified Financial Planner (CFP)",
            "International Financial Reporting Standards (IFRS)",
            "US CMA"
        ]
    },
    "arts": {
        "ba": "Bachelor of Arts (BA): Humanities, Social Sciences, Literature, Languages.",
        "fineArts": "BFA, Design, Visual Arts: For creative and design-oriented careers.",
        "journalism": "BJMC, Media, Event Management: Media, communications, PR, and events.",
        "socialWork": "BSW: Social services, NGOs, welfare.",
        "creativeIndustries": "Hotel Management, Fashion Design, Event Management.",
        "law": "BA LLB: Integrated law programs.",
        "diploma": [
            "Photography",
            "Digital Marketing",
            "Education",
            "Animation"
        ]
    
}
};

function After10thCourses() {
  return (
    <div>
      <DashboardHeader />
      <h2>Courses After 10th</h2>
      <section>
        <h3>Science</h3>
        <ul>
          {Object.entries(data.science).map(([key, value]) => (
            <li key={key}><b>{key}:</b> {value}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Commerce</h3>
        {Object.entries(data.commerce).map(([key, value]) => (
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

export default After10thCourses;
