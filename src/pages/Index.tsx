import midaLogo from "@/assets/mida-logo.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <img src={midaLogo} alt="Mida" className="h-8" />
      <a
        href="#cta"
        className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-semibold hover:brightness-110 transition-all"
      >
        Get Early Access
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(40_48%_58%_/_0.12),_transparent_60%),_radial-gradient(ellipse_at_bottom_left,_hsl(27_47%_84%_/_0.3),_transparent_60%)]" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <h1 className="font-heading text-5xl md:text-7xl font-semibold text-foreground leading-tight animate-fade-up max-w-4xl mx-auto">
        Finally, finances that fit your real life.
      </h1>
      <p className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-up-delay-1">
        Mida helps you plan ahead, track spending, and stay in control — without the stress.
      </p>
      <a
        href="#cta"
        className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold font-body hover:brightness-110 hover:scale-105 transition-all animate-fade-up-delay-2"
      >
        Get Early Access
      </a>
    </div>
  </section>
);

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const cards = [
    { icon: "📊", text: "Your income changes month to month" },
    { icon: "📋", text: "Spreadsheets don't warn you before overspending" },
    { icon: "🎯", text: "You never know if you're on track" },
  ];
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`font-heading text-3xl md:text-5xl text-center font-semibold text-foreground mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Sound familiar?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-accent/50 border border-border rounded-2xl p-8 text-center transition-all duration-700 ${isVisible ? `animate-fade-up-delay-${i + 1}` : "opacity-0"}`}
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <p className="font-body text-foreground text-base font-medium">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();
  const steps = [
    { num: "01", title: "Connect your bank", desc: "Link securely via Open Finance in under 1 minute. Safe, official, and read-only." },
    { num: "02", title: "Mida learns your patterns", desc: "We analyze your income patterns and set a smart, personalized monthly plan." },
    { num: "03", title: "Track & stay in control", desc: "See actual vs. planned spending with visual sliders and proactive alerts." },
  ];
  return (
    <section ref={ref} className="py-24 px-6 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`font-heading text-3xl md:text-5xl text-center font-semibold text-foreground mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          How it works
        </h2>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-start gap-6 transition-all duration-700 ${isVisible ? `animate-fade-up-delay-${i + 1}` : "opacity-0"}`}
            >
              <span className="text-primary font-heading text-5xl font-bold shrink-0">{step.num}</span>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-muted-foreground text-base">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const { ref, isVisible } = useScrollReveal();
  const benefits = [
    { icon: "📈", title: "Variable income forecasting", desc: "Smart predictions based on your real earning patterns." },
    { icon: "⚖️", title: "Real-time plan tracking", desc: "See actual vs. planned spending at a glance." },
    { icon: "🔔", title: "Proactive alerts", desc: "Get warned before you overspend, not after." },
    { icon: "🤖", title: "AI-powered tips", desc: "Personalized financial guidance just for you." },
  ];
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`font-heading text-3xl md:text-5xl text-center font-semibold text-foreground mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Built for your reality
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-card/60 border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ${isVisible ? `animate-fade-up-delay-${(i % 3) + 1}` : "opacity-0"}`}
            >
              <span className="text-3xl mb-3 block">{b.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-20 px-6 bg-accent/30">
      <div className={`container mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <span className="text-5xl mb-4 block">🛡️</span>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Your data is safe with us
        </h2>
        <p className="font-body text-muted-foreground text-base leading-relaxed">
          Mida uses Brazil's official Open Finance system. Your bank credentials are never shared with us.
          Read-only access. Regulated by the Banco Central do Brasil.
        </p>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="cta" className="py-28 px-6">
      <div className={`container mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
          Take control of your finances today.
        </h2>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold font-body hover:brightness-110 hover:scale-105 transition-all"
        >
          Get Early Access
        </a>
        <p className="font-body text-muted-foreground text-sm mt-4">
          Free to try. No credit card required.
        </p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={midaLogo} alt="Mida" className="h-6" />
        <span className="font-body text-muted-foreground text-sm">Your finances, finally in balance.</span>
      </div>
      <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <span>© 2025 Mida</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <ProblemSection />
    <HowItWorks />
    <Benefits />
    <TrustSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
