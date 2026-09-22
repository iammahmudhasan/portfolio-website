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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#stack" },
    { name: "Credentials", href: "#credentials" },
    { name: "Notes", href: "#notes" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-3 font-medium tracking-tight text-[var(--foreground)] hover:opacity-90 transition-opacity"
        >
          <span className="font-semibold text-base sm:text-lg tracking-tight">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono-tech rounded border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI Engineer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-[var(--foreground-muted)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[var(--foreground)] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-[var(--surface-border)] mx-1" />

          {/* Socials & Theme */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
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
        <div className="fixed inset-0 top-[65px] bg-[var(--background)]/98 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-[var(--surface-border)]">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] py-2 border-b border-[var(--surface-border)]/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono-tech text-[var(--foreground-subtle)]">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-[var(--surface-border)] flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-sm font-medium text-[var(--foreground)]"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-sm font-medium text-[var(--foreground)]"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            <p className="text-xs text-center font-mono-tech text-[var(--foreground-subtle)]">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.location}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
