import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <Image
          src="/logo-crema-wordmark.png"
          alt="AUGE."
          width={2135}
          height={537}
          className="h-6 w-auto"
        />
        <p className="text-xs uppercase tracking-widest text-cream/40">
          © {new Date().getFullYear()} AUGE Aesthetic Marketing Studio
        </p>
      </div>
    </footer>
  );
}
