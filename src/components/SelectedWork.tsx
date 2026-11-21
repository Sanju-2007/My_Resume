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
  Search, 
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Camera,
  Target,
  Volume2,
  Mic,
  BrainCircuit,
  Database
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { InteractiveTilt } from "./InteractiveTilt";

export function SelectedWork() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive state for Attendify AI visualizer
  const [attendifyTab, setAttendifyTab] = useState<"detection" | "embeddings" | "analytics">("detection");
  const [simulatedStudentsProcessed, setSimulatedStudentsProcessed] = useState(54);

  // Interactive state for OptiLign beam tracking
  const [optilignActiveMode, setOptilignActiveMode] = useState<"fsm" | "turbulence" | "tests">("fsm");

  // Interactive state for Sony presence platform
  const [sonyVoiceActive, setSonyVoiceActive] = useState(false);

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
          A showcase of artificial intelligence systems, computer vision pipelines, and real-time platforms engineered by Gurijala Sri Krishna Sanjay Varma.
        </p>
      </div>

      <div className="space-y-24 sm:space-y-32">
        {/* ==============================================================
            PROJECT 1: ATTENDIFY — SIGNATURE AI COMPUTER VISION HERO SHOWCASE
           ============================================================== */}
        {(() => {
          const attendify = projects.find((p) => p.id === "attendify-ai") || projects[0];
          return (
            <InteractiveTilt maxTilt={3} glareOpacity={0.12} className="w-full">
              <div className="relative rounded-3xl border border-ink-border/80 bg-canvas-pure shadow-card overflow-hidden">
                {/* Top Accent Strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cobalt via-indigo-500 to-sky-400" />

                <div className="p-6 sm:p-10 lg:p-12 space-y-10">
                  {/* Meta & Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-cobalt-subtle text-cobalt font-medium border border-cobalt/20">
                        {attendify.badge}
                      </span>
                      <span className="text-xs font-mono text-ink-muted">
                        {attendify.category} // {attendify.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(attendify)}
                        className="text-xs font-medium text-ink-secondary hover:text-ink-primary px-3 py-1.5 rounded-lg border border-ink-border/60 hover:border-ink-secondary/50 bg-canvas transition-colors"
                      >
                        Inspect Architecture
                      </button>
                      <a
                        href={attendify.githubUrl}
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
                          {attendify.title}
                        </h3>
                        <p className="text-lg font-serif italic text-ink-secondary mt-1">
                          {attendify.tagline}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm text-ink-secondary leading-relaxed">
                        <p>{attendify.solution}</p>
                        <div className="p-4 rounded-xl bg-canvas-subtle border border-ink-border/60 text-xs space-y-1.5">
                          <span className="font-mono font-semibold uppercase text-ink-primary block flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-cobalt" />
                            Role: AI Service Developer
                          </span>
                          <p className="text-ink-secondary">{attendify.contribution}</p>
                        </div>
                      </div>

                      {/* Metrics Trio */}
                      {attendify.metrics && (
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {attendify.metrics.map((m, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-canvas border border-ink-border/60">
                              <div className="text-[10px] font-mono uppercase text-ink-muted">{m.label}</div>
                              <div className="text-lg font-bold font-mono text-ink-primary">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {attendify.technologies.map((t, idx) => (
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
                          href={attendify.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-canvas bg-ink-primary hover:bg-ink-primary/90 px-4 py-2 rounded-lg shadow-sm transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View on GitHub (Sanju-2007)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Interactive Face Recognition Telemetry Console (7 cols) */}
                    <div className="lg:col-span-7 rounded-2xl border border-ink-border/80 bg-canvas-subtle p-4 sm:p-6 shadow-inner space-y-4">
                      {/* Console Tab Bar */}
                      <div className="flex items-center justify-between border-b border-ink-border/60 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 text-xs font-mono text-ink-secondary font-medium">
                            attendify://fastapi-ai-service:8000
                          </span>
                        </div>

                        <div className="flex items-center gap-1 bg-canvas-pure rounded-lg p-0.5 border border-ink-border/60">
                          <button
                            onClick={() => setAttendifyTab("detection")}
                            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                              attendifyTab === "detection"
                                ? "bg-ink-primary text-canvas"
                                : "text-ink-secondary hover:text-ink-primary"
                            }`}
                          >
                            Detection
                          </button>
                          <button
                            onClick={() => setAttendifyTab("embeddings")}
                            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                              attendifyTab === "embeddings"
                                ? "bg-ink-primary text-canvas"
                                : "text-ink-secondary hover:text-ink-primary"
                            }`}
                          >
                            512-D Vectors
                          </button>
                          <button
                            onClick={() => setAttendifyTab("analytics")}
                            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                              attendifyTab === "analytics"
                                ? "bg-ink-primary text-canvas"
                                : "text-ink-secondary hover:text-ink-primary"
                            }`}
                          >
                            Attendance
                          </button>
                        </div>
                      </div>

                      {/* Console Display Viewport */}
                      <div className="bg-canvas-pure rounded-xl border border-ink-border/70 p-5 min-h-[300px] flex flex-col justify-between">
                        {attendifyTab === "detection" && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                              <span>RETINAFACE MULTI-FACE DETECTION</span>
                              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                {simulatedStudentsProcessed} FACES EXTRACTED
                              </span>
                            </div>

                            {/* Simulated Classroom Photo Bounding Box View */}
                            <div className="p-4 rounded-xl border border-ink-border/80 bg-canvas-subtle/80 space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono text-ink-secondary">
                                <span className="flex items-center gap-1.5">
                                  <Camera className="w-3.5 h-3.5 text-cobalt" />
                                  <span>classroom_batch_04.jpg [4032x3024]</span>
                                </span>
                                <span className="text-cobalt font-semibold">11.4s INFERENCE TIME</span>
                              </div>

                              {/* Bounding box grid mock */}
                              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-1">
                                {[
                                  { id: "01", conf: "99.4%", name: "G. Sanjay Varma" },
                                  { id: "02", conf: "98.7%", name: "Student #2002" },
                                  { id: "03", conf: "99.1%", name: "Student #2003" },
                                  { id: "04", conf: "97.8%", name: "Student #2004" },
                                  { id: "05", conf: "99.5%", name: "Student #2005" },
                                  { id: "06", conf: "98.2%", name: "Student #2006" },
                                ].map((box) => (
                                  <div
                                    key={box.id}
                                    className="p-2 rounded border border-emerald-500/40 bg-emerald-50/50 text-[10px] font-mono text-emerald-800 space-y-0.5"
                                  >
                                    <div className="font-bold truncate">{box.name}</div>
                                    <div className="text-[9px] text-emerald-600">{box.conf}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Pipeline Flow Visualization */}
                            <div className="p-3 rounded-lg bg-canvas-subtle border border-ink-border/50 text-xs font-mono text-ink-secondary flex items-center justify-between overflow-x-auto">
                              <span>Classroom Photo</span>
                              <span>→</span>
                              <span className="text-cobalt font-semibold">RetinaFace Detection</span>
                              <span>→</span>
                              <span className="text-indigo-600 font-semibold">InsightFace ONNX</span>
                              <span>→</span>
                              <span className="text-emerald-600 font-semibold">Attendance Logged</span>
                            </div>
                          </div>
                        )}

                        {attendifyTab === "embeddings" && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="text-ink-muted text-[11px] pb-1 border-b border-ink-border/40 flex justify-between">
                              <span>INSIGHTFACE 512-DIMENSIONAL COSINE MATCHING</span>
                              <span>ONNX RUNTIME: ACCELERATED</span>
                            </div>
                            <div className="space-y-1.5 text-ink-secondary">
                              <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
                                <span className="text-ink-primary font-medium">Vector #01: Sanjay Varma [512-D]</span>
                                <span className="text-emerald-600 font-bold">SIMILARITY: 0.948 (MATCH)</span>
                              </div>
                              <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
                                <span className="text-ink-primary font-medium">Vector #02: Student Roll #24 [512-D]</span>
                                <span className="text-emerald-600 font-bold">SIMILARITY: 0.922 (MATCH)</span>
                              </div>
                              <div className="p-2.5 rounded bg-canvas-subtle flex items-center justify-between">
                                <span className="text-ink-primary font-medium">Vector #03: Student Roll #31 [512-D]</span>
                                <span className="text-emerald-600 font-bold">SIMILARITY: 0.897 (MATCH)</span>
                              </div>
                              <div className="p-2.5 rounded bg-amber-50/60 border border-amber-200/50 flex items-center justify-between text-amber-800">
                                <span className="font-medium">Threshold Filter (&gt;0.78 Cosine Distance)</span>
                                <span>PROXY REJECTED (0.42)</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {attendifyTab === "analytics" && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono text-ink-secondary">Lecture Hall Presence Rate</span>
                              <span className="text-sm font-mono font-bold text-cobalt">94.4% Attended (51/54)</span>
                            </div>
                            
                            {/* Attendance Histogram */}
                            <div className="h-24 flex items-end gap-1.5 pt-2">
                              {[90, 94, 96, 92, 98, 91, 95, 93, 97, 94, 92, 96, 95, 94, 98].map((rate, i) => (
                                <div
                                  key={i}
                                  className="flex-1 bg-cobalt/25 hover:bg-cobalt rounded-t transition-all duration-150 cursor-pointer"
                                  style={{ height: `${rate}%` }}
                                  title={`Lecture Session ${i + 1}: ${rate}% attendance`}
                                />
                              ))}
                            </div>

                            <div className="flex justify-between text-[11px] font-mono text-ink-muted border-t border-ink-border/50 pt-2">
                              <span>DB: PostgreSQL / Prisma</span>
                              <span>Alerts: Automated Email</span>
                              <span className="text-ink-primary font-bold">Inference: &lt;12s Batch</span>
                            </div>
                          </div>
                        )}

                        {/* Interactive Trigger Footer in Console */}
                        <div className="pt-4 border-t border-ink-border/50 flex items-center justify-between text-xs font-mono text-ink-muted">
                          <span className="flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-emerald-500" />
                            <span>FastAPI Microservice Active</span>
                          </span>
                          <button
                            onClick={() => setSimulatedStudentsProcessed((prev) => (prev >= 60 ? 50 : prev + 2))}
                            className="hover:text-ink-primary text-cobalt underline"
                          >
                            Simulate Batch Run
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTilt>
          );
        })()}

        {/* ==============================================================
            PROJECT 2: OPTILIGN — ADVANCED FSOC PAT TRACKING SYSTEM
           ============================================================== */}
        {(() => {
          const optilign = projects.find((p) => p.id === "optilign-fsoc") || projects[1];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Physics Simulator Preview (7 cols) */}
              <InteractiveTilt maxTilt={4} glareOpacity={0.16} className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-2xl border border-ink-border/80 bg-canvas-pure shadow-card overflow-hidden">
                  {/* Console Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-ink-border/60 bg-canvas-subtle/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-xs font-mono text-ink-secondary">
                        OptiLign // FSOC Beam Tracking Loop
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        LOCK: 100.0%
                      </span>
                      <span className="bg-canvas border border-ink-border/60 px-1.5 py-0.5 rounded text-[10px]">
                        337 TESTS
                      </span>
                    </div>
                  </div>

                  {/* Interactive Optical Beam Alignment Canvas */}
                  <div className="p-6 space-y-4">
                    {/* Mode Buttons */}
                    <div className="flex items-center justify-between pb-2 border-b border-ink-border/40">
                      <div className="flex items-center gap-1">
                        {(["fsm", "turbulence", "tests"] as const).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setOptilignActiveMode(mode)}
                            className={`text-xs px-3 py-1 rounded-lg uppercase font-mono transition-colors ${
                              optilignActiveMode === mode
                                ? "bg-ink-primary text-canvas font-medium"
                                : "text-ink-secondary hover:text-ink-primary hover:bg-canvas-subtle"
                            }`}
                          >
                            {mode === "fsm" ? "18 nrad FSM" : mode === "turbulence" ? "Turbulence" : "337 Tests"}
                          </button>
                        ))}
                      </div>

                      <div className="text-[11px] font-mono text-ink-muted">
                        Python 3.12+ // Mypy Strict
                      </div>
                    </div>

                    {/* Beam Center Display */}
                    {optilignActiveMode === "fsm" && (
                      <div className="p-4 rounded-xl bg-canvas-subtle border border-ink-border/60 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-ink-primary font-bold">Fast-Steering Mirror Pointing Lock</span>
                          <span className="text-emerald-600 font-semibold">18.4 nrad RESIDUAL JITTER</span>
                        </div>
                        <div className="h-32 rounded-lg bg-canvas-pure border border-ink-border/50 relative flex items-center justify-center overflow-hidden">
                          {/* Crosshairs */}
                          <div className="absolute inset-x-0 h-px bg-ink-border/60" />
                          <div className="absolute inset-y-0 w-px bg-ink-border/60" />
                          <div className="w-20 h-20 rounded-full border border-dashed border-cobalt/40 animate-spin" />
                          <div className="w-6 h-6 rounded-full border border-emerald-500/60 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          </div>
                          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-ink-muted">
                            Centroid Lock: (0.012, -0.008)
                          </span>
                        </div>
                      </div>
                    )}

                    {optilignActiveMode === "turbulence" && (
                      <div className="p-4 rounded-xl bg-canvas-subtle border border-ink-border/60 space-y-2 text-xs font-mono">
                        <div className="flex justify-between text-ink-primary font-semibold">
                          <span>Atmospheric Wavefront Compensation</span>
                          <span className="text-cobalt">Fried Parameter (r0): 0.15m</span>
                        </div>
                        <p className="text-ink-secondary text-[11px] leading-relaxed">
                          OptiLign simulates harsh atmospheric turbulence without requiring physical optical benches or physical gimbals, dynamically stabilizing laser communication beams.
                        </p>
                      </div>
                    )}

                    {optilignActiveMode === "tests" && (
                      <div className="space-y-1.5 font-mono text-xs">
                        <div className="p-2 rounded bg-emerald-50 text-emerald-800 flex justify-between border border-emerald-200/50">
                          <span>tests/test_fsm_control.py</span>
                          <span>PASSED (18 nrad lock)</span>
                        </div>
                        <div className="p-2 rounded bg-emerald-50 text-emerald-800 flex justify-between border border-emerald-200/50">
                          <span>tests/test_acquisition_spiral.py</span>
                          <span>PASSED (100% availability)</span>
                        </div>
                        <div className="p-2 rounded bg-emerald-50 text-emerald-800 flex justify-between border border-emerald-200/50">
                          <span>mypy --strict pyproject.toml</span>
                          <span>SUCCESS: 0 errors</span>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-muted border-t border-ink-border/40">
                      <span>Carrier: &gt;193 THz Optical</span>
                      <span>Lock: Autonomous Coarse-to-Fine</span>
                      <span>Accuracy: 18–22 nrad</span>
                    </div>
                  </div>
                </div>
              </InteractiveTilt>

              {/* Right Column: Editorial Narrative & Strategy (5 cols) */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {optilign.badge}
                  </span>
                  <span className="text-xs font-mono text-ink-muted">{optilign.year}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-primary">
                    {optilign.title}
                  </h3>
                  <p className="text-lg font-serif italic text-ink-secondary mt-1">
                    {optilign.tagline}
                  </p>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {optilign.problem}
                </p>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {optilign.solution}
                </p>

                {/* Metrics */}
                {optilign.metrics && (
                  <div className="grid grid-cols-3 gap-3 py-2 border-y border-ink-border/60">
                    {optilign.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono uppercase text-ink-muted">{m.label}</div>
                        <div className="text-base font-bold font-mono text-ink-primary">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {optilign.technologies.map((t, idx) => (
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
                    onClick={() => setSelectedProject(optilign)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-primary bg-canvas-pure hover:bg-canvas-subtle border border-ink-border px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Read Engineering Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={optilign.githubUrl}
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
            PROJECT 3: SONY — REAL-TIME PRESENCE & SOCIAL LISTENING PLATFORM
           ============================================================== */}
        {(() => {
          const sony = projects.find((p) => p.id === "sony-presence") || projects[2];
          return (
            <InteractiveTilt maxTilt={3} glareOpacity={0.18} className="w-full">
              <div className="rounded-3xl bg-dark-canvas text-white p-6 sm:p-10 lg:p-12 border border-dark-border shadow-dark-card space-y-10 relative overflow-hidden">
                {/* Header */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-dark-border pb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      {sony.badge}
                    </span>
                    <span className="text-xs font-mono text-dark-muted">
                      {sony.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(sony)}
                      className="text-xs font-mono text-dark-muted hover:text-white px-3 py-1.5 rounded-lg border border-dark-border hover:border-dark-muted transition-colors"
                    >
                      Inspect Sync Specs
                    </button>
                    <a
                      href={sony.githubUrl}
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
                        {sony.title}
                      </h3>
                      <p className="text-lg font-serif italic text-dark-muted mt-1">
                        {sony.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {sony.problem}
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {sony.solution}
                    </p>

                    {/* Dark Metrics */}
                    {sony.metrics && (
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark-surface border border-dark-border">
                        {sony.metrics.map((m, idx) => (
                          <div key={idx}>
                            <div className="text-[10px] font-mono uppercase text-dark-muted">{m.label}</div>
                            <div className="text-lg font-mono font-bold text-indigo-400">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {sony.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-dark-surface text-gray-300 border border-dark-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Dark Presence & Audio Ducking Simulator (7 cols) */}
                  <div className="lg:col-span-7 rounded-2xl bg-dark-surface border border-dark-border p-5 space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between text-xs font-mono text-dark-muted border-b border-dark-border/80 pb-3">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-indigo-400" />
                        <span>PLAYBACK_SYNC_ENGINE // CLOCK DRIFT</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">DRIFT &lt; 150MS (IN_SYNC)</span>
                    </div>

                    {/* Interactive Voice Ducking Simulator */}
                    <div className="p-4 rounded-xl bg-dark-canvas border border-dark-border space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-gray-300 flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-indigo-400" />
                          <span>LiveKit WebRTC Voice Room ("Sing Together" Mode)</span>
                        </span>
                        <button
                          onClick={() => setSonyVoiceActive(!sonyVoiceActive)}
                          className={`px-3 py-1 rounded text-[11px] font-semibold transition-all ${
                            sonyVoiceActive
                              ? "bg-rose-500 text-white"
                              : "bg-indigo-600 hover:bg-indigo-500 text-white"
                          }`}
                        >
                          {sonyVoiceActive ? "Speaking (Ducked 40%)" : "Simulate Speech Activity"}
                        </button>
                      </div>

                      {/* Volume Level Bar Indicator */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono text-dark-muted">
                          <span>Music Master Attenuation</span>
                          <span className={sonyVoiceActive ? "text-amber-400" : "text-emerald-400"}>
                            {sonyVoiceActive ? "40% (Voice Ducked, 800ms hold)" : "100% (Full Fidelity)"}
                          </span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-neutral-800 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              sonyVoiceActive ? "w-[40%] bg-amber-400" : "w-full bg-emerald-400"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* State Vectors Terminal Log */}
                    <div className="p-3 rounded-lg bg-dark-canvas border border-dark-border text-xs font-mono space-y-1 text-gray-300">
                      <div className="text-[11px] text-dark-muted flex justify-between">
                        <span>[PLAYBACK_SYNC_LOG]</span>
                        <span className="text-emerald-400">STATE: BROADCASTING</span>
                      </div>
                      <div className="text-gray-400">
                        [10:14:02] Client #1: state_vector drift = +42ms → Status: IN_SYNC (NOOP)
                      </div>
                      <div className="text-gray-400">
                        [10:14:03] Client #2: state_vector drift = +180ms → Status: NUDGE_RATE (0.95x pitch-safe)
                      </div>
                      <div className="text-indigo-400 font-semibold">
                        [10:14:04] Audio Relay: Zero copyrighted audio stored or proxied through backend
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTilt>
          );
        })()}

        {/* ==============================================================
            PROJECT 4: HINDSIGHT AI MEMORY SYSTEM — ONGOING RESEARCH CARD
           ============================================================== */}
        {(() => {
          const hindsight = projects.find((p) => p.id === "hindsight-ai-memory") || projects[3];
          return (
            <InteractiveTilt maxTilt={3} glareOpacity={0.12} className="w-full">
              <div className="rounded-2xl border border-ink-border/80 bg-canvas-pure p-6 sm:p-10 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Info (6 cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-rose-50 text-rose-700 border border-rose-200">
                        {hindsight.badge}
                      </span>
                      <span className="text-xs font-mono text-ink-muted">{hindsight.year}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
                        {hindsight.title}
                      </h3>
                      <p className="text-base font-serif italic text-ink-secondary mt-1">
                        {hindsight.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {hindsight.problem}
                    </p>

                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {hindsight.solution}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {hindsight.technologies.map((t, idx) => (
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
                        onClick={() => setSelectedProject(hindsight)}
                        className="text-xs font-medium text-ink-primary bg-canvas border border-ink-border px-3.5 py-2 rounded-lg hover:bg-canvas-subtle transition-colors"
                      >
                        Research Architecture
                      </button>
                      <a
                        href={hindsight.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-ink-secondary hover:text-ink-primary border border-ink-border rounded-lg"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Contextual Memory Visualization (6 cols) */}
                  <div className="lg:col-span-6 rounded-xl border border-ink-border/70 bg-canvas-subtle p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted border-b border-ink-border/50 pb-2">
                      <span className="flex items-center gap-1.5 text-ink-primary font-medium">
                        <BrainCircuit className="w-3.5 h-3.5 text-cobalt" />
                        Hierarchical Episodic Memory Schema
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        ACTIVE RAG PIPELINE
                      </span>
                    </div>

                    {/* Memory Hierarchy Schema */}
                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-canvas-pure border border-ink-border/60 space-y-1">
                        <div className="text-[10px] text-cobalt uppercase font-bold">Session Tier (Short-Term Working Context)</div>
                        <div className="text-ink-secondary text-[11px]">
                          Immediate prompt-response buffer with sliding attention window.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-canvas-pure border border-ink-border/60 space-y-1">
                        <div className="text-[10px] text-purple-600 uppercase font-bold">Episodic Tier (Semantic Vector Embeddings)</div>
                        <div className="text-ink-secondary text-[11px]">
                          Clustered interaction summaries indexed via dense embeddings for multi-turn recall.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-canvas-pure border border-ink-border/60 space-y-1">
                        <div className="text-[10px] text-emerald-600 uppercase font-bold">Consolidated Knowledge Tier (RAG Synthesizer)</div>
                        <div className="text-ink-secondary text-[11px]">
                          Long-term user preferences and verified facts preserved across recurring conversations.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pt-1">
                      <span>Goal: Conversational Continuity</span>
                      <span className="text-ink-primary font-bold">Zero Context Window Amnesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTilt>
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
