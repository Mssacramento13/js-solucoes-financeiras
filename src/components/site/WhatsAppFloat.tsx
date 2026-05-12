import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-40 animate-ping" aria-hidden />
      <span className="relative flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Fale conosco</span>
      </span>
    </a>
  );
}
