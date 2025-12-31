const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background v-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - cobrindo metade horizontal */}
          <div className="order-2 lg:order-1">
            <div className="relative h-full min-h-[500px]">
              {/* Imagem cobrindo metade da tela */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Equipe analisando estratégias de marketing digital"
                  className="w-full h-full object-cover"
                />
                {/* Overlay sutil para melhor contraste */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/20 to-transparent" />
              </div>

              {/* Badge decorativo flutuante */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Resultados Comprovados</p>
                    <p className="text-lg font-bold text-foreground">+150% ROI Médio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              Como Trabalhamos
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Um processo <span className="text-gold">transparente</span> que gera{" "}
              <span className="text-gold">resultados reais</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Não acreditamos em fórmulas mágicas. Cada estratégia que desenvolvemos é baseada em <strong className="text-foreground">dados concretos</strong>, <strong className="text-foreground">testes validados</strong> e <strong className="text-foreground">métricas mensuráveis</strong>. Você acompanha cada centavo investido e cada resultado alcançado.
              </p>

              <p>
                Trabalhamos com empresas que buscam crescimento sustentável e previsível. Nosso time combina expertise em <strong className="text-foreground">tráfego pago</strong>, <strong className="text-foreground">estratégia digital</strong> e <strong className="text-foreground">análise de dados</strong> para criar campanhas que geram resultados mensuráveis e escaláveis.
              </p>
            </div>

            {/* Processo em 4 etapas */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Nosso Método em 4 Etapas
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Diagnóstico Profundo</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Analisamos seu negócio, concorrência e público-alvo para identificar as melhores oportunidades de crescimento. Definimos KPIs claros e metas realistas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Implementação Estratégica</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Criamos e executamos campanhas de tráfego pago otimizadas para atrair o público certo. Desenvolvemos páginas de captura e estratégias de conversão que transformam visitantes em clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Monitoramento Constante</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Acompanhamos todos os indicadores em tempo real através de dashboards personalizados. Você tem visibilidade total sobre investimento, leads e retorno financeiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-xl">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Otimização Contínua</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Testamos, ajustamos e melhoramos constantemente. Cada dado é analisado para maximizar seu ROI e reduzir custos de aquisição de clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
