import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/useUserStore";
import { useCertificationsStore } from "@/stores/useCertificationsStore";
import { routesLogin } from "./loginRouter";
import { routesMain } from "./mainRouter";
import NotFound from "@/components/NotFound.vue";

const routes: RouteRecordRaw[] = [
  routesMain,
  routesLogin,
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
  const storeUser = useUserStore();
  const storeCertifications = useCertificationsStore();
  
  if (to.meta.requiresValidation) { //*¿La ruta a donde quiere ir el usuario tiene la bandera (meta) "requiresValidation"?

    if (storeCertifications.certifications.length === 0) {
      await storeCertifications.fetchCertifications();  //*llamo a la función que trae TODAS las certificaciones desde el backend (API)
    }

    const certId = Number(to.params.id);  //*tomo el "id" de la certificación que el usuario quiere ver
    
    const targetCert = storeCertifications.certifications.find((c) => c.id === certId);

    if (!targetCert) {  //*Si NO existe ninguna certificación con ese ID (targetCert es falso/undefined)
      return { name: "Certifications" };
    }

    if (!targetCert.featured && !storeUser.authentication) { //*¿La certificación NO es destacada (featured: false)? || ¿el usuario NO está autenticado (authentication: false)?
      return { name: "Certifications" };
    }
  }

});

export default router;