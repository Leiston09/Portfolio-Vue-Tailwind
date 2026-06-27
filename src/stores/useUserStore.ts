import { defineStore } from "pinia";
import type { CredentialsType, StateType, UserType } from '@/types';

export const useUserStore = defineStore("user", {
  state: (): StateType => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    authentication: JSON.parse(localStorage.getItem("active_session") || "false"),
  }),

  actions: {

    authenticate(credentials: CredentialsType): boolean {
      const storedUser: UserType | null = JSON.parse(
        localStorage.getItem("user") || "null"
      );

      if (!storedUser) return false;

      const isValid = 
        storedUser.email === credentials.email &&
        storedUser.password === credentials.password;

      if (isValid) {        
        this.authentication = true
        this.user = storedUser;
        localStorage.setItem("active_session", "true");
        return true;
      }

      return false;
    },


    login(user: UserType): void {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },


    logout(): void {
      this.user = null;
      this.authentication = false;
      localStorage.removeItem("active_session");
      //localStorage.removeItem("user"); 
    },


    isAuthenticated(): boolean {
      return this.authentication && !!this.user;
    },
    
  },

  getters: {
    userName: (state) => state.user?.name || "Invitado",
    userEmail: (state) => state.user?.email || "",
  },
});