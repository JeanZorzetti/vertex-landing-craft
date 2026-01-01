const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background v-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - cobrindo metade horizontal com zoom EXTREMO */}
          <div className="order-2 lg:order-1">
            <div className="relative h-full min-h-[500px]">
              {/* Imagem cobrindo metade da tela com escala GIGANTE */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="absolute w-full h-full"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)',
                    backgroundSize: '250%',
                    backgroundPosition: '35% 45%',
                    backgroundRepeat: 'no-repeat'
                  }}
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
                Trabalhamos com empresas que buscam crescimento sustentável e previsível. Nosso time combina expertise em <strong className="text-foreground">tráfego pago</strong>, <strong className="text-foreground">estratégia digital</strong> e <strong className="text-foreground">análise de dados</strong>, utilizando um <strong className="text-foreground">CRM proprietário</strong> desenvolvido especialmente para atender as necessidades de cada cliente e garantir resultados mensuráveis e escaláveis.
              </p>
            </div>

            {/* Processo em 4 etapas - ULTRA DINÂMICO */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-8">
                Nosso Método em 4 Etapas
              </h3>

              {/* Timeline vertical com linha conectora animada */}
              <div className="relative space-y-8">
                {/* Linha vertical animada - cresce no hover de qualquer etapa */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold/20 via-gold/10 to-transparent" />

                {/* Etapa 1 - Diagnóstico Profundo */}
                <div className="group relative">
                  {/* Linha de conexão pulsante ao hover */}
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gold/0 group-hover:bg-gold/30 transition-all duration-500" />

                  <div className="flex items-start gap-5 relative">
                    {/* Badge numerado com animações avançadas */}
                    <div className="relative flex-shrink-0">
                      {/* Glow effect pulsante */}
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

                      {/* Anel externo rotativo */}
                      <div className="absolute inset-0 rounded-full border-2 border-gold/30 scale-0 group-hover:scale-125 transition-transform duration-500 ease-out" />

                      {/* Badge principal */}
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold via-gold/90 to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">1</span>
                      </div>

                      {/* Progress ring animado */}
                      <svg className="absolute inset-0 w-14 h-14 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/30" strokeDasharray="163" strokeDashoffset="0" />
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" strokeDasharray="163" strokeDashoffset="163" style={{ animation: 'drawCircle 1.5s ease-out forwards' }} />
                      </svg>
                    </div>

                    {/* Card de conteúdo expansível */}
                    <div className="flex-1 pb-2">
                      <div className="relative p-5 rounded-2xl bg-background border-2 border-border/40 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-1 cursor-pointer overflow-hidden">
                        {/* Gradiente animado de fundo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/3 group-hover:to-transparent transition-all duration-700" />

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        {/* Conteúdo */}
                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                              Diagnóstico Profundo
                            </h4>
                            {/* Ícone indicador */}
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:rotate-90 transition-all duration-300">
                              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="h-1 bg-border/30 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-gold to-gold/60 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            Analisamos seu negócio, concorrência e público-alvo para identificar as melhores oportunidades de crescimento. Definimos KPIs claros e metas realistas.
                          </p>

                          {/* Tags animadas */}
                          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in">KPIs</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-100">Metas</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-200">Análise</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Etapa 2 - Implementação Estratégica */}
                <div className="group relative">
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gold/0 group-hover:bg-gold/30 transition-all duration-500" />

                  <div className="flex items-start gap-5 relative">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                      <div className="absolute inset-0 rounded-full border-2 border-gold/30 scale-0 group-hover:scale-125 transition-transform duration-500 ease-out" />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold via-gold/90 to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">2</span>
                      </div>
                      <svg className="absolute inset-0 w-14 h-14 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/30" strokeDasharray="163" strokeDashoffset="0" />
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" strokeDasharray="163" strokeDashoffset="163" style={{ animation: 'drawCircle 1.5s ease-out forwards' }} />
                      </svg>
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="relative p-5 rounded-2xl bg-background border-2 border-border/40 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-1 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/3 group-hover:to-transparent transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                              Implementação Estratégica
                            </h4>
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:rotate-90 transition-all duration-300">
                              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                          <div className="h-1 bg-border/30 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-gold to-gold/60 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            Criamos e executamos campanhas de tráfego pago otimizadas para atrair o público certo. Desenvolvemos páginas de captura e estratégias de conversão que transformam visitantes em clientes.
                          </p>

                          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in">Tráfego Pago</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-100">Conversão</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-200">Landing Pages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Etapa 3 - Monitoramento Constante */}
                <div className="group relative">
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gold/0 group-hover:bg-gold/30 transition-all duration-500" />

                  <div className="flex items-start gap-5 relative">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                      <div className="absolute inset-0 rounded-full border-2 border-gold/30 scale-0 group-hover:scale-125 transition-transform duration-500 ease-out" />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold via-gold/90 to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">3</span>
                      </div>
                      <svg className="absolute inset-0 w-14 h-14 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/30" strokeDasharray="163" strokeDashoffset="0" />
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" strokeDasharray="163" strokeDashoffset="163" style={{ animation: 'drawCircle 1.5s ease-out forwards' }} />
                      </svg>
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="relative p-5 rounded-2xl bg-background border-2 border-border/40 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-1 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/3 group-hover:to-transparent transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                              Monitoramento Constante
                            </h4>
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:rotate-90 transition-all duration-300">
                              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                          <div className="h-1 bg-border/30 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-gold to-gold/60 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            Acompanhamos todos os indicadores em tempo real através de dashboards personalizados. Você tem visibilidade total sobre investimento, leads e retorno financeiro.
                          </p>

                          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in">Dashboards</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-100">Real-time</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-200">ROI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Etapa 4 - Otimização Contínua */}
                <div className="group relative">
                  <div className="flex items-start gap-5 relative">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                      <div className="absolute inset-0 rounded-full border-2 border-gold/30 scale-0 group-hover:scale-125 transition-transform duration-500 ease-out" />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold via-gold/90 to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">4</span>
                      </div>
                      <svg className="absolute inset-0 w-14 h-14 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold/30" strokeDasharray="163" strokeDashoffset="0" />
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" strokeDasharray="163" strokeDashoffset="163" style={{ animation: 'drawCircle 1.5s ease-out forwards' }} />
                      </svg>
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="relative p-5 rounded-2xl bg-background border-2 border-border/40 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-1 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/3 group-hover:to-transparent transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                              Otimização Contínua
                            </h4>
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:rotate-90 transition-all duration-300">
                              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>

                          <div className="h-1 bg-border/30 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-gold to-gold/60 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            Testamos, ajustamos e melhoramos constantemente. Cada dado é analisado para maximizar seu ROI e reduzir custos de aquisição de clientes.
                          </p>

                          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in">A/B Testing</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-100">Otimização</span>
                            <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full border border-gold/20 animate-fade-in animation-delay-200">Escalabilidade</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
