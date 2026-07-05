export interface Experience {
  id: number;
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Data Engineer Intern",
    company: "Schuberg Philis",
    logo: "/schuberg-philis.png",
    location: "Amsterdam, Netherlands",
    period: "Nov 2025 \u2013 Jun 2026",
    bullets: [
      "Built MetricMind: Python-based data pipelines and KPI models transforming raw engineering metrics into structured datasets, improving team-level decisions by ~40%.",
      "Developed ingestion, validation, and transformation workflows for GitHub, GitLab, and Jira data enabling unified reporting across DevOps, business, and sustainability KPIs."
    ],
    skills: ["Python", "SQL", "PostgreSQL", "FastAPI", "Data Pipelines", "Docker"]
  },
  {
    id: 2,
    role: "Data Engineer Intern",
    company: "SwanIT",
    logo: "/swanit.jpeg",
    location: "Helsinki, Finland",
    period: "Feb 2025 \u2013 Jun 2025",
    bullets: [
      "Designed relational data models and transformation workflows for device records and sustainability indicators, improving recyclability by ~25\u201330%.",
      "Automated end-to-end evaluation workflows, reducing manual analysis effort by ~60%."
    ],
    skills: ["SQL", "MySQL", "Prisma ORM", "Data Modeling", "REST APIs", "Node.js"]
  },
  {
    id: 3,
    role: "Software Developer (Data)",
    company: "File Solutions Ltd",
    logo: "/file-solutions.jpeg",
    location: "Abuja, Nigeria",
    period: "Jul 2023 \u2013 Jul 2024",
    bullets: [
      "Built SQL-based data pipelines for financial and operational datasets, improving reporting accuracy across payment, revenue, and reconciliation workflows.",
      "Developed 10+ dashboards and anomaly detection workflows contributing to a reported 40% revenue uplift (~$500K / \u20a61B+)."
    ],
    skills: ["SQL", "ETL", "Dashboards", "Anomaly Detection", "Financial Data", "REST APIs"]
  }
];
