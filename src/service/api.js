import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Certifications } from "@/data/certifications";
import { profile } from "@/data/profile";

export const getProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 200);
  });
};

export const getSkills = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skills);
    }, 200);
  });
};

export const getCertifications = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Certifications);
    }, 200);
  });
};

export const getProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 200);
  });
};
