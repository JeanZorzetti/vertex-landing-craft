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
              Sobre Nós
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Uma Nova Forma de{" "}
              <span className="text-gold">Parceria</span>{" "}
              em Marketing
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sabemos que empreender é uma escalada desafiadora. Por isso, a{" "}
                <strong className="text-foreground">Vértice Marketing</strong> foi criada para caminhar junto com você desde o primeiro passo.
              </p>
              
              <p>
                Acreditamos que a tecnologia e o tráfego pago são ferramentas poderosas, mas só funcionam com acompanhamento próximo e dedicação genuína.
              </p>
              
              <p>
                Nosso nome reflete nossa filosofia: o <strong className="text-foreground">Vértice</strong> é o ponto onde duas retas se encontram — o momento onde a sua ambição se une à nossa estratégia técnica.
              </p>
              
              <p>
                O símbolo de <strong className="text-gold">&ldquo;Check&rdquo;</strong> em nossa marca representa nosso compromisso: verificar seus dados e cuidar do seu faturamento todos os dias.
              </p>
            </div>

            {/* Value Promise - replaces fake stats */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Nosso Compromisso com Você
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">Relatórios claros e acessíveis sobre cada centavo investido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">Reuniões regulares para alinhar expectativas e resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">Suporte próximo e respostas rápidas às suas dúvidas</span>
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
