"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Compass, BookOpen, Hammer, Sparkles, ArrowUpRight } from "lucide-react";

export function CurrentFocus() {
  const { currentFocus } = portfolioData;

  return (
    <section id="focus" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-ink-border/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-border/60 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
            05 // Intellectual Curiosity & R&D
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mt-2">
            Current Technical Focus
          </h2>
        </div>
        <p className="text-base sm:text-lg font-serif italic text-ink-secondary max-w-md">
          Topics, systems papers, and engineering paradigms I'm actively researching and experimenting with outside of class.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentFocus.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 sm:p-8 shadow-card hover:border-ink-secondary/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-ink-border/50">
                  {item.topic}
                </span>
                <span className="text-xs font-mono text-ink-muted">
                  0{idx + 1} // ACTIVE
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-ink-primary group-hover:text-cobalt transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Reading or Building note */}
              <div className="p-3.5 rounded-xl bg-canvas-subtle/70 border border-ink-border/40 text-xs font-mono text-ink-secondary flex items-start gap-2.5">
                <Hammer className="w-3.5 h-3.5 text-cobalt mt-0.5 shrink-0" />
                <span>
                  <strong className="text-ink-primary">In progress: </strong>
                  {item.readingOrBuilding}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-ink-border/40">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-pure text-ink-muted border border-ink-border/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
