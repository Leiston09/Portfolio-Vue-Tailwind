export type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

export const skills: SkillsTypes[] = [
  // frontend
  {
    id: 1,
    categoria: "frontend",
    nombre: "html",
    icono: "devicon-html5-plain colored",
  },
  {
    id: 2,
    categoria: "frontend",
    nombre: "css",
    icono: "devicon-css3-plain colored",
  },
  {
    id: 3,
    categoria: "frontend",
    nombre: "javascript",
    icono: "devicon-javascript-plain colored",
  },
  {
    id: 4,
    categoria: "frontend",
    nombre: "vue",
    icono: "devicon-vuejs-plain colored",
  },
  {
    id: 5,
    categoria: "frontend",
    nombre: "tailwind",
    icono: "devicon-tailwindcss-plain colored",
  },
  {
    id: 6,
    categoria: "frontend",
    nombre: "typescript",
    icono: "devicon-typescript-plain colored",
  },

  // backend
  {
    id: 7,
    categoria: "backend",
    nombre: "node",
    icono: "devicon-nodejs-plain colored",
  },
  {
    id: 8,
    categoria: "backend",
    nombre: "python",
    icono: "devicon-python-plain colored",
  },

  // database
  {
    id: 9,
    categoria: "database",
    nombre: "mongodb",
    icono: "devicon-mongodb-plain colored",
  },
  {
    id: 10,
    categoria: "database",
    nombre: "mysql",
    icono: "devicon-mysql-plain colored",
  },
  {
    id: 11,
    categoria: "database",
    nombre: "postgresql",
    icono: "devicon-postgresql-plain colored",
  },
  // design
  {
    id: 12,
    categoria: "design",
    nombre: "figma",
    icono: "devicon-figma-plain colored",
  },

  // tools
  {
    id: 13,
    categoria: "tools",
    nombre: "git",
    icono: "devicon-git-plain colored",
  },
  {
    id: 14,
    categoria: "tools",
    nombre: "github",
    icono: "devicon-github-original colored",
  },
  {
    id: 15,
    categoria: "tools",
    nombre: "vscode",
    icono: "devicon-vscode-plain colored",
  },
  /*
  {
    id: 16,
    categoria: "tools",
    nombre: "cursor",
    icono: "devicon-codepen-plain colored",
  },*/
  {
    id: 17,
    categoria: "tools",
    nombre: "xampp",
    icono: "devicon-apache-plain colored",
  },
  {
    id: 18,
    categoria: "tools",
    nombre: "netlify",
    icono: "devicon-netlify-plain colored",
  },
  
  /*
  {
    id: 19,
    categoria: "tools",
    nombre: "vercel",
    icono: "devicon-vercel-original",
  },
  */

  // additional
  {
    id: 20,
    categoria: "additional",
    nombre: "cybersecurity",
    icono: "devicon-ssh-original",
  },

  // Redes
  {
    id: 21,
    categoria: "additional",
    nombre: "networking",
    icono: "devicon-googlecloud-plain colored",
  },

  // Sistemas
  {
    id: 22,
    categoria: "additional",
    nombre: "linux",
    icono: "devicon-linux-plain colored",
  },
];
