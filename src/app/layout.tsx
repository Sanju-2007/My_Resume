import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G S K Sanjay Varma — Software Engineer & Builder",
  description:
    "Personal portfolio and digital engineering profile of G S K Sanjay Varma. Specializing in high-performance web systems, distributed architecture, and refined digital experiences.",
  keywords: [
    "Sanjay Varma",
    "G S K Sanjay Varma",
    "Software Engineer",
    "Full Stack Developer",
    "Systems Engineer",
    "Next.js",
    "TypeScript",
    "Go",
    "Distributed Systems",
  ],
  authors: [{ name: "G S K Sanjay Varma" }],
  creator: "G S K Sanjay Varma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjayvarma.dev",
    title: "G S K Sanjay Varma — Software Engineer & Builder",
    description:
      "Building thoughtful digital experiences. Explore selected projects, systems architecture, and engineering work.",
    siteName: "G S K Sanjay Varma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "G S K Sanjay Varma — Software Engineer",
    description: "Building thoughtful digital experiences.",
    creator: "@sanjayvarma",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-ink-primary font-sans antialiased selection:bg-ink-primary selection:text-canvas">
        {children}
      </body>
    </html>
  );
}
