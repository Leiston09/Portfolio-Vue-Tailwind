import type { ProjectsType } from "@/data/projects";

import { getProjects } from "@/service/api";
import { defineStore } from "pinia";


export const useProjectsStore = defineStore("storeProjects", {
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
