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

const skills = [
  { name: "Java", image: java, description: "Experienced with OOP, Spring Boot, REST." },
  { name: "Python", image: python, description: "Flask, scripting, automation skills." },
  { name: "HTML", image: html, description: "Semantic, SEO-friendly markup." },
  { name: "CSS", image: css, description: "Responsive, Flexbox, Grid layouts." },
  { name: "Tailwind CSS", image: tailwind, description: "Utility-first framework for rapid design." },
  { name: "JavaScript", image: javascript, description: "ES6+, async, DOM manipulation." },
  { name: "React", image: react, description: "Hooks, state management, SPA architecture." },
  { name: "Express.js", image: express, description: "Node.js routing and middleware." },
  { name: "Node.js", image: node, description: "Server-side JS, event-driven." },
  { name: "MongoDB", image: mongodb, description: "NoSQL document database." },
  { name: "MySQL", image: mysql, description: "Relational SQL databases." },
];

export default skills;
