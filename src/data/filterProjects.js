// src/data/filterProjects.js
import projects from "./projects";

export const filterProjectsBySkill = (skillTags) => {
  if (!skillTags?.length) {
    return [];
  }

  return projects.filter((project) => {
    const normalizedTags = (project.tags || []).map((tag) => tag.toLowerCase());
    const techLine = project.tech?.toLowerCase() || "";

    return skillTags.some((skillTag) => {
      const normalizedSkill = skillTag.toLowerCase();
      return (
        normalizedTags.includes(normalizedSkill) || techLine.includes(normalizedSkill)
      );
    });
  });
};
