"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Sparkles, Terminal, Code2, Compass } from "lucide-react";

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-ink-border/60">
      {/* Section Eyebrow */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
          02 // Engineering Philosophy & Narrative
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mt-2">
          {about.headline}
        </h2>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Quick Facts (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl sm:text-2xl font-serif italic text-ink-primary leading-relaxed border-l-2 border-cobalt pl-6">
            "{about.leadParagraph}"
          </p>

          <div className="space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quick Facts Dossier */}
          <div className="pt-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4 font-semibold">
              ENGINEERING DOSSIER // QUICK METRICS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-canvas-pure border border-ink-border/70 shadow-xs"
                >
                  <div className="text-xs font-mono uppercase text-ink-muted">{fact.label}</div>
                  <div className="text-sm font-semibold text-ink-primary mt-1">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Core Engineering Principles (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-pure border border-ink-border/80 shadow-card space-y-6">
            <div className="flex items-center justify-between border-b border-ink-border/60 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-cobalt" />
                Core Principles
              </span>
              <span className="text-xs font-mono text-ink-muted">MANIFESTO</span>
            </div>

            <div className="space-y-6">
              {about.principles.map((principle) => (
                <div key={principle.number} className="group space-y-1.5 transition-all">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono font-bold text-cobalt group-hover:translate-x-0.5 transition-transform">
                      {principle.number}
                    </span>
                    <h4 className="text-base font-bold text-ink-primary group-hover:text-cobalt transition-colors">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary pl-7 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Signature Quote */}
            <div className="pt-4 border-t border-ink-border/50 text-xs font-mono text-ink-muted flex items-center justify-between">
              <span>CRAFT & RIGOR</span>
              <span>G S K SANJAY VARMA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

