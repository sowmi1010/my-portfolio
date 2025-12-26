// src/data/skills.js
import java from "../assets/java.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.webp";
import mysql from "../assets/mysql.png";
import elixir from "../assets/elixir.png";
import phoenix from "../assets/phoenix.png";

const skills = [
  // ---------------- FRONTEND ----------------
  {
    name: "HTML",
    image: html,
    category: "Frontend",
    percent: 95,
    tags: ["HTML", "React", "Tailwind"],
    description: "Strong HTML structure knowledge, SEO-friendly tags, form handling, semantics, responsive layout scaffolding."
  },
  {
    name: "CSS",
    image: css,
    category: "Frontend",
    percent: 90,
    tags: ["CSS", "Flexbox", "Grid"],
    description: "Flexbox & Grid layouts, media queries, animations, responsive UI, positioning & modern layout techniques."
  },
  {
    name: "JavaScript",
    image: javascript,
    category: "Frontend",
    percent: 88,
    tags: ["JavaScript", "DOM", "ES6"],
    description: "Dynamic DOM interactions, async/await, JSON APIs, ES6 features, event-driven logic & reusable components."
  },
  {
    name: "React",
    image: react,
    category: "Frontend",
    percent: 92,
    tags: ["React", "Tailwind", "MongoDB"],
    description: "Hooks, state management, routing, reusable components, React Router, axios integration, SPA performance."
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
    category: "Frontend",
    percent: 94,
    tags: ["Tailwind", "Responsive"],
    description: "Rapid UI building, utility classes, responsive design patterns, component reusability, dark mode styling."
  },

  // ---------------- BACKEND ----------------
  {
    name: "Node.js",
    image: node,
    category: "Backend",
    percent: 86,
    tags: ["Node", "Express"],
    description: "Backend logic execution, REST API creation, server-side rendering, async non-blocking operations."
  },
  {
    name: "Express.js",
    image: express,
    category: "Backend",
    percent: 82,
    tags: ["Express", "Node"],
    description: "Routing, middleware, REST APIs, JWT auth, handling CRUD operations with MongoDB & MySQL."
  },
  {
    name: "Java",
    image: java,
    category: "Backend",
    percent: 70,
    tags: ["Java", "JDBC", "Spring Boot"],
    description: "Core Java OOP, JDBC connection to MySQL, basic Spring Boot REST APIs, console & mini-project development."
  },
  {
    name: "Python",
    image: python,
    category: "Backend",
    percent: 75,
    tags: ["Python", "Flask", "Django"],
    description: "Flask REST API basics, small Django MVC concepts, scripting, JSON file automation & data handling."
  },

  // ---------------- DATABASE ----------------
  {
    name: "MongoDB",
    image: mongodb,
    category: "Database",
    percent: 80,
    tags: ["Mongo", "React", "Node"],
    description: "Schema design using Mongoose, CRUD ops, aggregation pipelines, REST API integration, cloud Atlas hosting."
  },

  
  {
    name: "MySQL",
    image: mysql,
    category: "Database",
    percent: 78,
    tags: ["SQL", "Database"],
    description: "SQL queries, joins, stored procedures, relational schema design, JDBC + Express integration."
  },

  // ---------------- TOOLS ----------------
  {
    name: "Git",
    image: javascript,
    category: "Tools",
    percent: 65,
    tags: ["Git"],
    description: "Version control, project commits, branching, GitHub push, pull request basics, repo hosting & docs."
  },
  {
  name: "Elixir",
  image: elixir,
  category: "Backend",
  percent: 65,
  tags: ["Elixir", "Phoenix", "LiveView"],
  description: "Functional backend programming, fault-tolerant & high-concurrency apps on BEAM VM."
},
{
  name: "Phoenix Framework",
  image: phoenix,
  category: "Backend",
  percent: 62,
  tags: ["Phoenix", "LiveView", "REST"],
  description: "Phoenix MVC, LiveView interactive UI, scalable real-time backends for modern web apps."
},


  
];

export default skills;
