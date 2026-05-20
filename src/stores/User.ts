import { defineStore } from "pinia";

type UserType = {
  name: string;
  lastName: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
};

type CredentialsType = {
  email: string;
  password: string;
};

type StateType = {
  user: UserType | null;
  authentication: boolean;
};

export const dataStoreUser = defineStore("storeUser", {
  state: (): StateType => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    authentication: JSON.parse(
      localStorage.getItem("active_session") || "false",
    ),
  }),

  actions: {
    authenticationUser(
      credentials: CredentialsType,
    ): boolean {
      const storedUser: UserType | null = JSON.parse(
        localStorage.getItem("user") || "null",
      );

      if (
        storedUser &&
        storedUser.email === credentials.email &&
        storedUser.password === credentials.password
      ) {
        this.user = storedUser;
        this.authentication = true;

        localStorage.setItem(
          "active_session",
          JSON.stringify(true),
        );

        return true;
      }

      this.authentication = false;

      return false;
    },

    login(user: UserType): void {
      localStorage.setItem(
        "user",
        JSON.stringify(user),
      );
    },

    logout(): void {
      this.user = null;
      this.authentication = false;

      localStorage.removeItem("active_session");
    },
  },
});