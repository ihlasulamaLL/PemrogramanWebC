const filters = [
  { label: "Semua", value: "semua" },
  { label: "Masakan Rumahan", value: "Masakan Rumahan" },
  { label: "Ayam Geprek", value: "Ayam Geprek" },
  { label: "Mie dan Bakso", value: "Mie dan Bakso" },
  { label: "Kopi & Nongkrong", value: "Kopi & Nongkrong" },
  { label: "Camilan", value: "Camilan" },
];

export default function FilterBar({ selected, onChange }) {
  const toggle = (value) => {
    if (value === "semua") {
      onChange([]);
      return;
    }
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive =
          f.value === "semua"
            ? selected.length === 0
            : selected.includes(f.value);

        return (
          <button
            key={f.value}
            type="button"
            onClick={() => toggle(f.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-indigo-950 bg-indigo-950 text-amber-400"
                : "border-stone-300 bg-white text-stone-700 hover:border-indigo-950 hover:text-indigo-950"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}

