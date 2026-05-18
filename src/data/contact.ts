type ContactType = {
    id: number,
    name: string,
    url: string,
    icon: string,
    color: string,
    download: boolean
}

export const contact: ContactType[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Leiston09",
    icon: "fab fa-github",
    color: "text-gray-400 hover:text-white",
    download: false,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leistonholguin/",
    icon: "fab fa-linkedin",
    color: "text-blue-400 hover:text-blue-300",
    download: false,
  },
  {
    id: 3,
    name: "WhatsApp",
    url: "https://wa.me/593967405151",
    icon: "fab fa-whatsapp",
    color: "text-green-400 hover:text-green-300",
    download: false,
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:leiston09holguin@gmail.com",
    icon: "fas fa-envelope",
    color: "text-red-300 hover:text-red-200",
    download: false,
  },
  {
    id: 5,
    name: "Curriculum",
    url: "",
    icon: "fas fa-file-pdf",
    color: "text-red-500 hover:text-red-500",
    download: true,
  },
];
