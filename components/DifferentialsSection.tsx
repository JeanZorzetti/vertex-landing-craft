import { CheckCircle, BarChart3, Palette, Eye } from "lucide-react";

const differentials = [
  {
    icon: BarChart3,
    title: "Dados Verificados",
    description:
      "Decisões baseadas na verdade dos números, sem 'achismos'.",
  },
  {
    icon: Palette,
    title: "Estética de Alto Padrão",
    description:
      "Design impecável que transmite confiança para o seu cliente.",
  },
  {
    icon: Eye,
    title: "Transparência Radical",
    description:
      "Acesso total ao que está sendo feito com seu investimento.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-primary relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="v-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 10 L70 90 M50 10 L30 90"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#v-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
            Nossa Filosofia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Como Trabalhamos na <span className="text-gold">Vértice</span>
          </h2>
          <p className="text-primary-foreground/70">
            Princípios que guiam cada decisão e entrega que fazemos.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                <item.icon className="w-9 h-9 text-gold" strokeWidth={1.5} />
              </div>

              {/* Check badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>

              <p className="text-primary-foreground/70 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
