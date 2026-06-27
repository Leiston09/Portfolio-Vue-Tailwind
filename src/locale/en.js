export default {
  global: {
    viewAll: "View all",
    back: "Back",
    demo: "Demo",
    code: "Code",
    loading: "Loading CV...",
    featured: "⭐ Featured",
    github: "GitHub",
    webPortfolio: "Web Portfolio",
    readMore: "Read more", // New
    close: "Close", // New
    loadingMessage: "Loading content, please wait...",
    delete: 'Delete'

  },

  notFound: {
    title: "Page not found",
    description:
      "Sorry, the page you are looking for is currently unavailable.",
    backHome: "Return to home",
  },

  navbar: {
    configuration: "Settings",
    configurationDescription:
      "Sign in with another account or close your current session.",

    login: "Sign in",
    logout: "Sign out",

    status: {
      guest: "Guest",
      online: "Session started",
      offline: "Session closed",
    },

    language: {
      spanish: "Spanish",
      english: "English",
    },

    menu: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
  },

  home: {
    title: "Personal Portfolio",

    welcomeMessage:
      "Frontend Developer from Ecuador specialized in Vue 3 and TypeScript. Currently expanding my knowledge toward Full Stack development with Node.js, databases, and cybersecurity and networking fundamentals.",

    buttons: {
      projects: "View projects",
      curriculum: "View resume",
      contact: "View contact",
    },

    specializations: {
      frontendDeveloper: "Frontend Developer",
      softwareEngineeringStudent: "Software Engineering Student",
      databases: "Databases",
      cybersecurity: "Cybersecurity",
      networking: "Networking",
    },

    personalMessage:
      "Passionate about web development and continuous learning. I focus on building modern, functional, and scalable interfaces while constantly improving my technical skills.",

    availability: "Available for projects and opportunities.", // New
  },

  projects: {
    title: "Featured Projects",
    internalTitle: "Projects",
    subtitle: "These are some of my recent projects.",

    labels: {
      year: "Year",
      technologies: "Technologies", // New
      details: "View more details",
    },

    items: {
      portfolio: {
        title: "Personal Portfolio",

        description:
          "Modern web portfolio designed to showcase my professional profile, projects, and technical skills.",

        imageDescription:
          "Includes sections for personal presentation, skills, projects, certifications, and contact with a responsive design and dynamic navigation.",
      },

      uitoky: {
        title: "Application with Backend Connection",

        description:
          "Web application with authentication, data validation, and database integration.",

        imageDescription:
          "Allows users to register, log in, and manage stored information through a modern and interactive interface.",
      },

      guitarra: {
        title: "Guitar Web Store",

        description:
          "Web application for displaying a guitar catalog with an interactive shopping cart.",

        imageDescription:
          "The system allows adding products, modifying quantities, and removing items dynamically.",
      },

      administrarPacientes: {
        title: "Patient Management System",

        description:
          "Web application for managing patients through CRUD operations.",

        imageDescription:
          "Allows adding, editing, and deleting records with form validation and responsive design.",
      },

      listadoUsuarios: {
        title: "User List",

        description:
          "Web application that displays a dynamic list of users using mock data.",

        imageDescription:
          "The interface allows viewing organized user information in a simple and efficient way.",
      },
    },
  },

  skills: {
    title: "Technical Skills",

    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      design: "Design",
      tools: "Tools",
      additional: "Additional",
    },

    technologies: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      typescript: "TypeScript",
      vue: "Vue.js",
      tailwind: "Tailwind CSS",

      node: "Node.js",
      python: "Python",

      mongodb: "MongoDB",
      mysql: "MySQL",
      postgresql: "PostgreSQL",

      figma: "Figma",

      git: "Git",
      github: "GitHub",
      vscode: "VS Code",
      cursor: "Cursor",
      xampp: "XAMPP",
      netlify: "Netlify",

      cybersecurity: "Cybersecurity",
      networking: "Networking",
      linux: "Linux",
    },
  },

  certifications: {
    title: "Certifications",

    subtitle:
      "Courses and certifications focused on web development, networking, and cybersecurity.",

    searchPlaceholder: "Search certifications...",

    filters: {
      all: "All",
    },

    messages: {
      noResults: "No certifications found.",
      locked: "Sign in to view certificates.",
    },

    buttons: {
      view: "Visualize",
      download: "Download",
      back: "Back to certifications",
    },

    institution: "Institution",
    description: "Description",
    descriptionDetail: "Detailed description",

    institutions: {
      udemy: "Udemy",
      google: "Google",
      cisco: "Cisco Packet Tracer",
      university: "University of Guayaquil",
    },

    items: {
      udemyCompTIAsecurity: {
        name: "CompTIA Security+",

        description:
          "Certification focused on cybersecurity and vulnerability analysis.",

        descriptionDetail:
          "Comprehensive cybersecurity certification that validates foundational and intermediate security skills used in modern IT environments. The course covers topics such as threat analysis, vulnerability management, cryptography, identity and access management, risk mitigation, network security, and secure architecture principles. It also introduces incident response strategies, security operations, and best practices used by cybersecurity professionals to protect systems and organizational infrastructures.",
      },

      googleCybersecurity: {
        name: "Google Cybersecurity Professional",

        description:
          "Professional program focused on SQL, Python, networking, and incident management.",

        descriptionDetail:
          "Professional cybersecurity program designed to build practical skills for entry-level security roles. The course covers networking fundamentals, Linux, SQL, Python scripting, security tools, incident detection, threat analysis, and risk management. It also focuses on real-world security scenarios, including identifying vulnerabilities, analyzing suspicious activity, handling incidents, and applying defensive security strategies commonly used in modern organizations.",
      },

      vue3Mevn: {
        name: "Vue.js 3 - Complete Guide - Composition API, Pinia and MEVN",

        description:
          "Mastery of Vue.js 3 and the MEVN ecosystem for modern applications.",

        descriptionDetail:
          "Advanced Vue.js 3 course focused on modern frontend and full-stack application development using the MEVN stack (MongoDB, Express, Vue, and Node.js). Covers Composition API, state management with Pinia, reusable components, routing, authentication, API integration, backend communication, and deployment practices. Includes multiple real-world projects designed to strengthen scalable architecture, clean code practices, and modern development workflows with Vite and TypeScript support.",
      },

      typescriptGuide: {
        name: "TypeScript: Complete Guide",

        description:
          "Learn TypeScript from scratch to build scalable and secure applications.",

        descriptionDetail:
          "Complete TypeScript course designed to strengthen JavaScript development through static typing and modern programming practices. Covers data types, interfaces, classes, generics, modules, decorators, functions, and object-oriented programming concepts. The course also demonstrates integration with frameworks such as Vue, React, Angular, and Node.js, helping developers create scalable, maintainable, and safer applications while reducing common runtime errors in JavaScript projects.",
      },

      networkExploration: {
        name: "Network Exploration with Cisco Packet Tracer",

        description:
          "Practical course focused on network simulation and configuration.",

        descriptionDetail:
          "Hands-on networking course using Cisco Packet Tracer to simulate and configure real network environments. Covers routing, switching, VLANs, IP addressing, network topology design, troubleshooting, and communication between devices. The course helps develop practical networking skills through simulations commonly used in academic and professional Cisco networking environments.",
      },

      introCiscoPacketTracer: {
        name: "Introduction to Cisco Packet Tracer",

        description: "First steps in network simulation with Cisco tools.",

        descriptionDetail:
          "Introductory course focused on learning the fundamentals of Cisco Packet Tracer and network simulation. Covers the interface, basic networking devices, cable connections, small network creation, packet flow visualization, and introductory troubleshooting concepts. Ideal for beginners starting in networking and Cisco technologies.",
      },

      pythonBasics: {
        name: "Getting Started with Python",

        description:
          "Python programming fundamentals applied to cybersecurity.",

        descriptionDetail:
          "Beginner-friendly Python course focused on programming fundamentals and automation concepts related to cybersecurity. Covers variables, loops, functions, file handling, conditionals, and basic scripting techniques. Also introduces practical applications such as automation of repetitive tasks, log analysis, simple security scripts, and data handling used in technical environments.",
      },

      systemsEngineering: {
        name: "Software Engineering Student",

        description: "Professional academic training in Software Engineering.",

        descriptionDetail:
          "Academic training focused on software engineering principles, programming, databases, networking, operating systems, and information security fundamentals. Includes practical and theoretical knowledge in software development methodologies, problem-solving, system analysis, application design, and technology integration used in modern computing environments.",
      },

      detectionResponse: {
        name: "Incident Detection and Response",

        description:
          "Monitoring and response strategies against security threats.",

        descriptionDetail:
          "Cybersecurity course focused on detecting, analyzing, and responding to security incidents in organizational environments. Covers continuous monitoring, log analysis, SIEM platforms, threat detection techniques, incident response procedures, forensic fundamentals, containment strategies, and post-incident recovery processes used in modern security operations.",
      },

      cybersecurityFoundations: {
        name: "Cybersecurity Foundations",

        description: "Core principles of cybersecurity and data protection.",

        descriptionDetail:
          "Foundational cybersecurity course introducing essential security concepts, common cyber threats, digital protection practices, and ethical responsibilities in technology environments. Covers confidentiality, integrity, and availability (CIA principles), social engineering risks, malware, authentication systems, and best practices for protecting personal and organizational information.",
      },

      securityRiskManagement: {
        name: "Security Risk Management",

        description:
          "Identification, assessment, and mitigation of security risks.",

        descriptionDetail:
          "Course specialized in identifying, evaluating, and mitigating cybersecurity risks within organizations. Covers risk analysis frameworks, compliance concepts, business impact assessments, security policies, governance strategies, and implementation of security controls designed to reduce vulnerabilities and protect critical infrastructures.",
      },

      networkSecurity: {
        name: "Networking and Network Security",

        description: "Networking fundamentals and infrastructure protection.",

        descriptionDetail:
          "Comprehensive networking and security course covering network protocols, architectures, devices, and defensive security practices. Includes firewalls, VPNs, intrusion detection systems, secure communication methods, segmentation, and protection against external and internal network threats commonly faced in enterprise infrastructures.",
      },

      cybersecurityJobs: {
        name: "Preparing for Cybersecurity Jobs",

        description:
          "Professional preparation for the cybersecurity job market.",

        descriptionDetail:
          "Career-oriented cybersecurity course designed to prepare students for entry-level security roles. Covers resume and portfolio preparation, technical interview concepts, professional communication skills, industry certifications, career paths, and the responsibilities associated with positions such as security analyst, SOC analyst, and incident response specialist.",
      },

      threatsVulnerabilities: {
        name: "Threats, Vulnerabilities, and Risks",

        description:
          "Analysis and classification of threats in computer systems.",

        descriptionDetail:
          "Course focused on understanding cybersecurity threats, vulnerabilities, and risk assessment processes. Covers malware types, attack vectors, exploitation techniques, vulnerability scanning, penetration testing concepts, and prioritization strategies used to identify and mitigate weaknesses in systems and networks.",
      },

      automateCybersecurity: {
        name: "Cybersecurity Automation with Python",

        description: "Automation of security tasks using Python.",

        descriptionDetail:
          "Practical course focused on automating cybersecurity tasks using Python programming. Covers scripting for log analysis, automated monitoring, threat detection, file processing, and repetitive security operations. Also introduces the development of custom scripts to improve efficiency in security workflows and incident response activities.",
      },

      linuxSqlTools: {
        name: "Linux and SQL Tools for Cybersecurity",

        description: "Use of Linux and SQL tools for security analysis.",

        descriptionDetail:
          "Technical course focused on Linux command-line tools and SQL fundamentals used in cybersecurity environments. Covers file system navigation, permissions, process management, shell commands, database queries, filtering and analyzing information, and the use of Linux-based tools commonly applied in security analysis, system administration, and incident investigations.",
      },
    },
  },

  contact: {
    title: "Contact",

    intro:
      "If you would like to contact me for projects, collaborations, or job opportunities, feel free to reach out.",

    labels: {
      email: "Email",
      location: "Location",
    },

    city: "Guayaquil, Ecuador",

    availability: "Available for remote work.", // New
  },

  curriculum: {
    title: "Resume",

    download: "Download CV",

    roles: {
      systemsEngineeringStudent: "Software Engineering Student",

      frontendDeveloper: "Frontend Developer",
    },
  },

  auth: {
    login: {
      title: "Welcome to my portfolio",

      labels: {
        email: "Email",
        password: "Password",
      },

      placeholders: {
        email: "example{'@'}email.com",
        password: "********",
      },

      actions: {
        forgotPassword: "Forgot your password?",
        noAccount: "Don't have an account?",
        register: "Sign up",
        continue: "Continue",
      },
    },

    register: {
      title: "Create account",

      subtitle: "Sign up to access the system and view private content.",

      placeholders: {
        name: "First name",
        lastName: "Last name",
        email: "example{'@'}email.com",
        password: "Password",
        confirmPassword: "Confirm password",
        date: 'DD/MM/YYYY - Date of birth'
      },

      submit: "Register",
    },

    recoverPassword: {
      title: "Recover password",

      description:
        "Enter your email address to recover access to your account.",

      placeholder: "Email address",

      submit: "Send link",
    },
  },

  chatbot: {
    title: "Portfolio Chatbot 🧑‍🎓",
    welcome: "Hello, I'm Leiston Holguín's portfolio assistant. How can I help you?",
    placeholder: "Type your question here...",
    error:
      "Sorry, an error occurred while processing your request. Please try again.",
  },

  validation: {
    required: "This field is required.",
    nameInvalid: "It cannot contain numbers.",
    nameRequired: "Name is required.",
    lastNameRequired: "Last name is required.",
    invalidEmail: "Please enter a valid email address.",
    birthDateRequired: "Birth date is required.",
    shortPassword: "Password must be at least 6 characters long.",
    birthDateTextInvalidate: "Invalid format",
    passwordMismatch: "Passwords do not match.",
    minimumAge: "You must be at least 15 years old.",
    maximumAge: "Age cannot be greater than 100 years.",
  },

  alerts: {
    success: "Login successful.",
    failed: "Incorrect username or password.",
    LoginRecord: 'User successfully registered',
    development:'Page under development/maintenance!',    
    unregistered: 'The email address is not registered',
    codeSent: 'Code sent to your email'
  },
};
