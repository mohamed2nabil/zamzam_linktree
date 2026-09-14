"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

// ponytail: single inline SVGs for brand icons prevent dependency bloat and breakage
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M5 5l1.5 1.5"></path>
    <path d="M17.5 17.5L19 19"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="M5 19l1.5-1.5"></path>
    <path d="M17.5 6.5L19 5"></path>
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const links = [
  {
    num: "01",
    name: "INSTAGRAM",
    subtitle: "Latest arrivals",
    href: "#instagram",
    icon: InstagramIcon,
  },
  {
    num: "02",
    name: "FACEBOOK",
    subtitle: "Follow Zamzam",
    href: "#facebook",
    icon: FacebookIcon,
  },
  {
    num: "03",
    name: "TIKTOK",
    subtitle: "Discover more",
    href: "#tiktok",
    icon: TikTokIcon,
  },
  {
    num: "04",
    name: "WHATSAPP",
    subtitle: "Talk to us",
    href: "https://wa.me/201020929383",
    icon: MessageCircle,
  },
  {
    num: "05",
    name: "FIND THE STORE",
    subtitle: "حوش عيسى • البحيرة",
    href: "https://maps.app.goo.gl/rQqDAMcznWh3Q4P46",
    icon: MapPin,
  },
];

export default function LinksPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("zamzam-theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else if (!stored && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("zamzam-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] transition-colors duration-700 flex flex-col items-center py-6 px-5 font-sans overflow-hidden relative selection:bg-[var(--accent-light)] selection:text-black">
      
      {/* Background ambient movement */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="w-[600px] h-[600px] bg-[var(--accent-gold)] rounded-full blur-[200px] opacity-[0.03] mix-blend-screen transition-opacity duration-1000" />
      </div>

      <div className="w-full max-w-[420px] mx-auto flex flex-col relative z-10">
        
        {/* Mode Switcher */}
        <div className="w-full flex justify-end mb-8 animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
            className="flex items-center gap-2 p-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-all duration-500 shadow-md hover:border-[var(--accent-gold)]/50 hover:shadow-lg active:scale-95"
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${mounted && theme === 'dark' ? 'bg-[#1A1A1A] text-[var(--accent-gold)] shadow-[0_2px_10px_rgba(200,155,60,0.2)]' : 'text-[var(--text-muted)] opacity-50 hover:opacity-100'}`}>
              <MoonIcon className="w-4 h-4" />
            </div>
            <div className={`p-2 rounded-full transition-all duration-300 ${mounted && theme === 'light' ? 'bg-[#F4F1EA] text-[var(--accent-gold)] shadow-[0_2px_10px_rgba(200,155,60,0.2)]' : 'text-[var(--text-muted)] opacity-50 hover:opacity-100'}`}>
              <SunIcon className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Hero Logo Area */}
        <div className="flex justify-center">
          <div className="relative w-40 h-40 mb-10 flex items-center justify-center animate-logo-reveal">
            {/* Ambient light bloom behind logo */}
            <div className="absolute inset-0 bg-[var(--accent-gold)] blur-[50px] opacity-[0.25] rounded-full transition-opacity duration-1000" />
            
            {/* Circular Logo Container with overflow-hidden to clip edges */}
            <div className="absolute inset-2 rounded-full border border-[var(--accent-gold)]/40 shadow-[0_8px_40px_rgba(200,155,60,0.25)] bg-[#050505] overflow-hidden">
              <Image
                src="/logo.png"
                alt="ZAMZAM Logo"
                fill
                className="object-cover scale-[1.15] drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col items-center animate-fade-in-up mb-12" style={{ animationDelay: '300ms', opacity: 0 }}>
          <p className="text-[11px] text-[var(--accent-gold)] font-semibold text-center tracking-[0.25em] uppercase mb-2 transition-colors duration-500">
            SHOES / STYLE / QUALITY
          </p>
          <p className="text-[11px] text-[var(--text-secondary)] font-medium text-center tracking-[0.15em] uppercase transition-colors duration-500">
            حوش عيسى • البحيرة
          </p>
        </div>

        {/* Section Label */}
        <div className="w-full text-center animate-fade-in-up mb-6" style={{ animationDelay: '400ms', opacity: 0 }}>
          <p className="text-[10px] text-[var(--text-muted)] font-semibold tracking-[0.2em] uppercase transition-colors duration-500">
            DISCOVER ZAMZAM
          </p>
          <div className="w-10 h-[1px] bg-[var(--border-subtle)] mx-auto mt-4 transition-colors duration-700" />
        </div>

        {/* Glassmorphism Links Container */}
        <div className="w-full flex flex-col gap-4 px-2">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex items-center justify-between w-full p-6 rounded-3xl bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] hover:border-[var(--accent-gold)]/60 transition-all duration-500 overflow-hidden active:scale-[0.97] lg:hover:-translate-y-[4px] shadow-[0_8px_30px_var(--card-shadow)] hover:shadow-[0_12px_40px_var(--glow)]"
                style={{
                  animation: `fadeUpList 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${500 + index * 90}ms`,
                  opacity: 0,
                }}
              >
                {/* Dynamic Glass Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-[var(--accent-gold)]/[0.05] pointer-events-none" />
                
                {/* Sweep light on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/[0.08] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out pointer-events-none" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--icon-bg)] border border-[var(--border-subtle)] group-hover:bg-[var(--accent-gold)]/10 group-hover:border-[var(--accent-gold)]/40 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-[var(--accent-gold)] opacity-80 group-hover:scale-[1.1] group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[var(--text-primary)] font-bold text-[14px] tracking-[0.15em] uppercase group-hover:text-[var(--accent-gold)] transition-colors duration-400">
                      {link.name}
                    </span>
                    <span className="text-[var(--text-muted)] text-[12px] tracking-wide mt-1 group-hover:text-[var(--text-secondary)] transition-colors duration-400">
                      {link.subtitle}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--icon-bg)] border border-transparent group-hover:border-[var(--accent-gold)]/30 relative z-10 transition-colors duration-500">
                  <span className="text-[var(--accent-gold)]/50 group-hover:text-[var(--accent-gold)] group-hover:translate-x-[2px] transition-all duration-400 text-sm">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center w-full pb-10">
          <p className="text-[var(--text-muted)] text-[9px] tracking-[0.2em] uppercase transition-colors duration-700">
            © {new Date().getFullYear()} ZAMZAM
          </p>
        </div>

      </div>

      {/* Inline styles for simple performant keyframes and CSS variables */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-primary: #070707;
          --bg-secondary: #0D0D0D;
          --bg-surface: #141414;
          --text-primary: #F5F1E8;
          --text-secondary: #8A857B;
          --text-muted: #5F5A52;
          --accent-gold: #C89B3C;
          --accent-light: #E5C76B;
          --border-subtle: rgba(255, 255, 255, 0.05);
          --hover-surface: #1A1A1A;
          --glow: rgba(200, 155, 60, 0.12);
          --card-bg: rgba(255, 255, 255, 0.03);
          --card-border: rgba(255, 255, 255, 0.08);
          --card-shadow: rgba(0, 0, 0, 0.5);
          --icon-bg: rgba(255, 255, 255, 0.04);
        }

        :root[data-theme="light"] {
          --bg-primary: #F4F1EA;
          --bg-secondary: #EAE6DB;
          --bg-surface: #FFFFFF;
          --text-primary: #111111;
          --text-secondary: #5F5A52;
          --text-muted: #8A857B;
          --accent-gold: #A97B20;
          --accent-light: #C89B3C;
          --border-subtle: rgba(0, 0, 0, 0.05);
          --hover-surface: #F9F8F6;
          --glow: rgba(169, 123, 32, 0.08);
          --card-bg: rgba(255, 255, 255, 0.6);
          --card-border: rgba(200, 155, 60, 0.15);
          --card-shadow: rgba(0, 0, 0, 0.03);
          --icon-bg: rgba(200, 155, 60, 0.05);
        }

        body {
          background-color: var(--bg-primary);
          transition: background-color 700ms ease;
        }

        @keyframes fadeUpList {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpHero {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoReveal {
          0% { opacity: 0; filter: blur(12px); transform: scale(0.95); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeUpHero 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-logo-reveal {
          animation: logoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}
