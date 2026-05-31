// Single source of truth for all portfolio content.
// Components must import from here and never hardcode resume strings in JSX.

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
  bookCallUrl: string;
}

export interface Stat {
  value: string;
  countTo: number;
  suffix: string;
  prefix: string;
  label: string;
  sublabel: string;
}

export interface Bullet {
  text: string;
  metric?: string;
}

export type EmploymentType = "full-time" | "internship" | "consulting";

export interface Experience {
  company: string;
  role: string;
  type: EmploymentType;
  location: string;
  startDate: string;
  endDate: string | null;
  showDates: boolean;
  bullets: Bullet[];
  highlights?: string[];
  badge?: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  metric: string;
  liveUrl: string | null;
  githubUrl: string | null;
  isConfidential: boolean;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  startYear: string;
  endYear: string;
}

export const personal: PersonalInfo = {
  name: "Akshat Bhatia",
  title: "Full Stack & AI Engineer",
  tagline:
    "Building scalable AI systems, high-performance backend infrastructure, and modern full-stack products for fast-moving startups and real-world users.",
  about: `I’m a full-stack and AI engineer passionate about building products that are both technically strong and practical in the real world. My experience includes developing production AI systems, scalable backend infrastructure, data-intensive platforms, and fast-moving startup products. I enjoy working on challenging engineering problems — from designing intelligent workflows and optimizing system performance to shipping products quickly without compromising scalability or user experience.`,
  location: "Faridabad, HR, India",
  email: "hi@akshat-bhatia.com",
  linkedin: "https://www.linkedin.com/in/akshat-bhatia-",
  github: "https://github.com/Akshat-bhatia73",
  resumePdfUrl: "/Akshat_Bhatia_Resume.pdf",
  bookCallUrl:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3OwJq6ayGU7LfpBvYUZh2sB9t9CbqYOC1BTmnt59XClhVkRt4hpNj887bzDC472QyiH-dHw4Ah",
};

export const stats: Stat[] = [
  {
    value: "30×",
    countTo: 30,
    suffix: "×",
    prefix: "",
    label: "Faster dashboard delivery",
    sublabel: "4.5–6 min → 15–30 sec on 300k+ records",
  },
  {
    value: "90%+",
    countTo: 90,
    suffix: "%+",
    prefix: "",
    label: "Data extraction accuracy",
    sublabel: "Up from ~20% with ML-assisted validation",
  },
  {
    value: "$4.2M",
    countTo: 4.2,
    suffix: "M",
    prefix: "$",
    label: "Funding round supported",
    sublabel: "Pre-Series A from PeakXV Partners",
  },
  {
    value: "10 days",
    countTo: 10,
    suffix: " days",
    prefix: "",
    label: "Compliance platform MVP",
    sublabel: "Full pipeline: ingestion → evaluation → audit",
  },
];

export const experience: Experience[] = [
  {
    company: "OnFinance AI",
    role: "Full Stack Engineer",
    type: "full-time",
    location: "Remote",
    startDate: "Nov 2024",
    endDate: null,
    showDates: true,
    bullets: [
      {
        text: "Built the entire frontend from scratch with Next.js, TypeScript, and Tailwind CSS, delivering role-based dashboards and regulatory workflows that enabled compliance teams to process cases 30% faster.",
        metric: "30% faster",
      },
      {
        text: "Optimized analytics APIs on 300k+ MongoDB records via multi-stage aggregation pipelines — cutting dashboard response times from 4.5–6 min to 15–30 sec (up to 30× improvement).",
        metric: "30× improvement",
      },
      {
        text: "Migrated AI agent architecture to a Deep Agents framework with skill-based routing, reducing deployment time by 70% and consolidating 47 specialized tools into 8 reusable sub-agents.",
        metric: "70% faster deployment",
      },
      {
        text: "Partnered with the executive team to secure a $4.2M pre-Series A round from PeakXV Partners.",
        metric: "$4.2M",
      },
    ],
  },
  {
    company: "Wokelo AI",
    role: "Backend Engineering Intern",
    type: "internship",
    location: "Remote",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    showDates: true,
    bullets: [
      {
        text: "Built FastAPI + Python pipelines that extracted structured financial data from PDFs using computer-vision and NLP models, enabling automated research document analysis.",
      },
      {
        text: "Improved LinkedIn profile validation accuracy from ~20% to 90%+ by developing rule-based and ML-assisted validation logic.",
        metric: "~20% → 90%+",
      },
      {
        text: "Fine-tuned Meta LLaMA-3 models for internal AI automation workflows; built DOCX and PPTX report generation pipelines from structured JSON inputs.",
      },
    ],
  },
];

export const consulting: Experience[] = [
  {
    company: "Confidential U.S. Client",
    role: "AI Systems / Full Stack Consultant",
    type: "consulting",
    location: "Remote",
    startDate: "",
    endDate: "",
    showDates: false,
    badge: "Consulting",
    bullets: [
      {
        text: "Co-built a production-ready AI agent compliance validation platform MVP in 10 days — covering regulation ingestion, reviewer workflows, real-time violation surfacing, and PDF audit reporting.",
        metric: "10 days",
      },
      {
        text: "Architected a multi-stage regulation ingestion pipeline: Mistral OCR → section reconstruction → GPT semantic chunking → knowledge-graph triple/ENM extraction → Qdrant vector indexing. Constrained LLM usage to ingestion and report generation only, keeping runtime evaluation deterministic and sub-second.",
      },
      {
        text: "Built the FastAPI REST + WebSocket API layer: session management, turn ingestion, real-time flag streaming before each agent reply, and SHA-256 hashed PDF audit reports via WeasyPrint. Containerized the full stack with Docker Compose.",
      },
      {
        text: "Delivered React + TypeScript reviewer dashboards: per-turn flag triage with cited regulatory evidence, violation annotation, transcript replay, and one-click audit export.",
      },
    ],
    highlights: [
      "Compliance AI",
      "Real-time Evaluation",
      "Agentic Workflows",
      "RAG Pipelines",
      "Vector Search",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "LexiKing",
    description:
      "AI-powered vocabulary tracker with spaced repetition and adaptive quiz generation. Replaced a traditional FastAPI + MongoDB + WebSocket stack with Convex's reactive database.",
    techStack: ["TanStack Start", "TypeScript", "Convex", "Gemini Flash"],
    metric: "~60% less server-side code",
    liveUrl: "https://lexiking.akshat-bhatia.com",
    githubUrl: "https://github.com/Akshat-bhatia73/lexiking",
    isConfidential: false,
  },
  {
    name: "AI Compliance Platform",
    description:
      "Real-time compliance validation system for AI agent conversations. Detects regulatory violations turn-by-turn and surfaces corrective guidance before the agent's next reply.",
    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "Qdrant",
      "WebSocket",
      "Docker",
    ],
    metric: "Full MVP in 10 days",
    liveUrl: null,
    githubUrl: null,
    isConfidential: true,
    badge: "Consulting Project",
  },
  {
    name: "Supabase — Open Source",
    description:
      "Contributed logo and dark-mode display fixes across Supabase documentation and the main website.",
    techStack: ["Open Source", "Documentation"],
    metric: "Shipped to production",
    liveUrl: "https://supabase.com",
    githubUrl: "https://github.com/supabase/supabase",
    isConfidential: false,
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Vite",
      "TanStack",
    ],
  },
  {
    category: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "REST APIs",
      "WebSocket",
      "MongoDB",
      "SQLite",
      "Qdrant",
    ],
  },
  {
    category: "Data & AI",
    skills: [
      "LLM Fine-tuning",
      "NLP",
      "Computer Vision",
      "Vector Search",
      "Knowledge Graphs",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "Docker",
      "Prisma",
      "Jupyter",
      "VS Code",
      "Cursor",
      "Claude Code",
      "LangGraph",
      "LangChain",
      "RabbitMQ",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "JC Bose University of Science and Technology",
    degree: "Bachelor of Technology",
    gpa: "8.586",
    startYear: "2018",
    endYear: "2022",
  },
];
