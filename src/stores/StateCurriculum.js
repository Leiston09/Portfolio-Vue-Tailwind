import { getCurriculum } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreCurriculum = defineStore("storeCurriculum", {
  state: () => ({
    curriculum: [],
  }),
  actions: {
    async fetchCurriculum() {
      if (this.curriculum.length > 0) return;

      try {
        let data = await getCurriculum();
        this.curriculum = data;
      } catch (error) {
        console.error("Error en Store CURRICULUM:", error);
      }
    },
  },
});
