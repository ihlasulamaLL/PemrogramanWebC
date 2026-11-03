import { useParams, Link } from "react-router-dom";
import { dummyWarung } from "../data/dummyWarung";
import RatingStars from "../components/RatingStars";

export default function DetailWarung() {
  const { id } = useParams();
  const warung = dummyWarung.find((w) => w.id === Number(id));

  const formatRupiah = (harga) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(harga);
  };

  if (!warung) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center font-sans">
        <h2 className="text-2xl font-bold text-stone-900">Tempat Makan Tidak Ditemukan</h2>
        <p className="mt-2 text-stone-600">ID warung "{id}" tidak terdaftar di sistem.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-stone-800"
        >
          &larr; Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Tombol Kembali */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#D9D9D9] px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-[#c9c9c9] transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Beranda
        </Link>

        {/* Card Detail Utama sesuai palet Figma */}
        <div className="mt-6 overflow-hidden rounded-[24px] bg-[#D9D9D9] p-6 sm:p-8 shadow-sm">
          {/* Gambar Hero Warung */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-[18px] bg-[#A1A1A1]">
            <img
              src={warung.gambar}
              alt={warung.nama}
              className="h-full w-full object-cover"
            />
            <span className="absolute top-4 left-4 rounded-full bg-stone-900/80 backdrop-blur-xs px-3.5 py-1 text-xs font-semibold text-amber-300">
              {warung.kategori}
            </span>
          </div>

          {/* Informasi Pokok */}
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {warung.nama}
              </h1>
              <div className="flex items-center gap-2">
                <RatingStars rating={warung.rating} />
              </div>
            </div>

            <p className="mt-3 text-sm sm:text-base text-stone-700 leading-relaxed">
              {warung.deskripsi || warung.caption}
            </p>

            {/* Info Badge (Jam buka, Alamat, Jarak) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-[14px] bg-white/80 p-4 border border-stone-300/50">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Jam Buka
                </span>
                <span className="mt-1 text-sm font-bold text-stone-800 block">
                  {warung.jamBuka || "08:00 - 21:00 WITA"}
                </span>
              </div>

              <div className="rounded-[14px] bg-white/80 p-4 border border-stone-300/50">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Jarak dari Kampus
                </span>
                <span className="mt-1 text-sm font-bold text-stone-800 block">
                  {warung.jarak || "Dekat Pintu Kampus"}
                </span>
              </div>

              <div className="rounded-[14px] bg-white/80 p-4 border border-stone-300/50">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Rentang Harga
                </span>
                <span className="mt-1 text-sm font-bold text-stone-800 block">
                  Mulai {formatRupiah(warung.harga)}
                </span>
              </div>
            </div>

            {/* Fasilitas */}
            {warung.fasilitas && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-stone-900 mb-2">Fasilitas Tempat:</h3>
                <div className="flex flex-wrap gap-2">
                  {warung.fasilitas.map((f, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 border border-stone-300"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Alamat & Maps Button */}
            <div className="mt-6 rounded-[16px] bg-white p-5 border border-stone-300/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Alamat Lengkap
                </span>
                <p className="text-sm font-medium text-stone-800 mt-1 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-stone-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {warung.alamat}
                </p>
              </div>

              <a
                href={warung.mapsUrl || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-stone-800 transition-colors shadow-xs"
              >
                <span>Arahkan ke Google Maps</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Daftar Menu Tersedia */}
            {warung.menuList && warung.menuList.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-stone-900 mb-3">Daftar Menu Populer:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {warung.menuList.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-[12px] bg-white/90 p-3.5 border border-stone-200"
                    >
                      <span className="text-sm font-medium text-stone-800">{m.nama}</span>
                      <span className="text-sm font-bold text-stone-900">{formatRupiah(m.harga)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
