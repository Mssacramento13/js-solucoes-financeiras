import { UserCheck, Brain, Zap, HeartHandshake, Target, Headphones } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Atendimento personalizado", desc: "Cada cliente tem um plano único, alinhado ao momento do negócio." },
  { icon: Brain, title: "Planejamento tributário inteligente", desc: "Estratégia para pagar menos imposto dentro da lei." },
  { icon: Zap, title: "Entrega rápida", desc: "Processos otimizados e prazos cumpridos com excelência." },
  { icon: HeartHandshake, title: "Atendimento humanizado", desc: "Linguagem clara, escuta ativa e proximidade real." },
  { icon: Target, title: "Gestão estratégica", desc: "Decisões baseadas em dados e visão de longo prazo." },
  { icon: Headphones, title: "Suporte especializado", desc: "Time técnico pronto para responder quando você precisar." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Diferenciais</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Por que escolher a JS Soluções Financeiras.
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-muted-foreground">
            Mais que contabilidade — entregamos parceria estratégica para o crescimento sustentável da sua empresa.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div aria-hidden className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="relative mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
