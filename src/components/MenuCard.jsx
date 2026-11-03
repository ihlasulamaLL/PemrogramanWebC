import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function MenuCard({ menu }) {
  const formatRupiah = (harga) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(harga);
  };

  return (
    <article className="group flex flex-col w-full max-w-[320px] mx-auto min-h-[380px] rounded-[18px] bg-[#D9D9D9] p-4 text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Gambar Menu */}
      <div className="relative w-full h-[175px] overflow-hidden rounded-[15px] bg-[#A1A1A1]">
        <img
          src={menu.gambar}
          alt={menu.nama}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {menu.harga && (
          <span className="absolute bottom-2.5 right-2.5 rounded-full bg-stone-900/85 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-amber-300">
            {formatRupiah(menu.harga)}
          </span>
        )}
      </div>

      {/* Konten Menu */}
      <div className="flex flex-1 flex-col pt-3 pb-1">
        <h3 className="text-lg font-bold leading-snug text-stone-900 line-clamp-1 group-hover:text-amber-800 transition-colors">
          {menu.nama}
        </h3>

        <p className="mt-1 text-sm font-semibold text-stone-700 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="truncate">{menu.warungNama}</span>
        </p>

        <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {menu.caption}
        </p>

        <div className="mt-2.5">
          <RatingStars rating={menu.rating} size="sm" />
        </div>

        <div className="mt-auto pt-2.5 flex items-center justify-between text-xs text-stone-600 border-t border-stone-300/60">
          <p className="truncate flex items-center gap-1 max-w-[170px]" title={menu.alamat}>
            <svg className="w-3.5 h-3.5 shrink-0 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{menu.alamat}</span>
          </p>

          <Link
            to={`/warung/${menu.warungId}`}
            className="text-xs font-bold text-stone-900 hover:text-amber-800 underline underline-offset-2"
          >
            Lihat Warung &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}

