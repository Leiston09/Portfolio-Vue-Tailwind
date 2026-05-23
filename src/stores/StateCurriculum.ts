
import { getCurriculum } from "@/service/api";
import { defineStore } from "pinia";

type curriculumType = {
  id: number;
  asset: boolean;
  key: string;
  image: string;
  download: string;
};

export const dataStoreCurriculum = defineStore("storeCurriculum", {
  state: () => ({
    curriculum: [] as curriculumType[] ,
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
