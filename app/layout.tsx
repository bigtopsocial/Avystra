import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avystra | Corporate Training Programs & Workforce Development",
  description: "Avystra delivers customized corporate training programs in Leadership Development, Communication Skills, AI & Technology Training, Sales, HR, and Business Strategy — designed to close skill gaps and drive measurable business outcomes.",
  keywords: [
    "Corporate Training Programs",
    "Employee Upskilling",
    "Leadership Development",
    "Workforce Training",
    "Corporate Learning Solutions",
    "Professional Development",
    "Enterprise Training",
    "Business Skills Training",
    "Management Training",
    "Soft Skills Training",
    "AI Training",
    "Technology Training",
    "Organizational Development"
  ],
  icons: {
    icon: "/images/Final%20logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-canvas font-sans text-body antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
