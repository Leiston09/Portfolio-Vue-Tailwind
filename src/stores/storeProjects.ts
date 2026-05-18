import { getProjects } from "@/service/api";
import { defineStore } from "pinia";

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


export const dataStoreProjects = defineStore("storeProjects", {
  state: () => ({
    projects: [] as ProjectsType[],
  }),

  actions: {
    async fetchProjects() {
      if (this.projects.length > 0) return;

      try {
        let data = await getProjects();
        this.projects = data;
      } catch (error) {
        console.log(`Error en Store PROJECTS: `, error);
      }
    },
  },
});
