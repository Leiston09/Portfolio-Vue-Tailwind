export default {
  global: {
    buttons: {
      details: "Ver Detalles",
      verifyOn: "Ver en",
      github: "GitHub",
      demo: "Demo",
      downloadCv: "Descargar CV",
      contact: "CONTACTAR",
      download: "Descargar",
    },
    labels: {
      featured: "★ Destacado",
      titlefeatured: "Destacado",
      institution: "Institución",
      back: "Regresar",
    },
    allRightsreserved: "Reservados todos los derechos",
  },

  notFound: {
    title: "Página no encontrada",
    description:
      "Lo sentimos, la página que estás buscando no se encuentra disponible en este momento.",
    backHome: "Regresar al inicio",
  },

  navbar: {
    status: "Disponible",
    navigation: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    language: {
      spanish: "Español",
      english: "English",
    },
    theme: {
      dark: "Oscuro",
      light: "Claro",
    },
  },

  home: {
    hero: {
      greeting: "HOLA, YO SOY",
      role: "Estudiante de Ingeniería en Sistemas",
      subtitle: "Desarrollador de Software",
    },
    status: {
      available: "Disponible para proyectos.",
      experience: "+1 año de experiencia.",
    },
    about: {
      part1:
        "Estudiante de Ingeniería en Sistemas y Desarrollador de Software en Ecuador, enfocado en transformar requerimientos en ",
      highlight1: "soluciones de software eficientes",
      part2:
        ", aportando versatilidad técnica y rápida capacidad de adaptación para generar ",
      highlight2: "valor inmediato en cualquier equipo",
    },
    buttons: {
      projects: "Ver proyectos",
      resume: "Ver CV",
      contact: "Ver contacto",
    },
  },

  resume: {
    title: "Currículum",
    roles: {
      systemsEngineeringStudent: "Estudiante de Ingeniería en Sistemas",
      frontendDeveloper: "Desarrollador de Software",
    },
    loading: "Cargando currículum...",
  },

  about: {
    title: "Sobre mí",
    subtitle: "Información personal",
    interests: {
      title: "Áreas de interés",
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      databases: "Bases de datos",
      apis: "APIs",
      networks: "Redes",
      cybersecurity: "Ciberseguridad",
    },
    workflow: {
      title: "Mi forma de trabajar",
      learning: {
        title: "Aprendizaje",
        description: "Aprendo nuevas tecnologías rápidamente.",
      },
      resolution: {
        title: "Resolución",
        description: "Busco soluciones prácticas y escalables.",
      },
      communication: {
        title: "Comunicación",
        description: "Trabajo de forma clara y colaborativa.",
      },
    },
  },

  testimonials: {
    sectionTitle: "Lo que dicen de mí",
    quote:
      "Muchas gracias, Leiston. Fue un gusto haber estado contigo en este proyecto. Destaco mucho tu compromiso, creatividad y atención a cada detalle. El resultado superó mis expectativas y sin duda recomendaría tu trabajo.",
    actions: {
      viewImage: "Ver imagen",
      viewLinkedin: "Ver publicación en LinkedIn",
    },
  },

  experience: {
    tag: "Mi trayectoria",
    title: "Experiencia",
    titleHighlight: "Profesional",
    status: "Actualidad",
    jobs: {
      psicologia: {
        role: "Desarrollador Frontend",
        client: "Cliente · Portafolio Profesional (Colombia)",
        date: "Mayo 2026 - Julio 2026",
        description:
          "Desarrollo a medida del portafolio digital para un especialista en Psicología Organizacional. Maquetación optimizada con Vue 3, TypeScript y Tailwind CSS, garantizando diseño responsive, experiencia de usuario fluida, despliegue con dominio personalizado y SSL.",
      },
      logistica: {
        role: "Desarrollador Frontend Junior",
        client: "Colaboración Remota · Proyecto Privado",
        date: "Agosto 2025 - Marzo 2026",
        description:
          "Construcción y mantenimiento de componentes modulares con Vue 3 y TypeScript. Implementación de interfaces adaptables con Tailwind CSS, gestión de flujos de trabajo con Git (ramas develop), validaciones complejas de datos y soporte para internacionalización (i18n) en colaboración directa con desarrolladores Senior.",
      },
    },
  },

projects: {
  tag: "Mi portafolio",
  title: "Proyectos",
  titleHighlight: "Destacados",
  subtitle: {
    tag: "Mis Proyectos",
    title: "Mis",
    titleHighlight: "Proyectos",
  },
  description:
    "Explora los proyectos que he desarrollado durante mi formación y experiencia, aplicando tecnologías, diseño y soluciones orientadas a resolver problemas reales.",
  viewAll: "Ver todos los Proyectos",
  defaultDescription:
    "Proyectos desarrollados con tecnologías modernas enfocados en optimización y rendimiento.",
  items: {
    sistemaPeluqueria: {
      title: "Sistema de Gestión para Peluquería",
      description:
        "Sistema full stack de reservas con validación de disponibilidad en tiempo real, control de roles, gestión de horarios y notificaciones automáticas por correo.",
      imageDescription:
        "Reserva guiada en 3 pasos que respeta horarios, pausas y días bloqueados de cada barbero, con panel administrativo y estadísticas del salón.",
    },
    portfolio: {
      title: "Portafolio Personal",
      description:
        "Más que un portafolio, una experiencia interactiva con multi-idioma, animaciones fluidas, diseño cuidado al detalle e IA integrada. Pregúntale en vez de leer.",
      imageDescription:
        "Explora mi perfil de una forma diferente: navegación intuitiva, modo claro/oscuro y un asistente que responde cualquier pregunta sobre mí en tiempo real.",
    },
    clienteColombia: {
      title: "Portafolio Profesional - Cliente de Colombia",
      description:
        "Desarrollo freelance a medida para un especialista en Psicología Organizacional, coordinando requerimientos y entregas directamente con el cliente.",
      imageDescription:
        "Diseño personalizado con slider interactivo, multi-idioma y despliegue en producción con dominio propio y SSL.",
    },
    guitarra: {
      title: "Tienda Web de Guitarras",
      description:
        "Catálogo interactivo con carrito de compras funcional: agregar productos, modificar cantidades y eliminar elementos en tiempo real.",
      imageDescription:
        "Estado del carrito gestionado en el navegador con persistencia durante la sesión.",
    },
    pedidos: {
      title: "Sistema de Gestión de Pedidos",
      description:
        "Sistema de pedidos bajo arquitectura MVC con PHP, MySQL y PDO: login, registro de clientes, carrito, métodos de pago y control de stock.",
      imageDescription:
        "Estructura profesional separando Controller, Model y View, con Service Layer para la lógica de negocio y validaciones por capas.",
    },
    dashboardCsv: {
      title: "Dashboard de Análisis de Datos CSV",
      description:
        "Herramienta de análisis que procesa archivos CSV y Excel con Pandas y NumPy, generando estadísticas y gráficas dinámicas por columna.",
      imageDescription:
        "Detecta tipos de datos automáticamente, calcula cuartiles, outliers, sesgo y curtosis, y exporta resultados. Desplegado en Fly.io con Gunicorn y tests automatizados.",
    },
    administrarPacientes: {
      title: "Administrador de Pacientes",
      description:
        "CRUD completo para gestión de pacientes con validación de formularios y persistencia local.",
      imageDescription:
        "Permite agregar, editar y eliminar registros con feedback visual en cada acción.",
    },
    listadoUsuarios: {
      title: "Listado de Usuarios con Filtros",
      description:
        "Listado dinámico de usuarios con búsqueda y filtrado en tiempo real sobre datos simulados.",
      imageDescription:
        "Filtros reactivos que actualizan la tabla sin recargar la página.",
    },
    controlGastos: {
      title: "Control de Gastos Personales",
      description:
        "Registro de ingresos y gastos con categorías, presupuesto y balance calculado automáticamente.",
      imageDescription:
        "Resumen visual del balance y desglose por categoría en cada transacción.",
    },
    uitoky: {
      title: "Tienda Uitoky",
      description:
        "E-commerce con autenticación, recuperación de contraseña por código, sistema de opiniones y envío de correos con PHPMailer.",
      imageDescription:
        "Backend en PHP con PostgreSQL y PDO, gestión de usuarios y persistencia de datos relacionales.",
    },
  },
},

  skills: {
    tag: "Tecnologías",
    title: "Habilidades",
    titleHighlight: "Técnicas",
    subtitle:
      "Tecnologías y conocimientos que forman parte de mi perfil como estudiante de Ingeniería en Sistemas.",
    viewAll: "Ver todas completas",
    subtitles: {
      tag: "Habilidades",
      title: "Mis",
      titleHighlight: "Habilidades",
    },
    stackTitle: "Tecnologías",
    stackSubtitle: "Mi stack actual",
    groupDescription: "Tecnologías que forman parte de este grupo.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
      services: "Servicios y APIs",
      design: "Diseño",
      tools: "Herramientas",
      additional: "Complementos",
      systems: "Sistemas",
    },
    items: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      typescript: "TypeScript",
      vuejs: "Vue.js",
      tailwindcss: "Tailwind CSS",
      vite: "Vite",
      axios: "Axios",
      gsap: "GSAP",
      vuerouter: "Vue Router",
      pinia: "Pinia",
      vuei18n: "Vue I18n",
      nodejs: "Node.js",
      express: "Express",
      python: "Python",
      mongoose: "Mongoose",
      jwt: "JWT",
      bcrypt: "bcrypt",
      restApi: "REST API",
      mongodb: "MongoDB",
      postgresql: "PostgreSQL",
      mysql: "MySQL",
      groq: "Groq SDK",
      brevo: "Brevo",
      netlifyfunctions: "Netlify Functions",
      postman: "Postman",
      git: "Git",
      github: "GitHub",
      netlify: "Netlify",
      render: "Render",
      figma: "Figma",
      linux: "Linux",
      windows: "Windows",
      cybersecurity: "Ciberseguridad",
      networks: "Redes",
    },
  },

  certifications: {
    tag: "Logros",
    title: "Certificaciones",
    titleHighlight: "Relevantes",
    viewAll: "Ver todas las Certificaciones",
    subtitle: {
      tag: "Certificaciones",
      title: "Mis",
      titleHighlight: "Certificaciones",
    },
    description:
      "Certificaciones y conocimientos adquiridos durante mi formación académica y profesional.",
    allInstitutions: "Todas las instituciones",
    results: "Resultados",
    allCertifications: "Todas mis certificaciones",
    certificationsfound: "Certificaciones encontradas",
    certificationsCount: "certificaciones",
    certificationCount: "certificación",
    searchPlaceholder: "Buscar certificaciones...",
    institution: "institución",
    institutions: {
      udemy: "Udemy",
      google: "Google",
      university: "Universidad",
      cisco: "Cisco",
    },
    items: {
      udemyCompTIAsecurity: {
        name: "CompTIA Security+",
        description:
          "Certificación enfocada en fundamentos de ciberseguridad, gestión de riesgos y protección de sistemas.",
        descriptionDetail:
          "Certificación integral orientada al desarrollo de conocimientos fundamentales en ciberseguridad y protección de infraestructuras de TI. Abarca análisis de amenazas, gestión de vulnerabilidades, criptografía, control de acceso, seguridad de redes, gestión de riesgos y principios de arquitectura segura. También incluye conceptos relacionados con respuesta ante incidentes, operaciones de seguridad y buenas prácticas para identificar, prevenir y mitigar amenazas en entornos tecnológicos.",
      },
      googleCybersecurity: {
        name: "Google Cybersecurity Professional",
        description:
          "Programa profesional enfocado en ciberseguridad, análisis de datos, redes y respuesta ante incidentes.",
        descriptionDetail:
          "Programa profesional diseñado para desarrollar habilidades prácticas orientadas a roles iniciales en ciberseguridad. Incluye fundamentos de redes, Linux, SQL, Python, análisis de amenazas, identificación de vulnerabilidades, detección y respuesta ante incidentes y gestión de riesgos. También aborda herramientas y metodologías utilizadas para analizar actividades sospechosas, investigar incidentes y aplicar medidas defensivas en entornos organizacionales.",
      },
      vue3Mevn: {
        name: "Vue.js 3 - Guía Completa - Composition API, Pinia y MEVN",
        description:
          "Formación avanzada en Vue.js 3, desarrollo frontend y arquitectura Full Stack con el stack MEVN.",
        descriptionDetail:
          "Curso avanzado enfocado en el desarrollo de aplicaciones modernas utilizando Vue.js 3 y el stack MEVN (MongoDB, Express, Vue y Node.js). Incluye Composition API, gestión de estado con Pinia, componentes reutilizables, Vue Router, autenticación, integración con APIs y comunicación con servicios backend. También aborda Vite, TypeScript, despliegue y buenas prácticas para construir aplicaciones escalables, mantenibles y orientadas a una arquitectura Full Stack.",
      },
      typescriptGuide: {
        name: "TypeScript: Guía Completa",
        description:
          "Formación en TypeScript para desarrollar aplicaciones modernas, mantenibles y escalables.",
        descriptionDetail:
          "Curso completo enfocado en fortalecer el desarrollo con JavaScript mediante el uso de tipado estático y herramientas modernas de programación. Incluye tipos, interfaces, clases, genéricos, módulos, funciones, decoradores y programación orientada a objetos. También aborda la integración de TypeScript con tecnologías como Vue, React, Angular y Node.js, aplicando buenas prácticas para mejorar la organización del código, reducir errores y facilitar el mantenimiento de aplicaciones.",
      },
      networkExploration: {
        name: "Exploración de Redes con Cisco Packet Tracer",
        description:
          "Curso práctico de simulación, configuración y resolución de problemas en redes informáticas.",
        descriptionDetail:
          "Curso práctico orientado al diseño y configuración de redes mediante Cisco Packet Tracer. Incluye conceptos de routing, switching, VLANs, direccionamiento IP, diseño de topologías y resolución de problemas de conectividad. Permite desarrollar experiencia mediante la simulación de diferentes escenarios de red, reforzando conocimientos utilizados en entornos académicos y profesionales relacionados con infraestructura y tecnologías Cisco.",
      },
      introCiscoPacketTracer: {
        name: "Introducción a Cisco Packet Tracer",
        description:
          "Introducción a la simulación de redes y configuración de dispositivos utilizando Cisco Packet Tracer.",
        descriptionDetail:
          "Curso introductorio enfocado en comprender el funcionamiento de Cisco Packet Tracer y los fundamentos de la simulación de redes. Incluye el uso de la interfaz, configuración de dispositivos básicos, conexiones, creación de pequeñas topologías, direccionamiento y visualización del flujo de paquetes. También introduce conceptos iniciales de diagnóstico y resolución de problemas de conectividad.",
      },
      pythonBasics: {
        name: "Primeros Pasos con Python",
        description:
          "Formación en fundamentos de Python y automatización aplicada a entornos técnicos y de ciberseguridad.",
        descriptionDetail:
          "Curso introductorio orientado al aprendizaje de los fundamentos de programación con Python. Incluye variables, estructuras condicionales, ciclos, funciones, manejo de archivos y scripting básico. También presenta aplicaciones prácticas relacionadas con la automatización de tareas, análisis de registros y creación de scripts para resolver procesos repetitivos en entornos tecnológicos y de seguridad informática.",
      },
      systemsEngineering: {
        name: "Estudiante de Ingeniería en Sistemas",
        description:
          "Formación académica en Ingeniería en Sistemas con enfoque en desarrollo, bases de datos, redes y tecnología.",
        descriptionDetail:
          "Formación académica orientada al desarrollo de conocimientos en ingeniería de software, programación, bases de datos, redes, sistemas operativos y fundamentos de ciberseguridad. Incluye aprendizaje teórico y práctico sobre análisis y diseño de sistemas, resolución de problemas, metodologías de desarrollo, arquitectura de aplicaciones e integración de diferentes tecnologías utilizadas en entornos informáticos modernos.",
      },
      detectionResponse: {
        name: "Detección y Respuesta ante Incidentes",
        description:
          "Formación en identificación, análisis y respuesta ante incidentes y amenazas de seguridad.",
        descriptionDetail:
          "Curso enfocado en los procesos de detección, análisis y respuesta ante incidentes de ciberseguridad. Incluye monitoreo de eventos, análisis de logs, fundamentos de herramientas SIEM, identificación de amenazas, procedimientos de respuesta y estrategias de contención. También aborda conceptos básicos de análisis forense, recuperación y documentación de incidentes dentro de operaciones modernas de seguridad.",
      },
      cybersecurityFoundations: {
        name: "Fundamentos de Ciberseguridad",
        description:
          "Formación en principios fundamentales de ciberseguridad, amenazas y protección de la información.",
        descriptionDetail:
          "Curso introductorio que aborda los conceptos esenciales de la seguridad informática y la protección de información. Incluye los principios de confidencialidad, integridad y disponibilidad (CIA), amenazas comunes, malware, ingeniería social, autenticación y prácticas de seguridad. Su enfoque permite comprender los principales riesgos digitales y las medidas necesarias para proteger sistemas, datos y usuarios.",
      },
      securityRiskManagement: {
        name: "Gestión de Riesgos de Seguridad",
        description:
          "Formación en identificación, evaluación y mitigación de riesgos de ciberseguridad.",
        descriptionDetail:
          "Curso especializado en la gestión de riesgos de seguridad dentro de organizaciones. Incluye identificación y evaluación de amenazas, análisis de impacto, priorización de riesgos, controles de seguridad, políticas, cumplimiento y estrategias de mitigación. También aborda fundamentos de gobernanza y toma de decisiones orientadas a reducir vulnerabilidades y proteger los activos tecnológicos de una organización.",
      },
      networkSecurity: {
        name: "Redes y Seguridad de Redes",
        description:
          "Formación en redes informáticas y protección de infraestructuras frente a amenazas de seguridad.",
        descriptionDetail:
          "Curso integral que combina fundamentos de redes con conceptos de seguridad de infraestructura. Incluye protocolos, arquitecturas, dispositivos de red, segmentación y mecanismos de comunicación segura. También aborda firewalls, VPNs, sistemas de detección de intrusiones y estrategias defensivas para proteger redes empresariales frente a amenazas internas y externas.",
      },
      cybersecurityJobs: {
        name: "Preparación para Empleos en Ciberseguridad",
        description:
          "Preparación profesional para iniciar una carrera en el área de ciberseguridad.",
        descriptionDetail:
          "Curso orientado al desarrollo profesional y preparación para oportunidades laborales en ciberseguridad. Incluye elaboración de currículum y portafolio, preparación para entrevistas técnicas, desarrollo de habilidades profesionales y conocimiento de certificaciones relevantes. También presenta las funciones y responsabilidades de roles iniciales como analista SOC, analista de seguridad y especialista en respuesta ante incidentes.",
      },
      threatsVulnerabilities: {
        name: "Amenazas, Vulnerabilidades y Riesgos",
        description:
          "Formación en identificación y análisis de amenazas, vulnerabilidades y riesgos de seguridad.",
        descriptionDetail:
          "Curso enfocado en comprender cómo identificar, analizar y evaluar amenazas y vulnerabilidades en sistemas y redes. Incluye tipos de malware, vectores de ataque, técnicas de explotación, análisis de vulnerabilidades, fundamentos de pruebas de penetración y evaluación de riesgos. También aborda criterios para priorizar vulnerabilidades y aplicar medidas orientadas a reducir la exposición de los sistemas.",
      },
      automateCybersecurity: {
        name: "Automatización de Ciberseguridad con Python",
        description:
          "Aplicación de Python para automatizar tareas y procesos relacionados con la ciberseguridad.",
        descriptionDetail:
          "Curso práctico enfocado en el uso de Python para automatizar tareas de seguridad y optimizar procesos técnicos. Incluye análisis automatizado de logs, procesamiento de archivos, monitoreo, detección de actividades sospechosas y automatización de tareas repetitivas. También introduce el desarrollo de scripts personalizados para mejorar la eficiencia de los flujos de trabajo y apoyar procesos de análisis y respuesta ante incidentes.",
      },
      linuxSqlTools: {
        name: "Herramientas Linux y SQL para Ciberseguridad",
        description:
          "Formación en Linux y SQL aplicados al análisis, administración y seguridad de sistemas.",
        descriptionDetail:
          "Curso técnico enfocado en el uso de herramientas Linux y consultas SQL dentro de entornos de ciberseguridad. Incluye navegación por sistemas de archivos, permisos, procesos, comandos de terminal y fundamentos de shell, además de consultas, filtrado y análisis de información mediante SQL. También aborda el uso de estas herramientas para investigaciones de seguridad, análisis de datos, administración de sistemas y revisión de incidentes.",
      },
    },
  },

  contact: {
    tag: "Contacto",
    title: "¿Tienes un proyecto",
    titleHighlight: "o buscas talento?",
    sectionTitle: "Contáctame",
    description:
      "Hablemos. Cuéntame qué necesitas y te mostraré cómo puedo aportar.",
    channels: {
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      email: "Email",
      resume: "Curriculum",
    },
  },

  chatbot: {
    title: "Chatbot",
    welcome: "Hola, soy el asistente del portafolio. ¿En qué puedo ayudarte?",
    inputPlaceholder: "Escribe tu pregunta aquí...",
    error:
      "Lo siento, ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.",
    send: "Enviar",
  },
};
