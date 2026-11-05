"use client";

import React, { useState } from "react";
import { portfolioData, ExperienceItem } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award, ChevronRight, MapPin, Calendar } from "lucide-react";

export function ExperienceTimeline() {
  const { experience, education, achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education" | "achievements">("all");

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-ink-border/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-ink-border/60 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
            04 // Journey & Trajectory
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mt-2">
            Experience & Education
          </h2>
        </div>
        <p className="text-base sm:text-lg font-serif italic text-ink-secondary max-w-md">
          A track record of engineering contributions, collaborative leadership, academic honors, and continuous growth.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {(["all", "experience", "education", "achievements"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${
              activeTab === tab
                ? "bg-ink-primary text-canvas font-semibold shadow-xs"
                : "bg-canvas-pure text-ink-secondary hover:text-ink-primary border border-ink-border/70 hover:bg-canvas-subtle"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {/* EDUCATION BLOCK */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted">
              <GraduationCap className="w-4 h-4 text-cobalt" />
              <span>Academic Foundation</span>
            </div>

            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 sm:p-8 shadow-card space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-ink-border/50 pb-5">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink-primary">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-serif italic text-ink-secondary">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-ink-secondary" />
                        {edu.location}
                      </span>
                      {edu.grade && (
                        <span className="text-cobalt font-semibold bg-cobalt-subtle px-2 py-0.5 rounded border border-cobalt/20">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-ink-secondary bg-canvas-subtle px-3 py-1 rounded-full border border-ink-border/60 self-start">
                    {edu.period}
                  </span>
                </div>

                {/* Coursework & Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                      Core Technical Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-canvas-subtle text-ink-secondary border border-ink-border/40"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                      Academic Honors & Activities
                    </span>
                    <ul className="space-y-1.5 text-xs text-ink-secondary">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-cobalt mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WORK & INTERNSHIP EXPERIENCE BLOCK */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted">
              <Briefcase className="w-4 h-4 text-cobalt" />
              <span>Engineering Experience & Leadership</span>
            </div>

            <div className="relative border-l border-ink-border/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
              {experience.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-canvas border-2 border-ink-primary group-hover:border-cobalt group-hover:scale-125 transition-all" />

                  <div className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 sm:p-8 shadow-card space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-ink-border/50 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-ink-primary">
                            {item.role}
                          </h3>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded capitalize ${
                            item.type === "work"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm font-serif italic text-ink-secondary mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {item.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-border mt-2 shrink-0 group-hover:bg-cobalt transition-colors" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tagging */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas-subtle text-ink-secondary border border-ink-border/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS & HONORS BLOCK */}
        {(activeTab === "all" || activeTab === "achievements") && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted">
              <Award className="w-4 h-4 text-cobalt" />
              <span>Recognitions & Certifications</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 shadow-card space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cobalt font-semibold">
                      {ach.year}
                    </span>
                    <span className="text-[11px] font-mono text-ink-muted">
                      {ach.issuer}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-ink-primary">
                    {ach.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
