import { getProfile } from "@/service/api";
import { defineStore } from "pinia";


type profileType = {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};

export const dataStoreProfile = defineStore("storeProfile", {

  state: () => ({
    profile: {} as profileType,
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
