"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles,
  Clock,
  MapPin
} from "lucide-react";

export function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-ink-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Statement & Message (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cobalt font-semibold">
              06 // Initiate Dialogue
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-primary mt-3 leading-[1.05]">
              Have something interesting in mind?
            </h2>
          </div>

          <p className="text-lg sm:text-2xl font-serif italic text-ink-secondary max-w-2xl leading-relaxed">
            I'm always interested in meaningful projects, thoughtful conversations, and opportunities to build something useful.
          </p>

          {/* Email Action Block with Copy Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-ink-primary text-canvas hover:bg-ink-primary/90 text-sm sm:text-base font-medium tracking-tight shadow-card transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>{personal.email}</span>
              <ArrowUpRight className="w-4 h-4 opacity-75" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-canvas-pure border border-ink-border hover:border-ink-secondary/50 text-ink-primary text-sm font-medium tracking-tight transition-all duration-200 hover:bg-canvas-subtle hover:-translate-y-0.5 shadow-xs"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-mono text-xs">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-secondary" />
                  <span className="text-xs font-mono">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links List */}
          <div className="pt-6 border-t border-ink-border/50">
            <div className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
              Online Profiles & Channels
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {personal.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-ink-primary hover:text-cobalt transition-colors"
                >
                  {link.icon === "github" && <Github className="w-4 h-4 text-ink-secondary group-hover:text-cobalt" />}
                  {link.icon === "linkedin" && <Linkedin className="w-4 h-4 text-ink-secondary group-hover:text-cobalt" />}
                  {link.icon === "twitter" && <Twitter className="w-4 h-4 text-ink-secondary group-hover:text-cobalt" />}
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Status & Direct Resume Dossier (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-pure border border-ink-border/80 shadow-card space-y-6">
            <div className="flex items-center justify-between border-b border-ink-border/50 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-semibold">
                Status Dossier
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase text-ink-muted">Current Status</div>
                <div className="text-sm font-semibold text-ink-primary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Available for Hire / Internships
                </div>
                <div className="text-xs text-ink-secondary">
                  Targeting Summer 2025 / Fall Roles in Software Engineering
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-ink-border/40">
                <div className="text-[11px] font-mono uppercase text-ink-muted">Base Location</div>
                <div className="text-sm font-medium text-ink-primary flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cobalt" />
                  {personal.location}
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-ink-border/40">
                <div className="text-[11px] font-mono uppercase text-ink-muted">Timezone & Response</div>
                <div className="text-xs text-ink-secondary flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-ink-muted" />
                  IST (UTC+5:30) · Fast reply within 24 hours
                </div>
              </div>
            </div>

            {/* Direct Resume Download Link */}
            <div className="pt-4 border-t border-ink-border/60">
              <a
                href={personal.resumeUrl}
                download="Sanjay_Varma_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3 bg-canvas-subtle hover:bg-canvas-elevated text-ink-primary text-xs font-mono uppercase tracking-wider rounded-xl border border-ink-border/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-ink-secondary" />
                <span>Download Official CV (.PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

