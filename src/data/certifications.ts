export const Institutions = {
  UDEMY: "udemy",
  GOOGLE: "google",
  CISCO: "cisco",
  UNIVERSITY: "university",
} as const;

export type CertificationType = {
  id: number;
  featured: boolean;
  key: string;
  institution: (typeof Institutions)[keyof typeof Institutions];

  image: string;
  certificate?: string;

  downloadable: boolean;
};

export const certifications: CertificationType[] = [
  {
    id: 1,
    featured: true,
    key: "vue3Mevn",

    institution: Institutions.UDEMY,
    image: "/img/certificates/vue3-mevn.jpg",
    certificate: "/pdf/certificates/vue3-mevn.pdf",
    downloadable: true,
  },
  {
    id: 2,
    featured: true,
    key: "udemyCompTIAsecurity",
    institution: Institutions.UDEMY,
    image: "/img/certificates/udemy-comptia-security.jpg",
    certificate: "/pdf/certificates/udemy-comptia-security.pdf",
    downloadable: true,
  },
  {
    id: 3,
    featured: true,
    key: "googleCybersecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/google-cybersecurity.jpg",
    certificate: "/pdf/certificates/google-cybersecurity.pdf",
    downloadable: true,
  },
  {
    id: 4,
    featured: true,
    key: "typescriptGuide",
    institution: Institutions.UDEMY,
    image: "/img/certificates/typescript-guide.jpg",
    certificate: "/pdf/certificates/typescript-guide.pdf",
    downloadable: true,
  },
  {
    id: 5,
    featured: false,
    key: "systemsEngineering",
    institution: Institutions.UNIVERSITY,
    image: "/img/certificates/systems-engineering.jpg",
    downloadable: false,
  },
  {
    id: 6,
    featured: false,
    key: "networkExploration",
    institution: Institutions.CISCO,
    image: "/img/certificates/network-exploration.jpg",
    certificate: "/pdf/certificates/network-exploration.pdf",
    downloadable: true,
  },
  {
    id: 7,
    featured: false,
    key: "introCiscoPacketTracer",
    institution: Institutions.CISCO,
    image: "/img/certificates/intro-cisco-packet-tracer.jpg",
    certificate: "/pdf/certificates/intro-cisco-packet-tracer.pdf",
    downloadable: true,
  },
  {
    id: 8,
    featured: false,
    key: "detectionResponse",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/detection-response.jpg",
    certificate: "/pdf/certificates/detection-response.pdf",
    downloadable: true,
  },
  {
    id: 9,
    featured: false,
    key: "cybersecurityFoundations",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/cybersecurity-foundations.jpg",
    certificate: "/pdf/certificates/cybersecurity-foundations.pdf",
    downloadable: true,
  },
  {
    id: 10,
    featured: false,
    key: "securityRiskManagement",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/security-risk-management.jpg",
    certificate: "/pdf/certificates/security-risk-management.pdf",
    downloadable: true,
  },
  {
    id: 11,
    featured: false,
    key: "networkSecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/network-security.jpg",
    certificate: "/pdf/certificates/network-security.pdf",
    downloadable: true,
  },
  {
    id: 12,
    featured: false,
    key: "cybersecurityJobs",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/cybersecurity-jobs.jpg",
    certificate: "/pdf/certificates/cybersecurity-jobs.pdf",
    downloadable: true,
  },
  {
    id: 13,
    featured: false,
    key: "threatsVulnerabilities",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/threats-vulnerabilities.jpg",
    certificate: "/pdf/certificates/threats-vulnerabilities.pdf",
    downloadable: true,
  },
  {
    id: 14,
    featured: false,
    key: "automateCybersecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/automate-cybersecurity-python.jpg",
    certificate: "/pdf/certificates/automate-cybersecurity-python.pdf",
    downloadable: true,
  },
  {
    id: 15,
    featured: false,
    key: "pythonBasics",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/python-basics.jpg",
    certificate: "/pdf/certificates/python-basics.pdf",
    downloadable: true,
  },
  {
    id: 16,
    featured: false,
    key: "linuxSqlTools",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/linux-sql-tools.jpg",
    certificate: "/pdf/certificates/linux-sql-tools.pdf",
    downloadable: true,
  }
];
