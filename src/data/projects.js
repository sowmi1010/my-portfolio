import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";
import project10 from "../assets/project10.webp";
import project11 from "../assets/project11.webp";
import project12 from "../assets/project12.webp";

const projects = [
  {
    title: "Quest Workflow Platform",
    desc: "Task and quest management platform with role-based dashboards, progress tracking, and status workflows.",
    impact: "Improves team visibility for daily execution and task completion.",
    link: "https://github.com/sowmi1010/quest_technology",
    github: "https://github.com/sowmi1010/quest_technology",
    liveDemo: "https://quest-technology.questtech08.workers.dev/",
    caseStudy: {
      overview:
        "A MERN workflow platform built to manage tasks with role-based visibility and execution tracking.",
      problem:
        "Teams were tracking work across disconnected tools, which made ownership and progress difficult to monitor.",
      features: [
        "Task and quest creation with status-based workflow",
        "Role-specific dashboards for different user types",
        "Search, filter, and prioritization controls",
        "Progress views for day-to-day execution tracking",
      ],
      adminFeatures: [
        "User and role management",
        "Task assignment and workflow control",
        "Dashboard-level progress monitoring",
        "Operational reporting views",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      challenges: [
        "Keeping dashboard metrics in sync with frequent status updates",
        "Designing clear permission boundaries for role-based actions",
      ],
      myRole:
        "I handled full-stack implementation: UI architecture, API design, MongoDB models, authentication, and deployment support.",
      outcome:
        "Delivered a workflow-driven system that improved task visibility and reduced coordination gaps for daily operations.",
    },
    tech: "React, Node.js, Express.js, MongoDB",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    focus: "MERN",
    featured: true,
    showcase: true,
    projectType: "Freelance Live Project",
    image: project12,
  },
  {
    title: "MERN E-Learning Platform",
    desc: "Full-stack course platform with authentication, enrollment, progress tracking, and admin controls.",
    impact: "Supports both learners and admins in one workflow-driven system.",
    link: "https://github.com/sowmi1010/MEARN-ELEARN",
    github: "https://github.com/sowmi1010/MEARN-ELEARN",
    liveDemo: null,
    caseStudy: {
      overview:
        "A full-stack learning platform that supports student learning workflows and admin course management in one system.",
      problem:
        "The training process needed a centralized product for course delivery, learner progress tracking, and operational control.",
      features: [
        "Course catalog and enrollment flow",
        "Learner progress tracking per course/module",
        "Authentication and role-based access",
        "Dashboard views for students and administrators",
      ],
      adminFeatures: [
        "Course creation, update, and publish management",
        "Enrollment and learner oversight",
        "Progress and activity monitoring",
        "Content lifecycle management",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      challenges: [
        "Designing a clean learner journey while preserving admin-level controls",
        "Maintaining consistent progress state across frontend and backend",
      ],
      myRole:
        "I built core frontend screens, backend APIs, authentication flow, and data models, then supported integration and testing.",
      outcome:
        "Created a usable training product that streamlined learning delivery and improved visibility for both learners and admins.",
    },
    tech: "React, Node.js, Express.js, MongoDB, Tailwind",
    tags: ["React", "Node.js", "Express", "MongoDB", "Auth", "Dashboard"],
    focus: "MERN",
    featured: true,
    showcase: true,
    projectType: "Training Delivery Project",
    image: project8,
  },
  {
    title: "Photo Gallery MERN App",
    desc: "Google Photos-inspired app to upload, favorite, download, and manage media with a REST API backend.",
    impact: "Delivers complete CRUD media workflow with responsive UI.",
    link: "https://github.com/sowmi1010/My-Photo-Gallery-MERN-Stack-App",
    github: "https://github.com/sowmi1010/My-Photo-Gallery-MERN-Stack-App",
    liveDemo: null,
    caseStudy: null,
    tech: "React, Express.js, Node.js, MongoDB, Tailwind",
    tags: ["React", "Node.js", "Express", "MongoDB", "CRUD", "Masonry UI"],
    focus: "MERN",
    featured: false,
    showcase: true,
    projectType: "Product Build",
    image: project2,
  },
  {
    title: "Sowron Interiors Platform",
    desc: "Business website and inquiry flow for residential/commercial interior design services.",
    impact: "Helps convert visitors into leads with clear service presentation.",
    link: "https://github.com/sowmi1010/sowron-interiors-fullstack",
    github: "https://github.com/sowmi1010/sowron-interiors-fullstack",
    liveDemo: "https://sowron.com/",
    caseStudy: {
      overview:
        "A client-facing business platform focused on service storytelling, project showcase, and inquiry-to-lead conversion.",
      problem:
        "The business needed a modern web presence that could clearly present services and convert visitors into qualified leads.",
      features: [
        "Service-focused landing and content sections",
        "Project gallery for residential and commercial work",
        "Responsive inquiry form and contact flow",
        "Mobile-first performance across major viewports",
      ],
      adminFeatures: [
        "Lead and inquiry monitoring workflow",
        "Content update support for service/project sections",
        "Form pipeline visibility for follow-up",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      challenges: [
        "Balancing design-heavy pages with load performance",
        "Ensuring reliable inquiry capture and validation across devices",
      ],
      myRole:
        "I implemented full-stack development for key pages, lead capture APIs, responsive UI behavior, and deployment support.",
      outcome:
        "Delivered a production business website that improved brand presentation and made lead generation more actionable.",
    },
    tech: "React, Tailwind, Node.js, Express.js, MongoDB",
    tags: ["React", "Node.js", "Express", "MongoDB", "Lead Form"],
    focus: "MERN",
    featured: true,
    showcase: true,
    projectType: "Freelance Live Project",
    image: project7,
  },
  {
    title: "MyDocs Document Manager",
    desc: "Simple document manager to upload and organize files with secure API flows.",
    impact: "Centralizes file handling and document discovery for users.",
    link: "https://github.com/sowmi1010/Course",
    github: "https://github.com/sowmi1010/Course",
    liveDemo: null,
    caseStudy: null,
    tech: "React, Node.js, Express.js, MongoDB",
    tags: ["React", "Node.js", "Express", "MongoDB", "File Upload"],
    focus: "MERN",
    featured: false,
    showcase: true,
    projectType: "Product Build",
    image: project6,
  },
  {
    title: "React Portfolio Website",
    desc: "Animated personal portfolio focused on projects, skills, and developer branding.",
    impact: "Showcases frontend storytelling and interaction design.",
    link: "https://github.com/sowmi1010/my-portfolio",
    tech: "React, Tailwind",
    tags: ["React", "Tailwind", "Framer Motion"],
    focus: "Frontend",
    featured: false,
    showcase: false,
    image: project3,
  },
  {
    title: "InstaClone Social App",
    desc: "Instagram-style social platform with posts, likes, comments, and follow workflows.",
    impact: "Implements social graph features and feed interactions end to end.",
    link: "https://github.com/sowmi1010/instaclone-django-react",
    github: "https://github.com/sowmi1010/instaclone-django-react",
    liveDemo: null,
    caseStudy: null,
    tech: "Django, Django REST Framework, React, JWT",
    tags: ["Django", "React", "JWT", "Social Feed"],
    focus: "Full Stack",
    featured: false,
    showcase: true,
    projectType: "Full-Stack Build",
    image: project9,
  },
  {
    title: "HappyScoops Ordering App",
    desc: "Interactive ice cream ordering UI with topping customization and pricing breakdown.",
    impact: "Demonstrates product-style frontend interactions and UX thinking.",
    link: "https://github.com/sowmi1010/HappyScoops.git",
    tech: "React, Tailwind",
    tags: ["React", "Tailwind", "State Management"],
    focus: "Frontend",
    featured: false,
    showcase: false,
    image: project5,
  },
  {
    title: "Smart Contact Mobile App",
    desc: "Contact management app with search and interaction flows for mobile users.",
    impact: "Builds practical CRUD UX patterns in mobile context.",
    link: "https://github.com/sowmi1010/contactapp",
    tech: "Flutter, Dart",
    tags: ["Flutter", "Dart", "Mobile"],
    focus: "Mobile",
    featured: false,
    showcase: false,
    image: project4,
  },
  {
    title: "Smart Attendance App",
    desc: "Attendance tracker for recording daily status and visualizing present/absent trends.",
    impact: "Improves day-level monitoring with lightweight reporting.",
    link: "https://github.com/sowmi1010/smart_attendance_app",
    tech: "Flutter, Dart",
    tags: ["Flutter", "Dart", "Analytics"],
    focus: "Mobile",
    featured: false,
    showcase: false,
    image: project10,
  },
  {
    title: "AI Expense Tracker",
    desc: "Expense tracking app with category insights and budget monitoring.",
    impact: "Supports better personal finance tracking with AI-assisted insights.",
    link: "https://github.com/sowmi1010/ai_expense_scanner",
    tech: "Flutter, Dart",
    tags: ["Flutter", "Dart", "AI", "Budgeting"],
    focus: "Mobile",
    featured: false,
    showcase: false,
    image: project11,
  },
  {
    title: "Client Dashboard Prototype",
    desc: "Dashboard concept exploring reusable cards, charts, and data-first layout patterns.",
    impact: "Serves as UI pattern library reference for future admin builds.",
    link: "https://github.com/sowmi1010/quest_technology",
    tech: "React, Tailwind",
    tags: ["React", "Tailwind", "Dashboard"],
    focus: "Frontend",
    featured: false,
    showcase: false,
    image: project1,
  },
];

export default projects;
