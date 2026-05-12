import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Marina Cardoso",
    company: "CEO · Atelier Norte",
    quote:
      "Em 6 meses reduzimos a carga tributária em mais de 25%. O acompanhamento próximo da JS mudou completamente como vejo as finanças da empresa.",
    initials: "MC",
  },
  {
    name: "Rafael Mendes",
    company: "Sócio · Mendes & Co",
    quote:
      "Profissionalismo absurdo. Pela primeira vez tenho relatórios financeiros que entendo e uso para decidir. Recomendo de olhos fechados.",
    initials: "RM",
  },
  {
    name: "Juliana Prado",
    company: "Founder · Verde Studio",
    quote:
      "O BPO financeiro tirou um peso enorme do meu dia. Hoje foco no negócio e tenho a tranquilidade de saber que tudo está em dia.",
    initials: "JP",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = items.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const t = items[i];

  return (
    <section id="depoimentos" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Depoimentos</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Resultados que falam por nós.
        </h2>

        <div className="relative mt-14">
          <article
            key={i}
            className="animate-fade-up relative mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-elegant"
          >
            <Quote className="absolute -top-5 left-8 h-10 w-10 text-primary bg-background rounded-full p-2 ring-1 ring-border" />
            <div className="flex justify-center gap-1 text-accent mb-5" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground text-balance">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                {t.initials}
              </span>
              <div className="text-left">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </article>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-muted transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2" role="tablist">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Ir para depoimento ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Próximo" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-muted transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
