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
    name: 'Python Programmer',
    status: 'Completed',
    blurb: 'Core Python programming fundamentals for data and backend engineering.',
  },
  {
    id: 5,
    name: 'Meta Backend Development',
    status: 'Completed',
    blurb: 'REST API design, databases, and backend architecture fundamentals.',
  },
];
