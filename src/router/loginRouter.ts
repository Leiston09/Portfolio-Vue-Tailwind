import { RouteRecordRaw } from "vue-router";

import AuthLayout from "@/layout/AuthLayout.vue";
import RecoverPassword from "@/views/RecoverPassword.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import Access from "@/views/Login.vue";

export const routesLogin : RouteRecordRaw = {
  path: "/Login",
  component: AuthLayout,
  children: [
    {
      path: "",
      redirect: { name: "Access" },
    },
    {
      path: "Access",
      name: "Access",
      component: Access,
    },
    {
      path: "Recover-Password",
      name: "RecoverPassword",
      component: RecoverPassword,
    },
    {
      path: "Register-User",
      component: RegisterUser,
      name: "RegisterUser",
    },
  ],
};
