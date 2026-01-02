"use client";

import Link from "next/link";
import { Moon } from "lucide-react";

export function Header() {
  const navItems = [
    { name: "SERVICES", href: "/#services" },
    { name: "WORK", href: "/#work" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-2 backdrop-blur-md">
        <div className="flex items-center gap-6 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mx-2 h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-2 pl-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            <Moon className="h-4 w-4" />
          </button>
          
          <Link
            href="/#contact"
            className="flex h-8 items-center rounded-full bg-white px-5 text-xs font-bold text-black transition-transform hover:scale-105"
          >
            HIRE
          </Link>
        </div>
      </nav>
    </header>
  );
}
