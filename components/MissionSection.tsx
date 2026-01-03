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

        {/* Visão - Com imagem de fundo espalhada na tela */}
        <div className="relative -mx-6 lg:-mx-8 mb-20 py-32 overflow-hidden min-h-[700px]">
          {/* Imagem de fundo - ENORME expandindo MUITO além das bordas */}
          <div
            className="absolute opacity-95"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=90')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: '-200px',
              left: '-200px',
              right: '-200px',
              bottom: '-200px',
              width: 'calc(100% + 400px)',
              height: 'calc(100% + 400px)',
            }}
          />

          {/* Gradiente MUITO FORTE no topo - MAIOR */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/90 to-transparent z-10" />

          {/* Gradiente MUITO FORTE no fundo - MAIOR */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />

          {/* Gradiente nas laterais */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-10" />

          {/* Content com fundo para legibilidade */}
          <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8 z-20">
            {/* Container com fundo semi-transparente para melhor legibilidade */}
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gold/20 rounded-full border border-gold/40">
                <Eye className="w-5 h-5 text-gold" />
                <span className="text-gold text-sm font-bold tracking-widest uppercase">
                  Nossa Visão
                </span>
              </div>

              {/* Título */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ser a força invisível por trás dos{" "}
                <span className="text-gold">novos líderes de mercado</span>
              </h2>

              {/* Descrição */}
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto font-medium">
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

          {/* Values Grid - Design ULTRA DINÂMICO Azul e Dourado */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Glow dourado externo no hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700" />

                {/* Card com gradiente azul → dourado */}
                <div className="relative h-full bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-8 border-2 border-gold/20 group-hover:border-gold/60 transition-all duration-500 overflow-hidden shadow-2xl">

                  {/* Pattern de fundo com V's entrelaçados */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`v-pattern-card-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M12.5 0 L18.75 12.5 L25 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
                          <path d="M0 0 L6.25 12.5 L12.5 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.7"/>
                          <path d="M12.5 25 L18.75 37.5 L25 25" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
                          <path d="M0 25 L6.25 37.5 L12.5 25" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.7"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#v-pattern-card-${index})`}/>
                    </svg>
                  </div>

                  {/* Shimmer effect diagonal */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />

                  {/* Floating particles dourados */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />

                  {/* Icon Container - Dinâmico */}
                  <div className="relative mb-6 flex items-start gap-4">
                    {/* Icon background com múltiplas camadas */}
                    <div className="relative flex-shrink-0">
                      {/* Anel externo rotativo */}
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-gold/30 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700" />

                      {/* Anel médio pulsante */}
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gold/10 group-hover:scale-110 transition-all duration-500" />

                      {/* Icon container */}
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold via-gold-light to-gold flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <value.icon className="w-8 h-8 text-navy group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                      </div>

                      {/* Orbiting particle */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping" />
                    </div>

                    {/* Número do card */}
                    <div className="ml-auto">
                      <span className="text-6xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Subtítulo dourado */}
                    <p className="text-xs text-gold font-bold mb-2 uppercase tracking-widest">
                      {value.subtitle}
                    </p>

                    {/* Título com underline animado */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                        {value.title}
                      </h3>
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold via-gold-light to-transparent transition-all duration-700 rounded-full" />
                    </div>

                    {/* Descrição */}
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom accent line animado */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  {/* Corner accent superior direito */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
