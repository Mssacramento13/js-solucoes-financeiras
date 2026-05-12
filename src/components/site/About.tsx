import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/logo.jpeg";

const pillars = [
  { icon: Target, title: "Missão", text: "Transformar a gestão financeira das empresas com estratégia, ética e proximidade." },
  { icon: Eye, title: "Visão", text: "Ser referência em contabilidade estratégica e relacionamento de longo prazo." },
  { icon: Heart, title: "Valores", text: "Ética, excelência, transparência e atendimento humanizado." },
];

const bullets = [
  "Atendimento personalizado e próximo",
  "Planejamento tributário inteligente",
  "Acompanhamento financeiro proativo",
  "Parceria com especialistas da área",
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary/10 blur-2xl" aria-hidden />
            <img
              src={aboutImage}
              alt="Logo JS Soluções Financeiras"
              width={1280}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl shadow-elegant ring-1 ring-border bg-background object-contain w-full aspect-square p-8"
            />
            <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-background px-5 py-4 shadow-elegant ring-1 ring-border">
              <p className="text-xs text-muted-foreground">Desde</p>
              <p className="text-2xl font-bold text-foreground">2022</p>
              <p className="text-xs text-muted-foreground mt-0.5">com você</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sobre nós</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Contabilidade pensada como estratégia de crescimento.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A JS Soluções Financeiras nasceu em 2022, movida pelo amor à contabilidade e pela missão
            de transformar a gestão das empresas através de um atendimento próximo, estratégico e
            altamente profissional.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
