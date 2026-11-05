"use client";

import React from "react";
import { X, ExternalLink, Github, CheckCircle2, Server, Layers, Cpu, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-dark-canvas/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-canvas-pure rounded-2xl border border-ink-border shadow-float p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-canvas-subtle hover:bg-canvas-elevated text-ink-secondary hover:text-ink-primary transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10 border-b border-ink-border/60 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-canvas-subtle text-ink-secondary border border-ink-border/60">
              {project.category}
            </span>
            <span className="text-xs font-mono text-ink-muted">
              Released {project.year}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cobalt-subtle text-cobalt border border-cobalt/20">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg text-ink-secondary font-serif italic">
            {project.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-8">
          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-canvas-subtle border border-ink-border/50">
              {project.metrics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs font-mono uppercase text-ink-muted">{m.label}</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-ink-primary">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 p-5 rounded-xl border border-rose-200/50 bg-rose-50/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                The Problem
              </h4>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-xl border border-emerald-200/50 bg-emerald-50/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                The Solution
              </h4>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Components */}
          {project.architectureDetails && (
            <div className="space-y-3 p-5 rounded-xl border border-ink-border/70 bg-canvas/40">
              <h4 className="text-xs font-mono uppercase tracking-wider text-ink-secondary font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cobalt" />
                System Dataflow & Pipeline
              </h4>
              <div className="p-3 bg-canvas-pure rounded-lg border border-ink-border/60 text-xs font-mono text-ink-primary overflow-x-auto">
                <code>{project.architectureDetails.flowDescription}</code>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.architectureDetails.components.map((comp, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-canvas-pure border border-ink-border/60 text-ink-secondary flex items-center gap-1">
                    <Layers className="w-3 h-3 text-ink-muted" />
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-secondary font-semibold">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <CheckCircle2 className="w-4 h-4 text-cobalt mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-canvas-subtle text-ink-primary border border-ink-border/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with External Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-ink-border/60">
          <div className="text-xs font-mono text-ink-muted">
            Designed & Engineered by Sanjay Varma
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-ink-border bg-canvas hover:bg-canvas-subtle text-xs font-medium text-ink-primary transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-primary hover:bg-ink-primary/90 text-xs font-medium text-canvas transition-colors"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

