export type ProjectsType = {
  id: number;
  special: boolean;
  key: string;
  year: number;
  image: string;
  technologies: string[];
  showDetails?: boolean;
  github?: string;
  demo?: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    special: true,
    key: "portfolio",
    year: 2026,
    image: "/img/Projects/image.png",
    technologies: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Pinia",
      "Vue Router",
      "Vue I18n",
      "Groq API",
      "Netlify Functions",
      "Git",
      "GitHub",
      "IA"
    ],
    showDetails: false,
    github: "https://github.com/Leiston09/Portfolio-Vue-Tailwind.git",
    demo: "https://ephemeral-cajeta-33ad99.netlify.app/",
  },
  {
    id: 2,
    special: true,
    key: "sistemaPeluqueria",
    year: 2026,
    image: "/img/Projects/peluqueria.png",
    technologies: [
      "Vue 3",
      "Tailwind CSS",
      "Pinia",
      "Vue Router",
      "Node.js",
      "Express",
      "Postman",
      "MongoDB",
      "JWT",
      "REST API",
      "Nodemailer",
    ],
    showDetails: false,
    github: "https://github.com/Leiston09/Barber-shop-platform.git",
    demo: "https://peluqueriajh.netlify.app//",
  },
  {
    id: 3,
    special: false,
    key: "portafolioPsicologia",
    year: 2026,
    image: "/img/Projects/portafolioaquiles.gif",
    technologies: [
      "Vue 3",
      "Tailwind CSS",
      "TypeScript",
      "CSS",
      "Pinia",
      "Vue Router",
      "Vue I18n",
    ],
    showDetails: false,
    demo: "https://aquilesarrieta.com/",
  },
  {
    id: 4,
    special: false,
    key: "guitarra",
    year: 2026,
    image: "/img/Projects/guitarras.gif",
    technologies: [
      "Vue 3",
      "Tailwind CSS",
      "JavaScript",
      "CSS",
      "GitHub",
    ],
    showDetails: false,
    github: "https://github.com/Leiston09/Guitarra-Carrito-Compras-en-Vue.git",
    demo: "https://leiston-holguin.com/",
  },
  {
    id: 5,
    special: false,
    key: "administrarPacientes",
    year: 2025,
    image: "/img/Projects/ProjectFour.png",
    technologies: [ "CSS", "JavaScript", "VUE 3", "Tailwind CSS"],
    showDetails: false,
    demo: "https://administrar-pacientes-lh.netlify.app/",
  },
  {
    id: 6,
    special: false,
    key: "listadoUsuarios",
    year: 2025,
    image: "/img/Projects/ProjectFive.png",
    technologies: ["HTML", "CSS", "JavaScript", "VUE 3", "Tailwind CSS"],
    showDetails: false,
    demo: "https://listado-de-usuarios.netlify.app/",
  },
  {
    id: 7,
    special: true,
    key: "uitoky",
    year: 2024,
    image: "/img/Projects/ProjectTwo.gif",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "pgAdmin",
      "PHP",
      "IA",
    ],
    showDetails: false,
    demo: "https://uitoky-project.netlify.app/",
  },
];
