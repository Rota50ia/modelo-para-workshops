import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import UrgencyBar from "@/components/UrgencyBar";
import CountdownTimer from "@/components/CountdownTimer";
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
              <img src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&auto=format&fit=crop" alt="Workshop presenter" className="w-full aspect-video object-cover" />
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Últimas vagas para viver a experiência completa do Workshop
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
      </div>
    </div>;
};
export default Index;