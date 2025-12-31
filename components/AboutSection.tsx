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
                alt="Profissional analisando gráfico de crescimento no computador"
                className="w-full rounded-lg shadow-elevated object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              Nossa Filosofia
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              O Ponto de Encontro entre a sua{" "}
              <span className="text-gold">Visão</span> e a nossa{" "}
              <span className="text-gold">Tecnologia</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Na geometria, um vértice é o ponto exato onde duas linhas se encontram para formar algo maior. Na nossa filosofia, a <strong className="text-foreground">Vértice Marketing</strong> representa exatamente esse momento de conexão: o encontro entre a sua ambição de negócio e a nossa inteligência estratégica.
              </p>

              <p>
                Acreditamos que o marketing digital de alto padrão não deve ser baseado em suposições, mas em <strong className="text-foreground">fatos</strong>. Por isso, nossa cultura é guiada pelo símbolo do <strong className="text-gold">&ldquo;Check&rdquo;</strong> presente em nossa marca: a busca incessante pelo resultado verificado, pela estratégia autêntica e pela segurança de que cada centavo investido está sendo monitorado.
              </p>

              <p>
                Não somos apenas uma agência de execução; somos <strong className="text-foreground">parceiros de jornada</strong>. Unimos a sobriedade dos dados com a elegância de um atendimento próximo, garantindo que sua empresa cresça com solidez, previsibilidade e tecnologia de ponta.
              </p>
            </div>

            {/* 3 Pilares */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Os 3 Pilares da Nossa Filosofia
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Verificação Constante (O Check)</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Assim como nosso símbolo sugere aprovação e autenticidade, validamos cada etapa do processo. Do tráfego pago ao CRM, nada é feito no &ldquo;escuro&rdquo;. Trabalhamos com dados checados para garantir sua segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Equilíbrio e Sobriedade</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fugimos de promessas milagrosas e do marketing agressivo que mancha reputações. Nossa abordagem traz o equilíbrio e o profissionalismo que marcas de alto valor — como clínicas e escritórios — exigem para se posicionar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Tecnologia Humanizada</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Usamos tecnologia proprietária e automação para potencializar vendas, mas nunca para substituir o relacionamento. Aqui, a inovação serve para aproximar o seu negócio do cliente certo.
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
