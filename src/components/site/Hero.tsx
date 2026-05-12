import { ArrowRight, Calendar, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import heroImage from "@/assets/about.jpg";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Contabilidade estratégica · Salvador · BA
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Menos impostos.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mais controle.
            </span>{" "}
            Mais crescimento.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Contabilidade estratégica e gestão financeira inteligente para empresas que desejam
            crescer com segurança e organização.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Quero Falar com Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background hover:border-foreground/20 transition-all"
            >
              <Calendar className="h-4 w-4" />
              Agendar Consultoria
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/70 pt-8 max-w-lg">
            <div>
              <dt className="text-2xl font-bold text-foreground">+3</dt>
              <dd className="text-xs text-muted-foreground mt-1">anos de mercado</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">100%</dt>
              <dd className="text-xs text-muted-foreground mt-1">atendimento humano</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-foreground">A+</dt>
              <dd className="text-xs text-muted-foreground mt-1">excelência técnica</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
            <img
              src={heroImage}
              alt="Jacy, fundadora da JS Soluções Financeiras"
              width={1536}
              height={1152}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* Floating cards */}
          <div className="absolute -left-4 bottom-8 hidden sm:flex animate-float items-center gap-3 rounded-2xl bg-background/95 px-4 py-3 shadow-elegant ring-1 ring-border backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Economia média</p>
              <p className="text-sm font-bold text-foreground">-32% em tributos</p>
            </div>
          </div>
          <div className="absolute -right-2 -top-4 hidden sm:flex items-center gap-3 rounded-2xl bg-background/95 px-4 py-3 shadow-elegant ring-1 ring-border backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Compliance</p>
              <p className="text-sm font-bold text-foreground">Segurança fiscal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
