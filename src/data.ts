import { Project, SkillCategory, EducationItem, Certification, StatItem } from "./types";
import employeeManagementImg from "./assets/emp.png";
import weatherAppImg from "./assets/weather.png";
import portfolioImg from "./assets/portfolio.png";
import resturantImg from "./assets/resturant.png";
import tataCertificateImg from "./assets/tata.png";


export const developerName = "Shourya Jaiswal";
export const developerTitle = "Full Stack Developer | Problem Solver | Tech Enthusiast";
export const developerIntro = "I build high-performance, scalable web applications with a focus on clean code and exceptional user experience. Turning complex problems into elegant, technical solutions.";
export const avatarImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyHWYrRq07AToL6zFoGOZp4nerbV-h1avdtqcT5usuWhw-fo1VQnGhZ3QOrTiEDbAyJYScb3FKKTw_urhGYNuPsnPwlVhAyxcPYgM6gbTF7VEfmgHnK3HsxSBHjjMtI5qsTf9p2yT1pGqcejEq-nAg0lzYIbR60od5UwPbUKNifL4vZ5hFx0PyrF8pukV22U9NUhqMwBBeB2uNR9WbqhHPtZ6HXmgGkvmkQj7Mu9i4G8e3A7P8tNEvRKf6okw8wvEOmqok6UKpj4c";

export const stats: StatItem[] = [
  {
    value: "5+",
    label: "Projects Completed",
    colorClass: "text-brand-primary"
  },
  {
    value: "10+",
    label: "Tech Stack Learned",
    colorClass: "text-brand-secondary"
  },
  {
    value: "2+",
    label: "Years Coding Exp",
    colorClass: "text-brand-tertiary"
  }
];

export const aboutParagraphs = [
  "I am a passionate technologist who thrives on building modern web applications that solve real-world problems. My journey in the tech world is driven by a deep curiosity for how things work under the hood and a commitment to engineering excellence.",
  "With a foundation in Computer Science with specialization in Data Science  and a focus on the full-stack ecosystem, I enjoy bridging the gap between design and development, ensuring every pixel and every line of code serves a purpose."
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: "palette",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 95 }
    ],
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "BACKEND",
    icon: "layers",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 }
    ],
    tags: ["Python", "Java", "API Design"]
  },
  {
    title: "DATABASE",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 85 }
    ],
    tags: ["PostgreSQL", "Redis"]
  },
  {
    key: "tools", // adding helper
    title: "TOOLS",
    icon: "terminal",
   skills: [
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "MongoDB", level: 75 }
],

tags: ["Web Development", "Full Stack", "Problem Solving", "Continuous Learning"]
  } as any
];

export const projects: Project[] = [
  {
  id: "project-1",
  title: "Employee Management System",
  description: "A full-stack employee management platform designed to streamline employee records, attendance tracking, and workforce management.",
  longDescription:
    "Developed a responsive Employee Management System that enables administrators to manage employee information, track attendance, monitor performance, and organize workforce data efficiently. The platform features secure authentication, CRUD operations, role-based access control, and a user-friendly dashboard for seamless employee management.",
  image: employeeManagementImg,
  imageAlt:
    "A modern employee management dashboard displaying employee records, attendance statistics, performance metrics, and administrative controls with a clean and professional interface.",
  tags: ["REACT", "Tailwind CSS"],
  liveUrl: "https://portfolio-website-7ngd.vercel.app",
  githubUrl: "https://github.com/jaiswalshourya33/employee-management-system",
  category: "Frontend"
},
  {
  id: "project-2",
  title: "Weather Forecast Application",
  description: "A responsive weather application that provides real-time weather updates, temperature forecasts, humidity levels, wind speed, and location-based weather information.",
  longDescription:
    "Developed a modern weather forecasting application using weather APIs to deliver accurate real-time weather data. Users can search for any city worldwide and view current weather conditions, temperature, humidity, wind speed, and multi-day forecasts through an intuitive and user-friendly interface.",
  image: weatherAppImg,
  imageAlt:
    "A modern weather dashboard displaying current temperature, weather conditions, humidity, wind speed, and forecast data with a clean and responsive user interface.",
  tags: ["REACT", "API", "TAILWIND CSS"],
  liveUrl: "https://weather-app-yb6s.vercel.app/",
  githubUrl: "https://github.com/jaiswalshourya33/Weather-App",
  category: "Web App"
},
  {
  id: "project-3",
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive portfolio website built with React to showcase my projects, skills, certifications, education, and professional journey.",
  longDescription:
    "Designed and developed a fully responsive personal portfolio website using React and modern web technologies. The platform features smooth animations, interactive UI components, project showcases, skill highlights, certification sections, and contact functionality. The website is optimized for performance and provides a seamless user experience across desktop, tablet, and mobile devices.",
  image: portfolioImg,
  imageAlt:
    "A modern developer portfolio website featuring a sleek hero section, project showcase, skills dashboard, certifications, and contact section with a futuristic user interface.",
  tags: ["REACT", "TAILWIND CSS", "JAVASCRIPT"],
  liveUrl: "https://portfolio-website-nu-ruby.vercel.app/",
  githubUrl: "https://github.com/jaiswalshourya33/Portfolio-website",
  category: "Portfolio"
},
  {
  id: "project-4",
  title: "Celestial Bites",
  description:
    "A modern restaurant website designed to showcase menu offerings, dining experiences, customer reviews, and online reservation features.",
  longDescription:
    "Developed a responsive restaurant website for Celestial Bites featuring an elegant user interface, interactive menu sections, featured dishes, customer testimonials, and contact information. The platform is designed to provide a seamless browsing experience across all devices while enhancing customer engagement through visually appealing layouts and intuitive navigation.",
  image: resturantImg,
  imageAlt:
    "A modern restaurant website showcasing featured dishes, menu categories, customer reviews, reservation options, and an elegant dining-themed user interface.",
  tags: ["HTML", "CSS", "JAVASCRIPT"],
  liveUrl: "https://your-celestial-bites-demo-link.com",
  githubUrl: "https://github.com/jaiswalshourya33/Celestial-Bites",
  category: "Restaurant Website"
}
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Computer Science Engineering (Data Science)",
    institution: "ABES Engineering College",
    period: "2023 - 2027",
    description: "Focused on Algorithms, System Design, and Full Stack Engineering. Actively involved in building community software, web research groups, and algorithmic duels.",
    gpa: "8.5 / 10.0"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group",
    issueDate: "2025",
    credentialUrl: "/certificates/tata.png",
    icon: "award"
  },
  {
    id: "cert-2",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2025",
    credentialUrl: "/certificates/aws.jpeg",
    icon: "cloud"
  },
  {
    id: "cert-3",
    title: "AI Impact Hackathon",
    issuer: "AI Summit",
    issueDate: "2026",
    credentialUrl: "/certificates/AI impact certificate.jpg",
    icon: "award"
  }
];

export const resumePreviewUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDzoJd-hZ04yaAVbpMtZXS_tfcH6UJQ2E9821Vaz_ECDbuaLTfcL0EyQsKqKrdV3AWmnkbAGWPpDxTEAnYHUAFJsFBWKqDyoTS2QQvcUaQtgI9b21n9TreQQsxMP-txMZI7Er279FtVE953d6Ut-rpros1rkzXIFVA1zSc6L_vgR0XFXN1P-MrUntKgNx7-sG-QAeiwRZUk7b6YCdccilubVhT5dSmosAdYYO8kvQA4xZmmIHB1_dVmhOnTg20XMR43XjeGm3zV9PI";
export const contactEmail = "shourya@sj.dev";
