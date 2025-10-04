import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import UrgencyBar from "@/components/UrgencyBar";
import CountdownTimer from "@/components/CountdownTimer";
import heroImage from "@/assets/carlos-cafe-hero.png";
import bonusImage from "@/assets/bonus-curso-samba.png";
const Index = () => {
  // Event date: October 15, 2025 at 20:00 (8:00 PM)
  const [targetDate] = useState(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    // Set to October 15 at 20:00
    const eventDate = new Date(currentYear, 9, 15, 20, 0, 0); // Month is 0-indexed (9 = October)

    // If the date has passed this year, set it for next year
    if (eventDate < date) {
      eventDate.setFullYear(currentYear + 1);
    }
    return eventDate;
  });
  const handleCTAClick = () => {
    // Add your CTA logic here (e.g., redirect to checkout, open modal, etc.)
    console.log("CTA clicked!");
  };
  return <div className="min-h-screen bg-background">
      {/* Urgency Bar */}
      <UrgencyBar targetDate={targetDate} percentageFilled={87} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image/Video Section */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img src={heroImage} alt="Carlos Café - Workshop presenter" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Button onClick={handleCTAClick} className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                  GARANTA SUA VAGA
                </Button>
                <p className="text-foreground text-sm mt-3 font-medium">
                  E você vai receber 0
                </p>
              </div>
            </div>

            {/* Alert Box with Countdown */}
            <div className="bg-card border border-accent rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent font-bold text-lg uppercase tracking-wide">
                    AINDA HÁ TEMPO
                  </p>
                  <p className="text-foreground text-sm uppercase tracking-wider">
                    EVENTO INICIA EM:
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <CountdownTimer targetDate={targetDate} variant="detailed" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-bold text-sm uppercase tracking-wide">
                WORKSHOP LIVE
              </span>
              <span className="text-foreground font-bold text-sm">| QUA 15/10 ÀS 20H</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug">
              Últimas Vagas! Workshop 'Toque seu Primeiro Samba' com Carlos Café
            </h1>

            <Button onClick={handleCTAClick} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-8 px-12 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
              Garanta Seu VIP por Apenas R$48
            </Button>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs text-primary-foreground">✓</span>
                </div>
                <span className="text-base">Acesso completo ao workshop ao vivo</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs text-primary-foreground">✓</span>
                </div>
                <span className="text-base">Bônus exclusivos para participantes VIP</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs text-primary-foreground">✓</span>
                </div>
                <span className="text-base">Suporte e acompanhamento personalizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 md:mt-24">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              "Garantia 100x" Ou Seu Dinheiro de Volta
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Garantia de 100% de Satisfação – ✅ Risco ZERO Para Você
            </p>
            
            <p className="text-muted-foreground text-base mb-4">
              Se depois de assistir o workshop e receber todas as dicas de Carlos Café,
            </p>
            
            <p className="text-muted-foreground text-base mb-4">
              você não achar HONESTAMENTE que vale pelo menos 100 vezes os R$48 que pagou...
            </p>
            
            <p className="text-muted-foreground text-base mb-8">
              Nós devolvemos todo seu dinheiro na mesma hora. Sem perguntas. Sem burocracia. Sem risco.
            </p>
            
            <Button onClick={handleCTAClick} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl py-8 px-12 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 mb-4">
              GARANTIR ACESSO VIP → R$48
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Pagamento único. Acesso imediato. Garantia de 7 dias.
            </p>
          </div>
        </div>

        {/* Why VIP Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Por Que Você Deve Fazer o Workshop
              </h2>
              
              <p className="text-2xl md:text-3xl text-foreground font-bold">
                (Sim... São apenas R$ 48)
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Você vai ganhar como <span className="font-bold text-accent">Bônus</span> o Curso <span className="font-semibold">&quot;Toque seu primeiro samba em 7 dias&quot;</span> que custa <span className="font-bold text-primary">R$27,00</span> pelo preço único: <span className="font-bold text-accent text-2xl">R$48</span>
                </p>
                
                <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6 space-y-3">
                  <p className="text-lg text-foreground font-semibold">
                    Ou seja:
                  </p>
                  <div className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                    <span className="text-foreground">R$48</span>
                    <span className="text-muted-foreground">-</span>
                    <span className="text-primary">R$27</span>
                    <span className="text-accent">=</span>
                    <span className="text-accent text-3xl">R$21,00</span>
                  </div>
                  <p className="text-base text-foreground font-medium">
                    Você faz o workshop com o Mestre Carlos Café por apenas <span className="text-accent font-bold text-xl">R$21,00</span>!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Bonus Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">🎁</span>
                </div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">BÔNUS</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Toque seu primeiro Samba
              </h3>
              
              <div className="rounded-xl overflow-hidden border border-border mb-6">
                <img src={bonusImage} alt="Curso Bônus - Toque seu primeiro Samba em 7 dias" className="w-full h-auto" />
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aprenda os fundamentos da batida de pandeiro com orientações guiadas e práticas diretas que levam você do zero até tocar samba.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
              <span>💳</span> Formas de Pagamento
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Credit Card */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💳</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> Cartão de Crédito
              </h3>
              <p className="text-primary font-semibold">Parcele em até 12x</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-muted-foreground">⊕</span>
                Acesso liberado imediatamente após aprovação
              </p>
            </div>

            {/* Pix */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> Pix
              </h3>
              <p className="text-primary font-semibold">Pagamento à vista</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-muted-foreground">⊕</span>
                Liberação rápida em poucos minutos
              </p>
            </div>

            {/* Boleto Bancário */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📄</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> Boleto Bancário
              </h3>
              <p className="text-primary font-semibold">Pagamento à vista</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-muted-foreground">⊕</span>
                Liberação em até 2 dias úteis após o pagamento
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            A Comunidade Panderando com Carlos Café não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui nenhuma relação comercial ou comprometimento para usar.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com a nossa Termos de Uso e Política de Privacidade.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-foreground font-medium">Panderando com Carlos Café</span>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
            <span className="text-muted-foreground">|</span>
            <a href="https://politica-de-privacidade.rota50ia.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Todos os direitos reservados – Edilson Morais 2025
          </p>
          
          <p className="text-sm text-muted-foreground">
            Contato: <a href="mailto:edilsonafi@gmail.com" className="text-foreground hover:text-primary transition-colors">edilsonafi@gmail.com</a>
          </p>
          
          <p className="text-xs text-muted-foreground">
            Desenvolvido por Edilson Morais
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;