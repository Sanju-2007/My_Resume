"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Download, Terminal, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AbstractGraphic } from "./AbstractGraphic";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-grid-subtle opacity-70" />

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Editorial Typography & Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 pr-0 lg:pr-6">
          
          {/* Eyebrow Label & Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-ink-secondary bg-canvas-pure border border-ink-border/80 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-ping" />
              {personal.eyebrow}
            </span>

            {/* Subtle Availability Indicator */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Available for 2025/2026 Roles</span>
            </div>
          </div>

          {/* Name & Headline in Oversized Precision Typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-ink-primary leading-[1.04]">
              {personal.name}
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-ink-secondary tracking-tight font-normal leading-tight">
              {personal.headline}
            </p>
          </div>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl font-normal">
            {personal.subheadline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-2 pb-2 border-y border-ink-border/60 w-full max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-ink-primary">B.Tech</div>
              <div className="text-[11px] font-mono text-ink-muted uppercase">Computer Science</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-ink-primary">500+</div>
              <div className="text-[11px] font-mono text-ink-muted uppercase">LeetCode Solved</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-cobalt">1.8ms</div>
              <div className="text-[11px] font-mono text-ink-muted uppercase">p99 Broker Tail</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-primary text-canvas hover:bg-ink-primary/90 text-sm font-medium tracking-tight shadow-card transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 duration-200" />
            </a>

            <a
              href={personal.resumeUrl}
              download="Sanjay_Varma_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-canvas-pure border border-ink-border hover:border-ink-secondary/50 text-ink-primary text-sm font-medium tracking-tight transition-all duration-200 hover:bg-canvas-subtle hover:-translate-y-0.5 shadow-xs"
            >
              <Download className="w-4 h-4 text-ink-secondary" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech stack ticker / badges */}
          <div className="flex items-center gap-2 pt-2 text-xs text-ink-muted font-mono">
            <span className="text-[11px] text-ink-secondary uppercase">Focus:</span>
            <span>Distributed Systems</span>
            <span className="text-ink-border">•</span>
            <span>TypeScript</span>
            <span className="text-ink-border">•</span>
            <span>Go</span>
            <span className="text-ink-border">•</span>
            <span>Next.js 15</span>
          </div>
        </div>

        {/* Right Column: Abstract Systems Graphic & Architectural Card (5 cols) */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
          <div className="w-full relative">
            <AbstractGraphic />

            {/* Subtle decorative code snippet tag */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-ink-muted px-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cobalt" />
                <span>raft.election_timeout = 150ms</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-ink-secondary" />
                <span>zero_copy: enabled</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="pt-12 flex items-center justify-between border-t border-ink-border/40 text-xs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/60" />
          <span>PORTFOLIO // 2025 EDITION</span>
        </div>

        <a
          href="#work"
          className="group flex items-center gap-2 hover:text-ink-primary transition-colors duration-200"
          aria-label="Scroll to work"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-cobalt" />
        </a>

        <div className="hidden sm:block">
          <span>COORDINATES: 13.0827° N, 80.2707° E</span>
        </div>
      </div>
    </section>
  );
}
