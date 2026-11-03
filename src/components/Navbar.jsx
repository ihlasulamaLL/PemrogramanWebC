import { useState } from "react";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Kantin", href: "#kantin" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

function Logo() {
  return (
    <a
      href="#beranda"
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
        {/* Ikon mangkuk dengan uap */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
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
      </span>
      <span className="text-lg font-bold tracking-tight text-indigo-950">
        Rasa Kampus
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <Logo />

        {/* Menu desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-amber-100 hover:text-indigo-950 focus-visible:outline-2 focus-visible:outline-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-indigo-950 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-600 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul
          id="menu-mobile"
          className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-amber-100 hover:text-indigo-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
