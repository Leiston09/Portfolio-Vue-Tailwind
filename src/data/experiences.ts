export type TypeExperience = {
  status?: boolean;
  key: string;
  period: string;
  image: string;
};

export const experiences: TypeExperience[] = [
  {
    status: false,
    key: "psicologia",
    period: "2026",
    image: "/img/experience/portafolio.png",
  },
  {
    status: false,
    key: "logistica",
    period: "2025",
    image: "/img/experience/remote.png",
  },
];
