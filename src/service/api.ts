import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Certifications } from "@/data/certifications";
import { contact } from "@/data/contact";
import { Curriculum } from "@/data/curriculum";
import { profile } from "@/data/profile";

type ProjectsType = {
  id: number;
  special: boolean;
  key: string;
  year: number;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

type CertificationsType = {
  id: number;
  special: boolean;
  key: string;
  name: string;
  institution: string;
  image: string;
  pdf: string;
};

type ContactType = {
  id: number;
  name: string;
  url: string;
  icon: string;
  color: string;
  download?: boolean;
};

type curriculumType = {
  id: number;
  asset: boolean;
  name: string;
  image: string;
  download: string;
};

type profileType = {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};

type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

export const getProjects = (): Promise<ProjectsType[]> => {
  return new Promise<ProjectsType[]>((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 200);
  });
};
export const getSkills = (): Promise<SkillsTypes[]> => {
  return new Promise<SkillsTypes[]>((resolve) => {
    setTimeout(() => {
      resolve(skills);
    }, 200);
  });
};

export const getCertifications = (): Promise<CertificationsType[]> => {
  return new Promise<CertificationsType[]>((resolve) => {
    setTimeout(() => {
      resolve(Certifications);
    }, 200);
  });
};

export const getContact = (): Promise<ContactType[]> => {
  return new Promise<ContactType[]>((resolve) => {
    setTimeout(() => {
      resolve(contact);
    }, 200);
  });
};

export const getCurriculum = (): Promise<curriculumType[]> => {
  return new Promise<curriculumType[]>((resolve) => {
    setTimeout(() => {
      resolve(Curriculum);
    }, 200);
  });
};

export const getProfile = (): Promise<profileType> => {
  return new Promise<profileType>((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 200);
  });
};