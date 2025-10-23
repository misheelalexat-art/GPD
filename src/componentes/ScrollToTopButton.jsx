// components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";

export default function ScrollToTopButton({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    onScroll(); // chequeo inicial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Ir arriba"
      onClick={scrollToTop}
      className={`
        fixed right-6 bottom-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        transform transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          visible
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }
        bg-gradient-to-br from-pink-400 via-pink-300 to-rose-400
        text-white shadow-lg shadow-pink-200/60
        hover:scale-110 hover:shadow-pink-400/50
      `}
      title="Subir arriba"
    >
      {/* Ícono flecha arriba */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3.22 9.72a.75.75 0 011.06 0L10 15.44l5.72-5.72a.75.75 0 011.06 1.06l-6.25 6.25a.75.75 0 01-1.06 0L3.22 10.78a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
        <path d="M10 3.5a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5z" />
      </svg>
    </button>
  );
}
