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
              Marketing Digital Baseado em{" "}
              <span className="text-gold">Usabilidade</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Na <strong className="text-foreground">Vértice Marketing</strong>, aplicamos as <strong className="text-gold">Heurísticas de Nielsen</strong> — princípios universais de usabilidade — ao marketing digital para criar campanhas que realmente convertem.
              </p>

              <p>
                Assim como uma interface bem projetada facilita a experiência do usuário, nossas estratégias de tráfego pago são desenhadas para serem <strong className="text-foreground">claras, intuitivas e eficientes</strong>.
              </p>

              <p>
                Nosso nome reflete esse princípio: o <strong className="text-foreground">Vértice</strong> é o ponto de encontro ideal — onde a jornada do cliente se alinha perfeitamente com os seus objetivos de negócio.
              </p>

              <p>
                O símbolo de <strong className="text-gold">&ldquo;Check&rdquo;</strong> em nossa marca representa nosso compromisso com a <strong className="text-foreground">visibilidade do sistema</strong>: você sempre sabe onde seu investimento está e quais resultados está gerando.
              </p>
            </div>

            {/* Nielsen Heuristics Applied */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Princípios que Guiam Nosso Trabalho
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Visibilidade:</strong> Dashboards em tempo real e relatórios transparentes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Linguagem Clara:</strong> Sem jargões técnicos, explicações diretas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Controle e Liberdade:</strong> Você decide a direção, nós executamos com excelência
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Prevenção de Erros:</strong> Testes constantes antes de escalar investimento
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
