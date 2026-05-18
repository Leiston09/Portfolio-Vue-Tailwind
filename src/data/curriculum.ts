type curriculumType = {
  id: number;
  asset: boolean;
  name: string;
  image: string;
  download: string;
};

export const Curriculum: curriculumType[] = [
  {
    id: 1,
    asset: false,
    name: "curriculumIngeniero",
    image: "/img/curriculum/CurrículumIng.jpg",
    download: "/pdf/Curriculum/CurriculumSistemasInformacion.pdf",
  },
  {
    id: 1,
    asset: true,
    name: "curriculumDeveloper",
    image: "/img/curriculum/Leiston-Holguin-CV.jpg",
    download: "/pdf/Curriculum/Leiston Holguin CV.pdf",
  },
];
