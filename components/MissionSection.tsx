import { Target, Eye, CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const values = [
  {
    icon: CheckCircle2,
    title: "Resultado Verificado",
    subtitle: "O 'Check' de Sucesso",
    description: "O símbolo de 'Check' na nossa marca não é enfeite. Ele representa nossa obsessão pela verdade dos números. Se não coloca dinheiro no seu caixa, não nos interessa. Aqui, cada estratégia é testada e aprovada para gerar lucro real.",
  },
  {
    icon: TrendingUp,
    title: "Ambição Sem Teto",
    subtitle: "Mirando o Vértice",
    description: "O Vértice é o ponto mais alto de uma pirâmide. É para lá que olhamos. Trabalhamos com empresários que querem escalar, que buscam o topo e que entendem que tecnologia é o combustível para chegar lá.",
  },
  {
    icon: Users,
    title: "Parceria de Trincheira",
    subtitle: "Jogamos Juntos",
    description: "Não somos fornecedores distantes. Entramos no seu negócio para jogar junto. A sua meta vira a nossa meta. A sua dor vira a nossa dor. E a sua vitória é a única coisa que celebramos.",
  },
  {
    icon: Award,
    title: "Elegância Estratégica",
    subtitle: "Inteligência que Atrai",
    description: "Não precisamos gritar para vender. Usamos a sobriedade e a inteligência para criar um marketing que atrai o cliente qualificado, aquele que valoriza o seu produto e paga o preço justo.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Missão */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Nossa Missão
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Desbloquear o máximo potencial de{" "}
            <span className="text-gold">faturamento</span> do seu negócio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nossa missão é simples e agressiva: pegar empresas que têm um produto incrível e quebrar as barreiras que impedem o seu crescimento. Não aceitamos o &ldquo;bom o suficiente&rdquo;. Usamos tecnologia de dados e estratégias de tráfego validadas para criar um fluxo de vendas constante, previsível e escalável.{" "}
            <span className="text-foreground font-semibold">Existimos para garantir que o seu negócio nunca pare de crescer.</span>
          </p>
        </div>

        {/* Visão */}
        <div className="max-w-4xl mx-auto text-center mb-24 p-8 md:p-12 bg-gradient-to-br from-primary to-navy-dark rounded-2xl border border-gold/20 shadow-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Nossa Visão
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ser a força invisível por trás dos{" "}
            <span className="text-gold">novos líderes de mercado</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Vemos um futuro onde nossos parceiros não competem por preço, mas dominam seus nichos pela autoridade e presença digital. Queremos ser reconhecidos como a inteligência comercial que transformou negócios locais em potências nacionais, fornecendo a tecnologia e a estratégia para quem não tem medo de ser grande.
          </p>
        </div>

        {/* Valores */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              Nossos Valores
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O DNA do nosso <span className="text-gold">Resultado</span>
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 bg-secondary rounded-xl border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gold font-semibold mb-4 uppercase tracking-wide">
                    {value.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
