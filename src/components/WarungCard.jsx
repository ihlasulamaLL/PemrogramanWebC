import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function WarungCard({ warung }) {
  return (
    <article className="group flex flex-col w-full max-w-[320px] mx-auto min-h-[340px] rounded-[18px] bg-[#D9D9D9] p-4 text-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Gambar Tempat */}
      <div className="relative w-full h-[175px] overflow-hidden rounded-[15px] bg-[#A1A1A1]">
        <img
          src={warung.gambar}
          alt={warung.nama}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {warung.kategori && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-[11px] font-semibold text-stone-800 shadow-xs">
            {warung.kategori}
          </span>
        )}
        {warung.jarak && (
          <span className="absolute bottom-2.5 right-2.5 rounded-full bg-stone-900/80 backdrop-blur-xs px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
            {warung.jarak}
          </span>
        )}
      </div>

      {/* Konten Tempat */}
      <div className="flex flex-1 flex-col pt-3 pb-1">
        <h3 className="text-lg font-bold leading-snug text-stone-900 line-clamp-1 group-hover:text-amber-800 transition-colors">
          {warung.nama}
        </h3>

        <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {warung.caption}
        </p>

        <div className="mt-2.5">
          <RatingStars rating={warung.rating} size="sm" />
        </div>

        <div className="mt-auto pt-2.5 flex items-center justify-between text-xs text-stone-600 border-t border-stone-300/60">
          <p className="truncate flex items-center gap-1 max-w-[170px]" title={warung.alamat}>
            <svg className="w-3.5 h-3.5 shrink-0 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{warung.alamat}</span>
          </p>

          <Link
            to={`/warung/${warung.id}`}
            className="text-xs font-bold text-stone-900 hover:text-amber-800 underline underline-offset-2"
          >
            Detail &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
