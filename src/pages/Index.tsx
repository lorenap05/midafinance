import midaLogo from "@/assets/mida-logo-transparent.png";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import imagery1 from "@/assets/imagery_1.png";
import imagery2 from "@/assets/imagery_2.png";
import imagery3 from "@/assets/imagery_3.png";
import imagery4 from "@/assets/imagery_4.png";
import imagery6 from "@/assets/imagery_6.png";
import abstractFinance from "@/assets/abstract-finance.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, TrendingUp, BarChart3, Bell, Sparkles, Shield, Lock, CheckCircle } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <img src={midaLogo} alt="Mida" className="h-8" />
      <div className="flex items-center gap-6">
        <a href="#how-it-works" className="hidden md:block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
          How it works
        </a>
        <a href="#benefits" className="hidden md:block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
          Benefits
        </a>
        <a href="#security" className="hidden md:block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
          Security
        </a>
        <a
          href="#cta"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-semibold hover:brightness-110 transition-all"
        >
          Get Early Access
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(40_48%_58%_/_0.08),_transparent_60%)]" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-6 animate-fade-up">
            Personal Finance, Reimagined
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] animate-fade-up">
            Finally, finances that fit your{" "}
            <span className="text-primary">real life.</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed animate-fade-up-delay-1">
            Mida helps you plan ahead, track spending, and stay in control. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up-delay-2">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold font-body hover:brightness-110 hover:scale-[1.02] transition-all"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold font-body hover:bg-accent/50 transition-all"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up-delay-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
            <img
              src={imagery2}
              alt="Mida financial dashboard showing spending categories and income forecasting"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const cards = [
    {
      title: "Unpredictable income",
      text: "Your earnings change month to month, making it impossible to plan with a fixed budget.",
    },
    {
      title: "No real-time visibility",
      text: "Spreadsheets and bank apps don't warn you before you overspend — only after.",
    },
    {
      title: "Always guessing",
      text: "You never truly know if you're on track until the money runs out.",
    },
  ];
  return (
    <section ref={ref} className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className={`font-heading text-3xl md:text-5xl text-center font-semibold text-foreground mb-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Traditional budgeting tools weren't built for people with variable income. Mida is.
        </h2>
        <p className={`font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up-delay-1" : "opacity-0"}`}>

        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-card/40 border border-border rounded-2xl p-8 transition-all duration-700 hover:shadow-lg hover:border-primary/20 ${isVisible ? `animate-fade-up-delay-${i + 1}` : "opacity-0"}`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.text}</p>
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
    {
      num: "01",
      title: "Connect your bank",
      desc: "Link securely via Brazil's official Open Finance system. Safe, regulated, and takes under one minute. Read-only access only.",
      icon: <Lock className="w-5 h-5 text-primary" />,
    },
    {
      num: "02",
      title: "Mida learns your patterns",
      desc: "Our engine analyzes your income history and spending habits to build a personalized, adaptive monthly plan.",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
    },
    {
      num: "03",
      title: "Track & stay in control",
      desc: "Monitor actual vs. planned spending in real-time. Get proactive alerts before you overspend — not after.",
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
    },
  ];
  return (
    <section ref={ref} id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/20" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <p className={`font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          How it works
        </p>
        <h2 className={`font-heading text-3xl md:text-5xl text-center font-semibold text-foreground mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Three steps to financial clarity
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${isVisible ? `animate-fade-up-delay-${i + 1}` : "opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="font-body text-xs font-semibold text-primary tracking-widest uppercase">Step {step.num}</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 -right-4 text-border">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
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
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Variable income forecasting",
      desc: "Smart predictions based on your real earning patterns — not rigid fixed budgets.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Real-time plan tracking",
      desc: "See actual vs. planned spending at a glance with intuitive visual progress bars.",
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Proactive alerts",
      desc: "Get notified before you overspend. Mida watches your pace so you don't have to.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "AI-powered insights",
      desc: "Personalized financial guidance tailored to your habits, goals, and income rhythm.",
    },
  ];
  return (
    <section ref={ref} id="benefits" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className={`font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              Why Mida
            </p>
            <h2 className={`font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
              Built for your reality
            </h2>
            <p className={`font-body text-muted-foreground mb-10 leading-relaxed transition-all duration-700 ${isVisible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
              Mida adapts to how you actually earn and spend — not the other way around.
            </p>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-5 rounded-xl border border-transparent hover:border-border hover:bg-card/40 transition-all duration-500 ${isVisible ? `animate-fade-up-delay-${(i % 3) + 1}` : "opacity-0"}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={imagery6}
                alt="Financial data visualization"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    "Regulated by the Banco Central do Brasil",
    "Read-only access — we never move your money",
    "Bank credentials are never shared with us",
    "End-to-end encryption on all data",
  ];
  return (
    <section ref={ref} id="security" className="py-28 px-6 bg-accent/20">
      <div className="container mx-auto max-w-5xl">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Your data is safe with us
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Mida uses Brazil's official Open Finance system. We take security seriously so you can focus on what matters — your financial health.
            </p>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground text-sm">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square rounded-3x1 bg-gradient-to-br from-primary/5 to-accent/40 border border-border flex items-center justify-center">
            <div className="rounded-2x1 overflow-hidden border border-border">
              <img
                src={imagery3}
                alt="Financial data visualization"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="cta" className="py-32 px-6">
      <div className={`container mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Get started
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
          Take control of your finances today.
        </h2>
        <p className="font-body text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Join thousands of Brazilians who are finally managing their money with confidence.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold font-body hover:brightness-110 hover:scale-[1.02] transition-all"
        >
          Get Early Access
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="font-body text-muted-foreground text-sm mt-5">
          Free to try · No credit card required
        </p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
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
