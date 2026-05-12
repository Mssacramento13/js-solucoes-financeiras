import { Instagram, MessageCircle, MapPin, Clock, Mail, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL, ADDRESS, HOURS } from "@/lib/site";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
];

const services = [
  "Planejamento Tributário",
  "BPO Financeiro",
  "Consultoria Estratégica",
  "Fluxo de Caixa",
  "IRPF",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="JS Soluções Financeiras" className="h-12 w-12 object-contain" />
              <div className="leading-tight">
                <p className="font-display font-bold">JS Soluções</p>
                <p className="text-xs text-muted-foreground -mt-0.5">Financeiras</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Contabilidade estratégica e gestão financeira inteligente para empresas que desejam
              crescer com segurança, organização e eficiência tributária.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 className="grid h-10 w-10 place-items-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="grid h-10 w-10 place-items-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="E-mail"
                 className="grid h-10 w-10 place-items-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground">Navegação</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-foreground">Serviços</h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />{ADDRESS}</li>
              <li className="flex items-start gap-2.5"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />{HOURS}</li>
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />{EMAIL}</li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Fale com a gente <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} JS Soluções Financeiras. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">CNPJ · Salvador, Bahia</p>
        </div>
      </div>
    </footer>
  );
}
