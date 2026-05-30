export const personalInfo = {
  name: "Naga Harshitha Bhupathiraju",
  title: "B.Tech IT Student | Software Developer & Data Analyst",
  email: "harshithabhupathiraju824@gmail.com",
  phone: "+91 75695 36557",
  location: "Hyderabad, India",
  github: "https://github.com/harshitha28431",
  linkedin: "https://www.linkedin.com/in/naga-harshitha-bhupathiraju-a09b322a2/",
  portfolio: "https://harshithab.dev",
  summary: "I am a B.Tech Information Technology student with a strong interest in software development, data analytics, and emerging technologies. Proficient in Java, Python, C, and SQL, with hands-on experience building interactive dashboards using Power BI. I enjoy developing innovative solutions to real-world problems and am currently expanding my skills in Artificial Intelligence, ServiceNow, and Cyber Security.",
  resumeUrl: "/resume/resume.pdf",
  profilePicture: "/images/profile.png"
};

export const skills = {
  dataAnalyticsCloud: [
    "ServiceNow CSA & CAD Exploration",
    "Data Visualization (Power BI)",
    "MySQL Database Management",
    "SQL Queries & Relational DBMS",
    "Juniper Cloud Associate (JNCIA-Cloud)",
    "Cloud Virtualization Foundations",
    "Cyber Security Fundamentals"
  ],
  programmingLanguages: [
    "Python Programming",
    "Java Programming",
    "C Programming",
    "Embedded C (Arduino)",
    "Data Structures & Algorithms",
    "Problem Solving",
    "Object-Oriented Design"
  ],
  webDevelopment: [
    "HTML5 & CSS3 Layouts",
    "JavaScript (Basics)",
    "Responsive Web Design",
    "Bootstrap Framework",
    "Flask (Python Web Framework)",
    "UI/UX Design Fundamentals"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Mobile App Risk Analysis System",
    description: "Developed a security analytics system that evaluates mobile applications' permissions, privacy policies, and user reviews. Designed interactive dashboards and comparison features using Python and Flask to classify apps into Low, Medium, or High Risk profiles.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/harshitha28431/mobile-app-risk-analysis",
    liveUrl: "https://mobile-risk-analysis.onrender.com/"
  },
  {
    id: 2,
    title: "Smart Gloves for Assistive Comm.",
    description: "Designed and engineered an IoT hardware system to assist hearing and speech-impaired individuals. Translates real-time flex sensor hand gestures into readable text displayed on an LCD screen, using Arduino microcontrollers and custom Embedded C logic.",
    tech: ["Arduino", "Embedded C", "Sensors", "Microcontrollers"],
    githubUrl: "https://github.com/harshitha28431/smart-gloves",
    liveUrl: ""
  },
  {
    id: 3,
    title: "Modern Developer Portfolio",
    description: "A premium, fully responsive portfolio website highlighting academic achievements, core certifications, ServiceNow focus, and programming skills. Built with Next.js, Vanilla CSS, and Framer Motion, featuring glassmorphism and 3D hover effects.",
    tech: ["Next.js", "React", "Vanilla CSS", "Framer Motion"],
    githubUrl: "https://github.com/harshitha28431/portfolio",
    liveUrl: "https://harshithab.dev"
  }
];

export const experience = [
  {
    id: 1,
    role: "IT Student & Aspiring Developer",
    company: "Vignana Bharathi Institute of Technology",
    duration: "2023 - 2027",
    description: [
      "Acquiring strong academic foundations in Object-Oriented programming (Java, Python, C) and database design.",
      "Developing mock desktop and web applications, executing comprehensive testing, and debugging software logic.",
      "Analyzing datasets and constructing visual analytics reports and interactive dashboards using Power BI.",
      "Collaborating on multi-disciplinary engineering projects utilizing hardware microcontrollers and embedded environments."
    ]
  },
  {
    id: 2,
    role: "Emerging Tech Explorer",
    company: "Academic Projects & Self-Directed Learning",
    duration: "2024 - Present",
    description: [
      "Exploring enterprise cloud solutions, software-defined networks, and multi-cloud routing models.",
      "Acquiring basics of ServiceNow platform workflow architecture, user interfaces, scripting client/server APIs, and CSA/CAD preparation.",
      "Learning security risk evaluation concepts, authorization tracking, and fundamentals of Cyber Security."
    ]
  }
];

export const technicalFoundationsDetails = {
  title: "ServiceNow & Cloud Foundations",
  credentialId: "Juniper JNCIA-Cloud & ServiceNow Platform Explorer",
  verificationUrl: "https://www.credly.com/",
  skillsCovered: [
    "ServiceNow CSA & CAD Configuration Scripting (Exploring)",
    "Juniper JNCIA-Cloud (Virtualization & Software-Defined Networks)",
    "Data Visualization & Dashboards (Power BI)",
    "Relational Database Design & SQL Queries (MySQL)",
    "Object-Oriented Programming (Python & Java)",
    "Assistive Hardware Prototyping (Arduino & Embedded C)"
  ],
  summary: "A motivated IT student combining cloud associate foundations (Juniper JNCIA-Cloud) with hands-on exploration of the ServiceNow platform (active CSA & CAD prep). Integrates enterprise workflow configuration concepts with robust programming knowledge and Power BI visual analytics to build and deploy data-driven solutions."
};

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Vignana Bharathi Institute of Technology (JNTUH)",
    duration: "2023 - 2027",
    grade: "CGPA: 8.6"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Nayana Junior College",
    duration: "2021 - 2023",
    grade: "85%"
  },
  {
    degree: "SSC (10th Standard)",
    institution: "St. Peter's High School",
    duration: "2011 - 2021",
    grade: "GPA: 10/10"
  }
];

export const certifications = [
  {
    title: "Cloud Associate (JNCIA-Cloud)",
    issuer: "Juniper Networks",
    date: "Sep 2024",
    logo: "juniper"
  },
  {
    title: "Learn Programming with Java",
    issuer: "Infosys Springboard",
    date: "Mar 2025",
    logo: "infosys"
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco",
    date: "Jun 2024",
    logo: "cisco"
  },
  {
    title: "CLA: Programming Essentials in C",
    issuer: "Cisco",
    date: "Jan 2024",
    logo: "cisco"
  }
];

export const strengths = [
  {
    title: "Continuous & Adaptable Learner",
    description: "Strong ability to quickly absorb complex enterprise frameworks, going from basic web languages to ServiceNow scripting APIs and cloud configurations."
  },
  {
    title: "Detail-Oriented Developer",
    description: "Focused on building secure logic, whether analyzing application risks in Flask, writing clean business rules, or configuring MySQL schemas."
  },
  {
    title: "Problem Solver",
    description: "A natural engineering mindset suited for debugging logical execution, hardware sensor calibration, and automated workflow design."
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Demystifying ServiceNow Scripting: Client Scripts vs Business Rules",
    excerpt: "Learn the core differences between client-side and server-side scripting in ServiceNow, and how to choose the right place for validation and database operations.",
    date: "May 20, 2026",
    readTime: "5 min read",
    slug: "servicenow-client-vs-business-rules"
  },
  {
    id: 2,
    title: "Building a Security Analytics Dashboard with Python and Flask",
    excerpt: "A practical guide to implementing a risk-analysis backend in Python/Flask that parses permissions and uses reviews to classify application security profiles.",
    date: "April 15, 2026",
    readTime: "7 min read",
    slug: "python-flask-risk-analysis"
  },
  {
    id: 3,
    title: "Interfacing Sensors in Embedded C: An Arduino Guide",
    excerpt: "Exploring the fundamentals of reading analog signal inputs from flex sensors and translating them into readable LCD outputs using Embedded C on Arduino.",
    date: "March 05, 2026",
    readTime: "4 min read",
    slug: "arduino-sensor-embedded-c"
  }
];
