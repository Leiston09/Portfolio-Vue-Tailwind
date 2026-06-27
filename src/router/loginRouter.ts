import { RouteRecordRaw } from "vue-router";

import AuthLayout from "@/layout/AuthLayout.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import Access from "@/views/Login.vue";
import RecoveryPassword from "@/views/RecoveryPassword.vue";

export const routesLogin : RouteRecordRaw = {
  path: "/login",
  component: AuthLayout,
  children: [
    {
      path: "",
      redirect: "/login/access",
    },
    {
      path: "access",
      name: "Access",
      component: Access,
    },
    {
      path: "recover-password",
      name: "RecoverPassword",
      component: RecoveryPassword,
    },
    {
      path: "register-user",
      component: RegisterUser,
      name: "RegisterUser",
    },
  ],
};
