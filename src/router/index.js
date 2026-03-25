import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "@/views/Projects.vue";
import Certifications from "@/views/Certifications.vue";
import Skills from "@/views/Skills.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/projects",
    component: Projects,
    name: "Projects",
  },
  {
    path: '/certifications',
    component: Certifications,
    name: 'Certifications'
  },
    {
    path: "/skills",
    component: Skills,
    name: "Skills",
  }

];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
