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
        "GUI to view the suspension hardpoints of a double-wishbone suspension system and visualise features of the geometry",
      link: "https://github.com/jonnyjamison/KinematicsViewer",
      skills: ["PyQt", "Python", "Numpy"],
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
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Rivian",
      title: "Modelling and Simulation Engineer",
      dateRange: "Feb 2022 - Aug 2024",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "IPG Automotive",
      title: "Application Engineer",
      dateRange: "Jan 2021 - Feb 2022",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
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
        "Global Undergratute Awards Winner & IMechE Outstanding Project Award received for final year project",
        "Suspension Team Leader & Performance Assistant Team Leader for Queen's Formula Racing FSAE team",
      ],
    },
    {
      school: "University of Ulster",
      degree: "Postgraduate Certificate in Aritficial Intelligence",
      dateRange: "2020 - 2021",
      achievements: [
        "Graduated with Distinction",
        "3 modules studied at Masters level, including: Big Data, Machine Learning, and Statistics",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
