import ViewCertificate from "@/components/Certifications/ViewCertificate.vue";

import NotFuntions from "@/components/NotFuntions.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import Access from "@/views/Access.vue";
import Certifications from "@/views/Certifications.vue";
import Home from "@/views/Home.vue";
import RecoverPassword from "@/views/RecoverPassword.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFuntions,
  },

  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        redirect: { name: "Home" },
      },
      {
        path: "Home",
        component: Home,
        name: "Home",
      },
      {
        path: "Certifications",
        name: "Certifications",
        component: Certifications,
        meta: { requiresValidation: true },
      },
      {
        path: "/Certifications/:id",
        name: "CertificationDetail",
        component: ViewCertificate,
        meta: { requiresValidation: true },
        props: true,
      },
    ],
  },

  {
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 64, // altura navbar
            behavior: "smooth",
          });
        }, 300); // tiempo para que cargue el Home
      });
    }
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresValidation) {
    console.log(to);
    if (to.name === "CertificationDetail") {
      let validate = localStorage.getItem("certificationId");
      let validated = JSON.parse(validate);

      if (!validate) {
        return { name: "Certifications" };
      }

      if (validated.id !== Number(to.params.id)) {
        return { name: "CertificationDetail", params: { id: validated.id } };
      }
    }
  }
});

export default router;
