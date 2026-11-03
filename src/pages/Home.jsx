import { useState, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import MenuCard from "../components/MenuCard";
import WarungCard from "../components/WarungCard";
import { recommendedMenus, dummyWarung } from "../data/dummyWarung";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [showAllPlaces, setShowAllPlaces] = useState(false);

  // Filter Menu
  const filteredMenus = useMemo(() => {
    return recommendedMenus.filter((item) => {
      const matchCategory =
        activeCategory === "Semua" || item.kategori === activeCategory;
      const matchSearch =
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.warungNama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  // Filter Tempat Makan / Warung
  const filteredPlaces = useMemo(() => {
    return dummyWarung.filter((place) => {
      const matchCategory =
        activeCategory === "Semua" || place.kategori === activeCategory;
      const matchSearch =
        place.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.alamat.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  // Handle visible places (default 8, or all 12 if showAllPlaces is true)
  const displayedPlaces = showAllPlaces
    ? filteredPlaces
    : filteredPlaces.slice(0, 8);

  return (
    <div id="beranda" className="min-h-screen bg-white font-sans text-stone-900">
      {/* 1. SECTION SEARCH (Sesuai Figma search-section) */}
      <section
        className="mx-auto max-w-4xl px-4 pt-14 pb-8 sm:pt-20 sm:pb-12 text-center"
        aria-labelledby="search-title"
      >
        <h1
          id="search-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900"
        >
          Mau makan apa hari ini?
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base">
          Temukan makanan enak dan tempat makan favorit di sekitar Kampus Teknik Unhas
        </p>

        {/* Search Box Pill (Sesuai Figma .search-box: width 530px, bg #a1a1a1, rounded 45px) */}
        <div className="mt-8 flex justify-center">
          <label className="relative flex w-full max-w-[530px] items-center rounded-full bg-[#A1A1A1] px-5 py-2.5 shadow-sm transition-all focus-within:ring-2 focus-within:ring-black">
            {/* Search Icon */}
            <span className="mr-3 flex h-7 w-7 items-center justify-center text-stone-950">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            <input
              type="search"
              aria-label="Cari tempat makan atau menu"
              placeholder="Cari menu atau nama tempat makan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-base sm:text-lg text-stone-950 placeholder-stone-700 outline-none font-medium"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-stone-800 hover:text-black bg-stone-300/60 rounded-full px-2 py-0.5"
              >
                Reset
              </button>
            )}
          </label>
        </div>
      </section>

      {/* 2. CATEGORIES (Sesuai Figma .categories) */}
      <section className="mx-auto max-w-5xl px-4 py-4">
        <FilterBar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </section>

      {/* 3. MENU GRID (Sesuai Figma .menu-grid - 4 Menu Cards) */}
      <section id="menu" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Rekomendasi Menu Terpopuler
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Menu pilihan mahasiswa yang paling sering dipesan
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#D9D9D9] text-stone-800">
            {filteredMenus.length} Menu
          </span>
        </div>

        {filteredMenus.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 py-12 text-center">
            <p className="text-stone-600 font-medium">
              Tidak ada menu yang sesuai dengan pencarian atau filter "{activeCategory}".
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* 4. EXPLORE TITLE & PLACES GRID (Sesuai Figma .explore-title & .places-grid) */}
      <section id="explore" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Apa yang bisa diexplore disekitaran Kampus Teknik Unhas?
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Daftar warung, kedai kopi, dan tempat makan terdekat dari kampus
          </p>
        </div>

        {displayedPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPlaces.map((warung) => (
              <WarungCard key={warung.id} warung={warung} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 py-12 text-center">
            <p className="text-stone-600 font-medium">
              Tidak ada tempat makan yang sesuai dengan pencarian atau filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* 5. TOMBOL TAMPILKAN SEMUANYA (Sesuai Figma .show-all) */}
        {filteredPlaces.length > 8 && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllPlaces((prev) => !prev)}
              className="w-[280px] sm:w-[320px] h-[52px] rounded-full bg-[#D9D9D9] hover:bg-[#c9c9c9] text-stone-900 font-inter text-lg sm:text-xl font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{showAllPlaces ? "Tampilkan Lebih Sedikit" : "Tampilkan Semuanya"}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  showAllPlaces ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
