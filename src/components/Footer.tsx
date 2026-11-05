"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-ink-border/60 py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-xs font-mono text-ink-muted">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded bg-ink-primary text-canvas font-bold text-[10px] flex items-center justify-center">
            {portfolioData.personal.monogram}
          </div>
          <span className="text-ink-secondary">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-ink-secondary">Systems Operational</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ink-secondary hover:text-ink-primary transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
