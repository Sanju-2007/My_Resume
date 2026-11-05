"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Sliders, 
  Sparkles, 
  Layers, 
  Eye, 
  Sun, 
  Moon, 
  Zap, 
  Maximize2, 
  Activity,
  Cpu,
  ChevronRight,
  MoveHorizontal
} from "lucide-react";
import { InteractiveTilt } from "./InteractiveTilt";

export function AppleXdrShowcase() {
  // Slider state for SDR vs XDR (percentage from 0 to 100)
  const [sliderPos, setSliderPos] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active layer in exploded view
  const [activeLayer, setActiveLayer] = useState<0 | 1 | 2 | 3>(0);

  // Active view mode: "comparison" | "miniled" | "layers"
  const [viewMode, setViewMode] = useState<"comparison" | "miniled" | "layers">("comparison");

  // Mouse position for mini-LED spotlight
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHoveringMiniLed, setIsHoveringMiniLed] = useState(false);

  // Drag handler for comparison slider
  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

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
      title: "Mini-LED Backlight Array",
      subtitle: "Over 10,000 custom diodes in individually controlled dimming zones",
      description: "An array of individually calibrated mini-LEDs delivers extreme peak brightness and deep, true inky blacks with localized backlight modulation.",
      metric: "10,000+",
      metricLabel: "Custom Mini-LED Diodes",
      accent: "#315EFB",
    },
    {
      id: 1,
      title: "Custom Optical Films & Diffusers",
      subtitle: "Seven optical sheets shaping light distribution",
      description: "Custom-engineered diffusers and cross-polarizing optical films shape the light beam, eliminating halo flare while ensuring edge-to-edge color fidelity.",
      metric: "7 Layers",
      metricLabel: "Precision Optical Geometry",
      accent: "#8B5CF6",
    },
    {
      id: 2,
      title: "Oxide TFT Liquid Crystal Substrate",
      subtitle: "High-mobility oxide thin film transistors driving 120Hz ProMotion",
      description: "Enables pixels to charge up to 2x faster than amorphous silicon, facilitating buttery-smooth 120Hz ProMotion adaptive refresh rates with zero ghosting.",
      metric: "120 Hz",
      metricLabel: "Adaptive ProMotion Dynamics",
      accent: "#10B981",
    },
    {
      id: 3,
      title: "Retina Pixel Glass & P3 Color Gamut",
      subtitle: "Extreme 1,000,000:1 contrast ratio with 1 billion colors",
      description: "Displays rich cinematic P3 wide color with sub-millisecond pixel responsiveness and true 1,600-nit specular peak highlights for high-fidelity digital systems.",
      metric: "1,000,000:1",
      metricLabel: "Native Contrast Ratio",
      accent: "#EC4899",
    },
  ];

  return (
    <section id="xdr" className="relative bg-[#050505] text-white py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden border-y border-neutral-900">
      {/* Apple Specular Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-cobalt/20 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Apple Headline & Editorial Intro */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider text-cobalt bg-cobalt/10 border border-cobalt/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIQUID RETINA XDR // HIGH-PRECISION ENGINEERING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Extreme Dynamic Range.
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-neutral-400 font-normal leading-relaxed">
            Deep blacks. Remarkable highlights. Meticulous physical fidelity.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed pt-2">
            Just like Apple’s Liquid Retina XDR display balances 10,000 mini-LED local dimming zones for uncompromising contrast, my engineering architecture balances distributed consensus with sub-millisecond precision.
          </p>

          {/* Interactive Mode Toggle Bar */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setViewMode("comparison")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                viewMode === "comparison"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <MoveHorizontal className="w-3.5 h-3.5" />
              <span>SDR vs XDR Comparison</span>
            </button>

            <button
              onClick={() => setViewMode("miniled")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                viewMode === "miniled"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>10,000 Mini-LED Dimming</span>
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
              <span>Exploded Architecture</span>
            </button>
          </div>
        </div>

        {/* ==============================================================
            APPLE HARDWARE DISPLAY FRAME CONTAINER
           ============================================================== */}
        <InteractiveTilt maxTilt={4} glareOpacity={0.25} className="max-w-5xl mx-auto">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 shadow-2xl border border-neutral-700/60 ring-1 ring-white/10">
            {/* Top Apple Camera Notch */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-2 w-32 sm:w-40 h-5 sm:h-6 bg-black rounded-b-xl border-x border-b border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
            </div>

            {/* Inner Display Screen with True Black Liquid Bezel */}
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onMouseEnter={() => setIsHoveringMiniLed(true)}
              onMouseLeave={() => {
                setIsHoveringMiniLed(false);
                setIsDragging(false);
              }}
              className="relative w-full aspect-[16/10] min-h-[380px] sm:min-h-[480px] rounded-[1.5rem] sm:rounded-[2rem] bg-black overflow-hidden select-none cursor-crosshair border border-neutral-950"
            >
              {/* --------------------------------------------------------
                  VIEW 1: SDR vs XDR DRAG-TO-REVEAL SLIDER
                 -------------------------------------------------------- */}
              {viewMode === "comparison" && (
                <div className="relative w-full h-full">
                  {/* Right Side: LIQUID RETINA XDR (Vibrant, 1600 nits, Sub-2ms) */}
                  <div className="absolute inset-0 bg-[#080B14] flex flex-col justify-between p-6 sm:p-12">
                    {/* Ambient back-glow inside XDR */}
                    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-cobalt/25 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span className="text-cobalt font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                        LIQUID RETINA XDR ENGINE
                      </span>
                      <span className="text-neutral-500 hidden sm:inline">1,600 NITS PEAK // 1,000,000:1</span>
                    </div>

                    <div className="relative z-10 max-w-md ml-auto text-right space-y-3">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cobalt text-white font-bold">
                        EXTREME DYNAMIC RANGE
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(49,94,251,0.5)]">
                        Zero-Copy Distributed Consensus
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                        Hardware-accelerated Raft protocol, sub-1.8ms tail latency, and 65k msg/s throughput with memory-mapped zero-copy ring buffers.
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
                          <div className="text-[10px] font-mono text-cobalt uppercase">UI FPS</div>
                          <div className="text-base font-mono font-bold text-emerald-400">60 Locked</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex justify-end text-[11px] font-mono text-neutral-500">
                      DRAG SLIDER TO REVEAL CONTRAST ➔
                    </div>
                  </div>

                  {/* Left Side: STANDARD DYNAMIC RANGE (Clipped with sliderPos) */}
                  <div
                    className="absolute inset-0 bg-[#141414] border-r-2 border-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden shadow-2xl transition-all"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span className="font-semibold tracking-wider">STANDARD DYNAMIC RANGE (SDR)</span>
                      <span className="hidden sm:inline">400 NITS CLIPPED</span>
                    </div>

                    <div className="max-w-md space-y-3 opacity-75">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-neutral-800 text-neutral-400">
                        CONVENTIONAL SYSTEMS
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-300">
                        Conventional Architecture
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                        High JVM GC pause times, redundant memory copies, unindexed queries, and 180ms network latency under heavy load.
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
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">UI FPS</div>
                          <div className="text-base font-mono font-bold text-rose-400">28 Drops</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-neutral-600">
                      STANDARD 8-BIT COLOR
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
                  VIEW 2: 10,000 MINI-LED LOCAL DIMMING ARRAY SIMULATOR
                 -------------------------------------------------------- */}
              {viewMode === "miniled" && (
                <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-black">
                  {/* Status header */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 z-10">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                      LOCAL DIMMING MATRIX // 2,560 ACTIVE ZONES
                    </span>
                    <span>MOVE CURSOR TO MODULATE BACKLIGHT</span>
                  </div>

                  {/* Mini-LED Diodes Grid Canvas Simulation */}
                  <div className="absolute inset-0 grid grid-cols-24 sm:grid-cols-32 gap-1.5 p-6 opacity-90 overflow-hidden pointer-events-none">
                    {Array.from({ length: 384 }).map((_, i) => {
                      const col = i % 24;
                      const row = Math.floor(i / 24);
                      const diodeX = (col / 24) * 100;
                      const diodeY = (row / 16) * 100;

                      const dx = diodeX - mousePos.x;
                      const dy = diodeY - mousePos.y;
                      const dist = Math.sqrt(dx * dx + dy * dy);

                      // Radial falloff: mini-LEDs near cursor shine brilliantly
                      const intensity = Math.max(0, 1 - dist / 28);
                      const glowColor =
                        intensity > 0.6
                          ? "rgba(255, 255, 255, 1)"
                          : intensity > 0.2
                          ? "rgba(49, 94, 251, 0.8)"
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

                  {/* Foreground Content Illuminated by Mini-LEDs */}
                  <div className="relative z-10 max-w-lg space-y-3 pointer-events-none">
                    <div className="text-xs font-mono uppercase tracking-widest text-cobalt font-bold">
                      Zero Halation // 0.0001 Nit Black Point
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                      Backlight on Demand.
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      Mini-LEDs directly underneath active content blaze at up to 1,600 nits, while surrounding zones turn completely off for true, uncompromised black levels.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-900 pt-3">
                    <span>SPOTLIGHT POSITION: [{mousePos.x.toFixed(0)}%, {mousePos.y.toFixed(0)}%]</span>
                    <span className="text-emerald-400 font-bold">CONTRAST: 1,000,000:1</span>
                  </div>
                </div>
              )}

              {/* --------------------------------------------------------
                  VIEW 3: 4-LAYER EXPLODED HARDWARE ARCHITECTURE
                 -------------------------------------------------------- */}
              {viewMode === "layers" && (
                <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-black">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 z-10">
                    <span>EXPLODED HARDWARE STACK // 4 INTEGRATED LAYERS</span>
                    <span>SELECT LAYER TO INSPECT SPECIFICATIONS</span>
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
                  <div className="relative z-10 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono uppercase text-cobalt font-bold">
                        {layersInfo[activeLayer].subtitle}
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
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-neutral-900 pt-2">
                    <span>PHYSICAL ENCLOSURE: UNIBODY CHASSIS</span>
                    <span>SURFACE FINISH: NANO-TEXTURE GLASS</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </InteractiveTilt>

        {/* ==============================================================
            APPLE SPEC METRIC GRID (Four Monumental Statistics)
           ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              1,600<span className="text-lg sm:text-2xl text-cobalt">nits</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Peak Brightness
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Matched in code by 65,000 msg/s peak stream ingestion on Aether Engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              1,000,000<span className="text-lg sm:text-2xl text-cobalt">:1</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Contrast Ratio
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sub-1.8ms tail latency eliminating jitter across distributed nodes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              120<span className="text-lg sm:text-2xl text-emerald-400">Hz</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              ProMotion Dynamism
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Local-first CRDT optimistic rendering locked at 60 FPS frame budgets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors">
            <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
              10,000<span className="text-lg sm:text-2xl text-purple-400">+</span>
            </div>
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Mini-LED Backlights
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              500+ algorithmic problems solved with meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
