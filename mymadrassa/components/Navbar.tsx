"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/resources", label: "Resources" },
  { href: "/teachers", label: "Scholars" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="border-b border-line sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sidebar flex items-center justify-center">
            <span className="text-accent font-bold text-lg">م</span>
          </div>
          <span className="font-bold text-ink text-xl tracking-tight">MyMadrassa</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-base font-medium">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors ${active ? "text-ink font-semibold" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-base font-medium text-muted hover:text-ink transition-colors">
            Sign in
          </Link>
          <Link href="/portal" className="bg-sidebar text-white text-base font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Student portal
          </Link>
        </div>
      </div>
    </nav>
  );
}
