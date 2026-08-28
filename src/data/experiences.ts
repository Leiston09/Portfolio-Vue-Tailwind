export type TypeExperience = {
  status?: boolean;
  key: string;
  period: string;
  image: string;
};

export const experiences: TypeExperience[] = [
  {
    status: true,
    key: "peluqueria",
    period: "2026",
    image: "/img/experience/peluqueria.png",
  },
  {
    key: "psicologia",
    period: "2026",
    image: "/img/experience/portafolio.png",
  },
  {
    key: "logistica",
    period: "2025",
    image: "/img/experience/remote.png",
  },
];
