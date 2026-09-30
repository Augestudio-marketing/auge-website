import type { ReactNode } from "react";

// Etiqueta centrada entre dos filetes finos, como en /planes.
export default function Etiqueta({
  children,
  tono = "claro",
}: {
  children: ReactNode;
  tono?: "claro" | "oscuro";
}) {
  const linea = tono === "oscuro" ? "bg-cream/30" : "bg-burgundy/40";
  const texto = tono === "oscuro" ? "text-cream/60" : "text-burgundy";
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`h-px w-6 shrink-0 sm:w-16 ${linea}`} />
      <p className={`text-[11px] uppercase tracking-widest sm:tracking-widest2 ${texto}`}>
        {children}
      </p>
      <span className={`h-px w-6 shrink-0 sm:w-16 ${linea}`} />
    </div>
  );
}
