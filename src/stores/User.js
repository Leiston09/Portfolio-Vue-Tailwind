import { defineStore } from "pinia";

export const dataStoreUser = defineStore("storeUser", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    authentication: JSON.parse(localStorage.getItem("active_session")) || false,
  }),

  actions: {
    authenticationUser(credentials) {
      const isMatch = this.user && 
                      this.user.email === credentials.email && 
                      this.user.password === credentials.password;

      if (isMatch) {
        this.authentication = true;
        localStorage.setItem("active_session", JSON.stringify(true));
        return true;
      }
      
      this.authentication = false;
      return false;
    },

    login(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    logout() {
      this.user = null;
      this.authentication = false;
      localStorage.removeItem("active_session");
    },
  },
});