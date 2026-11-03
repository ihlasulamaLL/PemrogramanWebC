export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#D9D9D9] border-t border-stone-300 py-12 sm:py-16 font-inter text-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A1A1A1] text-stone-900">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18a9 9 0 0 1-18 0Z" />
                <path d="M8 8c0-1.5 1-1.5 1-3" />
                <path d="M12 8c0-1.5 1-1.5 1-3" />
                <path d="M16 8c0-1.5 1-1.5 1-3" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-stone-900">
              Rasa Kampus
            </span>
          </div>

          <p className="max-w-md text-sm text-stone-700">
            Direktori kuliner dan rekomendasi tempat makan di sekitar lingkungan Kampus Fakultas Teknik Universitas Hasanuddin, Gowa.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm font-medium text-stone-700">
            <a href="#beranda" className="hover:text-black hover:underline">
              Beranda
            </a>
            <a href="#menu" className="hover:text-black hover:underline">
              Rekomendasi Menu
            </a>
            <a href="#explore" className="hover:text-black hover:underline">
              Eksplorasi Tempat
            </a>
          </div>

          {/* Credit persis Figma template & copyright */}
          <div className="pt-6 border-t border-stone-300 w-full max-w-md flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-2">
            <span>&copy; {currentYear} Rasa Kampus. All rights reserved.</span>
            <span className="font-semibold text-stone-800">
              Template by oreocoklat
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
