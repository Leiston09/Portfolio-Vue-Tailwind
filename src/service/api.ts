import { projects, ProjectsType } from "@/data/projects";
import { skills, SkillsTypes } from "@/data/skills";
import { contact, ContactType } from "@/data/contact";
import { Curriculum, curriculumType } from "@/data/curriculum";
import { profile, ProfileType } from "@/data/profile";
import { certifications, Certification } from "@/data/certifications";
import { experiences, TypeExperience } from "@/data/experiences";

export const getProjects = (): Promise<ProjectsType[]> => {
  return new Promise<ProjectsType[]>((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 500);
  });
};

export const getSkills = (): Promise<SkillsTypes[]> => {
  return new Promise<SkillsTypes[]>((resolve) => {
    setTimeout(() => {
      resolve(skills);
    }, 500);
  });
};

export const getCertifications = (): Promise<Certification[]> => {
  return new Promise<Certification[]>((resolve) => {
    setTimeout(() => {
      resolve(certifications);
    }, 500);
  });
};

export const getContact = (): Promise<ContactType[]> => {
  return new Promise<ContactType[]>((resolve) => {
    setTimeout(() => {
      resolve(contact);
    }, 500);
  });
};

export const getCurriculum = (): Promise<curriculumType[]> => {
  return new Promise<curriculumType[]>((resolve) => {
    setTimeout(() => {
      resolve(Curriculum);
    }, 500);
  });
};

export const getProfile = (): Promise<ProfileType> => {
  return new Promise<ProfileType>((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 50);
  });
};

export const getExperience = (): Promise<TypeExperience[]> => {
  return new Promise<TypeExperience[]>((resolve) => {
    setTimeout(() => {
      resolve(experiences);
    }, 500);
  });
};
