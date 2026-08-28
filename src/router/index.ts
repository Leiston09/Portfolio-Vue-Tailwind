import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routesMain } from "./mainRouter";
import NotFound from "@/components/NotFound.vue";

const routes: RouteRecordRaw[] = [
  routesMain,
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
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
            top: 75,
            behavior: "smooth",
          });
        }, 300);
      });
    }
    return { top: 0 };
  },
});

export default router;