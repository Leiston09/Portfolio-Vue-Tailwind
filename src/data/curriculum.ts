type curriculumType = {
  id: number;
  asset: boolean;
  key: string;
  image: string;
  download: string;
};

export const Curriculum: curriculumType[] = [
    {
    id: 1,
    asset: true,
    key: "frontendDeveloper",
    image: "/img/curriculum/Leiston-Holguin-CV.jpg",
    download: "/pdf/Curriculum/Leiston Holguin CV.pdf",
  },
  {
    id: 2,
    asset: false,
    key: "systemsEngineeringStudent",
    image: "/img/curriculum/CurrículumIng.jpg",
    download: "/pdf/Curriculum/CurriculumSistemasInformacion.pdf",
  },
];
