export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
        <p className="text-base font-semibold text-white">Rasa Kampus</p>
        <p className="text-sm text-indigo-200">
          &copy; {year} Rasa Kampus. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
