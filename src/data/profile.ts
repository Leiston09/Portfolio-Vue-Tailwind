export type ProfileType = {
  firstName: string;
  lastName: string;
  shortName: string;
  email: string;
  age: number;
  image: {
    profile: string;
    navbar: string;
    testimonials: string;
  };
  areas: string[];
  testimonials: string;
  workStyle: string[];
};

export const profile: ProfileType = {
  firstName: "Leiston Alexander",
  lastName: "Holguin Aguirre",
  shortName: "Leiston Holguin",
  email: "leiston09holguin@gmail.com",
  age: 20,
  image: {
    profile: "/img/profile.jpg",
    navbar: "/img/FotoPerfil1.jpg",
    testimonials: "/testimonials/testimonio-linkedin.png",
  },
  areas: [
    "frontend",
    "backend",
    "databases",
    "apis",
    "networks",
    "cybersecurity",
  ],
  testimonials: "https://lnkd.in/p/ea5TQzKX",
  workStyle: ["learning", "resolution", "communication"],
};
