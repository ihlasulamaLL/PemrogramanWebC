import { useState } from "react";
import FilterBar from "../components/FilterBar";
import WarungCard from "../components/WarungCard";
import dummyWarung from "../data/dummyWarung";

export default function Home() {
  const [filters, setFilters] = useState([]);

  const warungList =
    filters.length === 0
      ? dummyWarung
      : dummyWarung.filter((w) => filters.includes(w.kategori));

  return (
    <div className="min-h-screen bg-amber-50 text-stone-900">
      {/* Hero */}
      <header className="mx-auto max-w-5xl px-4 pb-8 pt-14 sm:px-6 sm:pt-20">
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Perut kenyang, dompet tetap aman.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-700">
          Temukan warung yang cocok untuk tanggal tua, begadang tugas, atau
          sekadar numpang WiFi.
        </p>
      </header>

      {/* Filter + daftar warung */}
      <main className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <section aria-label="Filter">
          <FilterBar selected={filters} onChange={setFilters} />
        </section>

        <section aria-label="Daftar warung" className="mt-8">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warungList.map((warung) => (
              <li key={warung.id}>
                <WarungCard warung={warung} />
              </li>
            ))}
          </ul>

          {warungList.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-stone-300 px-4 py-10 text-center text-stone-600">
              Tidak ada warung yang cocok dengan filter ini.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}