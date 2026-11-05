"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Briefcase, 
  Terminal, 
  User, 
  Mail, 
  ExternalLink,
  Download,
  Copy,
  Check,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      label: "Navigate: Selected Work",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-cobalt" />,
      action: () => {
        window.location.hash = "#work";
        onClose();
      },
    },
    {
      label: "Explore: Liquid Retina XDR Showcase (Dynamic Display)",
      category: "Interactive",
      icon: <Sparkles className="w-4 h-4 text-cobalt" />,
      action: () => {
        window.location.hash = "#xdr";
        onClose();
      },
    },
    {
      label: "Navigate: Engineering Philosophy & About",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-indigo-500" />,
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      label: "Navigate: Technical Skills (01–06)",
      category: "Navigation",
      icon: <Terminal className="w-4 h-4 text-emerald-500" />,
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      label: "Navigate: Experience & Education",
      category: "Navigation",
      icon: <FileText className="w-4 h-4 text-amber-500" />,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      label: "Navigate: Current Focus & Research",
      category: "Navigation",
      icon: <Search className="w-4 h-4 text-purple-500" />,
      action: () => {
        window.location.hash = "#focus";
        onClose();
      },
    },
    {
      label: "Navigate: Contact & Hire",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-rose-500" />,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      label: "Copy Email: gsksanjayvarma@gmail.com",
      category: "Quick Actions",
      icon: copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-ink-secondary" />,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
    },
    {
      label: "Download Official Resume (PDF)",
      category: "Quick Actions",
      icon: <Download className="w-4 h-4 text-ink-primary" />,
      action: () => {
        window.open(portfolioData.personal.resumeUrl, "_blank");
        onClose();
      },
    },
    {
      label: "Open GitHub Profile",
      category: "External",
      icon: <ExternalLink className="w-4 h-4 text-ink-muted" />,
      action: () => {
        window.open("https://github.com/sanjayvarma", "_blank");
        onClose();
      },
    },
    {
      label: "Open LinkedIn Profile",
      category: "External",
      icon: <ExternalLink className="w-4 h-4 text-ink-muted" />,
      action: () => {
        window.open("https://linkedin.com/in/sanjayvarma", "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-dark-canvas/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-canvas-pure rounded-2xl border border-ink-border shadow-float overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-ink-border/60">
          <Search className="w-4 h-4 text-ink-muted shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-ink-muted hover:text-ink-primary"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-ink-muted">
              No matching actions found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-canvas-subtle transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-canvas border border-ink-border/50">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ink-primary group-hover:text-cobalt transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-mono text-ink-muted uppercase">
                      {item.category}
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-ink-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-canvas-subtle/50 border-t border-ink-border/50 flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <span>Navigation Palette</span>
          <div className="flex items-center gap-2">
            <span>ESC to close</span>
            <span>↵ to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}

