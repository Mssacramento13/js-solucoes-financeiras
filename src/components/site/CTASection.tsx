import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function CTASection() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 px-5 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-cta p-10 sm:p-16 lg:p-20 text-center shadow-elegant">
        {/* Decoration */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-white/90">
            Vamos conversar
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Sua empresa merece uma gestão financeira mais inteligente.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Fale agora com a JS Soluções Financeiras e descubra como podemos ajudar sua empresa a
            crescer com segurança.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              Quero Falar com Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp direto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
