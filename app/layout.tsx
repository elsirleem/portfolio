import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Lawal Salim — Data & Software Engineer',
  description:
    'Data and Software Engineer completing an Erasmus Mundus Joint Master’s in Software Engineering for the Green Deal. Building reliable data pipelines and backend systems that turn raw data into decisions.',
  keywords: [
    'Data Engineer',
    'Software Engineer',
    'Python',
    'FastAPI',
    'PySpark',
    'Delta Lake',
    'Amsterdam',
    'Lawal Salim',
    'Databricks',
    'Snowflake',
  ],
  authors: [{ name: 'Lawal Salim' }],
  openGraph: {
    title: 'Lawal Salim — Data & Software Engineer',
    description:
      'Building reliable data pipelines and backend systems that turn raw data into decisions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
