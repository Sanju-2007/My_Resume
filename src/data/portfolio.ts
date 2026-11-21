export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured?: boolean;
  layout: "featured-hero" | "asymmetric-split" | "dark-showcase" | "editorial-card";
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  year: string;
  accentColor?: string;
  architectureDetails?: {
    components: string[];
    flowDescription: string;
  };
}

export interface SkillCategory {
  index: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "work" | "education" | "leadership" | "achievement";
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  coursework: string[];
  highlights: string[];
}

export interface CurrentFocusItem {
  title: string;
  topic: string;
  description: string;
  readingOrBuilding: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    preferredName: string;
    monogram: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    status: {
      indicator: "available" | "busy" | "exploring";
      text: string;
      subtext?: string;
    };
    location: string;
    email: string;
    phone: string;
    resumeUrl: string;
    socialLinks: {
      name: string;
      url: string;
      handle: string;
      icon: "github" | "linkedin" | "twitter" | "mail";
    }[];
  };
  about: {
    headline: string;
    leadParagraph: string;
    paragraphs: string[];
    principles: {
      number: string;
      title: string;
      description: string;
    }[];
    quickFacts: {
      label: string;
      value: string;
    }[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  currentFocus: CurrentFocusItem[];
  achievements: {
    title: string;
    issuer: string;
    year: string;
    description: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "GURIJALA SRI KRISHNA SANJAY VARMA",
    preferredName: "Sanjay Varma",
    monogram: "GSK",
    eyebrow: "COMPUTER SCIENCE ENGINEER · AI & SYSTEMS DEVELOPER",
    headline: "Building intelligent software and resilient digital systems.",
    subheadline:
      "Enthusiastic Computer Science student at JNTUH with a passion for software engineering, artificial intelligence, and systems development. Supported by hands-on academic AI projects and leadership experience as a Class Representative.",
    status: {
      indicator: "available",
      text: "Open to Software Engineering & AI Internships",
      subtext: "Eager to apply technical knowledge and gain industry experience",
    },
    location: "Hyderabad, India · Open to Relocation & Remote",
    email: "gsksanjayvarma777@gmail.com",
    phone: "+91-7702856770",
    resumeUrl: "/resume.pdf",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Sanju-2007",
        handle: "Sanju-2007",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/g-s-k-sanjay-varma",
        handle: "g-s-k-sanjay-varma",
        icon: "linkedin",
      },
      {
        name: "Email",
        url: "mailto:gsksanjayvarma777@gmail.com",
        handle: "gsksanjayvarma777@gmail.com",
        icon: "mail",
      },
    ],
  },

  about: {
    headline: "Curious by nature. Engineer by practice.",
    leadParagraph:
      "I view software engineering as the art of bridging rigorous mathematical and computational foundations with intuitive, high-performance software products.",
    paragraphs: [
      "I am a Computer Science student at JNTUH University College of Engineering, Hyderabad. My engineering journey is driven by an obsession with understanding how complex systems function—from computer vision pipelines and low-latency network synchronization to deep learning architectures.",
      "In my projects, I focus on tangible, real-world utility: whether architecting 'Attendify' to automate classroom presence for 50+ students in under 12 seconds using 512-D face embeddings, or simulating sub-micro-radian optical pointing algorithms in 'OptiLign' across turbulent environments.",
      "Beyond code, I have served as a Class Representative (CR) for over a year, bridging communication between students and faculty, while also contributing to campus events like the QUEST National-Level Technical Symposium. I am eager to apply my technical knowledge and contribute effectively to dynamic engineering teams.",
    ],
    principles: [
      {
        number: "01",
        title: "Rigorous Fundamentals",
        description:
          "Strong grounding in Data Structures, Algorithms, Operating Systems, and DBMS underpins everything from microservices to AI pipelines.",
      },
      {
        number: "02",
        title: "Speed with Purpose",
        description:
          "Optimize inference paths and network boundaries. Deliver sub-second responses whether matching biometric embeddings or synchronizing audio.",
      },
      {
        number: "03",
        title: "End-to-End Ownership",
        description:
          "From training/integrating vision models with ONNX Runtime to crafting responsive Next.js frontends and PostgreSQL schemas.",
      },
      {
        number: "04",
        title: "Collaborative Leadership",
        description:
          "Clear technical communication, empathy for team members, and proactive coordination built through leadership as Class Representative.",
      },
    ],
    quickFacts: [
      { label: "Institution", value: "JNTUH UCEH, Hyderabad" },
      { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
      { label: "Current CGPA", value: "8.025 / 10.0" },
      { label: "Intermediate Score", value: "976 / 1000 (97.6% Distinction)" },
    ],
  },

  projects: [
    {
      id: "attendify-ai",
      title: "Attendify — AI Attendance System",
      tagline: "Classroom presence verification via multi-face recognition on group photos",
      category: "Computer Vision & Full-Stack AI",
      featured: true,
      layout: "featured-hero",
      badge: "Featured AI Project",
      year: "2024",
      accentColor: "#315EFB",
      problem:
        "Manual roll-call in large classrooms wastes 10–15 minutes of lecture time and is prone to proxy attendance, human tracking errors, and tedious administrative reporting.",
      solution:
        "Engineered an automated AI attendance platform that verifies an entire lecture hall from a single group photograph using deep facial detection, feature extraction, and high-dimensional cosine similarity matching.",
      contribution:
        "As AI Service Developer on the team, developed the Python FastAPI microservice integrating RetinaFace detection, InsightFace 512-D embedding extraction, and ONNX Runtime inference, connected to a Next.js/Prisma/PostgreSQL dashboard.",
      technologies: [
        "Python",
        "FastAPI",
        "InsightFace",
        "RetinaFace",
        "OpenCV",
        "ONNX Runtime",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma"
      ],
      metrics: [
        { label: "50+ Students", value: "< 12 sec" },
        { label: "Embedding Vector", value: "512-Dim" },
        { label: "Attendance Alerts", value: "Automated" },
      ],
      keyFeatures: [
        "Multi-face detection in high-resolution classroom group photos with RetinaFace",
        "512-dimensional facial feature extraction via InsightFace with ONNX Runtime acceleration",
        "Vector cosine similarity matching against registered student embedding databases",
        "Automated low-attendance email alerts, historical analytics, and administrative management portals",
      ],
      githubUrl: "https://github.com/Sanju-2007/Attendify",
      liveUrl: "https://github.com/Sanju-2007/Attendify",
      architectureDetails: {
        components: [
          "Next.js Web Client",
          "FastAPI AI Microservice",
          "RetinaFace Multi-Face Detector",
          "InsightFace 512-D Extractor",
          "Prisma ORM & PostgreSQL",
          "Automated Email Dispatcher"
        ],
        flowDescription:
          "Group Photo -> RetinaFace Crop -> InsightFace 512-D Embeddings -> Vector Cosine Matching -> PostgreSQL Attendance Log -> Alert Trigger",
      },
    },
    {
      id: "optilign-fsoc",
      title: "OptiLign — Optical PAT Tracking System",
      tagline: "AI-assisted Free-Space Optical Communication pointing, acquisition & tracking platform",
      category: "Physics Simulation & Systems Engineering",
      featured: true,
      layout: "dark-showcase",
      badge: "Advanced Systems Project",
      year: "2024",
      accentColor: "#10B981",
      problem:
        "Free-space optical communication links offer gigabit/terabit speeds but require sub-micro-radian beam alignment. Evaluating algorithms traditionally requires multi-million dollar optical benches and physical gimbals vulnerable to atmospheric turbulence.",
      solution:
        "Built a modular, physics-based simulation and verification platform for FSOC PAT tracking. Implements an autonomous coarse-to-fine virtual camera tracking pipeline delivering 18–22 nano-radian pointing accuracy without physical gimbals.",
      contribution:
        "Architected the modular Python pipeline, authored atmospheric turbulence jitter models, implemented Fast-Steering Mirror (FSM) control loops, and ensured 100% lock availability backed by 337 passing automated test suites.",
      technologies: [
        "Python 3.12+",
        "NumPy",
        "SciPy",
        "Computer Vision",
        "Mypy Strict",
        "Ruff",
        "Physics Modeling",
        "Pytest"
      ],
      metrics: [
        { label: "FSM Accuracy", value: "18–22 nrad" },
        { label: "Lock Availability", value: "100.0%" },
        { label: "Test Suites", value: "337 Passed" },
      ],
      keyFeatures: [
        "Sub-micro-radian coarse-to-fine autonomous visual beam acquisition and tracking",
        "Real-time compensation for atmospheric wavefront turbulence and high-frequency jitter",
        "Strictly typed codebase with Mypy Strict and comprehensive 337 automated test verification",
        "Hardware-free evaluation replacing expensive optical benches with virtual camera geometry",
      ],
      githubUrl: "https://github.com/Sanju-2007/OptiLign",
      liveUrl: "https://github.com/Sanju-2007/OptiLign",
      architectureDetails: {
        components: [
          "Virtual Optical Beam Sensor",
          "Turbulence Atmosphere Simulator",
          "Coarse Spiral Acquisition Engine",
          "Fine Fast-Steering Mirror (FSM) Closed Loop",
          "Performance Verification Suite"
        ],
        flowDescription:
          "Turbulent Beam Source -> Virtual Camera Acquisition -> Centroid Extraction -> FSM Closed-Loop Feedback -> 18 nrad Alignment Lock",
      },
    },
    {
      id: "sony-presence",
      title: "Sony — Social Listening & Presence Platform",
      tagline: "Cross-platform synchronized music listening with low-latency WebRTC voice rooms",
      category: "Real-Time Systems & Web Applications",
      featured: true,
      layout: "asymmetric-split",
      badge: "Real-Time Web Platform",
      year: "2024",
      accentColor: "#4F46E5",
      problem:
        "Synchronized group listening applications suffer from audio desynchronization across heterogeneous devices, awkward voice chat volume collisions, and complex copyrighted audio relay restrictions.",
      solution:
        "Engineered a production-grade social listening platform featuring an authoritative PlaybackSyncEngine with micro-drift rate nudging, an automatic WebRTC voice ducking state machine, and zero-copyright server relay.",
      contribution:
        "Designed the clock drift compensation algorithm, integrated LiveKit WebRTC SFU for low-latency voice, and implemented the 'Sing Together' exponential audio ducking state machine.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "LiveKit WebRTC",
        "WebSockets",
        "Tailwind CSS",
        "State Machines"
      ],
      metrics: [
        { label: "Micro-Drift Sync", value: "< 150 ms" },
        { label: "Voice Attenuation", value: "40% @ 150ms" },
        { label: "Copyright Relay", value: "0 Bytes" },
      ],
      keyFeatures: [
        "Authoritative playback sync engine with adaptive 0.95x/1.05x speed nudging for drift under 800ms",
        "Audio ducking state machine: automatically attenuates music to 40% with 800ms speech hold during voice activity",
        "Realtime voice rooms powered by LiveKit WebRTC SFU with high audio fidelity",
        "Zero-copyright architecture: client devices drive playback directly via authorized provider SDKs",
      ],
      githubUrl: "https://github.com/Sanju-2007/Sony",
      liveUrl: "https://github.com/Sanju-2007/Sony",
    },
    {
      id: "hindsight-ai-memory",
      title: "Hindsight-Based AI Memory System",
      tagline: "Long-term episodic retention and personalized contextual retrieval for LLM agents",
      category: "Artificial Intelligence & RAG",
      featured: false,
      layout: "editorial-card",
      badge: "Active AI Research",
      year: "2024 – Present",
      accentColor: "#E11D48",
      problem:
        "Standard LLM agents suffer from context window amnesia, losing user preferences, past session context, and factual continuity across recurring interactions.",
      solution:
        "Developing a hierarchical memory system that allows LLM-powered agents to retain, retrieve, and synthesize information from past interactions using contextual RAG and semantic vector routing.",
      contribution:
        "Designing the memory retention pipeline, vector embedding stores, contextual retrieval heuristics, and evaluating response consistency across long-horizon dialogues.",
      technologies: [
        "Python",
        "LLMs",
        "RAG",
        "Vector Embeddings",
        "LangChain",
        "FastAPI",
        "NLP"
      ],
      metrics: [
        { label: "Focus", value: "Long-Term Memory" },
        { label: "Retrieval", value: "Contextual RAG" },
        { label: "Status", value: "In Development" },
      ],
      keyFeatures: [
        "Long-term episodic memory indexing for autonomous AI agent architectures",
        "Contextual retrieval and semantic relevance scoring to prevent conversational hallucination",
        "Integration with Retrieval-Augmented Generation (RAG) for continuous personalization",
        "Structured memory pruning and consolidation across multi-session user interactions",
      ],
      githubUrl: "https://github.com/Sanju-2007",
      liveUrl: "https://github.com/Sanju-2007",
    },
  ],

  skills: [
    {
      index: "01",
      name: "Programming Languages",
      description: "Core languages used across systems programming, AI services, and academic coursework.",
      skills: [
        { name: "C++", highlight: true, tags: ["DSA", "OOP", "Competitive Programming", "Algorithms"] },
        { name: "Python", highlight: true, tags: ["FastAPI", "OpenCV", "InsightFace", "ONNX", "NumPy"] },
        { name: "SQL", highlight: true, tags: ["PostgreSQL", "MySQL", "Prisma", "Relational Queries"] },
        { name: "Java", highlight: false, tags: ["OOP", "Core Architecture", "Data Structures"] },
        { name: "JavaScript", highlight: true, tags: ["ESNext", "Async/Await", "React.js", "Node.js"] },
        { name: "C", highlight: false, tags: ["Pointers", "Memory Management", "Systems Basics"] },
      ],
    },
    {
      index: "02",
      name: "Web & Frameworks",
      description: "Modern full-stack web frameworks and asynchronous backend service layers.",
      skills: [
        { name: "Next.js", highlight: true, tags: ["App Router", "SSR", "Modern Web", "TypeScript"] },
        { name: "React.js", highlight: true, tags: ["Hooks", "Component Architecture", "State Management"] },
        { name: "Node.js", highlight: true, tags: ["REST APIs", "Microservices", "Event-Driven"] },
        { name: "FastAPI", highlight: true, tags: ["High-Throughput", "Async Python", "ONNX Ingestion"] },
        { name: "Prisma ORM", highlight: true, tags: ["Type-Safe Models", "Schema Migrations", "PostgreSQL"] },
        { name: "Tailwind CSS", highlight: false, tags: ["Design Systems", "Responsive UI", "Modern Styling"] },
      ],
    },
    {
      index: "03",
      name: "Artificial Intelligence & Vision",
      description: "Applied machine learning, deep neural representations, and facial recognition pipelines.",
      skills: [
        { name: "InsightFace & RetinaFace", highlight: true, tags: ["512-D Embeddings", "Multi-Face Detection"] },
        { name: "OpenCV", highlight: true, tags: ["Image Processing", "Video Streams", "Face Cropping"] },
        { name: "ONNX Runtime", highlight: true, tags: ["Model Acceleration", "Inference Optimization"] },
        { name: "Machine Learning (ML / DL)", highlight: false, tags: ["Supervised Learning", "Deep Networks"] },
        { name: "LLM, RAG & Fine-Tuning", highlight: true, tags: ["Contextual Memory", "Prompt Systems", "NLP"] },
        { name: "Cosine Similarity Matching", highlight: false, tags: ["High-Dim Vectors", "Biometric Verification"] },
      ],
    },
    {
      index: "04",
      name: "Databases & Storage",
      description: "Relational database modeling, document stores, and vector data persistence.",
      skills: [
        { name: "PostgreSQL", highlight: true, tags: ["Relational Integrity", "Prisma", "Attendify DB"] },
        { name: "MySQL", highlight: false, tags: ["Database Management Systems", "ACID", "Queries"] },
        { name: "MongoDB", highlight: false, tags: ["NoSQL", "Document Collections", "JSON Storage"] },
        { name: "Vector Databases", highlight: true, tags: ["Embedding Indices", "Cosine Search", "RAG"] },
      ],
    },
    {
      index: "05",
      name: "Tools & Platforms",
      description: "Developer workflows, version control, build pipelines, and containerization.",
      skills: [
        { name: "Git & GitHub", highlight: true, tags: ["Version Control", "Open Source", "Sanju-2007"] },
        { name: "Docker", highlight: true, tags: ["Containers", "Microservices", "Environment Reproducibility"] },
        { name: "Jenkins", highlight: false, tags: ["CI/CD Pipelines", "Automated Builds"] },
        { name: "Xcode", highlight: false, tags: ["macOS / Apple Tools", "Development"] },
        { name: "VS Code", highlight: false, tags: ["Primary IDE", "Extensions", "Productivity"] },
      ],
    },
    {
      index: "06",
      name: "Computer Science Fundamentals",
      description: "Core academic grounding underpinning software development and problem solving.",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", highlight: true, tags: ["Trees", "Graphs", "DP", "Complexity"] },
        { name: "Operating Systems (OS)", highlight: true, tags: ["Processes", "Threads", "Concurrency", "Memory"] },
        { name: "Database Management Systems (DBMS)", highlight: true, tags: ["Normalization", "Indexing", "Transactions"] },
        { name: "Computer Networks (CN)", highlight: false, tags: ["TCP/IP", "WebSockets", "HTTP/2", "WebRTC"] },
        { name: "Object-Oriented Programming (OOP)", highlight: false, tags: ["SOLID", "Design Patterns", "C++ / Java"] },
      ],
    },
  ],

  experience: [
    {
      id: "attendify-ai-dev",
      role: "AI Service Developer",
      organization: "Attendify — Team Engineering Project",
      period: "May 2024 – Present",
      location: "Hyderabad, India",
      type: "work",
      description: [
        "Architected an AI-based attendance platform that automates classroom presence verification using facial recognition from classroom group photos.",
        "Developed a Python FastAPI microservice leveraging InsightFace, RetinaFace, OpenCV, and ONNX Runtime for face registration and multi-face recognition.",
        "Implemented cosine similarity matching on 512-dimensional face embeddings, enabling attendance processing for 50+ students in under 12 seconds.",
        "Integrated attendance analytics, automated low-attendance email alerts, and teacher/admin management features using Next.js and Prisma PostgreSQL.",
      ],
      technologies: ["Python", "FastAPI", "InsightFace", "RetinaFace", "OpenCV", "ONNX Runtime", "PostgreSQL", "Next.js"],
    },
    {
      id: "class-rep",
      role: "Class Representative (CR)",
      organization: "JNTUH University College of Engineering, Hyderabad",
      period: "Sept 2024 – Present (1 Year)",
      location: "Hyderabad, India",
      type: "leadership",
      description: [
        "Represented the Computer Science & Engineering class cohort, acting as the primary liaison between students and faculty members.",
        "Coordinated academic timetables, lab sessions, and administrative announcements across multiple academic semesters.",
        "Facilitated student feedback loops with faculty to resolve academic queries, exam logistics, and practical lab schedules.",
      ],
      technologies: ["Leadership", "Communication", "Academic Coordination", "Student Governance"],
    },
    {
      id: "quest-volunteer",
      role: "Technical Volunteer & Operations",
      organization: "QUEST — National-Level Technical Symposium",
      period: "College Symposium",
      location: "JNTUH Campus, Hyderabad",
      type: "leadership",
      description: [
        "Supported backend operations and logistics for the national-level engineering technical symposium.",
        "Assisted with event setup, department technical workshops, and participant registrations for competitive technical events.",
        "Collaborated with senior organizing committee members to ensure smooth, punctual execution of technical symposium sessions.",
      ],
      technologies: ["Event Operations", "Logistics", "Technical Support", "Coordination"],
    },
  ],

  education: [
    {
      id: "jntuh-btech",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "JNTUH University College of Engineering, Hyderabad",
      period: "Sept 2024 – Present",
      location: "Hyderabad, Telangana, India",
      grade: "CGPA: 8.025 / 10.0",
      coursework: [
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "Computer Networks (CN)",
        "Object-Oriented Programming (OOP)",
        "Discrete Mathematics",
        "Software Engineering",
      ],
      highlights: [
        "Serving as Class Representative (CR), coordinating academic and departmental operations",
        "Active technical contributor building AI computer vision systems (Attendify) and optical simulations (OptiLign)",
        "Volunteer for QUEST National-Level Technical Symposium",
      ],
    },
    {
      id: "tirumala-intermediate",
      degree: "Andhra Pradesh Board of Intermediate Education",
      institution: "Tirumala Jr College, Katheru, Rajamahendravaram",
      period: "Jul 2022 – May 2024",
      location: "Rajamahendravaram, Andhra Pradesh, India",
      grade: "Marks: 976 / 1000 (97.6% Top Tier Distinction)",
      coursework: ["Mathematics", "Physics", "Chemistry"],
      highlights: [
        "Achieved an exceptional academic distinction of 976 out of 1000 marks",
        "Strong analytical and problem-solving foundation in mathematics and physical sciences",
        "Proficiency and active participation in multiple collegiate sports, especially cricket",
      ],
    },
  ],

  currentFocus: [
    {
      title: "Facial Recognition & Embedded Vision",
      topic: "Computer Vision & Edge AI",
      description:
        "Optimizing 512-dimensional face embedding extraction using InsightFace and ONNX Runtime for real-time classroom group photo verification in Attendify.",
      readingOrBuilding: "Scaling multi-face clustering and sub-10s recognition pipelines in Attendify.",
      tags: ["InsightFace", "RetinaFace", "OpenCV", "ONNX Runtime", "FastAPI"],
    },
    {
      title: "Hindsight-Based AI Memory Architecture",
      topic: "LLMs & Artificial Intelligence",
      description:
        "Exploring memory management, contextual retrieval, and RAG integration to enable conversational AI agents to retain and utilize long-term interaction history.",
      readingOrBuilding: "Designing hierarchical episodic memory schemas and relevance scoring algorithms.",
      tags: ["LLMs", "RAG", "Memory Systems", "LangChain", "Vector DBs"],
    },
    {
      title: "Free-Space Optical Pointing & Tracking (PAT)",
      topic: "Systems & Simulation",
      description:
        "Simulating autonomous coarse-to-fine virtual camera tracking with 18–22 nano-radian pointing accuracy under severe atmospheric turbulence in OptiLign.",
      readingOrBuilding: "Validating closed-loop Fast-Steering Mirror (FSM) control algorithms with 337 automated test suites.",
      tags: ["OptiLign", "Python 3.12", "Physics Simulation", "NumPy", "Mypy Strict"],
    },
    {
      title: "Real-Time Audio Synchronization & WebRTC",
      topic: "Real-Time Web Systems",
      description:
        "Building clock drift compensation algorithms (<150ms micro-drift nudging) and automatic voice ducking state machines on LiveKit WebRTC in Sony.",
      readingOrBuilding: "Experimenting with multi-device synchronized audio presence channels.",
      tags: ["TypeScript", "Next.js", "WebRTC", "LiveKit", "WebSockets"],
    },
  ],

  achievements: [
    {
      title: "Academic Distinction — 976 / 1000 Marks",
      issuer: "Andhra Pradesh Board of Intermediate Education",
      year: "2024",
      description:
        "Secured a top-tier score of 976 out of 1000 (97.6%) at Tirumala Jr College, demonstrating strong mathematical and analytical problem-solving excellence.",
    },
    {
      title: "Elected Class Representative (CR)",
      issuer: "JNTUH University College of Engineering, Hyderabad",
      year: "2024 – Present",
      description:
        "Trusted by peers and faculty to represent the Computer Science & Engineering class, leading student-faculty communication and departmental logistics.",
    },
    {
      title: "Lead AI Developer on Attendify",
      issuer: "Academic Engineering Project",
      year: "2024",
      description:
        "Successfully developed and delivered a high-performance facial recognition microservice processing 50+ students in under 12 seconds.",
    },
    {
      title: "QUEST National-Level Symposium Volunteer",
      issuer: "JNTUH Department of Computer Science",
      year: "2024",
      description:
        "Recognized for contributing to the successful backend operations, logistics, and technical execution of the national-level technical symposium.",
    },
  ],
};
