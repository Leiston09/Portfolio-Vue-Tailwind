import { getProfile } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreProfile = defineStore("storeProfile", {
  state: () => ({
    profile: {},
  }),

  actions: {
    async fetchProfile() {
      if (Object.keys(this.profile).length > 0) return;
      try {
        const data = await getProfile();
        this.profile = data;
      } catch (error) {
        console.error("Error en Store Profile:", error);
      }
    },
  },
});
