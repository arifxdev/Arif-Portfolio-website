import { Project, Experience, Education, Skill, Language } from "./types";

export const personalInfo = {
  name: "Muhammad Arif",
  title: "Full-Stack Developer",
  tagline: "Building responsive, modern, and high-performance web applications from front to back.",
  email: "marifd132@gmail.com",
  phone: "+923061535790",
  location: "Ghaghar Phatak, Malir, Karachi, Pakistan",
  avatar: "/src/assets/images/arif.png",
  bio: "Passionate Full Stack Developer with a solid foundation in front-end and back-end technologies, including HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Tailwind CSS, and WordPress. Currently focusing on the MERN stack (MongoDB, Express, React, Node.js) while pursuing a Diploma in Software Engineering at Aptech Learning. Dedicated to creating responsive, user-friendly websites with clean and modern UI/UX, and eager to contribute to real-world projects in a collaborative tech environment.",
  github: "https://github.com/arifxdev",
  linkedin: "https://www.linkedin.com/in/muhammad-arif-14b132368",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com/arifxdev1",
};

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Web Development Specialist (Academic Projects)",
    company: "Aptech Learning",
    period: "2024 - Present",
    highlights: [
      "Developed fully responsive and visually appealing websites using HTML, CSS, Bootstrap, and jQuery, focusing on modern design principles and mobile-first layouts.",
      "Created dynamic and interactive web pages by integrating JavaScript for client-side functionality, and PHP with MySQL for robust server-side development and database management.",
      "Successfully completed a range of real-world projects, including a feature-rich E-Commerce website with product listings, shopping cart, and secure checkout.",
      "Designed and delivered full-stack web applications with front-end and back-end components, reinforcing software architecture concepts and performance optimization.",
      "Gained hands-on experience in solving real-time bugs, version control concepts, and collaborating with peers on structured project planning."
    ]
  }
];

export const educations: Education[] = [
  {
    id: "edu1",
    degree: "Higher Diploma in Software Engineering (Accp 2.0)",
    institution: "Aptech Learning",
    period: "2024 - 2027",
    details: "Focusing on modern software engineering practices, advanced web development (React, Node, Laravel), and enterprise systems architecture."
  },
  {
    id: "edu2",
    degree: "Intermediate in Computer Science",
    institution: "National College",
    period: "Completed",
    details: "Foundational education in mathematics, physics, and computer science principles."
  }
];

export const skills: Skill[] = [
  // Front-end
  { name: "React.js", level: 85, category: "front-end", iconName: "Atom" },
  { name: "JavaScript (ES6+)", level: 88, category: "front-end", iconName: "Code2" },
  { name: "Tailwind CSS", level: 90, category: "front-end", iconName: "Palette" },
  { name: "Bootstrap 5", level: 92, category: "front-end", iconName: "Layout" },
  { name: "HTML5 / CSS3", level: 95, category: "front-end", iconName: "FileCode" },
  { name: "jQuery", level: 85, category: "front-end", iconName: "FileJson" },
  
  // Back-end
  { name: "Node.js", level: 75, category: "back-end", iconName: "Server" },
  { name: "Express.js", level: 72, category: "back-end", iconName: "Code2" },
  { name: "MongoDB", level: 70, category: "back-end", iconName: "Database" },
  { name: "PHP", level: 82, category: "back-end", iconName: "Server" },
  { name: "MySQL", level: 80, category: "back-end", iconName: "Database" },
  { name: "Laravel", level: 65, category: "back-end", iconName: "Terminal" },
  
  // WordPress & CMS
  { name: "WordPress Development", level: 90, category: "wordpress", iconName: "Globe" },
  { name: "Elementor & Page Builders", level: 92, category: "wordpress", iconName: "Layers" },
  
  // Tools & Others
  { name: "Git & GitHub", level: 80, category: "others", iconName: "Github" },
  { name: "UI/UX Prototyping", level: 75, category: "others", iconName: "Sparkles" },
  { name: "Responsive Design", level: 95, category: "others", iconName: "MonitorPhone" }
];

export const languages: Language[] = [
  { name: "Urdu", level: 100, percentageText: "Native" },
  { name: "Sindhi", level: 95, percentageText: "Fluent" },
  { name: "English", level: 80, percentageText: "Professional Working" }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "MegaCart - Feature-Rich E-Commerce Solution",
    category: "full-stack",
    description: "A comprehensive shopping experience with active catalog search, interactive cart management, dynamic checkout summaries, and user dashboard.",
    longDescription: "MegaCart is a state-of-the-art web application developed to showcase secure full-stack commerce flow. It provides lightning-fast UI transitions, robust client-side validation, and smooth cart animation updates to optimize conversion rates.",
    tags: ["React", "PHP", "MySQL", "Tailwind CSS", "Framer Motion"],
    image: "/src/assets/images/ecommerce_mockup_1784094699513.jpg",
    githubUrl: "https://github.com/arifxdev",
    liveUrl: "https://example.com",
    features: [
      "Dynamic catalog searching and category filtering",
      "Interactive sliding cart panel with custom badge animation",
      "Full simulated checkout experience with invoice generation",
      "Backend API mock synchronization with localStorage recovery"
    ]
  },
  {
    id: "proj2",
    title: "DevPortal - Full-Stack Analytics Dashboard",
    category: "full-stack",
    description: "A secure workspace dashboard featuring real-time interactive task boards, deployment pipelines, and visual telemetry mockups.",
    longDescription: "DevPortal integrates critical workflow helpers into one clean portal. It allows tracking projects, editing interactive task columns, viewing live simulated build logs, and monitoring telemetry stats.",
    tags: ["React", "Framer Motion", "PHP", "MySQL", "Tailwind CSS"],
    image: "/src/assets/images/dashboard_mockup_1784094719656.jpg",
    githubUrl: "https://github.com/arifxdev",
    liveUrl: "https://example.com",
    features: [
      "Kanban Task Board with drag-and-drop simulated actions",
      "Server Telemetry charts tracking simulated CPU, RAM, and network loads",
      "Active logs console demonstrating standard database operations (CRUD)",
      "Dark mode theme optimized for developer workstations"
    ]
  },
  {
    id: "proj3",
    title: "NovaPort - Premium Interactive Portfolio",
    category: "front-end",
    description: "A gorgeous, responsive developer portfolio showcasing interactive skill metrics, custom timelines, and theme selectors.",
    longDescription: "NovaPort is designed with fluid desktop-first precision and responsive mobile-first adapters. Every section includes entry micro-interactions and smooth layout adjustments using framer-motion.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery"],
    image: "https://picsum.photos/seed/novaport/800/450",
    githubUrl: "https://github.com/arifxdev",
    liveUrl: "https://example.com",
    features: [
      "Scroll-spy navigation bar with glassmorphic styling",
      "Staggered entry lists and interactive scale-up hover cards",
      "Integrated fully validated client inquiry forms",
      "Clean semantic markup optimized for accessibility and SEO"
    ]
  },
  {
    id: "proj4",
    title: "ApexAgency - Tailored WordPress Business Platform",
    category: "wordpress",
    description: "A custom-crafted corporate agency platform with advanced page-builder styling, optimized SEO, and custom forms.",
    longDescription: "This WordPress platform demonstrates advanced custom themes and layout design. Built using optimized blocks, Elementor integrations, custom PHP snippets for advanced post types, and speed tuning configurations.",
    tags: ["WordPress", "Elementor Pro", "PHP", "Custom CSS", "LiteSpeed"],
    image: "https://picsum.photos/seed/apexagency/800/450",
    githubUrl: "https://github.com/arifxdev",
    liveUrl: "https://example.com",
    features: [
      "Custom widgets and reusable responsive template headers/footers",
      "Custom CPTs (Custom Post Types) for Portfolio cases and team structures",
      "Advanced contact forms linked with interactive lead collectors",
      "95+ Google PageSpeed Optimization rating through asset minification"
    ]
  }
];
