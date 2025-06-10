import { useEffect } from "react";

function PopupMensaje({ tipo, mensaje, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 10000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-8 right-8 md:right-[38%] flex items-center gap-3 px-5 py-3 rounded-xl 
        shadow-xl z-[9999] max-w-sm transition-transform duration-300 animate-fade-in-down 
        border-1
      ${
        tipo === "exito"
          ? "bg-green-200 text-green-700 border-green-700"
          : "bg-red-200 text-red-700 border-red-700"
      }`}
    >
      {tipo === "exito" ? (
        <i class="bi bi-check-circle text-xl"></i>
      ) : (
        <i class="bi bi-x-circle text-xl"></i>
      )}
      <div className="text-sm leading-snug font-semibold">{mensaje}</div>
    </div>
  );
}

export default PopupMensaje;
