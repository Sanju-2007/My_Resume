"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { EngineeringShowcase } from "@/components/EngineeringShowcase";
import { About } from "@/components/About";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CurrentFocus } from "@/components/CurrentFocus";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-canvas text-ink-primary selection:bg-ink-primary selection:text-canvas">
      {/* Top Navigation */}
      <Navigation onOpenCommandMenu={() => setCommandMenuOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Signature Work Section */}
      <SelectedWork />

      {/* Systems Engineering Showcase */}
      <EngineeringShowcase />

      {/* Editorial About Section */}
      <About />

      {/* Technical Skills (01–06) */}
      <TechnicalSkills />

      {/* Experience & Education Timeline */}
      <ExperienceTimeline />

      {/* Current Focus & Technical Interests */}
      <CurrentFocus />

      {/* Memorable Contact Section */}
      <ContactSection />

      {/* Minimalist Footer */}
      <Footer />

      {/* Command Palette (Cmd+K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
      />
    </main>
  );
}

