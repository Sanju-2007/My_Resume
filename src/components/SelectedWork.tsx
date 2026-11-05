"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Github, 
  Terminal, 
  Activity, 
  Cpu, 
  Layers, 
  Check, 
  Sparkles, 
  Sliders, 
  Radio, 
  Search, 
  FileText,
  Clock,
  ArrowRight
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";

export function SelectedWork() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive state for Aether Engine visualizer
  const [activeAetherTab, setActiveAetherTab] = useState<"cluster" | "metrics" | "stream">("cluster");
  const [simulatedAetherThroughput, setSimulatedAetherThroughput] = useState(64820);

  // Interactive state for Linearis mockup
  const [activeLinearFilter, setActiveLinearFilter] = useState<"all" | "in_progress" | "done">("all");
  const [activeLinearIssue, setActiveLinearIssue] = useState<number | null>(null);

  // Interactive state for PulseEngine
  const [pulseTimeframe, setPulseTimeframe] = useState<"15m" | "1h" | "24h">("15m");

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-border/60 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
            01 // Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary mt-2">
            Selected Work
          </h2>
        </div>
        <p className="text-base sm:text-lg font-serif italic text-ink-secondary max-w-md">
          A collection of systems, developer tools, and digital platforms I've architected, built, and learned from.
        </p>
      </div>

      <div className="space-y-24 sm:space-y-32">
        {/* ==============================================================
            PROJECT 1: AETHER ENGINE — FULL-WIDTH SIGNATURE HERO SHOWCASE
           ============================================================== */}
        {(() => {
          const aether = projects.find((p) => p.id === "aether-broker") || projects[0];
          return (
            <div className="relative rounded-3xl border border-ink-border/80 bg-canvas-pure shadow-card overflow-hidden">
              {/* Top Accent Strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-cobalt via-indigo-500 to-sky-400" />

              <div className="p-6 sm:p-10 lg:p-12 space-y-10">
                {/* Meta & Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cobalt-subtle text-cobalt font-medium border border-cobalt/20">
                      {aether.badge}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      {aether.category} // {aether.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(aether)}
                      className="text-xs font-medium text-ink-secondary hover:text-ink-primary px-3 py-1.5 rounded-lg border border-ink-border/60 hover:border-ink-secondary/50 bg-canvas transition-colors"
                    >
                      Inspect Architecture
                    </button>
                    <a
                      href={aether.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-ink-secondary hover:text-ink-primary transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Main Asymmetric Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Context & Narrative (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-primary">
                        {aether.title}
                      </h3>
                      <p className="text-lg font-serif italic text-ink-secondary mt-1">
                        {aether.tagline}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm text-ink-secondary leading-relaxed">
                      <p>{aether.solution}</p>
                      <div className="p-4 rounded-xl bg-canvas-subtle border border-ink-border/60 text-xs space-y-1.5">
                        <span className="font-mono font-semibold uppercase text-ink-primary block">
                          Contribution Highlights
                        </span>
                        <p className="text-ink-secondary">{aether.contribution}</p>
                      </div>
                    </div>

                    {/* Metrics Trio */}
                    {aether.metrics && (
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {aether.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-canvas border border-ink-border/60">
                            <div className="text-[10px] font-mono uppercase text-ink-muted">{m.label}</div>
                            <div className="text-lg font-bold font-mono text-ink-primary">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {aether.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-canvas-subtle text-ink-secondary border border-ink-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <a
                        href={aether.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-canvas bg-ink-primary hover:bg-ink-primary/90 px-4 py-2 rounded-lg shadow-sm transition-all"
                      >
                        <span>Launch Live Stream Engine</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: High-Fidelity Interactive Telemetry / Architecture Console (7 cols) */}
                  <div className="lg:col-span-7 rounded-2xl border border-ink-border/80 bg-canvas-subtle p-4 sm:p-6 shadow-inner space-y-4">
                    {/* Console Tab Bar */}
                    <div className="flex items-center justify-between border-b border-ink-border/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-2 text-xs font-mono text-ink-secondary font-medium">
                          aether://cluster.local:9092
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-canvas-pure rounded-lg p-0.5 border border-ink-border/60">
                        <button
                          onClick={() => setActiveAetherTab("cluster")}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                            activeAetherTab === "cluster"
                              ? "bg-ink-primary text-canvas"
                              : "text-ink-secondary hover:text-ink-primary"
                          }`}
                        >
                          Topology
                        </button>
                        <button
                          onClick={() => setActiveAetherTab("stream")}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                            activeAetherTab === "stream"
                              ? "bg-ink-primary text-canvas"
                              : "text-ink-secondary hover:text-ink-primary"
                          }`}
                        >
                          Log Ring
                        </button>
                        <button
                          onClick={() => setActiveAetherTab("metrics")}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                            activeAetherTab === "metrics"
                              ? "bg-ink-primary text-canvas"
                              : "text-ink-secondary hover:text-ink-primary"
                          }`}
                        >
                          Telemetry
                        </button>
                      </div>
                    </div>

                    {/* Console Display Viewport */}
                    <div className="bg-canvas-pure rounded-xl border border-ink-border/70 p-5 min-h-[300px] flex flex-col justify-between">
                      {activeAetherTab === "cluster" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                            <span>RAFT PARTITION STATUS: HEALTHY</span>
                            <span className="text-emerald-600 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                              LEADER ELECTED (NODE_0)
                            </span>
                          </div>

                          {/* Cluster Node Cards */}
                          <div className="grid grid-cols-3 gap-3 pt-2">
                            <div className="p-3.5 rounded-xl border-2 border-cobalt bg-cobalt-subtle/30 space-y-1">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-cobalt">Node 0</span>
                                <span className="text-[10px] uppercase font-semibold text-cobalt px-1.5 py-0.2 rounded bg-cobalt/10">LEADER</span>
                              </div>
                              <div className="text-xs text-ink-secondary font-mono">Term: 142</div>
                              <div className="text-xs text-ink-secondary font-mono">Lag: 0 ms</div>
                              <div className="text-[10px] text-ink-muted font-mono pt-1">CRC32: PASS</div>
                            </div>

                            <div className="p-3.5 rounded-xl border border-ink-border bg-canvas space-y-1">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-ink-primary">Node 1</span>
                                <span className="text-[10px] uppercase text-ink-muted">FOLLOWER</span>
                              </div>
                              <div className="text-xs text-ink-secondary font-mono">Term: 142</div>
                              <div className="text-xs text-ink-secondary font-mono">Lag: 0.2 ms</div>
                              <div className="text-[10px] text-ink-muted font-mono pt-1">REPLICATED</div>
                            </div>

                            <div className="p-3.5 rounded-xl border border-ink-border bg-canvas space-y-1">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-ink-primary">Node 2</span>
                                <span className="text-[10px] uppercase text-ink-muted">FOLLOWER</span>
                              </div>
                              <div className="text-xs text-ink-secondary font-mono">Term: 142</div>
                              <div className="text-xs text-ink-secondary font-mono">Lag: 0.4 ms</div>
                              <div className="text-[10px] text-ink-muted font-mono pt-1">REPLICATED</div>
                            </div>
                          </div>

                          {/* Pipeline Flow Visualization */}
                          <div className="p-3 rounded-lg bg-canvas-subtle border border-ink-border/50 text-xs font-mono text-ink-secondary flex items-center justify-between overflow-x-auto">
                            <span>Client Producer</span>
                            <span>→</span>
                            <span className="text-cobalt font-semibold">Zero-Copy MMap</span>
                            <span>→</span>
                            <span>Raft Quorum</span>
                            <span>→</span>
                            <span className="text-emerald-600 font-semibold">Consumer Push</span>
                          </div>
                        </div>
                      )}

                      {activeAetherTab === "stream" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="text-ink-muted text-[11px] pb-1 border-b border-ink-border/40 flex justify-between">
                            <span>SEGMENT LOG OFFSET: 0x004F90A</span>
                            <span>MMAP BUFFER: SYNCED</span>
                          </div>
                          <div className="space-y-1.5 text-ink-secondary">
                            <div className="p-2 rounded bg-canvas-subtle flex items-center justify-between">
                              <span className="text-ink-primary">#48192 [0x1A2F] payload_size=512b</span>
                              <span className="text-emerald-600">COMMITTED</span>
                            </div>
                            <div className="p-2 rounded bg-canvas-subtle flex items-center justify-between">
                              <span className="text-ink-primary">#48193 [0x1A30] payload_size=1024b</span>
                              <span className="text-emerald-600">COMMITTED</span>
                            </div>
                            <div className="p-2 rounded bg-canvas-subtle flex items-center justify-between">
                              <span className="text-ink-primary">#48194 [0x1A31] payload_size=256b</span>
                              <span className="text-emerald-600">COMMITTED</span>
                            </div>
                            <div className="p-2 rounded bg-cobalt-subtle/50 border border-cobalt/20 flex items-center justify-between text-cobalt">
                              <span className="font-semibold">#48195 [0x1A32] write_in_progress</span>
                              <span className="animate-pulse">FSYNCING...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeAetherTab === "metrics" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-ink-secondary">Live Throughput (1s window)</span>
                            <span className="text-sm font-mono font-bold text-cobalt">{simulatedAetherThroughput.toLocaleString()} msg/sec</span>
                          </div>
                          
                          {/* Simulated SVG Bar graph */}
                          <div className="h-28 flex items-end gap-1.5 pt-4">
                            {[42, 55, 68, 72, 85, 78, 92, 88, 95, 99, 94, 91, 96, 98, 97].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-cobalt/20 hover:bg-cobalt rounded-t transition-all duration-150 cursor-pointer"
                                style={{ height: `${height}%` }}
                                title={`Bucket ${i}: ${height * 700} msg/s`}
                              />
                            ))}
                          </div>

                          <div className="flex justify-between text-[11px] font-mono text-ink-muted border-t border-ink-border/50 pt-2">
                            <span>P50: 0.6ms</span>
                            <span>P90: 1.1ms</span>
                            <span className="text-ink-primary font-bold">P99: 1.8ms</span>
                            <span>Memory: 21.4MB</span>
                          </div>
                        </div>
                      )}

                      {/* Interactive Trigger Footer in Console */}
                      <div className="pt-4 border-t border-ink-border/50 flex items-center justify-between text-xs font-mono text-ink-muted">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Heartbeat: 40ms interval</span>
                        </span>
                        <button
                          onClick={() => setSimulatedAetherThroughput((prev) => prev + Math.floor(Math.random() * 800 - 350))}
                          className="hover:text-ink-primary text-cobalt underline"
                        >
                          Ping Cluster Test
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ==============================================================
            PROJECT 2: LINEARIS WORKSPACE — ASYMMETRICAL SPLIT SHOWCASE
           ============================================================== */}
        {(() => {
          const linearis = projects.find((p) => p.id === "linearis-task") || projects[1];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: UI Mockup Preview (7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-1 rounded-2xl border border-ink-border/80 bg-canvas-pure shadow-card overflow-hidden">
                {/* Mock Browser/App Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-ink-border/60 bg-canvas-subtle/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-ink-secondary">Linearis / Q3 Sprint Board</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                    <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      CRDT SYNCED
                    </span>
                    <span className="bg-canvas border border-ink-border/60 px-1.5 py-0.5 rounded text-[10px]">
                      ⌘K
                    </span>
                  </div>
                </div>

                {/* Interactive Mock Workspace Canvas */}
                <div className="p-6 space-y-4">
                  {/* Filter Toolbar */}
                  <div className="flex items-center justify-between pb-2 border-b border-ink-border/40">
                    <div className="flex items-center gap-1">
                      {(["all", "in_progress", "done"] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveLinearFilter(filter)}
                          className={`text-xs px-3 py-1 rounded-lg capitalize transition-colors ${
                            activeLinearFilter === filter
                              ? "bg-ink-primary text-canvas font-medium"
                              : "text-ink-secondary hover:text-ink-primary hover:bg-canvas-subtle"
                          }`}
                        >
                          {filter.replace("_", " ")}
                        </button>
                      ))}
                    </div>

                    <div className="text-[11px] font-mono text-ink-muted">
                      10,000+ items @ 60 FPS
                    </div>
                  </div>

                  {/* Mock Issues List with Keyboard Indicator */}
                  <div className="space-y-2">
                    {[
                      { id: "LIN-104", title: "Implement Raft snapshot compaction", status: "in_progress", priority: "Urgent", assignee: "SV" },
                      { id: "LIN-105", title: "Zero-copy ring buffer memory leak audit", status: "in_progress", priority: "High", assignee: "SV" },
                      { id: "LIN-102", title: "IndexedDB WASM storage persistence fallback", status: "done", priority: "Medium", assignee: "SV" },
                      { id: "LIN-101", title: "Keyboard command palette fuzzy scoring engine", status: "done", priority: "Normal", assignee: "SV" },
                    ]
                      .filter((item) => activeLinearFilter === "all" || item.status === activeLinearFilter)
                      .map((issue, idx) => (
                        <div
                          key={issue.id}
                          onClick={() => setActiveLinearIssue(idx)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            activeLinearIssue === idx
                              ? "border-cobalt bg-cobalt-subtle/30 shadow-xs"
                              : "border-ink-border/60 bg-canvas hover:border-ink-secondary/40 hover:bg-canvas-subtle/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-ink-muted font-semibold">{issue.id}</span>
                            <span className="text-xs font-medium text-ink-primary">{issue.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              issue.priority === "Urgent" 
                                ? "bg-rose-50 text-rose-600 border border-rose-200" 
                                : issue.priority === "High"
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-canvas-subtle text-ink-muted border border-ink-border/50"
                            }`}>
                              {issue.priority}
                            </span>
                            <div className="w-5 h-5 rounded-full bg-ink-primary text-canvas text-[10px] font-mono flex items-center justify-center font-bold">
                              {issue.assignee}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Hotkey Help Strip */}
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-muted border-t border-ink-border/40">
                    <span>Press <kbd className="px-1.5 py-0.5 rounded bg-canvas-subtle border border-ink-border text-ink-secondary">C</kbd> to Create</span>
                    <span>Press <kbd className="px-1.5 py-0.5 rounded bg-canvas-subtle border border-ink-border text-ink-secondary">/</kbd> to Filter</span>
                    <span>Optimistic Latency: 4ms</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Strategy (5 cols) */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {linearis.badge}
                  </span>
                  <span className="text-xs font-mono text-ink-muted">{linearis.year}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-primary">
                    {linearis.title}
                  </h3>
                  <p className="text-lg font-serif italic text-ink-secondary mt-1">
                    {linearis.tagline}
                  </p>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {linearis.problem}
                </p>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {linearis.solution}
                </p>

                {/* Metrics */}
                {linearis.metrics && (
                  <div className="grid grid-cols-3 gap-3 py-2 border-y border-ink-border/60">
                    {linearis.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono uppercase text-ink-muted">{m.label}</div>
                        <div className="text-base font-bold font-mono text-ink-primary">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {linearis.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-canvas-pure border border-ink-border text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(linearis)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-primary bg-canvas-pure hover:bg-canvas-subtle border border-ink-border px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Read Engineering Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={linearis.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-ink-secondary hover:text-ink-primary border border-ink-border rounded-lg bg-canvas-pure"
                    aria-label="GitHub Repo"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ==============================================================
            PROJECT 3: PULSEENGINE APM — DEEP DARK SHOWCASE SECTION
           ============================================================== */}
        {(() => {
          const pulse = projects.find((p) => p.id === "pulse-telemetry") || projects[2];
          return (
            <div className="rounded-3xl bg-dark-canvas text-white p-6 sm:p-10 lg:p-12 border border-dark-border shadow-dark-card space-y-10 relative overflow-hidden">
              {/* Subtle Dark Grid Lines */}
              <div className="absolute inset-0 pointer-events-none bg-grid-dark opacity-40" />

              {/* Header */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-dark-border pb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {pulse.badge}
                  </span>
                  <span className="text-xs font-mono text-dark-muted">
                    {pulse.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(pulse)}
                    className="text-xs font-mono text-dark-muted hover:text-white px-3 py-1.5 rounded-lg border border-dark-border hover:border-dark-muted transition-colors"
                  >
                    Inspect Engine Specs
                  </button>
                  <a
                    href={pulse.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-dark-muted hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Main Content & Dark Telemetry View */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Narrative (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                      {pulse.title}
                    </h3>
                    <p className="text-lg font-serif italic text-dark-muted mt-1">
                      {pulse.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pulse.problem}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pulse.solution}
                  </p>

                  {/* Dark Metrics */}
                  {pulse.metrics && (
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark-surface border border-dark-border">
                      {pulse.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-[10px] font-mono uppercase text-dark-muted">{m.label}</div>
                          <div className="text-lg font-mono font-bold text-emerald-400">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {pulse.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-dark-surface text-gray-300 border border-dark-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Dark Telemetry Visualizer (7 cols) */}
                <div className="lg:col-span-7 rounded-2xl bg-dark-surface border border-dark-border p-5 space-y-4 shadow-2xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-dark-muted border-b border-dark-border/80 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span>GATEWAY_LATENCY // ROLLING_P99</span>
                    </div>

                    <div className="flex items-center gap-1 bg-dark-canvas p-0.5 rounded border border-dark-border">
                      {(["15m", "1h", "24h"] as const).map((tf) => (
                        <button
                          key={tf}
                          onClick={() => setPulseTimeframe(tf)}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            pulseTimeframe === tf ? "bg-emerald-500 text-dark-canvas font-bold" : "hover:text-white"
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dark Waveform Simulation */}
                  <div className="h-44 relative flex items-end gap-1 pt-6 px-2">
                    {/* Anomaly Upper Threshold line */}
                    <div className="absolute top-10 left-0 right-0 border-b border-dashed border-rose-500/50 flex justify-between text-[9px] font-mono text-rose-400 px-2">
                      <span>ANOMALY THRESHOLD (+2.5σ)</span>
                      <span>24.5 ms</span>
                    </div>

                    {[14, 16, 15, 18, 17, 19, 16, 18, 22, 21, 38, 20, 19, 17, 18, 16, 15, 17, 18, 16].map((val, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-t transition-all ${
                          val > 25 ? "bg-rose-500 animate-pulse" : "bg-emerald-500/60 hover:bg-emerald-400"
                        }`}
                        style={{ height: `${(val / 42) * 100}%` }}
                        title={`Sample #${idx}: ${val}ms`}
                      />
                    ))}
                  </div>

                  {/* Terminal log snippet */}
                  <div className="p-3 rounded-lg bg-dark-canvas border border-dark-border text-xs font-mono space-y-1 text-gray-300">
                    <div className="text-[11px] text-dark-muted flex justify-between">
                      <span>[LOG_STREAM: LIVE]</span>
                      <span className="text-emerald-400">STATUS: AUTO_RESOLVED</span>
                    </div>
                    <div className="text-gray-400">
                      [17:04:12] PROBE cluster-us-east-1 :: HTTP 200 (16.2ms)
                    </div>
                    <div className="text-rose-400 font-semibold">
                      [17:04:13] FLAG: Transient jitter spike detected (38.4ms) → Filtered as statistical outlier
                    </div>
                    <div className="text-gray-400">
                      [17:04:14] PROBE cluster-eu-central-1 :: HTTP 200 (15.8ms)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ==============================================================
            PROJECT 4: COGNITO NEURAL CANVAS — EDITORIAL HYBRID CARD
           ============================================================== */}
        {(() => {
          const cognito = projects.find((p) => p.id === "cognito-research") || projects[3];
          return (
            <div className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 sm:p-10 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info (6 cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-rose-50 text-rose-700 border border-rose-200">
                      {cognito.badge}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">{cognito.year}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
                      {cognito.title}
                    </h3>
                    <p className="text-base font-serif italic text-ink-secondary mt-1">
                      {cognito.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {cognito.problem}
                  </p>

                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {cognito.solution}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cognito.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-canvas-subtle text-ink-secondary border border-ink-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProject(cognito)}
                      className="text-xs font-medium text-ink-primary bg-canvas border border-ink-border px-3.5 py-2 rounded-lg hover:bg-canvas-subtle transition-colors"
                    >
                      Case Study Details
                    </button>
                    <a
                      href={cognito.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-ink-secondary hover:text-ink-primary border border-ink-border rounded-lg"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Mock PDF Citation Card (6 cols) */}
                <div className="lg:col-span-6 rounded-xl border border-ink-border/70 bg-canvas-subtle p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-ink-muted border-b border-ink-border/50 pb-2">
                    <span className="flex items-center gap-1.5 text-ink-primary font-medium">
                      <FileText className="w-3.5 h-3.5 text-cobalt" />
                      ArXiv:2304.10291.pdf (Page 4)
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      94.2% GROUNDED
                    </span>
                  </div>

                  {/* Simulated Paper Extract with Bounding Box Highlight */}
                  <div className="p-4 rounded-lg bg-canvas-pure border border-ink-border/60 text-xs font-serif leading-relaxed text-ink-secondary relative">
                    <p className="opacity-60">
                      Recent advances in distributed consensus demonstrate that pipelined log append operations
                      dramatically curtail disk stall cycles...
                    </p>
                    <p className="my-2 p-1.5 rounded bg-amber-100/70 border-l-2 border-amber-500 text-ink-primary font-medium">
                      "[...] by caching segment descriptors in memory-mapped pages, tail latency drops below 2ms under
                      peak synthetic stress."
                    </p>
                    <p className="opacity-60">
                      Furthermore, peer heartbeat jitter remains within tolerable bounds when bounded by dynamic timers.
                    </p>

                    <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      Citation #1 (Box [140, 220, 480, 260])
                    </div>
                  </div>

                  {/* Retrieval Score Breakdown */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-canvas-pure border border-ink-border/50">
                      <div className="text-ink-muted text-[10px]">BM25 KEYWORD SCORE</div>
                      <div className="font-bold text-ink-primary">18.42 (Exact)</div>
                    </div>
                    <div className="p-2.5 rounded bg-canvas-pure border border-ink-border/50">
                      <div className="text-ink-muted text-[10px]">DENSE COSINE SIMILARITY</div>
                      <div className="font-bold text-cobalt">0.914 (High Confidence)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
