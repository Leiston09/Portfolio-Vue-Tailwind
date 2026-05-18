import NotFuntions from "@/components/NotFuntions.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { dataStoreUser } from "@/stores/User";
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { routesLogin } from "./loginRouter";
import { routesMain } from "./mainRouter";

const routes: RouteRecordRaw[] = [
  routesMain,
  routesLogin,
  {
    path: "/:pathMatch(.*)*",
    component: NotFuntions,
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
            top: 80,
            behavior: "smooth",
          });
        }, 300);
      });
    }
    return { top: 0 };
  },
});

router.beforeEach(async (to) => {
  const storeUser = dataStoreUser();
  const storeCertifications = dataStoreCertification();
  
  if (to.name === "CertificationDetail") {
    if (storeCertifications.certifications.length === 0) {
      await storeCertifications.fetchCertifications();
    }

    const certId = Number(to.params.id);
    const targetCert = storeCertifications.certifications.find((c) => c.id === certId);

    if (!targetCert) {
      return { name: "Certifications" };
    }

    if (!targetCert.special && !storeUser.authentication) {
      return { name: "Certifications" };
    }
  }
});

export default router;