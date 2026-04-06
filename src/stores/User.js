import { defineStore } from "pinia";

export const dataStoreUser = defineStore("storeUser", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    authentication: JSON.parse(localStorage.getItem("active_session")) || false,
  }),

  actions: {
    authenticationUser(credentials) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === credentials.email &&
        storedUser.password === credentials.password
      ) {
        this.user = storedUser;
        this.authentication = true;
        localStorage.setItem("active_session", JSON.stringify(true));
        return true;
      }

      this.authentication = false;
      return false;
    },
    login(user){
      localStorage.setItem("user", JSON.stringify(user));
    },

    logout() {
      this.user = null;
      this.authentication = false;
      localStorage.removeItem("active_session");
    },
  },
});
