const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background v-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-lg -z-10 transform translate-x-4 translate-y-4" />

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard com métricas e análise de dados de marketing"
                className="w-full rounded-lg shadow-elevated object-cover aspect-[4/3]"
              />
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
                Trabalhamos com empresas que buscam crescimento sustentável e previsível. Nosso time combina expertise em tráfego pago, automação de vendas e tecnologia de ponta para criar um sistema completo de aquisição de clientes que funciona 24/7.
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
                      Criamos e executamos campanhas de tráfego pago otimizadas, configuramos sistemas de CRM e automações para nutrir leads até a conversão em vendas.
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
