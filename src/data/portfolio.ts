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
    name: "G S K SANJAY VARMA",
    preferredName: "Sanjay",
    monogram: "SG",
    eyebrow: "SOFTWARE ENGINEER · DEVELOPER · BUILDER",
    headline: "Building thoughtful digital experiences.",
    subheadline:
      "I am a software engineering student passionate about building meaningful products, exploring technology, and solving problems through code.",
    status: {
      indicator: "available",
      text: "Available for Software Engineering Roles & Internships",
      subtext: "Summer / Fall Opportunities",
    },
    location: "India · Open to Global Remote & Relocation",
    email: "gsksanjayvarma@gmail.com",
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
        url: "https://linkedin.com/in/sanjayvarma",
        handle: "sanjayvarma",
        icon: "linkedin",
      },
      {
        name: "Twitter / X",
        url: "https://x.com/sanjayvarma",
        handle: "@sanjayvarma",
        icon: "twitter",
      },
      {
        name: "Email",
        url: "mailto:gsksanjayvarma@gmail.com",
        handle: "gsksanjayvarma@gmail.com",
        icon: "mail",
      },
    ],
  },

  about: {
    headline: "Curious by nature. Engineer by practice.",
    leadParagraph:
      "I view software engineering not just as writing code, but as the art of making complex systems intuitive, durable, and remarkably fast.",
    paragraphs: [
      "My journey began with an inquisitive fascination for how simple lines of logic could orchestrate complex interactions across thousands of machines. That curiosity quickly transformed into an obsession with digital craftsmanship, clean software design, and resilient architecture.",
      "Whether designing clean, responsive user interfaces with pixel-level precision or architecting scalable backend APIs, I care deeply about the intersection of aesthetics and systems engineering. Great software should feel effortless to the user while maintaining uncompromising rigor under the hood.",
      "As a software engineering student, I spend my days building end-to-end applications, dissecting distributed systems papers, and refining developer tooling. I believe the best engineers are relentless learners who bridge empathy for end users with deep technical fundamentals.",
    ],
    principles: [
      {
        number: "01",
        title: "Clarity over complexity",
        description:
          "Write readable, idiomatic code that your future self and teammates can reason about without cognitive strain.",
      },
      {
        number: "02",
        title: "Performance is non-negotiable",
        description:
          "Speed is a fundamental user right. Optimize critical paths, eliminate unnecessary allocations, and respect device resources.",
      },
      {
        number: "03",
        title: "Design is how it works",
        description:
          "Visual refinement means nothing if the state model is fragile. Good architecture and delightful UI are two sides of one coin.",
      },
      {
        number: "04",
        title: "Sweat the invisible details",
        description:
          "From keyboard accessibility to zero-downtime error boundaries, the unglamorous 10% separates great software from ordinary code.",
      },
    ],
    quickFacts: [
      { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
      { label: "Graduation", value: "Class of 2026" },
      { label: "Core Competency", value: "Full Stack & Distributed Systems" },
      { label: "Algorithmic Problems", value: "500+ Solved (LeetCode / Codeforces)" },
    ],
  },

  projects: [
    {
      id: "aether-broker",
      title: "Aether Engine",
      tagline: "High-throughput distributed append-only message broker & streaming log",
      category: "Systems & Distributed Infrastructure",
      featured: true,
      layout: "featured-hero",
      badge: "Signature Project",
      year: "2024",
      accentColor: "#315EFB",
      problem:
        "Standard industrial message brokers like Kafka and RabbitMQ introduce heavy JVM memory footprint and operational friction when deploying lightweight microservices and edge compute clusters.",
      solution:
        "Engineered a zero-copy append-only log streaming broker in Go with Raft partition consensus, memory-mapped disk persistence, and a reactive TypeScript client driver delivering sub-millisecond tail latencies.",
      contribution:
        "Architected the LSM storage engine, implemented binary framing protocol with CRC32 checksums, and built the real-time cluster telemetry dashboard with live throughput visualizations.",
      technologies: ["Go", "TypeScript", "React", "gRPC", "WebSockets", "Raft Consensus", "Tailwind CSS"],
      metrics: [
        { label: "Peak Ingestion", value: "65,000 msg/s" },
        { label: "p99 Tail Latency", value: "1.8 ms" },
        { label: "Memory Footprint", value: "< 24 MB" },
      ],
      keyFeatures: [
        "Memory-mapped zero-copy segment ring buffers for sequential disk writes",
        "Raft consensus protocol for dynamic partition leader election and replication",
        "Lightweight binary TCP framing with automatic CRC32 integrity validation",
        "Web-based telemetry UI displaying real-time stream lag, partition metrics, and cluster topologies",
      ],
      githubUrl: "https://github.com/Sanju-2007/aether-broker",
      liveUrl: "https://aether-stream.dev",
      architectureDetails: {
        components: ["Client Driver", "TCP Protocol Parser", "Raft Consensus Node", "Segment Storage Engine", "WebSocket Observer"],
        flowDescription: "Publisher -> Binary Framing -> Raft Log Replication -> MMap Disk Sync -> Consumer Push & Telemetry",
      },
    },
    {
      id: "linearis-task",
      title: "Linearis Workspace",
      tagline: "Keyboard-first sprint tracker with local-first optimistic mutations",
      category: "Web Application & Developer Productivity",
      featured: true,
      layout: "asymmetric-split",
      badge: "Local-First Architecture",
      year: "2024",
      accentColor: "#4F46E5",
      problem:
        "Engineering teams waste hours waiting for clunky project management tools with multi-second load spinners, poor offline support, and high input latency during sprint triage.",
      solution:
        "Constructed a blistering-fast task management workspace modeled after elite developer tooling. Operates with local SQLite in-browser storage, CRDT conflict resolution, and immediate optimistic UI renders.",
      contribution:
        "Designed the reactive state pipeline, keyboard command palette engine (Cmd+K), virtualized board rendering capable of handling 10,000+ items at 60fps, and end-to-end synchronization engine.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "IndexedDB", "WebSockets", "Zustand"],
      metrics: [
        { label: "Frame Rate", value: "60 FPS locked" },
        { label: "Input Response", value: "< 12 ms" },
        { label: "Offline First", value: "100% resilient" },
      ],
      keyFeatures: [
        "Instant optimistic UI mutations with automated rollback on network dropouts",
        "Full keyboard-driven navigation with customizable hotkeys and quick action command palette",
        "Bidirectional real-time sync with peer presence cursors via WebSocket channels",
        "Infinite canvas sprint roadmap with fluid pan, zoom, and multi-issue dependency links",
      ],
      githubUrl: "https://github.com/Sanju-2007/linearis-workspace",
      liveUrl: "https://linearis-workspace.vercel.app",
    },
    {
      id: "pulse-telemetry",
      title: "PulseEngine APM",
      tagline: "Autonomous service health telemetry & predictive latency anomaly detector",
      category: "Cloud Observability & Platform Engineering",
      featured: true,
      layout: "dark-showcase",
      badge: "Deep Systems Project",
      year: "2023",
      accentColor: "#10B981",
      problem:
        "Cloud-native microservices generate enormous volumes of metric noise, overwhelming on-call developers with false-positive alerts while masking subtle p99 degradation.",
      solution:
        "Created a lightweight telemetry collector and anomaly detector that calculates sliding window quantiles (p50, p90, p99) and flags statistical baseline deviations using dynamic standard deviation bands.",
      contribution:
        "Authored the Python/FastAPI anomaly detection service, implemented high-performance metric ingestion queues with Redis, and crafted the high-contrast dark telemetry observatory.",
      technologies: ["Python", "FastAPI", "Next.js", "Redis", "PostgreSQL", "Docker", "Tailwind CSS"],
      metrics: [
        { label: "Metric Processing", value: "10k points/s" },
        { label: "False Positive Drop", value: "-72%" },
        { label: "Alert Dispatch", value: "< 250 ms" },
      ],
      keyFeatures: [
        "Continuous synthetic endpoint probing with millisecond DNS, TLS, and TTFB breakdown",
        "Statistical outlier detection filtering transient network spikes from genuine outages",
        "Configurable multi-channel alert dispatching to Discord, Slack, and PagerDuty webhooks",
        "Interactive histogram and latency heatmaps rendered with hardware acceleration",
      ],
      githubUrl: "https://github.com/Sanju-2007/pulse-telemetry",
      liveUrl: "https://pulse-apm.dev",
    },
    {
      id: "cognito-research",
      title: "Cognito Neural Canvas",
      tagline: "Multi-document semantic retrieval engine with precise bounding-box citations",
      category: "Information Retrieval & Applied AI",
      featured: false,
      layout: "editorial-card",
      badge: "AI & Retrieval",
      year: "2023",
      accentColor: "#E11D48",
      problem:
        "Research students and engineers struggle with LLM hallucinations when summarizing complex academic papers that lack transparent attribution back to original text sources.",
      solution:
        "Built a semantic research workspace that parses multi-column PDFs, generates dense sentence embeddings, and retrieves source evidence with exact pixel coordinate highlights and verification badges.",
      contribution:
        "Implemented the hybrid BM25 + dense vector reranking pipeline, customized PDF coordinate extraction, and designed the split-screen synthesis canvas.",
      technologies: ["TypeScript", "Python", "React", "Next.js", "LangChain", "ChromaDB", "Tailwind CSS"],
      metrics: [
        { label: "Retrieval Accuracy", value: "94.2%" },
        { label: "Citation Grounding", value: "Exact Box" },
        { label: "Supported Formats", value: "PDF / Markdown" },
      ],
      keyFeatures: [
        "Hybrid sparse-dense ranking combining BM25 keyword matching with vector cosine similarity",
        "Interactive PDF viewer that scrolls directly to and highlights source citations on click",
        "Chain-of-thought verification engine that flags ungrounded statements before displaying output",
        "Exportable synthesis dossiers in Markdown, LaTeX, and clean styled PDF formats",
      ],
      githubUrl: "https://github.com/Sanju-2007/cognito-research",
      liveUrl: "https://cognito-research.dev",
    },
  ],

  skills: [
    {
      index: "01",
      name: "Programming Languages",
      description: "Core languages used across systems, web services, and algorithmic problem solving.",
      skills: [
        { name: "TypeScript", highlight: true, tags: ["Type-Safe Web", "Modern ECMAScript", "Strict Mode"] },
        { name: "JavaScript", highlight: true, tags: ["ESNext", "Async/Await", "Event Loop"] },
        { name: "Go (Golang)", highlight: true, tags: ["Goroutines", "Channels", "Systems Services"] },
        { name: "Python", highlight: true, tags: ["FastAPI", "Data Analysis", "Automation"] },
        { name: "Java", highlight: false, tags: ["OOP", "Collections", "Enterprise Core"] },
        { name: "C / C++", highlight: false, tags: ["Memory Management", "Pointers", "Algorithms"] },
        { name: "SQL", highlight: true, tags: ["Relational Algebra", "Complex Joins", "Indexing"] },
      ],
    },
    {
      index: "02",
      name: "Frontend Engineering",
      description: "Architecting responsive, high-framerate interfaces with meticulous visual design.",
      skills: [
        { name: "React 19 & 18", highlight: true, tags: ["Server Components", "Hooks", "Concurrent Mode"] },
        { name: "Next.js (App Router)", highlight: true, tags: ["SSR/SSG", "API Routes", "Turbopack"] },
        { name: "Tailwind CSS", highlight: true, tags: ["Design Systems", "Custom Config", "JIT Engine"] },
        { name: "Framer Motion", highlight: true, tags: ["Orchestrated Layouts", "Gestures", "Springs"] },
        { name: "HTML5 / Semantic Web", highlight: false, tags: ["Accessibility (WCAG)", "SEO", "Microdata"] },
        { name: "State Management", highlight: false, tags: ["Zustand", "Context API", "Optimistic State"] },
        { name: "WebSockets & SSE", highlight: true, tags: ["Real-time Data", "Client Reconnection", "Streams"] },
      ],
    },
    {
      index: "03",
      name: "Backend Engineering",
      description: "Building scalable, fault-tolerant network services and high-throughput APIs.",
      skills: [
        { name: "Node.js & Express", highlight: true, tags: ["Microservices", "Middleware", "Stream Processing"] },
        { name: "Go Standard Library", highlight: true, tags: ["net/http", "Sync Primitives", "Concurrency"] },
        { name: "FastAPI", highlight: true, tags: ["Pydantic", "Async Endpoints", "OpenAPI"] },
        { name: "RESTful API Design", highlight: false, tags: ["Resource Modeling", "Versioning", "Rate Limiting"] },
        { name: "gRPC & Protocol Buffers", highlight: true, tags: ["Binary Serialization", "RPC Stubs", "HTTP/2"] },
        { name: "Authentication & Security", highlight: false, tags: ["JWT", "OAuth 2.0", "CORS & CSRF"] },
      ],
    },
    {
      index: "04",
      name: "Databases & Storage",
      description: "Designing data models, tuning query performance, and implementing caching tiers.",
      skills: [
        { name: "PostgreSQL", highlight: true, tags: ["ACID Compliance", "Query Optimization", "EXPLAIN ANALYZE"] },
        { name: "Redis", highlight: true, tags: ["In-Memory Cache", "Pub/Sub", "Sorted Sets & Queues"] },
        { name: "MongoDB", highlight: false, tags: ["Document Modeling", "Aggregation Pipelines", "Atlas"] },
        { name: "SQLite", highlight: false, tags: ["Embedded Systems", "WAL Mode", "Local-first Sync"] },
        { name: "Vector Databases", highlight: false, tags: ["ChromaDB", "Cosine Embeddings", "HNSW Indexing"] },
      ],
    },
    {
      index: "05",
      name: "Tools & Technologies",
      description: "Developer tooling, containerization, cloud deployment, and collaborative workflows.",
      skills: [
        { name: "Git & GitHub", highlight: true, tags: ["Interactive Rebase", "Branching Strategies", "Hooks"] },
        { name: "Docker & Containers", highlight: true, tags: ["Multi-stage Builds", "Compose", "Layer Caching"] },
        { name: "Linux / Unix Shell", highlight: true, tags: ["Bash Scripting", "Zsh", "Coreutils", "Networking"] },
        { name: "CI / CD Pipelines", highlight: false, tags: ["GitHub Actions", "Automated Testing", "Lints"] },
        { name: "Cloud Platforms", highlight: false, tags: ["AWS (S3, EC2)", "Vercel", "Cloudflare"] },
        { name: "Figma", highlight: false, tags: ["Design Systems", "Auto-layout", "Interactive Prototyping"] },
      ],
    },
    {
      index: "06",
      name: "Computer Science Fundamentals",
      description: "Theoretical grounding and foundational principles underpinning robust software engineering.",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true, tags: ["Trees/Graphs", "Dynamic Programming", "Complexity Analysis"] },
        { name: "Distributed Systems", highlight: true, tags: ["Consensus (Raft)", "CAP Theorem", "Eventual Consistency"] },
        { name: "Operating Systems", highlight: false, tags: ["Process Scheduling", "Virtual Memory", "Threads & Locks"] },
        { name: "Computer Networks", highlight: false, tags: ["TCP/IP", "DNS", "HTTP/1.1 vs HTTP/2 vs HTTP/3"] },
        { name: "Object-Oriented Design", highlight: false, tags: ["SOLID Principles", "Design Patterns", "Clean Code"] },
      ],
    },
  ],

  experience: [
    {
      id: "swe-intern",
      role: "Software Engineering Intern",
      organization: "Tech Innovators Lab",
      period: "May 2024 – July 2024",
      location: "Bengaluru, India (Hybrid)",
      type: "work",
      description: [
        "Architected an internal telemetry dashboard serving 25+ engineers, consolidating microservice metrics and health checks into a single responsive pane.",
        "Optimized frontend bundle size by 38% through route-level code splitting and tree-shaking, dropping Time to Interactive (TTI) from 2.8s to 1.1s.",
        "Engineered concurrent Redis caching layers for read-heavy API endpoints, reducing average response latency from 180ms to 24ms under load.",
        "Authored comprehensive unit and integration test suites with 88% branch coverage using Jest and React Testing Library.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Redis", "Tailwind CSS", "Jest"],
    },
    {
      id: "developer-lead",
      role: "Technical Lead & Core Contributor",
      organization: "Google Developer Student Club / College Chapter",
      period: "Aug 2023 – Present",
      location: "University Campus",
      type: "leadership",
      description: [
        "Orchestrated 12+ hands-on technical workshops covering modern web architecture, Git workflows, and cloud fundamentals for an active audience of 300+ students.",
        "Mentored junior developers through 48-hour hackathon project builds, assisting with architectural choices, API design, and deployment pipelines.",
        "Spearheaded the development of the club's open-source event management and ticketing platform with 1,200+ registered attendees.",
      ],
      technologies: ["TypeScript", "Next.js", "PostgreSQL", "Docker", "Git"],
    },
    {
      id: "peer-mentor",
      role: "Undergraduate Peer Mentor & Lab Assistant",
      organization: "Department of Computer Science & Engineering",
      period: "Jan 2024 – Present",
      location: "University Campus",
      type: "education",
      description: [
        "Conducted weekly problem-solving tutorial sessions on Data Structures and Algorithms for second-year engineering undergraduates.",
        "Guided students through complex graph traversals, dynamic programming paradigms, and memory management in C++.",
        "Assisted faculty in designing practical lab assignments simulating real-world operating system concurrency problems.",
      ],
      technologies: ["C++", "Python", "Data Structures", "Algorithms"],
    },
  ],

  education: [
    {
      id: "btech-cse",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Vellore Institute of Technology (VIT) / Premier Engineering Institute",
      period: "2022 – 2026",
      location: "India",
      grade: "CGPA: 8.9 / 10.0 (Top 10% of cohort)",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Distributed Computing",
        "Design & Analysis of Algorithms",
        "Theory of Computation",
      ],
      highlights: [
        "Dean's Merit Scholarship recipient for academic excellence across multiple semesters",
        "Active member of the competitive programming fraternity with 500+ solved problems",
        "Finalist in national collegiate hackathons for distributed systems and AI applications",
      ],
    },
  ],

  currentFocus: [
    {
      title: "Distributed Consensus Protocols",
      topic: "Systems & Infrastructure",
      description:
        "Deep-diving into Raft paper specifications, cluster state machine replication, split-brain resolution, and heartbeat tuning for low-latency nodes.",
      readingOrBuilding: "Building an experimental Raft-backed key-value store in pure Go.",
      tags: ["Go", "Raft", "Distributed Systems", "RPC"],
    },
    {
      title: "Local-First Software Architecture",
      topic: "Web Engineering",
      description:
        "Investigating CRDTs (Conflict-free Replicated Data Types), client-side SQLite via WebAssembly, and sync engines that treat the network as an optional transport layer.",
      readingOrBuilding: "Reading Martin Kleppmann's research papers on collaborative software.",
      tags: ["CRDTs", "WASM", "Local-First", "Offline Sync"],
    },
    {
      title: "Database Engine Internals",
      topic: "Database Systems",
      description:
        "Analyzing write amplification tradeoffs between Log-Structured Merge (LSM) trees and traditional B+ Trees under heavy concurrent write workloads.",
      readingOrBuilding: "Implementing an in-memory B-Tree with concurrent latch crabbing in C++.",
      tags: ["LSM Trees", "B+ Trees", "Storage Engines", "Concurrency"],
    },
    {
      title: "Modern Web Performance & CWV",
      topic: "Frontend Architecture",
      description:
        "Auditing Core Web Vitals (INP, LCP, CLS), speculative pre-rendering, streaming HTML SSR, and zero-runtime CSS abstractions.",
      readingOrBuilding: "Refining fluid design tokens and sub-100ms render pipelines.",
      tags: ["Web Performance", "Next.js", "INP", "Rendering Pipelines"],
    },
  ],

  achievements: [
    {
      title: "National Hackathon Finalist",
      issuer: "Smart India Hackathon / Collegiate Tech Challenge",
      year: "2024",
      description:
        "Selected in the top 3% out of 2,400+ nationwide team submissions for architecting an offline-first disaster response coordination tool.",
    },
    {
      title: "500+ Algorithmic Problems Solved",
      issuer: "LeetCode & Codeforces",
      year: "2023 – Present",
      description:
        "Maintained top 8% global contest rating with deep focus on graphs, trees, dynamic programming, and binary search.",
    },
    {
      title: "Dean's List of Academic Honors",
      issuer: "School of Computer Science & Engineering",
      year: "2022, 2023, 2024",
      description:
        "Awarded for consistently maintaining top academic ranking and active leadership in engineering societies.",
    },
    {
      title: "Open Source Contributor",
      issuer: "GitHub Community",
      year: "2023 – Present",
      description:
        "Contributed bug fixes, type definitions, and documentation enhancements to popular developer tooling and web libraries.",
    },
  ],
};

