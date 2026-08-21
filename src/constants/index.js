export const myProjects = [
  {
    id: 1,
    title: "PawConnect",
    description:
      "A full-stack social platform for pet owners, built for the LBAW course using Laravel, PostgreSQL, and modern web development practices.",
    subDescription: [
      "Developed a complete social network featuring posts, comments, groups, private messaging, and an online pet adoption center.",
      "Implemented secure authentication, authorization, and role-based access control using Laravel’s built-in mechanisms.",
      "Designed a responsive and accessible UI using Blade templates, Bootstrap, and custom components.",
      "Built a robust PostgreSQL database with relational modeling, triggers, and stored procedures for performance and consistency.",
      "Implemented RESTful routes, service layers, and modular controllers following MVC best practices.",
      "Containerized the application using Docker for consistent development and deployment environments."
    ],
    href: "https://github.com/Forreca05/lbaw-pawconnect-project",
    logo: "",
    image: "/assets/projects/pawconnect.mp4",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 3, name: "Bootstrap", path: "/assets/logos/bootstrap.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" }
    ],
  },

  {
    id: 2,
    title: "Jaba is You",
    description:
      "A recreation of the well-known puzzle game “Baba Is You”, developed for the LDTS course.",
    subDescription: [
      "Designed and implemented the game using object-oriented principles and clean architecture.",
      "Applied SOLID principles, design patterns (State, Command, Factory), and modular abstractions to ensure extensibility.",
      "Developed a custom game engine in Java supporting rule parsing, entity interactions, and dynamic game logic.",
      "Implemented a robust testing suite using JUnit, ensuring correctness and maintainability.",
      "Collaborated in a team-based workflow with Git, code reviews, and continuous refactoring."
    ],
    href: "https://github.com/Forreca05/Jaba-is-You",
    logo: "",
    image: "/assets/projects/jaba-is-you.gif",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/java.svg" }
    ],
  },

  {
    id: 3,
    title: "Automated Code Documentation System",
    description:
      "An AI-powered system that generates technical documentation automatically using CrewAI and large language models.",
    subDescription: [
      "Developed a multi-agent architecture using CrewAI to analyze Python codebases and produce structured documentation.",
      "Implemented specialized agents for code parsing, documentation generation, and task coordination.",
      "Designed a modular pipeline enabling autonomous end-to-end processing: code ingestion → analysis → documentation output.",
      "Applied prompt-engineering strategies to improve clarity, consistency, and formatting of generated documentation.",
      "Delivered a functional prototype demonstrating automated documentation for arbitrary Python projects."
    ],
    href: "https://github.com/Forreca05/AutoDocumentationWithCrewAI",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "CrewAI", path: "/assets/logos/crewai.svg" },
      { id: 3, name: "LLMs", path: "/assets/logos/LLMs.svg" }
    ],
  },

  {
    id: 4,
    title: "LCOM Snake Game",
    description:
      "An advanced and interactive version of Snake and Snake.io, built in C using the LCOM/Minix environment.",
    subDescription: [
      "Developed a full game engine in C using low-level programming concepts taught in the LCOM course.",
      "Implemented multiple I/O device integrations, including timer, keyboard, mouse, graphics card, and serial port.",
      "Designed modular game components such as snake logic, apples, scoring system, game states, and menu navigation.",
      "Built both Singleplayer and Multiplayer modes, including remote multiplayer via serial port communication between VMs.",
      "Created multiple gameplay variations (classic grid mode, continuous movement .io mode, special apples with effects).",
      "Structured the project into clean modules for input handling, rendering, game logic, and asset management."
    ],
    href: "https://github.com/Forreca05/LCOM-Snake-Game-Projeto-2025",
    logo: "",
    image: "/assets/projects/snake-game.mp4",
    tags: [
      { id: 1, name: "C", path: "/assets/logos/c.svg" },
      { id: 2, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 3, name: "Minix", path: "/assets/logos/minix.svg" }
    ],
  },

  {
    id: 5,
    title: "MealIdeas",
    description:
      "A lightweight mobile application that helps users discover meal ideas by fetching recipes from an external API.",
    subDescription: [
      "Developed a mobile application using FlutterFlow with a clean and responsive UI for browsing meal suggestions.",
      "Integrated the MealDB API to fetch recipes, ingredients, and cooking instructions dynamically.",
      "Implemented search functionality allowing users to explore meals by name or category.",
      "Designed modular components for recipe cards, detailed views, and ingredient lists.",
      "Ensured smooth user experience through efficient state management and API request handling."
    ],
    href: "https://github.com/Forreca05/MealIdeas",
    logo: "",
    image: "/assets/projects/mealideas.mp4",
    tags: [
      { id: 1, name: "FlutterFlow", path: "/assets/logos/flutterflow.svg" },
      { id: 2, name: "API", path: "/assets/logos/api.svg" }
    ],
  },

  {
    id: 6,
    title: "Investments Chatbot",
    description:
      "A Retrieval Augmented Generation (RAG) based AI chatbot developed during a Deloitte training course, designed to answer questions and provide insights about investments using a document knowledge base.",
    subDescription: [
      "Built a RAG system under Deloitte supervision that parses documents, embeds them into a vector database, and retrieves relevant information for user queries.",
      "Implemented FAISS indexing for efficient semantic search across financial documents.",
      "Integrated a large-language-model (LLM) to generate coherent and context-aware responses for investment and finance questions.",
      "Structured the project into modular components including document ingestion, embeddings, retrieval, and an interactive Gradio interface.",
      "Set up a virtual environment and documented installation and usage instructions for reproducibility and ease of adoption."
    ],
    href: "https://github.com/Forreca05/Investments-Chatbot",
    logo: "",
    image: "/assets/projects/investments-chatbot.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "LLM", path: "/assets/logos/LLMs.svg" },
      { id: 3, name: "Gradio", path: "/assets/logos/gradio.svg" }
    ],
  },

  {
    id: 7,
    title: "CineLista",
    description:
      "A full-featured movie and TV show discovery platform with watchlists, ratings, and personal statistics, built with vanilla HTML/CSS/JavaScript and serverless functions.",
    subDescription: [
      "Built a discovery experience powered by the TMDb API, with a rotating hero, curated rows (popular, top-rated, trending), genre filters, live search suggestions, and a 'what should I watch' roulette.",
      "Implemented accounts, a personal watchlist (to watch / watching / watched), star ratings per show or episode, and personal notes, all stored client-side.",
      "Added episode/season tracking, an upcoming-episodes calendar, viewing statistics (time watched, average rating, genre breakdown), and gamified badges.",
      "Secured the TMDb API key with a serverless proxy (Vercel Functions) so it never reaches the browser, adding CDN and in-memory caching to reduce rate-limit pressure.",
      "Integrated Supabase for public reviews and shareable watchlist links, protected with Row Level Security, plus PWA support with offline caching and a light/dark theme."
    ],
    href: "https://github.com/Forreca05/CineLista",
    liveHref: "https://cine-lista-lake.vercel.app/",
    logo: "",
    image: "/assets/projects/cinelista.png",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "API", path: "/assets/logos/api.svg" }
    ],
  },

  {
    id: 8,
    title: "Protein Compensatory Interactions Detector",
    description:
      "A web platform developed with FEUP and ICBAS that automates the detection of compensatory interactions in proteins, combining sequence alignment with 3D structural analysis.",
    subDescription: [
      "Built an end-to-end pipeline that fetches protein sequences and orthologs from Ensembl, aligns them across species, and highlights human disease-associated mutations.",
      "Implemented automatic mapping of identified mutations onto 3D protein structures (via AlphaFold/PDB), calculating spatial distances between residues to flag potential compensatory interactions.",
      "Developed a React + Tailwind CSS frontend for interactive sequence alignment views, 3D structure exploration, and automated interaction reports.",
      "Built a Python/FastAPI backend handling external API integration, sequence processing, and analysis logic, backed by a PostgreSQL database for traceability.",
      "Worked in a 4-person interdisciplinary team as part of a university-industry integrator project, following an agile process with biweekly sprints and continuous validation from FEUP/ICBAS supervisors."
    ],
    href: "https://github.com/jPMm7/PI_V2",
    liveHref: "https://pi-v2-seven.vercel.app/",
    logo: "",
    image: [
      "/assets/projects/pi-poster.png",
      "/assets/projects/pi-homepage.png"
    ],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" }
    ],
  }
];




export const mySocials = [
  /*{
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },*/
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/jo%C3%A3o-ferreira-9a31222b9/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/joao.ferreira.2005/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Forreca05",
    icon: "/assets/socials/github.svg",
  }
];

export const experiences = [
  {
    job: "Junior University Monitor",
    institution: "University of Porto",
    date: "July 2024",
    contents: [
      "Mentored high school students participating in the Junior University summer program at the University of Porto.",
      "Supported students during hands-on activities, workshops, and practical sessions across different academic areas.",
      "Helped explain university-level concepts in an accessible and engaging way, adapting content to students’ backgrounds.",
      "Collaborated with professors and researchers in organizing activities and ensuring a positive learning experience.",
      "Encouraged curiosity, critical thinking, and interest in higher education and scientific fields."
    ],
  },
  {
    job: "Summer Internship",
    institution: "Consulteer",
    date: "July 2025 - August 2025",
    contents: [
      "Designed and implemented an automated code documentation system using CrewAI and large language models.",
      "Developed multi-agent workflows capable of analyzing large codebases and generating consistent, high-quality technical documentation.",
      "Integrated LLM-based pipelines into existing development workflows, improving maintainability and reducing manual documentation overhead.",
      "Collaborated with senior engineers to refine prompt engineering strategies, evaluation metrics, and system reliability.",
      "Delivered a fully functional prototype adopted internally for documentation automation and developer onboarding."
    ],
  },
  {
    job: "Teaching Assistant",
    institution: "Faculty of Engineering, University of Porto",
    date: "October 2025 – January 2026",
    contents: [
      "Provided technical and academic support to students in the LDTS course (2nd year of Computer Engineering at FEUP).",
      "Assisted students with Java programming, object-oriented design principles, and laboratory assignments.",
      "Guided students through debugging techniques, code reviews, and best-practice development workflows.",
      "Clarified theoretical concepts during lab sessions, helping bridge the gap between lectures and practical implementation.",
      "Supported instructors in preparing teaching materials, managing lab sessions, and ensuring a smooth learning experience."
    ],
  },
  { 
    job: "Summer Internship", 
    institution: "Unilinkr", 
    date: "July 2026 - August 2026", 
    contents: [ 
      "Contributed to the development of UniSpot, a platform used during summer events.", 
      "Worked on building, improving, and maintaining Unilinkr platforms.", 
      "Collaborated with the development team to implement new features and improve existing functionality.", 
      "Supported the development of solutions focused on delivering reliable and engaging digital experiences for event users.", 
      "Contributed to the continuous improvement of Unilinkr's products and platform ecosystem." 
    ], 
  }
];
