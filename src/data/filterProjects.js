// src/data/filterProjects.js
import projects from "./projects";

export const filterProjectsBySkill = (skillTags) => {
  return projects.filter((p) =>
    skillTags.some((tag) => p.tech.toLowerCase().includes(tag.toLowerCase()))
  );
};
