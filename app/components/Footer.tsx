export default function Footer() {
  return (
    <footer className="border-t border-stone/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <span className="font-serif text-lg font-black tracking-tight text-stone">AUGE.</span>
        <p className="text-xs uppercase tracking-widest text-stone/50">
          © {new Date().getFullYear()} AUGE Aesthetic Marketing Studio
        </p>
      </div>
    </footer>
  );
}
