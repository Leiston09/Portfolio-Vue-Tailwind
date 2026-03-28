import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/Certifications",
    name: "Certifications",
    component: () => import("@/views/Certifications.vue"),
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }
    return { top: 0 };
  },
});

export default route;
