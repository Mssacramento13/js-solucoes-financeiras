import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Soluções Financeiras — Contabilidade Estratégica em Salvador" },
      {
        name: "description",
        content:
          "Contabilidade estratégica e gestão financeira inteligente em Salvador/BA. Planejamento tributário, BPO financeiro e consultoria para empresas que querem crescer com segurança.",
      },
      { property: "og:title", content: "JS Soluções Financeiras — Contabilidade Estratégica" },
      {
        property: "og:description",
        content:
          "Menos impostos. Mais controle. Mais crescimento. Contabilidade estratégica para empresas em Salvador e em todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
