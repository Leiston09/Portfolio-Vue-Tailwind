export type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

export const skills: SkillsTypes[] = [
  // ── FRONTEND ──
  { id: 1,  categoria: "frontend", nombre: "html",        icono: "logos:html-5" },
  { id: 2,  categoria: "frontend", nombre: "css",         icono: "logos:css-3" },
  { id: 3,  categoria: "frontend", nombre: "javascript",  icono: "logos:javascript" },
  { id: 4,  categoria: "frontend", nombre: "typescript",  icono: "logos:typescript-icon" },
  { id: 5,  categoria: "frontend", nombre: "vuejs",       icono: "logos:vue" },
  { id: 6,  categoria: "frontend", nombre: "tailwindcss", icono: "logos:tailwindcss-icon" },
  { id: 7,  categoria: "frontend", nombre: "vite",        icono: "logos:vitejs" },
  { id: 8,  categoria: "frontend", nombre: "axios",       icono: "logos:axios" },
  { id: 9,  categoria: "frontend", nombre: "gsap",        icono: "logos:gsap" },
  { id: 10, categoria: "frontend", nombre: "vuerouter",   icono: "logos:vue" },
  { id: 11, categoria: "frontend", nombre: "pinia",       icono: "logos:pinia" },
  { id: 12, categoria: "frontend", nombre: "vuei18n",     icono: "mdi:translate" },

  // ── BACKEND ──
  { id: 13, categoria: "backend", nombre: "nodejs",       icono: "logos:nodejs-icon" },
  { id: 14, categoria: "backend", nombre: "express",      icono: "logos:express" },
  { id: 15, categoria: "backend", nombre: "python",       icono: "logos:python" },
  { id: 16, categoria: "backend", nombre: "mongoose",     icono: "mdi:database" },
  { id: 17, categoria: "backend", nombre: "jwt",          icono: "logos:jwt-icon" },
  { id: 18, categoria: "backend", nombre: "bcrypt",       icono: "mdi:lock" },
  { id: 19, categoria: "backend", nombre: "restApi",      icono: "mdi:api" },

  // ── BASES DE DATOS ──
  { id: 20, categoria: "databases", nombre: "mongodb",    icono: "logos:mongodb-icon" },
  { id: 21, categoria: "databases", nombre: "postgresql", icono: "logos:postgresql" },
  { id: 22, categoria: "databases", nombre: "mysql",      icono: "logos:mysql" },

  // ── SERVICIOS Y APIs ──
  { id: 23, categoria: "services", nombre: "groq",            icono: "mdi:robot" },
  { id: 24, categoria: "services", nombre: "brevo",           icono: "mdi:email" },
  { id: 25, categoria: "services", nombre: "netlifyfunctions", icono: "logos:netlify" },
  { id: 26, categoria: "services", nombre: "postman",         icono: "logos:postman-icon" },

  // ── HERRAMIENTAS ──
  { id: 27, categoria: "tools", nombre: "git",     icono: "logos:git-icon" },
  { id: 28, categoria: "tools", nombre: "github",  icono: "logos:github-icon" },
  { id: 29, categoria: "tools", nombre: "netlify", icono: "logos:netlify" },
  { id: 30, categoria: "tools", nombre: "render",  icono: "mdi:cloud" },
  { id: 31, categoria: "tools", nombre: "figma",   icono: "logos:figma" },

  // ── COMPLEMENTOS ──
  { id: 32, categoria: "additional", nombre: "cybersecurity", icono: "mdi:shield-lock" },
  { id: 33, categoria: "additional", nombre: "networks",      icono: "mdi:lan" },

  // ── SISTEMAS ──
  { id: 34, categoria: "systems", nombre: "linux",   icono: "logos:linux-tux" },
  { id: 35, categoria: "systems", nombre: "windows", icono: "logos:microsoft-windows-icon" },
];