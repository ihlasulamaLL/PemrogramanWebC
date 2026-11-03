const categories = [
  { label: "Semua", value: "Semua" },
  { label: "Masakan Rumahan", value: "Masakan Rumahan" },
  { label: "Ayam Geprek", value: "Ayam Geprek" },
  { label: "Mie dan Bakso", value: "Mie dan Bakso" },
  { label: "Kopi & Nongkrong", value: "Kopi & Nongkrong" },
  { label: "Camilan", value: "Camilan" },
];

export default function FilterBar({ activeCategory, onSelectCategory }) {
  return (
    <nav className="flex items-center justify-center" aria-label="Kategori Kuliner">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl px-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;

          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => onSelectCategory(cat.value)}
              className={`min-w-[130px] sm:min-w-[150px] h-[42px] px-5 text-sm sm:text-base font-semibold rounded-full border-2 transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-black bg-black text-white shadow-sm scale-105"
                  : "border-black bg-white text-black hover:bg-stone-100 hover:scale-102"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
