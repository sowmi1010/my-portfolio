import java from "../assets/java.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.webp";
import mysql from "../assets/mysql.png";
import dart from "../assets/dart.png";
import flutter from "../assets/flutter.png";
import phoenix from "../assets/phoenix.png";

const skills = [
  {
    name: "React.js",
    image: react,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["React", "Hooks", "Router", "State Management", "Reusable Components"],
    description: "Build reusable UI components, handle routing, and manage state for scalable single-page applications.",
  },
  {
    name: "Node.js",
    image: node,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["Node.js", "Express", "REST API", "JWT", "Middleware"],
    description: "Develop backend services and asynchronous workflows for production-ready web applications.",
  },
  {
    name: "Express.js",
    image: express,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["Express", "Routing", "Middleware", "Auth", "Error Handling"],
    description: "Design secure REST APIs with middleware, routing, and structured controller architecture.",
  },
  {
    name: "MongoDB",
    image: mongodb,
    category: "Primary Skills",
    proficiency: "Comfortable",
    tags: ["MongoDB", "Mongoose", "CRUD", "Aggregation", "Schema Design"],
    description: "Model document data with Mongoose, implement CRUD flows, and optimize common database queries.",
  },
  {
    name: "JavaScript",
    image: javascript,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["JavaScript", "ES6+", "Async/Await", "DOM", "Array Methods"],
    description: "Write clean modern JavaScript for client logic, API integration, and component behavior.",
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["Tailwind", "Responsive Design", "Utility Classes", "Design System"],
    description: "Develop fast, consistent UIs with utility-first patterns and reusable component styles.",
  },
  {
    name: "REST APIs",
    image: express,
    category: "Primary Skills",
    proficiency: "Strong",
    tags: ["REST API", "CRUD Endpoints", "Validation", "Authentication", "Status Codes"],
    description: "Design and integrate robust API endpoints with authentication, validation, and clean request flows.",
  },
  {
    name: "Git/GitHub",
    image: javascript,
    category: "Primary Skills",
    proficiency: "Comfortable",
    tags: ["Git", "GitHub", "Version Control", "Branching", "Pull Requests"],
    description: "Manage feature branches, pull requests, and clean commit history for collaborative development.",
  },
  {
    name: "MySQL",
    image: mysql,
    category: "Secondary Skills",
    proficiency: "Comfortable",
    tags: ["SQL", "Relational Schema", "Joins", "Query Optimization"],
    description: "Work with relational models, joins, and reporting queries for structured application data.",
  },
  {
    name: "Java",
    image: java,
    category: "Secondary Skills",
    proficiency: "Familiar",
    tags: ["Java", "OOP", "Spring Boot", "Collections"],
    description: "Apply Java fundamentals and build basic backend services using object-oriented design.",
  },
  {
    name: "Python",
    image: python,
    category: "Secondary Skills",
    proficiency: "Familiar",
    tags: ["Python", "Flask", "Automation", "Scripting"],
    description: "Use Python for scripting, API prototypes, and workflow automation tasks.",
  },
  {
    name: "Flutter",
    image: flutter,
    category: "Secondary Skills",
    proficiency: "Comfortable",
    tags: ["Flutter", "Widgets", "State Management", "Responsive UI"],
    description: "Build cross-platform mobile interfaces with reusable widgets and practical UX flows.",
  },
  {
    name: "Dart",
    image: dart,
    category: "Secondary Skills",
    proficiency: "Familiar",
    tags: ["Dart", "OOP", "Async", "Futures"],
    description: "Use Dart fundamentals to structure maintainable mobile app code and async logic.",
  },
  {
    name: "Phoenix",
    image: phoenix,
    category: "Secondary Skills",
    proficiency: "Familiar",
    tags: ["Phoenix", "LiveView", "Elixir", "Realtime Features"],
    description: "Build real-time web interfaces and backend workflows using Phoenix Framework and LiveView.",
  },
];

export default skills;
