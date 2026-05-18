import type { RouteRecordRaw } from "vue-router";

import ViewCertificate from "@/components/Certifications/ViewCertificate.vue";

import MainLayout from "@/layout/MainLayout.vue";

import Certifications from "@/views/Certifications.vue";
import Curriculum from "@/views/Curriculum.vue";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";

export const routesMain: RouteRecordRaw = {
  path: "/",
  component: MainLayout,

  children: [
    {
      path: "",
      name: "Home",
      component: Home,
    },

    {
      path: "certifications",
      name: "Certifications",
      component: Certifications,
    },

    {
      path: "certifications/:id",
      name: "CertificationDetail",
      component: ViewCertificate,
      meta: { requiresValidation: true },
      props: true,
    },

    {
      path: "skills",
      name: "Skills",
      component: Skills,
    },

    {
      path: "curriculum",
      name: "Curriculum",
      component: Curriculum,
    },

    {
      path: "projects",
      name: "Projects",
      component: Projects,
    },
  ],
};