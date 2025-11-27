import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Fourat Idani - Full Stack Developer | Designer",
  description: "Portfolio of Fourat Idani - Full Stack Developer, Graphic Designer, and UI/UX Designer. Crafting beautiful digital experiences through code and design.",
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
