import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MainLayout } from "@/components/templates/MainLayout";
import { SessionProvider } from "@/components/providers/SessionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Umer | Full Stack Developer",
  description: "Portfolio of Umer, a Full Stack Developer specializing in liquid glass aesthetics and high-performance web applications.",
  // Favicon from app/icon.png (Next.js convention) – loads with page, no spinner
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <MainLayout>{children}</MainLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
