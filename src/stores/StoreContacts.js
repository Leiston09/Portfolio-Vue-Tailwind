import { getContact } from "@/service/api";
import { defineStore } from "pinia";

export const dataStoreContact = defineStore("storeContact", {
  state: () => ({
    contact: [],
  }),

  actions: {
    async fetchContact() {
      if (this.contact.length > 0) return;
      
      try {
        let data = await getContact();
        this.contact = data
      } catch (error) {
        console.log(`Error en el Store CONTACT: ${error}`)
      }
    },
  },
});
