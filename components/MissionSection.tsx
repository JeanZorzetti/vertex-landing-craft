"use client";

import { Target, Eye, CheckCircle2, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Nossa missão é simples e objetiva: pegar empresas que têm produtos e serviços incríveis e quebrar as barreiras que impedem o seu crescimento. Não aceitamos o &ldquo;bom o suficiente&rdquo;. Usamos tecnologia de dados e estratégias de tráfego validadas para criar um fluxo de vendas constante, previsível e escalável.
          </p>

          {/* Frase de impacto com design clean */}
          <div className="relative mt-10 mb-10">
            {/* Card principal - design minimalista */}
            <div className="relative bg-gradient-to-br from-navy-dark to-primary p-8 md:p-10 rounded-2xl shadow-lg overflow-hidden group border border-gold/10">
              {/* Shimmer sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

              {/* Conteúdo */}
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <p className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed mb-2">
                    Existimos para garantir que o seu negócio
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gold uppercase tracking-wide">
                    nunca pare de crescer.
                  </p>
                </div>

                {/* CTA Button - mais clean */}
                <Button
                  variant="gold"
                  size="lg"
                  className="gold-shimmer group shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById('contato');
                    if (contactSection) {
                      const headerOffset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    Comece a crescer agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Visão - Design Clean com Imagem */}
        <div className="max-w-5xl mx-auto text-center mb-20 relative">
          {/* Card com imagem de fundo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Imagem de fundo - Handshake */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')`,
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

            {/* Content */}
            <div className="relative p-12 md:p-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
                <Eye className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs font-bold tracking-widest uppercase">
                  Nossa Visão
                </span>
              </div>

              {/* Título */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Ser a força invisível por trás dos{" "}
                <span className="text-gold">novos líderes de mercado</span>
              </h2>

              {/* Descrição */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Vemos um futuro onde nossos parceiros não competem por preço, mas dominam seus nichos pela autoridade e presença digital. Queremos ser reconhecidos como a inteligência comercial que transformou negócios locais em potências nacionais, fornecendo a tecnologia e a estratégia para quem não tem medo de ser grande.
              </p>
            </div>
          </div>
        </div>

        {/* Valores - Design Moderno */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gold/5 rounded-full border border-gold/20">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">
                Nossos Valores
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              O DNA do nosso <span className="text-gold">Resultado</span>
            </h2>
          </div>

          {/* Values Grid - Design Aprimorado */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-7 bg-white rounded-2xl border-2 border-border/30 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Icon com badge design */}
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-xs text-gold font-bold mb-3 uppercase tracking-wider">
                    {value.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
