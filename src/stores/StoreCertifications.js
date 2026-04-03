import { getCertifications } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreCertification = defineStore("DataPortafolio", {
  state: () => ({
    Certifications: [],
  }),

  actions: {
    async fetchCertifications() {
      if (this.Certifications.length > 0) return;
      try {
        const data = await getCertifications();
        this.Certifications = data;
      } catch (error) {
        console.error("Error cargando certificaciones:", error);
      } 
    },
  },
  getters: {},
});
