"use client";

import type React from "react";
import Link from "next/link";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

// Smooth anchor scrolling hook
function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
}

export default function Header() {
  const scroll = useSmoothScroll();
  const nav = [
    { href: "#menu", id: "menu", label: "Menu" },
    { href: "#about", id: "about", label: "Our Story" },
    { href: "#gallery", id: "gallery", label: "Gallery" },
    { href: "#contact", id: "contact", label: "Visit" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="relative font-sans text-xl font-semibold text-emerald-900 transition-transform duration-300 hover:scale-105"
          aria-label="SipNSavor"
        >
          SipNSavor
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={n.href}
              onClick={(e) => scroll(e, n.id)}
              className="relative text-sm text-slate-900 transition-all duration-300 ease-out hover:text-emerald-900 hover:scale-105"
            >
              {n.label}
              {/* underline animation */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-emerald-600 text-white transition-transform duration-300 hover:scale-105 hover:bg-emerald-900"
          >
            <a href="#menu" onClick={(e) => scroll(e, "menu")}>
              View Menu
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
