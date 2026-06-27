import type { ContactType } from "@/data/contact";

import { getContact } from "@/service/api";
import { defineStore } from "pinia";

export const useContectStore = defineStore("storeContact", {
  state: () => ({
    contact: [] as ContactType[],
  }),

  actions: {
    async fetchContact() {
      if (this.contact.length > 0) return;

      try {
        const data = await getContact();
        this.contact = data;
      } catch (error) {
        console.error("Error en Store Contact:", error);
      }
    },
  },
});
