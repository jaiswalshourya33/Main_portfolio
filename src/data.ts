import { Project, SkillCategory, EducationItem, Certification, StatItem } from "./types";

export const developerName = "Shourya Jaiswal";
export const developerTitle = "Full Stack Developer | Problem Solver | Tech Enthusiast";
export const developerIntro = "I build high-performance, scalable web applications with a focus on clean code and exceptional user experience. Turning complex problems into elegant, technical solutions.";
export const avatarImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyHWYrRq07AToL6zFoGOZp4nerbV-h1avdtqcT5usuWhw-fo1VQnGhZ3QOrTiEDbAyJYScb3FKKTw_urhGYNuPsnPwlVhAyxcPYgM6gbTF7VEfmgHnK3HsxSBHjjMtI5qsTf9p2yT1pGqcejEq-nAg0lzYIbR60od5UwPbUKNifL4vZ5hFx0PyrF8pukV22U9NUhqMwBBeB2uNR9WbqhHPtZ6HXmgGkvmkQj7Mu9i4G8e3A7P8tNEvRKf6okw8wvEOmqok6UKpj4c";

export const stats: StatItem[] = [
  {
    value: "15+",
    label: "Projects Completed",
    colorClass: "text-brand-primary"
  },
  {
    value: "20+",
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
  "With a foundation in Computer Science and a focus on the full-stack ecosystem, I enjoy bridging the gap between design and development, ensuring every pixel and every line of code serves a purpose."
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
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 80 }
    ],
    tags: ["Expert", "Junior", "Learning", "Design"]
  } as any
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Future Grow Tech",
    description: "A comprehensive agricultural tech platform leveraging AI to optimize crop yields and monitor soil health in real-time.",
    longDescription: "Deploying high-precision IoT sensors modeled via real-time dashboard visualization. The platform leverages tailored predictive algorithms to optimize water management and dynamic fertilizer distribution, reducing ecological impact by 30%.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2lCgY-jmZV3B-Vc_HQUUpZbMQ_4Vs6DEUKFTLCfSFQQXz6ycAkabBJ1wEGz29UzzqYjW8slWgSEey_lBizBvhjWLwlgkr9OUNgQFPWjl3vtWDkOlcxoibHC9xsZQLTwOUBVLfF0w3QIjadAYHpv6upISkGHr1NX0Yw40sZBl_yMzHNWAz0_pZ3qL2CdjyLB8_bt3LZrzTen33Cghswsj50EJc5ZtPFnXetTD1jw9HrTHVWIsfvEyakR4hwvfGt4l21CZDXOofL1w",
    imageAlt: "A sophisticated dashboard interface for a green-tech SaaS application. The UI features elegant line charts, glowing energy metrics, and translucent glassmorphism cards. The color palette is dominated by deep charcoal blacks and vibrant electric cyan accents.",
    tags: ["REACT", "NODE.JS", "MONGODB"],
    liveUrl: "https://futuregrow.example.com",
    githubUrl: "https://github.com/shourya/future-grow-tech",
    category: "Full Stack"
  },
  {
    id: "project-2",
    title: "Quiz Application",
    description: "Interactive real-time quiz platform featuring dynamic category selection, timed challenges, and persistent global leaderboards.",
    longDescription: "A game-optimized web socket app engineered to handle concurrency gracefully. Users duel in themed battles, gain XP badges, climb global ranks, and trigger custom power-ups mimicking tactical high-octane multiplayer games.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP5nCDQoqoLoi5CgJApnrCYN49a7dhc6yBmiU2zRt5mn__wSn5doO9IqHiA8qhnWVAQdbA-lQDwYcLwwNv9-RXZVNAEu6Wq9e7TXTKRoXrwe3S5vHLdJT8C04AomO5cO-HXxmhQELqKNA1An0aCBatiAbU0W1MYdrYFCSUQJVws-Kiw5jzYL0N6q0hHtvsMmRj3iFWyJ62VuTHt2KmCaQctD_-wtWpbcb4IQBkMr9nYCgjwk9dWXAzuTN-5EDxDbxHd2-8dpoMtCg",
    imageAlt: "A vibrant, gaming-inspired quiz application interface displayed on a high-end monitor. The screen shows interactive multiple-choice questions with neon-lit progress bars, floating badges, and a leaderboard.",
    tags: ["JAVASCRIPT", "FIREBASE", "TAILWIND"],
    liveUrl: "https://cyberquiz.example.com",
    githubUrl: "https://github.com/shourya/quiz-application",
    category: "Web App"
  },
  {
    id: "project-3",
    title: "Full Stack CRUD App",
    description: "A robust inventory management system with secure authentication, cloud storage, and detailed transaction history logs.",
    longDescription: "An enterprise-grade administration hub engineered on highly performant database queries. Supports role-based access control (RBAC), multi-location logging, dynamic batch updating, and instant spreadsheet synchronization with military-grade safety parameters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5SJmeFnymwwHW7LFOZWPxjjBl5jUedOpAY6Q4aW7wSQGdSGUm1KCnNu92_n1x6y1GR5QavE5d-k2OelGotNC6urGyB-7NUnU01OyxTbv6Zfg6GPCPHoi-l0l_BXz0AljF-YXbCvvCyP86BGD9CfA3kjn0dWIooQllnWufS7lu-dt4wRWpamgLTL3fgS2MJEG8MTSbDaBgZZTylzJ-12cwhZkTtiKSTqBKH846LO1GJHBlS95QgYLrFwNUBVUtZJBn5khcx0pEmYA",
    imageAlt: "A clean, minimalist code editor interface showing an elegant REST API structure and React components. The aesthetic is extremely professional, using a deep space black theme with high-contrast neon text highlights.",
    tags: ["EXPRESS", "POSTGRES", "DOCKER"],
    liveUrl: "https://crudhub.example.com",
    githubUrl: "https://github.com/shourya/crud-inventory",
    category: "System"
  },
  {
    id: "project-4",
    title: "Energy Learning Platform",
    description: "A gamified learning experience designed to educate students on renewable energy sources through 3D visualizations and simulations.",
    longDescription: "WebGL educational tool featuring fluid interactions. Simulates weather coefficients in real-time, letting users position solar rigs or scale wind power grids to dynamically optimize simulated municipal grid loadouts under realistic stress constraints.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5XtkJtqnVoPDFBw6UN_cdI3jX39hR3wlHP9SA33yHnIc5w_vacV375Ri1-QoEBtIyQZUCU--q1mMOhlKtxLUgqYlnp2aeDQuWCg_BTjKtl2EBRYtlya_afhMEaCVNJm06guaolwzYCMAD2t12dY3bdeI46tsS5CAAYKvVogjLkeeDEt32wXg0DZvvWuuZ0VUgJ70o2JYQVx4LzKxBjjTbaCrZPxOWVu-tUFYKUq9SKnq0YHJpvjs7hEcourkwplf9_AqikqbnaV4",
    imageAlt: "An educational platform UI featuring 3D models of wind turbines and solar panels. The interface is futuristic, with glowing blue data points and interactive learning modules.",
    tags: ["THREE.JS", "VUE.JS", "GSAP"],
    liveUrl: "https://renewable-energy-sim.example.com",
    githubUrl: "https://github.com/shourya/energy-learning",
    category: "Graphics"
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Computer Science",
    institution: "ABES Engineering College",
    period: "2021 - 2025",
    description: "Focused on Algorithms, System Design, and Full Stack Engineering. Actively involved in building community software, web research groups, and algorithmic duels.",
    gpa: "8.8 / 10.0"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    issueDate: "2024",
    credentialUrl: "https://coursera.org/verify/meta-front-end",
    icon: "award"
  },
  {
    id: "cert-2",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
    icon: "cloud"
  },
  {
    id: "cert-3",
    title: "MongoDB Associate",
    issuer: "MongoDB University",
    issueDate: "2024",
    credentialUrl: "https://mongodb.com/verify",
    icon: "database"
  }
];

export const resumePreviewUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDzoJd-hZ04yaAVbpMtZXS_tfcH6UJQ2E9821Vaz_ECDbuaLTfcL0EyQsKqKrdV3AWmnkbAGWPpDxTEAnYHUAFJsFBWKqDyoTS2QQvcUaQtgI9b21n9TreQQsxMP-txMZI7Er279FtVE953d6Ut-rpros1rkzXIFVA1zSc6L_vgR0XFXN1P-MrUntKgNx7-sG-QAeiwRZUk7b6YCdccilubVhT5dSmosAdYYO8kvQA4xZmmIHB1_dVmhOnTg20XMR43XjeGm3zV9PI";
export const contactEmail = "shourya@sj.dev";
