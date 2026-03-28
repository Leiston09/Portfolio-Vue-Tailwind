export const projects = [
  {
    id: 1,
    key: "portfolio",
    image: new URL("@/assets/img/gif/projectOne.gif", import.meta.url).href,
    technologies: ["Vue 3", "Tailwind CSS", "JavaScript", "Vue Router", "i18n", "Pinia"],
    github: "https://github.com/Leiston09/Portfolio-Vue-Tailwind.git",
    demo: "https://ephemeral-cajeta-33ad99.netlify.app/"
  },

  {
    id: 2,
    key:"pageAlex",
    image: new URL("@/assets/img/gif/projectTwo.gif", import.meta.url).href,
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL", "pgAdmin", "PHP"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo.com"
  },

];