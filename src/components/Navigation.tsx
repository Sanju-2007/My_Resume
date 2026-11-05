"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Command } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface NavigationProps {
  onOpenCommandMenu?: () => void;
}

export function Navigation({ onOpenCommandMenu }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["work", "about", "skills", "experience", "focus", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work", id: "work" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-canvas/85 backdrop-blur-md border-b border-ink-border/70 shadow-subtle"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-ink-primary flex items-center justify-center text-canvas font-bold text-xs tracking-tighter transition-transform group-hover:scale-105 duration-200">
              {portfolioData.personal.monogram}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-tight text-ink-primary group-hover:text-cobalt transition-colors duration-200">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider">
                SWE · Builder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-canvas-pure/70 border border-ink-border/50 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-subtle">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-ink-primary bg-canvas-subtle font-semibold shadow-xs"
                      : "text-ink-secondary hover:text-ink-primary hover:bg-canvas-subtle/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Command Palette trigger & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenCommandMenu && (
              <button
                onClick={onOpenCommandMenu}
                className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink-primary bg-canvas-subtle/80 hover:bg-canvas-subtle border border-ink-border/60 rounded-full px-2.5 py-1.5 transition-all duration-150"
                title="Quick actions (Cmd+K)"
                aria-label="Open command menu"
              >
                <Command className="w-3 h-3 text-ink-muted" />
                <span className="text-[11px] font-mono">⌘K</span>
              </button>
            )}

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium bg-ink-primary text-canvas hover:bg-ink-primary/90 px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-card hover:-translate-y-0.5"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenCommandMenu && (
              <button
                onClick={onOpenCommandMenu}
                className="p-2 text-ink-secondary hover:text-ink-primary rounded-lg border border-ink-border/60 bg-canvas-pure"
                aria-label="Open command menu"
              >
                <Command className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-primary hover:text-cobalt rounded-lg border border-ink-border/60 bg-canvas-pure focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl sm:hidden pt-24 px-6 flex flex-col justify-between pb-10 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">Navigation</span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-ink-primary hover:text-cobalt transition-colors py-2 border-b border-ink-border/40"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-ink-border/60">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-ink-primary text-canvas text-sm font-medium rounded-xl shadow-card"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-center text-ink-muted font-mono">
              Available for Fall 2025 / Summer 2026 roles
            </p>
          </div>
        </div>
      )}
    </>
  );
}
