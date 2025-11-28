import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Fourat Idani | Full-Stack Developer & Computer Science Graduate",
  description: "Fourat Idani - Computer Science graduate and Full-Stack Developer skilled in React.js, Node.js, and React Native. Currently seeking an End of Studies Project Internship. Experience with Next.js, NestJS, PostgreSQL, and mobile development.",
  keywords: [
    "Fourat Idani",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "React Native",
    "Next.js",
    "Computer Science",
    "Web Development",
    "Mobile Development",
    "Tunisia Developer",
    "ISITCom Sousse",
    "Software Engineer",
    "JavaScript Developer",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Internship",
  ],
  authors: [{ name: "Fourat Idani", url: "https://fouratidani.me" }],
  creator: "Fourat Idani",
  publisher: "Fourat Idani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fouratidani.me",
    title: "Fourat Idani | Full-Stack Developer & Computer Science Graduate",
    description: "Computer Science graduate and Full-Stack Developer skilled in React.js, Node.js, and React Native. Seeking End of Studies Project Internship.",
    siteName: "Fourat Idani Portfolio",
    images: [
      {
        url: "https://fouratidani.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fourat Idani - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fourat Idani | Full-Stack Developer",
    description: "Computer Science graduate and Full-Stack Developer skilled in React.js, Node.js, and React Native.",
    images: ["https://fouratidani.me/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://fouratidani.me",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
