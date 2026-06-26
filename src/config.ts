export const siteConfig = {
  name: "Jonny Jamison",
  title: "Software Engineer, Modelling & Simulation",
  description: "Portfolio website of Jonny Jamison",
  accentColor: "#00ff00",
  social: {
    email: "jonny.jamison@outlook.com",
    linkedin: "https://www.linkedin.com/in/jonnyjamison",
    github: "https://github.com/jonnyjamison",
    leetcode: "https://leetcode.com/jonnyjamison",
  },
  aboutMe:
    "Software and modelling engineer with a mechanical engineering background, building simulation, modelling, and machine-learning-enabled tools across dynamics, complex operational networks, virtual sensors, and digital twins - making code replicate reality!",
  skills: ["Python", "NumPy", "Pandas", "scipy", "MATLAB", "Simulink", "TensorFlow", "AWS"],
  projects: [
    {
      name: "Spring-Mass-Damper ML Surrogate Model",
      description:
        "Project to create a machine-learning based surrogate model of a spring-mass-damper system using PyTorch and deploy it with an interactive web app",
      link: "https://github.com/jonnyjamison/spring-mass-damper-ML",
      skills: ["Python", "PyTorch", "Plotly Dash", "Docker", "FastAPI"],
      media: "media/ml_damper_preview.gif",
    },
    {
      name: "Suspension Kinematics Viewer",
      description:
        "Development of a Python-based GUI to visualise .xls files containing hardpoints of a double-wishbone suspension system and calculate features of the geometry",
      link: "https://github.com/jonnyjamison/KinematicsViewer",
      skills: ["Python", "PyQt", "Numpy"],
      media: "media/kinematics_preview.gif",
    },
    /*
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      media: "media/test_gif.gif"
    },
    */
  ],
  experience: [
    {
      company: "Kallikor.ai",
      website: "https://www.kallikor.ai/",
      title: "Software Engineer, Modelling",
      dateRange: "Mar 2026 - Present",
      bullets: [
        "<a href='https://businesscloud.co.uk/news/kallikor-first-firm-to-spin-out-of-metaverse-pioneer-improbable/' target='_blank' rel='noopener noreferrer'>Improbable Worlds spin out</a>, applying technology proven in large-scale virtual-world and defence simulation to high-value enterprise operations",
        "Development of advanced Python-based modelling and simulation tools for large-scale digital twin applications",
        "Transformation of multi-domain customer data into representative simulation flows for complex operational systems",
        "Delivery of customer facing simulation analysis to support <a href='https://kallikor.ai/from-battlefield-to-boardroom-what-defence-simulation-teaches-supply-chain-leaders-about-decision-making/' target='_blank' rel='noopener noreferrer'>evidence-led decision-making</a> for multi-billion-dollar enterprise clients",
      ], 
    },
    {
      company: "ClearMotion",
      website: "https://www.clearmotion.com/",
      title: "Modelling and Simulation Engineer",
      dateRange: "Aug 2024 - Mar 2026",
      bullets: [
        "Development and deployment of bespoke simulation and analysis tools to support product development using multiple technologies",
        "Lead engineer on Virtual Sensor project to replace physical component with a Machine Learning model",
        "Creation of bespoke vehicle models to generate actionable simulation insight for <a href='https://newsroom.porsche.com/en/2024/company/porsche-clearmotion-cooperation-advanced-chassis-systems-35755.html' target='_blank' rel='noopener noreferrer'>high-performance automotive applications</a>",
      ],
    },
    {
      company: "Rivian",
      website: "https://www.rivian.com/",
      title: "Vehicle Modelling Engineer",
      dateRange: "Feb 2022 - Aug 2024",
      bullets: [
        "Top Talent Award recipient for outstanding performance in 2023",
        "Developed and correlated vehicle digital twins using mathematical modelling to support attribute development",
        "Implemented automation and optimisation algorithms as part of <a href='https://uk.mathworks.com/company/technical-articles/rivian-scales-full-vehicle-simulations-with-matlab-and-matlab-parallel-server.html' target='_blank' rel='noopener noreferrer'>Vehicle Simulation Interface (VSI)</a>",
        "Supported Driver-in-the-Loop activities through on-site experiment design, live coding, and model integration",
      ],
    },
    {
      company: "IPG Automotive",
      website: "https://ipg-automotive.com/",
      title: "Application and Simulation Engineer",
      dateRange: "Feb 2021 - Feb 2022",
      bullets: [
        "Helped OEMs develop vehicle models and strategies for virtual testing as part of <a href='https://www.project-vivid.com/' target='_blank' rel='noopener noreferrer'>Project ViVID</a>",
        "Worked with various automotive technologies including ADAS, EVs, DiL and HiL systems",
        "Developed coding skills in a professional environment through implementing clean code, collaboration, and customer interactions",
      ],
    },
  ],
  education: [
    {
      school: "Queen's University Belfast",
      degree: "Master of Mechanical Engineering",
      dateRange: "2015 - 2020",
      achievements: [
        "Graduated with First Class Honours, Degree+, and Millennium Volunteers Award",
        "<a href='https://gua.soutron.net/Portal/Default/en-GB/RecordView/Index/109' target='_blank' rel='noopener noreferrer'>Global Undergraduate Awards</a> & <a href='https://www.nafems.org/blog/posts/jonathan-jamison-uk-student-winner-2nd-prize-winner/?srsltid=AfmBOooUzbGys4Ro4OU3VTu_vsxBvFFtHfW-7YIQE6HK31lf5-bqyiiX' target='_blank' rel='noopener noreferrer'>IMechE Outstanding Project Award</a> received for final year project",
        "Queen's Formula Racing team Suspension Team Leader & Assistant Performance Team Leader",
      ],
    },
    {
      school: "University of Ulster",
      degree: "Postgraduate Certificate in Artificial Intelligence",
      dateRange: "2020 - 2021",
      achievements: [
        "Graduated with Distinction",
        "Scholarship received to further interest of Machine Learning developed during Masters degree",
        "Modules studied at Masters level, including: Big Data & Infrastrucure, Machine Learning, Statistical Modelling & Data Mining",
      ],
    },
  ],
};
