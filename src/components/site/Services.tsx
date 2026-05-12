import {
  Briefcase, Building2, Calculator, FileText, Banknote, Wallet,
  LineChart, Receipt, ClipboardCheck, Lightbulb, Handshake, ArrowUpRight,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const services = [
  { icon: Briefcase, title: "Terceirização Financeira", desc: "Sua área financeira gerida por especialistas, com processos claros e relatórios sob medida." },
  { icon: Building2, title: "BPO Financeiro para MEI e ME", desc: "Operação financeira completa para pequenos negócios crescerem com previsibilidade." },
  { icon: Calculator, title: "Planejamento Tributário", desc: "Reduza impostos legalmente com o regime certo e estratégias inteligentes." },
  { icon: FileText, title: "IRPF", desc: "Declaração de Imposto de Renda feita com técnica, segurança e maximização de restituição." },
  { icon: Banknote, title: "Conciliação Bancária", desc: "Cada centavo conferido. Visibilidade total entre extratos e lançamentos." },
  { icon: Wallet, title: "Contas a Pagar e Receber", desc: "Controle completo de obrigações e recebíveis para nunca mais perder prazos." },
  { icon: LineChart, title: "Fluxo de Caixa", desc: "Decisões baseadas em dados. Saiba exatamente para onde vai cada real." },
  { icon: Receipt, title: "Gestão de Despesas", desc: "Identifique gargalos e elimine custos desnecessários da sua operação." },
  { icon: ClipboardCheck, title: "Fechamento Contábil", desc: "Demonstrações precisas, dentro do prazo, prontas para diretoria e bancos." },
  { icon: Lightbulb, title: "Consultoria Estratégica", desc: "Acompanhamento próximo para transformar números em crescimento sustentável." },
  { icon: Handshake, title: "Parceria Contábil", desc: "Para escritórios e profissionais que buscam um parceiro técnico de confiança." },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Serviços</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Soluções financeiras completas para sua empresa crescer.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Da rotina contábil à estratégia tributária — entregamos clareza, segurança e resultado.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
                aria-label={`Saber mais sobre ${title}`}
              >
                Saber mais
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
