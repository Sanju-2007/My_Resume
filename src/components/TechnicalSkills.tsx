"use client";

import React, { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolio";
import { Code, Terminal, Server, Database, Wrench, BookOpen, Check } from "lucide-react";

export function TechnicalSkills() {
  const { skills } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<string>("all");

  const icons: Record<string, React.ReactNode> = {
    "01": <Code className="w-4 h-4 text-cobalt" />,
    "02": <Terminal className="w-4 h-4 text-indigo-500" />,
    "03": <Server className="w-4 h-4 text-emerald-500" />,
    "04": <Database className="w-4 h-4 text-cyan-500" />,
    "05": <Wrench className="w-4 h-4 text-amber-500" />,
    "06": <BookOpen className="w-4 h-4 text-violet-500" />,
  };

  const filteredSkills =
    activeCategoryIndex === "all"
      ? skills
      : skills.filter((cat) => cat.index === activeCategoryIndex);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-ink-border/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-ink-border/60 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
            03 // Competencies & Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mt-2">
            Engineering Skills
          </h2>
        </div>
        <p className="text-base sm:text-lg font-serif italic text-ink-secondary max-w-md">
          Structured technical capabilities built through project execution, open-source work, and academic rigor.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        <button
          onClick={() => setActiveCategoryIndex("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            activeCategoryIndex === "all"
              ? "bg-ink-primary text-canvas font-semibold shadow-xs"
              : "bg-canvas-pure text-ink-secondary hover:text-ink-primary border border-ink-border/70 hover:bg-canvas-subtle"
          }`}
        >
          All Domains (01–06)
        </button>

        {skills.map((cat) => (
          <button
            key={cat.index}
            onClick={() => setActiveCategoryIndex(cat.index)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeCategoryIndex === cat.index
                ? "bg-ink-primary text-canvas font-semibold shadow-xs"
                : "bg-canvas-pure text-ink-secondary hover:text-ink-primary border border-ink-border/70 hover:bg-canvas-subtle"
            }`}
          >
            <span>{cat.index}</span>
            <span>{cat.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Structured Category Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((category) => (
          <div
            key={category.index}
            className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 shadow-card hover:border-ink-secondary/40 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-ink-border/50 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  {icons[category.index]}
                  <h3 className="text-base font-bold text-ink-primary">
                    {category.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-ink-muted">
                  {category.index}
                </span>
              </div>

              <p className="text-xs text-ink-secondary mb-5 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Items List */}
              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-canvas-subtle/70 hover:bg-canvas-subtle border border-ink-border/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" />
                        )}
                        {skill.name}
                      </span>
                    </div>

                    {skill.tags && skill.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-canvas-pure text-ink-secondary border border-ink-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-ink-border/40 flex items-center justify-between text-[11px] font-mono text-ink-muted">
              <span>ACTIVE PRACTICE</span>
              <span>VERIFIED VIA REPOS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

