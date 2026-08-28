export const Institutions = {
  UDEMY: "udemy",
  GOOGLE: "google",
  CISCO: "cisco",
  UNIVERSITY: "university",
} as const;

export type Certification = {
  id: number;
  key: string;
  institution: (typeof Institutions)[keyof typeof Institutions];
  image: string;
  certificate?: string;
  featured: boolean;
};

export const certifications: Certification[] = [
  {
    id: 1,
    key: "vue3Mevn",
    institution: Institutions.UDEMY,
    image: "/img/certificates/vue3-mevn.jpg",
    certificate: "/pdf/certificates/vue3-mevn.pdf",
    featured: true,
  },
  {
    id: 2,
    key: "typescriptGuide",
    institution: Institutions.UDEMY,
    image: "/img/certificates/typescript-guide.jpg",
    certificate: "/pdf/certificates/typescript-guide.pdf",
    featured: true,
  },
  {
    id: 3,
    key: "udemyCompTIAsecurity",
    institution: Institutions.UDEMY,
    image: "/img/certificates/udemy-comptia-security.jpg",
    certificate: "/pdf/certificates/udemy-comptia-security.pdf",
    featured: true,
  },
  {
    id: 4,
    key: "googleCybersecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/google-cybersecurity.jpg",
    certificate: "/pdf/certificates/google-cybersecurity.pdf",
    featured: true,
  },
  {
    id: 5,
    key: "systemsEngineering",
    institution: Institutions.UNIVERSITY,
    image: "/img/certificates/systems-engineering.jpg",
    featured: false,
  },
  {
    id: 6,
    key: "networkExploration",
    institution: Institutions.CISCO,
    image: "/img/certificates/network-exploration.jpg",
    certificate: "/pdf/certificates/network-exploration.pdf",
    featured: true,
  },
  {
    id: 7,
    key: "introCiscoPacketTracer",
    institution: Institutions.CISCO,
    image: "/img/certificates/intro-cisco-packet-tracer.jpg",
    certificate: "/pdf/certificates/intro-cisco-packet-tracer.pdf",
    featured: false,
  },
  {
    id: 8,
    key: "detectionResponse",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/detection-response.jpg",
    certificate: "/pdf/certificates/detection-response.pdf",
    featured: false,
  },
  {
    id: 9,
    key: "cybersecurityFoundations",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/cybersecurity-foundations.jpg",
    certificate: "/pdf/certificates/cybersecurity-foundations.pdf",
    featured: false,
  },
  {
    id: 10,
    key: "securityRiskManagement",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/security-risk-management.jpg",
    certificate: "/pdf/certificates/security-risk-management.pdf",
    featured: false,
  },
  {
    id: 11,
    key: "networkSecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/network-security.jpg",
    certificate: "/pdf/certificates/network-security.pdf",
    featured: false,
  },
  {
    id: 12,
    key: "cybersecurityJobs",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/cybersecurity-jobs.jpg",
    certificate: "/pdf/certificates/cybersecurity-jobs.pdf",
    featured: false,
  },
  {
    id: 13,
    key: "threatsVulnerabilities",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/threats-vulnerabilities.jpg",
    certificate: "/pdf/certificates/threats-vulnerabilities.pdf",
    featured: false,
  },
  {
    id: 14,
    key: "automateCybersecurity",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/automate-cybersecurity-python.jpg",
    certificate: "/pdf/certificates/automate-cybersecurity-python.pdf",
    featured: false,
  },
  {
    id: 15,
    key: "pythonBasics",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/python-basics.jpg",
    certificate: "/pdf/certificates/python-basics.pdf",
    featured: false,
  },
  {
    id: 16,
    key: "linuxSqlTools",
    institution: Institutions.GOOGLE,
    image: "/img/certificates/linux-sql-tools.jpg",
    certificate: "/pdf/certificates/linux-sql-tools.pdf",
    featured: false,
  },
];
