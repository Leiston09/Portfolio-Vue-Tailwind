import { projects, ProjectsType } from "@/data/projects";
import { skills, SkillsTypes } from "@/data/skills";
import { contact, ContactType } from "@/data/contact";
import { Curriculum, curriculumType } from "@/data/curriculum";
import { profile, profileType } from "@/data/profile";
import { certifications, CertificationType } from "@/data/certifications";

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

export const getCertifications = (): Promise<CertificationType[]> => {
  return new Promise<CertificationType[]>((resolve) => {
    setTimeout(() => {
      resolve(certifications);
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
