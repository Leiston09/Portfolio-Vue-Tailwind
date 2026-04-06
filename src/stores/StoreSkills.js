import { getSkills } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreSkills = defineStore("dataStills", {
  state: () => ({
    skills: [],
  }),

  actions: {
    async fetchSkills() {
      if (this.skills.length > 0) return;

      try {
        let data = await getSkills();
        this.skills = data;
        return;
      } catch (error) {
        console.log(`Error en Store SKILLS: `, error)
      }
    },
  },
});
