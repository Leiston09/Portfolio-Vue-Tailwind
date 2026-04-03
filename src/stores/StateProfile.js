import { getProfile } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreProfile = defineStore("dtoreProfile", {
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
        `Error en Store PROFILE: ${error}`
      }
    },
  },
});
