import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Beranda", href: "/#beranda" },
    { label: "Menu Rekomendasi", href: "/#menu" },
    { label: "Eksplorasi Tempat", href: "/#explore" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D9D9D9] border-b border-stone-300 shadow-xs transition-colors">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand & Logo sesuai Figma Header */}
        <Link to="/" className="flex items-center gap-4 group">
          {/* Logo Box (80x80 style Figma) */}
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-[18px] bg-[#A1A1A1] text-stone-900 shadow-inner group-hover:bg-stone-600 group-hover:text-amber-300 transition-all">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12h18a9 9 0 0 1-18 0Z" />
              <path d="M8 8c0-1.5 1-1.5 1-3" />
              <path d="M12 8c0-1.5 1-1.5 1-3" />
              <path d="M16 8c0-1.5 1-1.5 1-3" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
              Rasa Kampus
            </span>
            <span className="text-xs font-medium text-stone-600 hidden sm:block">
              Fakultas Teknik Unhas Gowa
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm sm:text-base font-semibold text-stone-800 transition-colors hover:bg-[#A1A1A1]/40 hover:text-stone-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#A1A1A1]/50 text-stone-900 hover:bg-[#A1A1A1] focus:outline-none md:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-stone-300 bg-[#D9D9D9] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-stone-900 hover:bg-[#A1A1A1]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
