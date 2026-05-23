import { getCertifications } from "@/service/api";
import { defineStore } from "pinia";

type CertificationsType = {
  id: number;
  featured: boolean;
  key: string;
  institution: string;
  image: string;
  certificate: string;
  downloadable?: boolean;
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
