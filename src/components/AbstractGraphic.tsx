"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isPrimary?: boolean;
}

export function AbstractGraphic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Node graph representing distributed nodes
    const nodeCount = 14;
    const nodes: Node[] = [];
    const labels = ["raft-node-0", "raft-node-1", "mmap-log", "crdt-sync", "wasm-worker", "edge-cache", "p99-probe"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: i < 3 ? 3.5 : 2,
        label: i < labels.length ? labels[i] : undefined,
        isPrimary: i < 3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let step = 0;

    const render = () => {
      step++;
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural grid background
      ctx.strokeStyle = "rgba(23, 23, 23, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move nodes
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce from walls
        if (nodeA.x <= 20 || nodeA.x >= width - 20) nodeA.vx *= -1;
        if (nodeA.y <= 20 || nodeA.y >= height - 20) nodeA.vy *= -1;

        // Mouse subtle repulsion
        const dxMouse = mouseX - nodeA.x;
        const dyMouse = mouseY - nodeA.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 90) {
          nodeA.x -= (dxMouse / distMouse) * 0.6;
          nodeA.y -= (dyMouse / distMouse) * 0.6;
        }

        // Connect with nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = nodeA.isPrimary || nodeB.isPrimary 
              ? `rgba(49, 94, 251, ${alpha * 1.5})` 
              : `rgba(23, 23, 23, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.setLineDash(dist > 90 ? [3, 3] : []);
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Packet pulse moving along line
            if (dist < 110 && (i + j) % 3 === 0) {
              const progress = ((step * 0.015 + (i * 0.3)) % 1);
              const px = nodeA.x + dx * progress;
              const py = nodeA.y + dy * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(49, 94, 251, 0.75)";
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isPrimary ? "#315EFB" : "#171717";
        ctx.fill();

        // Subtle outer ring on primary nodes
        if (node.isPrimary) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(49, 94, 251, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Monospace label
        if (node.label) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = "rgba(115, 115, 115, 0.85)";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[440px] rounded-2xl border border-ink-border/70 bg-canvas-pure/80 p-4 shadow-subtle overflow-hidden flex flex-col">
      {/* Top Header of graphic panel */}
      <div className="flex items-center justify-between border-b border-ink-border/50 pb-3 mb-2 px-2 text-xs font-mono text-ink-secondary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>system.topology.active</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-ink-muted">
          <span>LATENCY: 1.4ms</span>
          <span>RAFT: QUORUM_OK</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative flex-1 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
        
        {/* Subtle decorative technical overlay badge */}
        <div className="absolute bottom-2 left-2 bg-canvas/90 backdrop-blur-sm border border-ink-border/60 rounded px-2.5 py-1 text-[10px] font-mono text-ink-secondary">
          SYS_ARCH: DISTRIBUTED_CONCURRENCY
        </div>
      </div>
    </div>
  );
}
