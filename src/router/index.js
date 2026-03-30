import ViewCertificate from "@/components/Certifications/ViewCertificate.vue";
import NotFuntions from "@/components/NotFuntions.vue";
import Certifications from "@/views/Certifications.vue";
import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFuntions,
  },
  {
    path: "/",
    component: Main,
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
  {
    path: "/Login",
    component: Login,
    name: "Login",
  }
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
