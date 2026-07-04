export type CertStatus = 'Completed' | 'In Progress' | 'Planned';

export interface Certification {
  id: number;
  name: string;
  status: CertStatus;
  blurb: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'DataCamp Data Engineer',
    status: 'Completed',
    blurb: 'ETL pipelines, data pipelines in Python, and database fundamentals for engineering roles.',
  },
  {
    id: 2,
    name: 'Associate Data Engineer in Snowflake',
    status: 'Completed',
    blurb: 'Data modelling, warehousing, and pipeline design on the Snowflake platform.',
  },
  {
    id: 3,
    name: 'Databricks Data Engineer Associate',
    status: 'In Progress',
    blurb: 'Spark-based data pipelines, Delta Lake, and lakehouse architecture on Databricks.',
  },
  {
    id: 4,
    name: 'Microsoft Fabric Data Engineer',
    status: 'Planned',
    blurb: 'End-to-end analytics engineering across the Microsoft Fabric platform.',
  },
  {
    id: 5,
    name: 'Kubernetes and Cloud Native Associate (KCNA)',
    status: 'Completed',
    blurb: 'Core Kubernetes concepts, container orchestration, and cloud-native fundamentals.',
  },
  {
    id: 6,
    name: 'Meta Backend Developer',
    status: 'Completed',
    blurb: 'REST API design, databases, and backend architecture fundamentals.',
  },
];
