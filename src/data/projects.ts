type ProjectsType = {
  id: number;
  special: boolean;
  key: string;
  year: number;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    special: true,
    key: "portfolio",
    year: 2026,
    image: "/img/gif/Projects/portafolio.gif",
    technologies: [
      "Vue 3",
      "Tailwind CSS",
      "JavaScript",
      "Vue Router",
      "i18n",
      "Pinia",
      "IA",
    ],
    github: "https://github.com/Leiston09/Portfolio-Vue-Tailwind.git",
    demo: "https://ephemeral-cajeta-33ad99.netlify.app/",
  },

  {
    id: 2,
    special: true,
    key: "guitarra",
    year: 2026,
    image: "/img/gif/Projects/ProjectThree.gif",
    technologies: ["Vue 3", "Tailwind CSS", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Leiston09/Guitarra-Carrito-Compras-en-Vue.git",
    demo: "https://guitarras-carrito.netlify.app/",
  },
  {
    id: 3,
    special: true,
    key: "administrarPacientes",
    year: 2025,
    image: "/img/gif/Projects/ProjectFour.png",
    technologies: ["HTML", "CSS", "JavaScript", "VUE 3", "Tailwind CSS"],
    github: "",
    demo: "https://administrar-pacientes-lh.netlify.app/",
  },
  {
    id: 4,
    special: false,
    key: "listadoUsuarios",
    year: 2025,
    image: "/img/gif/Projects/ProjectFive.png",
    technologies: ["HTML", "CSS", "JavaScript", "VUE 3", "Tailwind CSS"],
    github: "",
    demo: "https://listado-de-usuarios.netlify.app/",
  },
  {
    id: 5,
    special: false,
    key: "uitoky",
    year: 2024,
    image: "/img/gif/Projects/ProjectTwo.gif",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "pgAdmin",
      "PHP",
      "IA",
    ],
    github: "",
    demo: "https://uitoky-project.netlify.app/",
  },
];
