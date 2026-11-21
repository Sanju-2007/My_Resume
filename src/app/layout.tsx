import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurijala Sri Krishna Sanjay Varma — Computer Science Engineer & Builder",
  description:
    "Personal engineering portfolio of Gurijala Sri Krishna Sanjay Varma (JNTUH). Developer of Attendify (AI Attendance System), OptiLign (FSOC PAT System), and real-time platforms.",
  keywords: [
    "Gurijala Sri Krishna Sanjay Varma",
    "G S K Sanjay Varma",
    "Sanjay Varma",
    "Attendify",
    "OptiLign",
    "JNTUH",
    "Computer Science Engineer",
    "AI Developer",
    "FastAPI",
    "Next.js",
    "Python",
    "Computer Vision",
    "InsightFace",
  ],
  authors: [{ name: "Gurijala Sri Krishna Sanjay Varma" }],
  creator: "Gurijala Sri Krishna Sanjay Varma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Sanju-2007",
    title: "Gurijala Sri Krishna Sanjay Varma — Computer Science Engineer",
    description:
      "Explore AI facial recognition systems (Attendify), optical communication tracking (OptiLign), and real-time platforms.",
    siteName: "G S K Sanjay Varma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurijala Sri Krishna Sanjay Varma — Computer Science Engineer",
    description: "Building intelligent software and resilient digital systems.",
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
