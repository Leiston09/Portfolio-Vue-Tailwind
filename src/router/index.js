import ViewCertificate from "@/components/Certifications/ViewCertificate.vue";
import NotFuntions from "@/components/NotFuntions.vue";
import Certifications from "@/views/Certifications.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFuntions,
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/Certifications",
    name: "Certifications",
    component: Certifications,
    children:[
      { 
        path: ":id",
        name: "CertificationDetail",
        component: ViewCertificate ,
        meta: { requiresValidation: true},
        props: true,
      }
    ]

  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

router.beforeEach((to) => {

  if(to.meta.requiresValidation){
    console.log(to);
    if(to.name === "CertificationDetail"){   

      let validate = localStorage.getItem("certificationId");
      let validated = JSON.parse(validate);

      if(!validate){
        return { name: "Certifications" };
      }

      if(validated.id !== Number(to.params.id)){
        return { name: "CertificationDetail", params: { id: validated.id } };
      }

  }
}});

export default router;
