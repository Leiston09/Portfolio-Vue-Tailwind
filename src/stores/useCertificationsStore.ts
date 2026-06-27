import type { CertificationType } from "@/data/certifications";

import { getCertifications } from "@/service/api";
import { defineStore } from "pinia";




export const useCertificationsStore = defineStore("DataPortafolio", {
  state: () => ({
    certifications: [] as CertificationType[],
  }),

  actions: {
    async fetchCertifications() {
      if (this.certifications.length > 0) return;
      try {
        const data = await getCertifications();
        this.certifications = data;
      } catch (error) {
        console.error("Error cargando certificaciones:", error);
      } 
    },
  },
  getters: {},
});
