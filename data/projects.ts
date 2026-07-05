export type Track = 'de' | 'se' | 'da';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  track: Track[];
  github: string;
  live?: string;
  badge?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MetricMind",
    subtitle: "LLM-based Engineering Metrics Platform",
    description: "A full-stack DevOps intelligence platform that ingests data from GitHub, GitLab, and Jira, validates and transforms it into structured KPI datasets, and uses an AI-assisted analysis panel to support cross-metric decision-making.",
    impact: "72% of 18 engineering practitioners reported identifying new cross-metric connections without increased cognitive load.",
    tech: ["Python", "FastAPI", "SQLite", "Next.js", "TypeScript", "Anthropic API", "Docker", "Jira API"],
    track: ["de", "se"],
    github: "https://github.com/elsirleem/metricmind",
    badge: "MSc Thesis",
    image: "/metricmind.png"
  },
  {
    id: 2,
    title: "EU Job Market Pipeline",
    subtitle: "Medallion Architecture Data Pipeline",
    description: "A production-grade data pipeline ingesting EU job postings via API and transforming raw data into analytics-ready bronze, silver, and gold layers using PySpark and Delta Lake. Includes data-quality gates, deduplication, and Docker-based deployment.",
    impact: "Delivers reliable country-level skill and tool demand insights across EU job markets.",
    tech: ["Python", "PySpark", "Delta Lake", "Docker", "GitHub Actions", "pytest", "REST APIs"],
    track: ["de"],
    github: "https://github.com/elsirleem/Job-Market-Pipeline",
    image: "/eu-job-pipeline.png"
  },
  {
    id: 3,
    title: "SuSoft",
    subtitle: "Sustainability Integration Tool for Agile Teams",
    description: "A lightweight web tool enabling Scrum teams to track sustainability metrics and automatically prioritise tasks into the team backlog. Integrates a locally hosted AI chatbot for backlog generation, deployed as microservices on Oracle Cloud.",
    impact: "Removes a manual planning step for sustainability-aware Agile teams across the sprint lifecycle.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "Oracle Cloud", "LLM Integration"],
    track: ["se", "de"],
    github: "https://github.com/elsirleem/Susoft",
    badge: "Hackathon Winner",
    image: "/susoft.png"
  },
  {
    id: 4,
    title: "Stock Pulse Agent",
    subtitle: "AI-Powered Stock Tracking Agent",
    description: "An AI-powered stock tracking agent built with LangGraph, FastAPI, and Twilio. Monitors stock data, runs intelligent analysis, and delivers real-time alerts via SMS.",
    impact: "Demonstrates modern agentic AI architecture for financial data monitoring with real-time alerting.",
    tech: ["Python", "LangGraph", "FastAPI", "Twilio", "REST APIs"],
    track: ["se"],
    github: "https://github.com/elsirleem/Stock_PulseAgent",
    image: "/stockpulse.png"
  },
  {
    id: 5,
    title: "Weather ETL Pipeline",
    subtitle: "End-to-End ETL Pipeline",
    description: "A clean ETL pipeline ingesting weather data from public APIs, transforming and loading it into a structured database for analytics and reporting. Demonstrates core ETL design patterns end-to-end.",
    impact: "Demonstrates core ETL design patterns: ingestion, transformation, validation, and loading.",
    tech: ["Python", "ETL", "REST APIs", "PostgreSQL"],
    track: ["de"],
    github: "https://github.com/elsirleem/weather-etl",
    image: "/weather-etl.png"
  },
  {
    id: 6,
    title: "Engineering Productivity Dashboard",
    subtitle: "GitHub Metrics Analytics Pipeline",
    description: "A data pipeline and dashboard for tracking GitHub engineering productivity metrics. Ingests repository data, computes KPIs, and surfaces insights for engineering team retrospectives.",
    impact: "Supports data-driven engineering retrospectives and productivity tracking for development teams.",
    tech: ["Python", "GitHub API", "Data Pipelines", "PostgreSQL", "Dashboard"],
    track: ["de"],
    github: "https://github.com/elsirleem/github-engineering-productivity-dashboard",
    image: "/engineering-productivity.png"
  },
  {
    id: 7,
    title: "Foreign TSA Payment Gateway",
    subtitle: "Government Payment Workflow System",
    description: "Contributed to building a government payment system enabling Nigerian diaspora users to pay for visas, passports, and 15+ consular services with country-specific pricing, OTP verification, and automated receipts.",
    impact: "Projected \u20a645\u201365 billion annual revenue throughput across Nigeria\u2019s entire diplomatic network.",
    tech: ["TypeScript", "React.js", "Node.js", "REST APIs", "SendGrid"],
    track: ["se"],
    github: "https://tsa.gov.ng",
    image: "/foreign-tsa.png"
  },
  {
    id: 8,
    title: "Movie Rating Analysis",
    subtitle: "Exploratory Data Analysis \u2014 TMDb Dataset",
    description: "Exploratory data analysis on 10,000 TMDb movies investigating relationships between ratings, revenue, genres, and release trends using Python and data visualisation libraries.",
    impact: "Uncovered key patterns in movie performance and audience rating behaviour across genres and decades.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    track: ["da"],
    github: "https://github.com/elsirleem/MovieRating",
    image: "/movie-rating.webp"
  },
  {
    id: 9,
    title: "FordGo Bike Analysis",
    subtitle: "Urban Mobility Data Analysis",
    description: "Data analysis of FordGo bike-sharing rides in San Diego, exploring ride duration, user types, peak usage patterns, and station demand.",
    impact: "Reveals urban mobility patterns and demand hotspots to support city-level transport planning.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    track: ["da"],
    github: "https://github.com/elsirleem/ForGoBike",
    image: "/fordgo-bike.jpg"
  },
  {
    id: 10,
    title: "WeRateDogs Analysis",
    subtitle: "Data Wrangling & Sentiment Analysis",
    description: "Data wrangling and analysis project using the WeRateDogs Twitter archive. Involves gathering from multiple sources, assessing and cleaning quality issues, and performing exploratory analysis.",
    impact: "Demonstrates end-to-end data wrangling skills across multiple messy real-world data sources.",
    tech: ["Python", "Pandas", "Twitter API", "Data Wrangling", "Jupyter Notebook"],
    track: ["da"],
    github: "https://github.com/elsirleem/WeRateDogs",
    image: "/weratedogs.jpg"
  },
  {
    id: 11,
    title: "Flood Monitoring and Management System",
    subtitle: "Real-Time Environmental Sensor Streaming Pipeline",
    description: "Engineered a real-time streaming pipeline using Kafka and Flink, processing 150,000+ environmental sensor events per minute for monitoring and anomaly detection. Built containerized data workflows supporting time-series analytics, live monitoring, and automated alerting for flood-risk indicators.",
    impact: "Processes 150,000+ environmental sensor events per minute for real-time flood-risk monitoring and anomaly detection.",
    tech: ["Python", "PostgreSQL", "Apache Kafka", "Apache Flink", "Docker", "Time-Series Data"],
    track: ["de"],
    github: "https://github.com/elsirleem/SA_DesignSyndicate_FMMS",
    badge: "Team Project"
  },
  {
    id: 12,
    title: "Smart Traffic Monitoring System",
    subtitle: "Simulated IoT Traffic & Environmental Monitoring Pipeline",
    description: "A simulated IoT system monitoring urban traffic and environmental conditions — simulating traffic density, speed, CO2, PM2.5, PM10, and noise levels, ingesting via MQTT and Telegraf into InfluxDB, and visualizing real-time dashboards in Grafana.",
    impact: "Demonstrates a full sensor-to-dashboard IoT pipeline: MQTT ingestion, time-series storage, and real-time environmental monitoring dashboards.",
    tech: ["Python", "Docker", "MQTT", "Telegraf", "InfluxDB", "Grafana", "Node-RED"],
    track: ["de", "se"],
    github: "https://github.com/elsirleem/SE4IoT_project",
    badge: "Team Project"
  }
];
