import type { RouteRecordRaw } from "vue-router";

export const routesMain: RouteRecordRaw = {
  path: "/",
  component: () => import("@/layout/MainLayout.vue"),
  children: [
    {
      path: "",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "certifications",
      name: "Certifications",
      component: () => import("@/views/Certifications.vue"),
    },
    {
      path: "certifications/:id",
      name: "CertificationDetail",
      component: () => import("@/components/Certifications/ViewCertificate.vue"),
      props: true,
    },
    {
      path: "skills",
      name: "Skills",
      component: () => import("@/views/Skills.vue"),
    },
    {
      path: "resume",
      name: "Resume",
      component: () => import("@/views/Resume.vue"),
    },
    {
      path: "projects",
      name: "Projects",
      component: () => import("@/views/Projects.vue"),
    },
  ],
};