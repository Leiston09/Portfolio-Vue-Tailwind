import { getContact } from "@/service/api";
import { defineStore } from "pinia";

type ContactType = {
  id: number;
  name: string;
  url: string;
  icon: string;
  color: string;
  download?: boolean;
};

export const dataStoreContact = defineStore("storeContact", {
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
