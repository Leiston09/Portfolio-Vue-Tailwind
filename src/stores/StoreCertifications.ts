import { getCertifications } from "@/service/api";
import { defineStore } from "pinia";

type CertificationsType = {
  id: number;
  special: boolean;
  key: string;
  name: string;
  institution: string;
  image: string;
  pdf: string;
};


export const dataStoreCertification = defineStore("DataPortafolio", {
  state: () => ({
    certifications: [] as CertificationsType[],
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
