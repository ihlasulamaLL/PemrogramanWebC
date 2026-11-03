import { Link, useParams } from "react-router-dom";

export default function DetailWarung() {
  const { id } = useParams();

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-indigo-950 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-indigo-600"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Kembali
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
        Detail Warung
      </h1>
      <p className="mt-2 text-slate-600">
        Menampilkan warung dengan ID: <span className="font-medium">{id}</span>
      </p>
    </section>
  );
}