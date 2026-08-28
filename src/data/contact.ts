export type ContactType = {
  id: number;
  name: string;
  filename?: string;
  url?: string;
  icon: string;
  colors: {
    card: string;
    brand: string;
    icon: string;
    text: string;
  };
  download?: boolean;
};

export const contact: ContactType[] = [
  {
    id: 1,
    name: "github",
    url: "https://github.com/Leiston09",
    icon: "wired-lineal-2572-logo-github-hover-pinch",
    colors: {
      card: `
        border-gray-300/70 dark:border-gray-700/70
        hover:border-gray-500 dark:hover:border-gray-400
        hover:bg-gray-100/80 dark:hover:bg-gray-800/40
      `,
      brand: "bg-gray-500",
      icon: `
        border-gray-300/70 dark:border-gray-700
        bg-gray-50/70 dark:bg-gray-900/50
        group-hover:border-gray-400
      `,
      text: `
        text-text-light-primary dark:text-text-primary
        group-hover:text-gray-600 dark:group-hover:text-gray-200
      `,
    },
  },

  {
    id: 2,
    name: "linkedin",
    url: "https://www.linkedin.com/in/leistonholguin/",
    icon: "wired-lineal-2677-logo-square-linkedin-hover-draw",
    colors: {
      card: `
        border-blue-200/60 dark:border-blue-900/50
        hover:border-blue-500 dark:hover:border-blue-400
        hover:bg-blue-50/80 dark:hover:bg-blue-950/20
      `,
      brand: "bg-blue-500",
      icon: `
        border-blue-200/60 dark:border-blue-900/60
        bg-blue-50/50 dark:bg-blue-950/20
        group-hover:border-blue-400
      `,
      text: `
        text-text-light-primary dark:text-text-primary
        group-hover:text-blue-500 dark:group-hover:text-blue-400
      `,
    },
  },

  {
    id: 3,
    name: "whatsapp",
    url: "https://wa.me/593967405151",
    icon: "wired-flat-2543-logo-whatsapp-hover-pinch",
    colors: {
      card: `
        border-green-200/60 dark:border-green-900/50
        hover:border-green-500 dark:hover:border-green-400
        hover:bg-green-50/80 dark:hover:bg-green-950/20
      `,
      brand: "bg-green-500",
      icon: `
        border-green-200/60 dark:border-green-900/60
        bg-green-50/50 dark:bg-green-950/20
        group-hover:border-green-400
      `,
      text: `
        text-text-light-primary dark:text-text-primary
        group-hover:text-green-500 dark:group-hover:text-green-400
      `,
    },
  },

  {
    id: 4,
    name: "email",
    url: "mailto:leiston09holguin@gmail.com",
    icon: "wired-lineal-3095-notification-letter",
    colors: {
      card: `
        border-red-200/60 dark:border-red-900/50
        hover:border-red-400 dark:hover:border-red-400
        hover:bg-red-50/80 dark:hover:bg-red-950/20
      `,
      brand: "bg-red-400",
      icon: `
        border-red-200/60 dark:border-red-900/60
        bg-red-50/50 dark:bg-red-950/20
        group-hover:border-red-400
      `,
      text: `
        text-text-light-primary dark:text-text-primary
        group-hover:text-red-500 dark:group-hover:text-red-400
      `,
    },
  },

  {
    id: 5,
    name: "resume",
    filename: "CV-Leiston-Holguin.pdf",
    icon: "doodle-color-194-approve-checked-simple",
    colors: {
      card: `
        border-primary/30
        hover:border-primary
        hover:bg-primary/5
      `,
      brand: "bg-primary",
      icon: `
        border-primary/30
        bg-primary/5
        group-hover:border-primary/60
      `,
      text: `
        text-text-light-primary dark:text-text-primary
        group-hover:text-primary
      `,
    },
    download: true,
  },
];
