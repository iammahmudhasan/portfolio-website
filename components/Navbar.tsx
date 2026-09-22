"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ["work", "research", "experience", "stack", "credentials", "notes", "contact"];
      const scrollPosition = window.scrollY + 160;

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

  // Lock background scroll on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#work", id: "work" },
    { name: "Research", href: "#research", id: "research" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Stack", href: "#stack", id: "stack" },
    { name: "Credentials", href: "#credentials", id: "credentials" },
    { name: "Notes", href: "#notes", id: "notes" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="#"
          className="group flex items-center gap-3.5 tracking-tight text-[var(--foreground)] hover:opacity-95 transition-opacity"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-elevated)] group-hover:border-[var(--accent)]/50 transition-colors">
            <span className="font-mono-tech text-xs font-bold text-[var(--foreground)]">
              MH
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[var(--background)]" />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight leading-none text-[var(--foreground)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-tech text-[var(--foreground-subtle)] mt-0.5 hidden sm:inline">
              AI Engineer · Continual Learning
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 text-xs font-mono-tech">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? "text-[var(--foreground)] bg-[var(--surface-elevated)] font-semibold border border-[var(--surface-border)]"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)]/60"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[var(--accent)] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-[var(--surface-border)]" />

          {/* Socials & Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors border border-transparent hover:border-[var(--surface-border)]"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors border border-transparent hover:border-[var(--surface-border)]"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[var(--background)]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-[var(--surface-border)] overflow-y-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--surface-border)] text-xs font-mono-tech text-[var(--foreground-subtle)]">
            <span>[NAVIGATION_MATRIX]</span>
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ONLINE
            </span>
          </div>

          <nav className="flex flex-col gap-2 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[var(--surface-elevated)] text-[var(--foreground)] font-semibold border border-[var(--surface-border)]"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <span className="font-mono-tech text-sm">{link.name}</span>
                  <span className="text-xs font-mono-tech text-[var(--foreground-subtle)]">→</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 border-t border-[var(--surface-border)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech font-medium text-[var(--foreground)]"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono-tech font-medium text-[var(--foreground)]"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <p className="text-[11px] text-center font-mono-tech text-[var(--foreground-subtle)]">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.location}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
