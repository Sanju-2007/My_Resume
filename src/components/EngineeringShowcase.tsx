"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Activity,
  Cpu,
  MoveHorizontal,
  Server,
  Code2,
  Database,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  GitBranch
} from "lucide-react";
import { InteractiveTilt } from "./InteractiveTilt";

export function EngineeringShowcase() {
  // Slider state for Standard vs Optimized (percentage from 0 to 100)
  const [sliderPos, setSliderPos] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active layer in engineering stack
  const [activeLayer, setActiveLayer] = useState<0 | 1 | 2 | 3>(0);

  // Active view mode: "comparison" | "matrix" | "layers"
  const [viewMode, setViewMode] = useState<"comparison" | "matrix" | "layers">("comparison");

  // Mouse position for concurrency grid spotlight
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Drag handler for comparison slider
  const handlePointerDown = () => setIsDragging(true);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    if (isDragging) {
      setSliderPos(percent);
    }

    setMousePos({
      x: (x / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener("pointerup", handleGlobalUp);
    return () => window.removeEventListener("pointerup", handleGlobalUp);
  }, []);

  const layersInfo = [
    {
      id: 0,
      title: "Core Systems & Concurrency",
      subtitle: "High-throughput engines engineered in Go & C++",
      description: "Low-level systems architecture utilizing goroutines, sync primitives, zero-copy memory-mapped I/O, and Raft consensus protocols to achieve sub-2ms tail latencies.",
      metric: "65,000 msg/s",
      metricLabel: "Peak Ingestion Throughput",
      icon: <Cpu className="w-4 h-4 text-cobalt" />,
      tags: ["Go (Golang)", "Zero-Copy MMap", "Raft Consensus", "TCP Sockets"],
    },
    {
      id: 1,
      title: "Distributed Data & Storage",
      subtitle: "Relational modeling, caching tiers, and query optimization",
      description: "Architecting resilient data layers with PostgreSQL ACID guarantees, Redis in-memory pub/sub caching, and partitioned key-value stores with zero downtime.",
      metric: "Sub-2ms",
      metricLabel: "Cluster Query Latency",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      tags: ["PostgreSQL", "Redis", "EXPLAIN ANALYZE", "Vector DBs"],
    },
    {
      id: 2,
      title: "Modern Web Engineering",
      subtitle: "Local-first apps and precision digital interfaces",
      description: "Crafting client-side experiences using Next.js 15, React 19, TypeScript, and Tailwind CSS. Built with optimistic state mutations and CRDT data synchronization.",
      metric: "100%",
      metricLabel: "Type Safety & Offline Sync",
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "CRDTs"],
    },
    {
      id: 3,
      title: "Algorithmic Foundation & Rigor",
      subtitle: "Advanced data structures and competitive problem solving",
      description: "Deep theoretical grounding across graph algorithms, dynamic programming, and complexity optimization. Consistently maintaining top-percentile rating across 500+ solved algorithmic problems.",
      metric: "500+",
      metricLabel: "Problems Solved",
      icon: <ShieldCheck className="w-4 h-4 text-rose-400" />,
      tags: ["Graphs & Trees", "Dynamic Programming", "LeetCode", "Codeforces"],
    },
  ];

  return (
    <section id="architecture" className="relative bg-[#050505] text-white py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden border-y border-neutral-900">
      {/* Ambient Specular Back-Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cobalt/20 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Editorial Headline & Mission Statement */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider text-cobalt bg-cobalt/10 border border-cobalt/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING ARCHITECTURE // G S K SANJAY VARMA</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Engineered for Extreme Performance.
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-neutral-400 font-normal leading-relaxed">
            From low-level distributed systems to intuitive, fault-tolerant software.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed pt-2">
            I don’t just write code—I architect resilient digital systems where zero-copy data pipelines, disciplined state models, and thoughtful user interaction converge.
          </p>

          {/* Interactive Mode Toggle Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setViewMode("comparison")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                viewMode === "comparison"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <MoveHorizontal className="w-3.5 h-3.5" />
              <span>Standard vs Sanjay's Architecture</span>
            </button>

            <button
              onClick={() => setViewMode("matrix")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                viewMode === "matrix"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Distributed Concurrency Matrix</span>
            </button>

            <button
              onClick={() => setViewMode("layers")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                viewMode === "layers"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Stack DNA</span>
            </button>
          </div>
        </div>

        {/* ==============================================================
            INTERACTIVE SYSTEMS CONSOLE WORKBENCH
           ============================================================== */}
        <InteractiveTilt maxTilt={3} glareOpacity={0.15} className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Systems Workbench Control Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-900/80 border-b border-neutral-800/90 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-neutral-300 font-medium hidden sm:inline">
                  sanjay.engineering // architecture.runtime
                </span>
              </div>

              <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  CONSENSUS: QUORUM_REACHED
                </span>
                <span className="hidden md:inline text-neutral-600">•</span>
                <span className="hidden md:inline">TAIL_LATENCY: 1.8ms</span>
              </div>
            </div>

            {/* Interactive Workbench Viewport */}
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onMouseLeave={() => setIsDragging(false)}
              className="relative w-full aspect-[16/10] min-h-[380px] sm:min-h-[460px] bg-black overflow-hidden select-none cursor-crosshair"
            >
              {/* --------------------------------------------------------
                  VIEW 1: STANDARD DEV vs SANJAY'S ARCHITECTURE SLIDER
                 -------------------------------------------------------- */}
              {viewMode === "comparison" && (
                <div className="relative w-full h-full">
                  {/* Right Side: SANJAY'S ENGINEERING STANDARD */}
                  <div className="absolute inset-0 bg-[#080B14] flex flex-col justify-between p-6 sm:p-12">
                    {/* Ambient back-glow inside right panel */}
                    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-cobalt/25 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span className="text-cobalt font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                        SANJAY'S ARCHITECTURE
                      </span>
                      <span className="text-neutral-500 hidden sm:inline">HIGH-CONCURRENCY // ZERO-COPY</span>
                    </div>

                    <div className="relative z-10 max-w-md ml-auto text-right space-y-3">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cobalt text-white font-bold">
                        PRODUCTION-GRADE RIGOR
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(49,94,251,0.5)]">
                        Zero-Copy Systems & Sub-2ms Tail Latency
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                        Raft consensus replication, memory-mapped sequential segment ring buffers, indexed database queries, and local-first CRDT state sync.
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-2 text-left">
                        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-cobalt/40 backdrop-blur-sm">
                          <div className="text-[10px] font-mono text-cobalt uppercase">p99 Latency</div>
                          <div className="text-base font-mono font-bold text-white">1.8 ms</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-cobalt/40 backdrop-blur-sm">
                          <div className="text-[10px] font-mono text-cobalt uppercase">Memory</div>
                          <div className="text-base font-mono font-bold text-white">&lt;24 MB</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-neutral-900/80 border border-cobalt/40 backdrop-blur-sm">
                          <div className="text-[10px] font-mono text-cobalt uppercase">Resilience</div>
                          <div className="text-base font-mono font-bold text-emerald-400">3/3 Quorum</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex justify-end text-[11px] font-mono text-neutral-500">
                      DRAG SLIDER TO REVEAL CONTRAST ➔
                    </div>
                  </div>

                  {/* Left Side: CONVENTIONAL UNOPTIMIZED DEVELOPMENT */}
                  <div
                    className="absolute inset-0 bg-[#141414] border-r-2 border-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden shadow-2xl transition-all"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span className="font-semibold tracking-wider">CONVENTIONAL CODE</span>
                      <span className="hidden sm:inline">HIGH GC PAUSES // BLOAT</span>
                    </div>

                    <div className="max-w-md space-y-3 opacity-75">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-neutral-800 text-neutral-400">
                        UNOPTIMIZED PATTERNS
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-300">
                        Ordinary Fragile Code
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                        Unindexed database table scans, heavy garbage collection pauses, blocking event loops, and network dropouts causing UI state desync.
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">p99 Latency</div>
                          <div className="text-base font-mono font-bold text-neutral-400">180 ms</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">Memory</div>
                          <div className="text-base font-mono font-bold text-neutral-400">450 MB</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">Resilience</div>
                          <div className="text-base font-mono font-bold text-rose-400">Fragile SPOF</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-neutral-600">
                      HIGH NETWORK OVERHEAD
                    </div>
                  </div>

                  {/* Drag Handle Bar */}
                  <div
                    onPointerDown={handlePointerDown}
                    className="absolute top-0 bottom-0 w-8 -ml-4 z-30 flex items-center justify-center cursor-ew-resize group"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    <div className="absolute w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 active:scale-95">
                      <MoveHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              {/* --------------------------------------------------------
                  VIEW 2: DISTRIBUTED CONCURRENCY & TELEMETRY MATRIX
                 -------------------------------------------------------- */}
              {viewMode === "matrix" && (
                <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-black">
                  {/* Status header */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 z-10">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                      CONCURRENCY DISPATCH MATRIX // 2,560 ACTIVE WORKERS
                    </span>
                    <span>MOVE CURSOR TO ROUTE TELEMETRY PACKETS</span>
                  </div>

                  {/* Worker Nodes Grid Simulation */}
                  <div className="absolute inset-0 grid grid-cols-24 sm:grid-cols-32 gap-1.5 p-6 opacity-90 overflow-hidden pointer-events-none">
                    {Array.from({ length: 384 }).map((_, i) => {
                      const col = i % 24;
                      const row = Math.floor(i / 24);
                      const nodeX = (col / 24) * 100;
                      const nodeY = (row / 16) * 100;

                      const dx = nodeX - mousePos.x;
                      const dy = nodeY - mousePos.y;
                      const dist = Math.sqrt(dx * dx + dy * dy);

                      // Radial falloff: nodes near cursor illuminate as active workers
                      const intensity = Math.max(0, 1 - dist / 28);
                      const glowColor =
                        intensity > 0.6
                          ? "rgba(255, 255, 255, 1)"
                          : intensity > 0.2
                          ? "rgba(49, 94, 251, 0.85)"
                          : "rgba(30, 30, 30, 0.4)";

                      return (
                        <div
                          key={i}
                          className="w-full aspect-square rounded-full transition-all duration-100"
                          style={{
                            backgroundColor: glowColor,
                            boxShadow:
                              intensity > 0.4
                                ? `0 0 ${intensity * 14}px rgba(49, 94, 251, ${intensity})`
                                : "none",
                            opacity: intensity > 0 ? 1 : 0.2,
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Foreground Content */}
                  <div className="relative z-10 max-w-lg space-y-3 pointer-events-none">
                    <div className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
                      Microsecond Packet Dispatch // Non-Blocking I/O
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                      Compute on Demand.
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      Concurrency pipelines dynamically route incoming socket streams across lightweight worker pools without thread pool starvation or lock contention.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-3">
                    <span>COORDINATOR DISPATCH: [{mousePos.x.toFixed(0)}%, {mousePos.y.toFixed(0)}%]</span>
                    <span className="text-emerald-400 font-bold">QUORUM: HEALTHY (3/3 NODES)</span>
                  </div>
                </div>
              )}

              {/* --------------------------------------------------------
                  VIEW 3: 4-LAYER ENGINEERING STACK DNA
                 -------------------------------------------------------- */}
              {viewMode === "layers" && (
                <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-black">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 z-10">
                    <span>FULL-STACK ENGINEERING DNA // 4 CORE DOMAINS</span>
                    <span>CLICK LAYER TO INSPECT TECHNICAL COMPETENCIES</span>
                  </div>

                  {/* Layer Selector Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 z-10 pt-2">
                    {layersInfo.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => setActiveLayer(l.id as any)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          activeLayer === l.id
                            ? "border-white bg-neutral-900 text-white shadow-lg"
                            : "border-neutral-800 bg-neutral-950 text-neutral-500 hover:text-neutral-300"
                        }`}
                      >
                        <div className="text-[10px] font-mono text-neutral-500">LAYER 0{l.id + 1}</div>
                        <div className="text-xs font-bold truncate mt-0.5">{l.title}</div>
                      </button>
                    ))}
                  </div>

                  {/* Active Layer Deep Dive Card */}
                  <div className="relative z-10 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {layersInfo[activeLayer].icon}
                        <span className="text-xs font-mono uppercase text-cobalt font-bold">
                          {layersInfo[activeLayer].subtitle}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400">
                        {layersInfo[activeLayer].metricLabel}:{" "}
                        <strong className="text-white">{layersInfo[activeLayer].metric}</strong>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {layersInfo[activeLayer].title}
                    </h4>

                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      {layersInfo[activeLayer].description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {layersInfo[activeLayer].tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-black/60 border border-neutral-700 text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-neutral-900 pt-2">
                    <span>SPECIALIZATION: SYSTEMS & DISTRIBUTED APPS</span>
                    <span>STUDENT // BUILDER // B.TECH CSE '26</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </InteractiveTilt>

        {/* ==============================================================
            SANJAY'S REAL FOUR MONUMENTAL ENGINEERING STATS
           ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              500<span className="text-lg sm:text-2xl text-cobalt">+</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Algorithmic Problems
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Top 8% contest rating on LeetCode with mastery over graphs, trees, and dynamic programming.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              65k<span className="text-lg sm:text-2xl text-cobalt">msg/s</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Peak Broker Ingestion
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Zero-copy memory-mapped append logs engineered in Go on Aether Engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              1.8<span className="text-lg sm:text-2xl text-emerald-400">ms</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              p99 Tail Latency
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Raft partition consensus eliminating latency jitter across distributed nodes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              100<span className="text-lg sm:text-2xl text-purple-400">%</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Type-Safe & Resilient
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Strict end-to-end typing, local-first state machines, and high test coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
