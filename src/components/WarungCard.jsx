import { Link } from "react-router-dom";
export default function WarungCard({ warung }) {
  const formatRupiah = (harga) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(harga);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Gambar Warung */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={warung.gambar}
          alt={warung.nama}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
          <span className="text-yellow-500">★</span>
          <span>{warung.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Informasi Warung */}
      <div className="p-5">

        {/* Kategori */}
        <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          {warung.kategori}
        </span>

        {/* Nama Warung */}
        <h3 className="mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
          {warung.nama}
        </h3>

        {/* Harga */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-400">
              Harga mulai
            </p>

            <p className="text-lg font-bold text-orange-600">
              {formatRupiah(warung.harga)}
            </p>
          </div>

          <Link
         to={`/warung/${warung.id}`}
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >   
            Lihat Detail
            </Link>

        </div>
      </div>
    </article>
  );
}