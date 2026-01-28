export const siteConfig = {
  name: "Jonny Jamison",
  title: "Modelling, Simulation & Toolset Engineer",
  description: "Portfolio website of Jonny Jamison",
  accentColor: "#00ff00",
  social: {
    email: "jonny.jamison@outlook.com",
    linkedin: "https://www.linkedin.com/in/jonnyjamison",
    github: "https://github.com/jonnyjamison",
    leetcode: "https://leetcode.com/jonnyjamison",
  },
  aboutMe:
  "A mechanical engineer with a passion for programming, combining the two through simulation, modelling, and machine-learning-enabled tools. My work spans vehicle dynamics, virtual sensors, and digital twins, bringing engineering models to life with clean, scalable code across professional and personal projects.",
  skills: ["Python", "MATLAB", "Simulink", "TensorFlow", "AWS", "Docker"],
  projects: [
    {
      name: "Spring-Mass-Damper ML Surogate Model",
      description:
        "Project to create a machine-learning based surrogate model of a spring-mass-damper system using PyTorch and deploy it with an interactive web app",
      link: "https://github.com/jonnyjamison/spring-mass-damper-ML",
      skills: ["Python", "PyTorch", "Plotly Dash", "Docker"],
      media: "/media/ml_damper_preview.gif"
    },
    {
      name: "Suspension Kinematics Viewer",
      description:
        "Development of GUI to visualise suspension hardpoints of a double-wishbone suspension system and calculate features of the geometry",
      link: "https://github.com/jonnyjamison/KinematicsViewer",
      skills: ["Python", "PyQt", "Numpy"],
      media: "/media/kinematics_preview.gif"
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      media: "/media/test_gif.gif"
    },
  ],
  experience: [
    {
      company: "ClearMotion",
      title: "Virtual Tools & Methods Engineer",
      dateRange: "Aug 2024 - Present",
      bullets: [
        "Development and deployment of bespoke simulation and analysis tools to support product development",
        "Lead engineer on Virtual Sensor project to replace physical component with a Machine Learning model",
        "Apply bespoke vehicle models to generate actionable simulation insight for high-performance automotive applications",
      ],
    },
    {
      company: "Rivian",
      title: "Modelling and Simulation Engineer",
      dateRange: "Feb 2022 - Aug 2024",
      bullets: [
        "Developed and correlated a Digital Twin of vehicles using mathematical modelling to support attribute development",
        "Implemented automation and optimisation algorithms as part of Vehicle Simulation Interface (VSI)",
        "Supported Driver-in-the-Loop activities through on-site experiment design, live coding, and model integration",
      ],
    },
    {
      company: "IPG Automotive",
      title: "Application Engineer",
      dateRange: "Feb 2021 - Feb 2022",
      bullets: [
        "Gained insight into industry through helping OEMs develop models and strategies for virtual testing",
        "Worked with various automotive technologies including ADAS, EVs, DiL and HiL systems",
        "Developed professional coding skills through implementing best practises, collaboration, and customer interactions",
      ],
    },
  ],
  education: [
    {
      school: "Queen's University Belfast",
      degree: "Master of Mechanical Engineering",
      dateRange: "2015 - 2020",
      achievements: [
        "Graduated with First Class Honours",
        "*link* Global Undergratute Awards Winner & IMechE Outstanding Project Award received for final year project",
        "Suspension Team Leader & Performance Assistant Team Leader for Queen's Formula Racing FSAE team",
      ],
    },
    {
      school: "University of Ulster",
      degree: "Postgraduate Certificate in Aritficial Intelligence",
      dateRange: "2020 - 2021",
      achievements: [
        "Graduated with Distinction",
        "Scholarship received to further interest of Machine Learning developed during Masters degree",
        "4 modules studied at Masters level, including: Big Data, Data Mining, Machine Learning, and Statistics",
      ],
    },
  ],
};
