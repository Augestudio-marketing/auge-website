const WHATSAPP_URL =
  "https://wa.me/34613803022?text=" +
  encodeURIComponent("Hola, tengo una pregunta sobre AUGE.");

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.1.56 4.15 1.62 5.96L3.9 27l6.24-1.63a12.9 12.9 0 0 0 5.9 1.5h.01c6.63 0 12.02-5.36 12.02-11.96C28.07 8.36 22.68 3 16.04 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.7.97.99-3.62-.24-.37a9.83 9.83 0 0 1-1.52-5.28c0-5.45 4.45-9.88 9.9-9.88a9.85 9.85 0 0 1 9.89 9.87c0 5.45-4.45 9.9-9.89 9.9Zm5.42-7.41c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
