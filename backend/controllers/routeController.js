exports.getAfter12th = (req, res) => {
  const data = {
  "science": {
    "engineering": {
      "description": "B.Tech/B.E covers diverse engineering branches like Computer Science, Mechanical, Civil, Electronics, focusing on technological problem-solving.",
      "duration": "4 years",
      "expectedSalary": "₹4–12 lakhs per annum (entry, higher with skills/sector)",
      "careerPaths": ["Software Developer", "Mechanical Engineer", "Data Analyst", "Project Manager", "IT Consultant"],
      "category": "science"
    },
    "medicine": {
      "description": "MBBS, BDS, BAMS, BHMS train students in modern medicine, dentistry, Ayurveda, and homeopathy.",
      "duration": "5.5 years (MBBS/BDS), 5 years (Ayurveda/Homeopathy/BAMS/BHMS)",
      "expectedSalary": "₹8–20 lakhs per annum (entry, much higher for specialists)",
      "careerPaths": ["Doctor", "Dentist", "Ayurvedic Practitioner", "Homeopath", "Medical Researcher"],
      "category": "science"
    },
    "bsc": {
      "description": "B.Sc. in pure/applied sciences offers foundational knowledge in subjects like Physics, Chemistry, Mathematics, Biology, Environment, Biotechnology.",
      "duration": "3 years",
      "expectedSalary": "₹3–7 lakhs per annum (entry, research/industry roles)",
      "careerPaths": ["Research Scientist", "Biotech Analyst", "Lab Technician", "Environmental Consultant"],
      "category": "science"
    },
    "professionalCourses": {
      "description": "Pharmacy, Nursing, Physiotherapy, Agriculture, Veterinary Science provide direct entry to the healthcare and allied health sector.",
      "duration": "3–4 years",
      "expectedSalary": "₹3–8 lakhs per annum",
      "careerPaths": ["Pharmacist", "Nurse", "Physiotherapist", "Agriculturist", "Veterinary Doctor"],
      "category": "science"
    },
    "computerScience": {
      "description": "BCA/B.Sc. Computer Science focuses on programming, IT infrastructure, software development, suitable for tech careers.",
      "duration": "3 years",
      "expectedSalary": "₹4–10 lakhs per annum (entry, higher in IT/analytics)",
      "careerPaths": ["Software Developer", "System Administrator", "Data Scientist", "IT Consultant"],
      "category": "science"
    },
    "architecture": {
      "description": "B.Arch teaches building design, construction principles, structural engineering, urban planning.",
      "duration": "5 years",
      "expectedSalary": "₹4–9 lakhs per annum (entry, increases with portfolio)",
      "careerPaths": ["Architect", "Urban Planner", "Interior Designer", "Construction Manager"],
      "category": "science"
    },
    "others": [
      {
        "name": "Forensics",
        "description": "Study of crime scene investigation, evidence analysis. Includes forensic biology, chemistry.",
        "duration": "3 years (B.Sc. Forensic Science)",
        "expectedSalary": "₹4–7 lakhs per annum",
        "careerPaths": ["Forensic Analyst", "Crime Scene Investigator"],
        "category": "science"
      },
      {
        "name": "Food Technology",
        "description": "Food processing, safety, quality control.",
        "duration": "3–4 years",
        "expectedSalary": "₹4–8 lakhs per annum",
        "careerPaths": ["Food Technologist", "Quality Controller"],
        "category": "science"
      },
      {
        "name": "Nutrition",
        "description": "Study human nutrition, dietetics.",
        "duration": "3 years",
        "expectedSalary": "₹3–6 lakhs per annum",
        "careerPaths": ["Nutritionist", "Dietician"],
        "category": "science"
      },
      {
        "name": "Data Science",
        "description": "Analysis and interpretation of large data sets using statistical and machine learning tools.",
        "duration": "3 years (B.Sc./B.Tech specialization)",
        "expectedSalary": "₹6–15 lakhs per annum",
        "careerPaths": ["Data Scientist", "Business Analyst"],
        "category": "science"
      },
      {
        "name": "Artificial Intelligence",
        "description": "Studies algorithms, neural networks, automation for smart systems.",
        "duration": "4 years (Engineering Specialization or B.Sc.)",
        "expectedSalary": "₹8–20 lakhs per annum",
        "careerPaths": ["AI Engineer", "Machine Learning Specialist"],
        "category": "science"
      }
    ]
  },
  "commerce": {
    "bcom": {
      "description": "B.Com covers core accounting, finance, taxation, business law, foundation for wide commerce careers.",
      "duration": "3 years",
      "expectedSalary": "₹3–7 lakhs per annum",
      "careerPaths": ["Accountant", "Financial Analyst", "Tax Consultant", "Auditor"],
      "category": "commerce"
    },
    "management": {
      "description": "BBA/BMS provide in-depth understanding of business management, entrepreneurship, company operations.",
      "duration": "3 years",
      "expectedSalary": "₹4–10 lakhs per annum (varies by sector/role)",
      "careerPaths": ["Manager", "Business Consultant", "Marketing Executive", "HR Manager"],
      "category": "commerce"
    },
    "professional": {
      "description": "CA, CMA, CS are rigorous professional courses focused on accounting, financial management, and corporate governance.",
      "duration": "3–5 years (dependent on passing all levels)",
      "expectedSalary": "₹7–25 lakhs per annum (high for top firms/qualified CAs)",
      "careerPaths": ["Chartered Accountant", "Cost Accountant", "Company Secretary","Chief Financial Officer"],
      "category": "commerce"
    },
    "economics": {
      "description": "BE Economics focuses on financial analysis, policy-making, data-driven decision making.",
      "duration": "3 years",
      "expectedSalary": "₹5–10 lakhs per annum (high with analytics specialization)",
      "careerPaths": ["Economist", "Policy Advisor", "Financial Consultant"],
      "category": "commerce"
    },
    "law": {
      "description": "BA LLB/BBA LLB offers integrated legal studies, suitable for careers in legal practice, corporate law, advocacy.",
      "duration": "5 years",
      "expectedSalary": "₹5–15 lakhs per annum",
      "careerPaths": ["Lawyer", "Legal Advisor", "Advocate", "Corporate Counsel"],
      "category": "commerce"
    },
    "computerApplications": {
      "description": "BCA focuses on software development and IT infrastructure for commerce-minded tech careers.",
      "duration": "3 years",
      "expectedSalary": "₹4–10 lakhs per annum",
      "careerPaths": ["Software Developer", "Business IT Analyst"],
      "category": "commerce"
    },
    "others": [
      {
        "name": "Certified Financial Planner (CFP)",
        "description": "Certification for financial planning, wealth management, investment advisory.",
        "duration": "1–2 years",
        "expectedSalary": "₹6–12 lakhs per annum",
        "careerPaths": ["Financial Planner", "Investment Advisor"],
        "category": "commerce"
      },
      {
        "name": "International Financial Reporting Standards (IFRS)",
        "description": "Training for global accounting standards and reporting, suitable for MNC roles.",
        "duration": "6–12 months",
        "expectedSalary": "₹6–15 lakhs per annum",
        "careerPaths": ["IFRS Specialist", "International Accountant"],
        "category": "commerce"
      },
      {
        "name": "US CMA",
        "description": "US-based Certified Management Accountant focuses on global management accounting.",
        "duration": "6–12 months",
        "expectedSalary": "₹8–18 lakhs per annum",
        "careerPaths": ["Management Accountant", "Corporate Finance Manager"],
        "category": "commerce"
      }
    ]
  },
  "arts": {
    "ba": {
      "description": "Bachelor of Arts covers literature, languages, psychology, political science, social studies.",
      "duration": "3 years",
      "expectedSalary": "₹3–8 lakhs per annum (higher in data/analytics roles)",
      "careerPaths": ["Content Writer", "Psychologist", "Policy Analyst", "Teacher"],
      "category": "arts"
    },
    "fineArts": {
      "description": "BFA/Design/Visual Arts cultivates skills in painting, sculpture, creative design, visual communication.",
      "duration": "3–4 years",
      "expectedSalary": "₹3–7 lakhs per annum",
      "careerPaths": ["Graphic Designer", "Art Director", "Animator", "UI/UX Designer"],
      "category": "arts"
    },
    "journalism": {
      "description": "BJMC and related programs focus on journalism, PR, content creation, media management.",
      "duration": "3 years",
      "expectedSalary": "₹4–9 lakhs per annum",
      "careerPaths": ["Journalist", "Content Writer", "PR Manager", "Digital Editor"],
      "category": "arts"
    },
    "socialWork": {
      "description": "BSW opens opportunities in social services, NGOs, welfare schemes, counseling.",
      "duration": "3 years",
      "expectedSalary": "₹3–6 lakhs per annum",
      "careerPaths": ["Social Worker", "NGO Program Manager", "Community Officer"],
      "category": "arts"
    },
    "creativeIndustries": {
      "description": "Hotel Management, Fashion Design, Event Management offer direct entry into hospitality, fashion, and event planning sectors.",
      "duration": "3–4 years",
      "expectedSalary": "₹4–10 lakhs per annum",
      "careerPaths": ["Hotel Manager", "Fashion Designer", "Event Planner", "Merchandiser"],
      "category": "arts"
    },
    "law": {
      "description": "BA LLB integrates arts and law, opening legal careers in advocacy, civil service, corporate law.",
      "duration": "5 years",
      "expectedSalary": "₹6–15 lakhs per annum",
      "careerPaths": ["Advocate", "Legal Consultant", "Policy Advisor"],
      "category": "arts"
    },
    "diploma": [
      {
        "name": "Photography",
        "description": "Technical and artistic training for commercial, industrial, and media photography.",
        "duration": "1–2 years",
        "expectedSalary": "₹2–8 lakhs per annum",
        "careerPaths": ["Photographer", "Photo Editor"],
        "category": "arts"
      },
      {
        "name": "Digital Marketing",
        "description": "Certification in SEO, social media, web analytics, marketing strategy.",
        "duration": "3–6 months",
        "expectedSalary": "₹4–10 lakhs per annum",
        "careerPaths": ["Digital Marketer", "SEO Specialist", "Content Strategist"],
        "category": "arts"
      },
      {
        "name": "Education",
        "description": "Diploma in education or teaching skills for classroom or online academic settings.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–6 lakhs per annum",
        "careerPaths": ["Teacher", "Tutor", "Instructional Designer"],
        "category": "arts"
      },
      {
        "name": "Animation",
        "description": "Creative course in animation, visual effects for film, advertising, gaming.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–8 lakhs per annum",
        "careerPaths": ["Animator", "VFX Artist", "Storyboarding Specialist"],
        "category": "arts"
      }
    ]
  }
};

  res.json(data);
};

exports.getAfter10th = (req, res) => {
  const data = {
  "majorAcademicStreams": {
    "Science": {
      "description": "Science covers Physics, Chemistry, Biology, and Mathematics, and leads to careers in high-demand sectors like technology, healthcare, and research.",
      "duration": "2 years (Class 11-12), UG usually 3-5 years",
      "expectedSalary": "₹4–12 lakhs per annum (entry, higher for doctors/engineers/IT)",
      "careerPaths": ["Engineer", "Doctor", "Researcher", "IT Professional", "Data Scientist"],
      "category": "science"
    },
    "Commerce": {
      "description": "Commerce includes Business Studies, Accountancy, Economics, and Mathematics, preparing students for professional accounts, management, and financial sector roles.",
      "duration": "2 years (Class 11-12), UG 3-5 years",
      "expectedSalary": "₹3–10 lakhs per annum (entry, up to ₹25 lakhs for CA/CFA/CS)",
      "careerPaths": ["Chartered Accountant", "Company Secretary", "Banker", "Financial Analyst", "Manager"],
      "category": "commerce"
    },
    "Arts": {
      "description": "Arts covers Humanities subjects like History, Political Science, Psychology, and Sociology, leading to careers in law, media, public policy, and government.",
      "duration": "2 years (Class 11-12), UG typically 3 years",
      "expectedSalary": "₹3–8 lakhs per annum (entry, higher for law/journalism/civil services)",
      "careerPaths": ["Lawyer", "Journalist", "Civil Servant", "Teacher", "Content Writer"],
      "category": "arts"
    }
  },
  "diplomaAndSkillCourses": {
    "Engineering": [
      {
        "name": "Mechanical",
        "description": "Technical diploma covering machine design, manufacturing, and power systems.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Mechanical Technician", "Maintenance Engineer"],
        "category": "science"
      },
      {
        "name": "Civil",
        "description": "Focuses on construction, surveying, and infrastructure maintenance.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Site Supervisor", "Civil Drafter"],
        "category": "science"
      },
      {
        "name": "Electrical",
        "description": "Covers electrical systems, wiring, and industrial power.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Electrician", "Maintenance Technician"],
        "category": "science"
      },
      {
        "name": "Electronics",
        "description": "Deals with electrical circuits, devices, and troubleshooting.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Electronics Technician", "Repair Engineer"],
        "category": "science"
      },
      {
        "name": "Automobile",
        "description": "Focuses on vehicle systems and maintenance.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Auto Technician", "Workshop Supervisor"],
        "category": "science"
      },
      {
        "name": "Computer",
        "description": "Covers computer hardware, software basics, networking.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["IT Technician", "Support Executive"],
        "category": "science"
      },
      {
        "name": "Chemical",
        "description": "Covers chemical processes, lab operations, and industry practice.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Lab Technician", "Process Operator"],
        "category": "science"
      }
    ],
    "Medical and Paramedical": [
      {
        "name": "Medical Laboratory Technology (MLT)",
        "description": "Prepares students for diagnostics, lab testing, and pathology roles.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Lab Technician", "Pathology Assistant"],
        "category": "science"
      },
      {
        "name": "Nursing",
        "description": "Diploma in patient care, hospital support, midwifery.",
        "duration": "2–3 years",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Nurse", "Hospital Assistant"],
        "category": "science"
      },
      {
        "name": "Radiology",
        "description": "Imaging and diagnostic technology diploma.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–7 lakhs per annum",
        "careerPaths": ["Radiology Technician", "X-ray Assistant"],
        "category": "science"
      },
      {
        "name": "Pharmacy",
        "description": "Basics of medicine dispensing, drug safety, pharmacology.",
        "duration": "2 years",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Pharmacy Assistant", "Drug Store Manager"],
        "category": "science"
      },
      {
        "name": "Occupational Therapy",
        "description": "Rehabilitation and therapy for patients with injuries/disabilities.",
        "duration": "2–3 years",
        "expectedSalary": "₹3–7 lakhs per annum",
        "careerPaths": ["Occupational Therapist Assistant"],
        "category": "science"
      }
    ],
    "Computer and IT": [
      {
        "name": "Diploma in Computer Applications",
        "description": "Covers programming basics, Office Suite, database handling.",
        "duration": "1 year",
        "expectedSalary": "₹2–4 lakhs per annum",
        "careerPaths": ["Computer Operator", "Data Entry Clerk"],
        "category": "science"
      },
      {
        "name": "Information Technology",
        "description": "Intro to networking, hardware, software, security.",
        "duration": "1–2 years",
        "expectedSalary": "₹2–4 lakhs per annum",
        "careerPaths": ["IT Support", "Junior Developer"],
        "category": "science"
      }
    ],
    "Design and Media": [
      {
        "name": "Fashion Design",
        "description": "Covers garment creation, textile science, and fashion illustration.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–8 lakhs per annum",
        "careerPaths": ["Fashion Designer", "Merchandiser"],
        "category": "arts"
      },
      {
        "name": "Interior Design",
        "description": "Design spaces for residential/commercial buildings.",
        "duration": "1–2 years",
        "expectedSalary": "₹4–10 lakhs per annum",
        "careerPaths": ["Interior Designer", "Space Planner"],
        "category": "arts"
      },
      {
        "name": "Animation & Multimedia",
        "description": "Computer graphics, VFX, animation for media/games.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–8 lakhs per annum",
        "careerPaths": ["Animator", "VFX Artist", "Game Designer"],
        "category": "arts"
      },
      {
        "name": "Photography",
        "description": "Technical/artistic photo, editing, digital imaging.",
        "duration": "6 months–1 year",
        "expectedSalary": "₹2–8 lakhs per annum",
        "careerPaths": ["Photographer", "Photo Editor"],
        "category": "arts"
      },
      {
        "name": "Journalism",
        "description": "Media writing, reporting, communication skills.",
        "duration": "1 year",
        "expectedSalary": "₹3–6 lakhs per annum",
        "careerPaths": ["Reporter", "Content Writer", "Editor"],
        "category": "arts"
      }
    ],
    "Business and Commerce": [
      {
        "name": "Accounting",
        "description": "Basics of bookkeeping, audit, finance.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Account Assistant", "Billing Executive"],
        "category": "commerce"
      },
      {
        "name": "Business Administration",
        "description": "Management, HR, marketing skills.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–7 lakhs per annum",
        "careerPaths": ["Admin Executive", "HR Assistant"],
        "category": "commerce"
      },
      {
        "name": "Retail Management",
        "description": "Sales, store operations, merchandising.",
        "duration": "6 months–1 year",
        "expectedSalary": "₹2.5–6 lakhs per annum",
        "careerPaths": ["Retail Manager", "Shop Supervisor"],
        "category": "commerce"
      },
      {
        "name": "Marketing",
        "description": "Advertising, brand promotion, market research.",
        "duration": "6 months–1 year",
        "expectedSalary": "₹3–6 lakhs per annum",
        "careerPaths": ["Marketing Executive", "Sales Executive"],
        "category": "commerce"
      }
    ],
    "Hospitality and Tourism": [
      {
        "name": "Hotel Management",
        "description": "Professional training in hotel and restaurant operations.",
        "duration": "1–2 years",
        "expectedSalary": "₹3–10 lakhs per annum",
        "careerPaths": ["Hotel Manager", "Front Office Executive"],
        "category": "arts"
      },
      {
        "name": "Food Technology",
        "description": "Food safety, quality management in hospitality.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Food Safety Officer", "Quality Control"],
        "category": "arts"
      }
    ],
    "Vocational Training": [
      {
        "name": "Garment Technology",
        "description": "Skills for textile production, pattern making.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Garment Technician", "Production Assistant"],
        "category": "arts"
      },
      {
        "name": "Leather Technology",
        "description": "Processing and production of leather goods.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Leather Technician", "Quality Inspector"],
        "category": "arts"
      },
      {
        "name": "Library Sciences",
        "description": "Cataloguing, managing library collections.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Library Assistant", "Information Executive"],
        "category": "arts"
      },
      {
        "name": "Textile Processing",
        "description": "Textile finishing, dyeing, chemical processing.",
        "duration": "1 year",
        "expectedSalary": "₹2.5–5 lakhs per annum",
        "careerPaths": ["Textile Technician", "Dyeing Supervisor"],
        "category": "arts"
      }
    ]
  },
  "SpecializedCareerCourses": [
    {
      "name": "Company Secretary (CS)",
      "description": "Professional qualification in corporate law, governance, compliance.",
      "duration": "2–4 years (varies based on completion pace)",
      "expectedSalary": "₹3–7 lakhs per annum (entry), up to ₹20 lakhs for experienced",
      "careerPaths": ["Company Secretary", "Corporate Advisor"],
      "category": "commerce"
    },
    {
      "name": "Chartered Accountancy (CA)",
      "description": "Rigorous course in accountancy, taxation, auditing, and finance.",
      "duration": "4–5 years (average)",
      "expectedSalary": "₹6–15 lakhs per annum (entry), up to ₹40 lakhs+ in senior roles",
      "careerPaths": ["Chartered Accountant", "Audit Manager"],
      "category": "commerce"
    },
    {
      "name": "Cost and Management Accountancy (CMA)",
      "description": "Specialization in cost analysis, budgeting, and financial planning.",
      "duration": "3–4 years",
      "expectedSalary": "₹5–12 lakhs per annum",
      "careerPaths": ["Cost Accountant", "Financial Analyst"],
      "category": "commerce"
    },
    {
      "name": "Digital Marketing",
      "description": "Training in SEO, social media, web analytics, and strategy.",
      "duration": "6 months–1 year",
      "expectedSalary": "₹3–6 lakhs per annum (entry), up to ₹10 lakhs for managers",
      "careerPaths": ["Digital Marketer", "SEO Executive", "Social Media Manager"],
      "category": "arts"
    },
    {
      "name": "Entrepreneurship",
      "description": "Covers startup management, business strategy, and innovation skills.",
      "duration": "6 months–1 year (certificate/diploma)",
      "expectedSalary": "Variable/depends on business success",
      "careerPaths": ["Startup Founder", "Business Consultant"],
      "category": "commerce"
    },
    {
      "name": "Animation & VFX",
      "description": "Focuses on digital animation, video effects, gaming graphics.",
      "duration": "1–2 years",
      "expectedSalary": "₹3–8 lakhs per annum (entry), up to ₹20 lakhs+ for leads",
      "careerPaths": ["Animator", "VFX Artist"],
      "category": "arts"
    },
    {
      "name": "Post Production",
      "description": "Editing, sound design, visual effects for media and entertainment.",
      "duration": "1 year",
      "expectedSalary": "₹3–8 lakhs per annum",
      "careerPaths": ["Video Editor", "Sound Engineer"],
      "category": "arts"
    }
  ]
}



  res.json(data);
};

