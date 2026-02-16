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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://umer-porfolio.vercel.app";

export const metadata: Metadata = {
  title: "Umer | Full Stack Developer",
  description: "Portfolio of Umer, a Full Stack Developer specializing in liquid glass aesthetics and high-performance web applications.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Umer | Full Stack Developer",
    description: "Portfolio of Umer, a Full Stack Developer specializing in liquid glass aesthetics and high-performance web applications.",
    url: siteUrl,
    siteName: "Umer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer | Full Stack Developer",
    description: "Portfolio of Umer, a Full Stack Developer specializing in liquid glass aesthetics and high-performance web applications.",
  },
  robots: { index: true, follow: true },
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
