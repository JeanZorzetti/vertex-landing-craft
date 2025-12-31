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
              Metodologia Proprietária
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Aplicamos Ciência da Usabilidade ao{" "}
              <span className="text-gold">Tráfego Pago</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Vértice Marketing</strong> utiliza as <strong className="text-gold">10 Heurísticas de Nielsen</strong> — fundamentos científicos de UX Design validados globalmente — como base metodológica para estruturar campanhas de alta performance.
              </p>

              <p>
                Enquanto a maioria das agências foca apenas em métricas, nós projetamos jornadas de conversão com a mesma precisão técnica aplicada em interfaces de produtos digitais de sucesso. Resultado: <strong className="text-foreground">campanhas intuitivas que convertem naturalmente</strong>.
              </p>

              <p>
                O conceito de <strong className="text-foreground">Vértice</strong> — ponto de convergência matemático — define nossa abordagem: identificamos o ponto exato onde sua estratégia comercial encontra o comportamento real do seu cliente.
              </p>

              <p>
                Nosso símbolo <strong className="text-gold">&ldquo;Check&rdquo;</strong> não é decorativo. Representa o princípio fundamental da <strong className="text-foreground">Visibility of System Status</strong> (Heurística #1): todo investimento é rastreado, validado e reportado em tempo real.
              </p>
            </div>

            {/* Nielsen Heuristics Applied */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Pilares da Nossa Metodologia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Visibility of System Status:</strong> Monitoramento em tempo real com dashboards executivos personalizados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Match Between System and Real World:</strong> Comunicação sem jargões — traduzimos dados em decisões de negócio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">User Control and Freedom:</strong> Autonomia total — você mantém controle estratégico, nós entregamos execução técnica
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Error Prevention:</strong> Validação sistemática via testes A/B antes de escalar orçamento
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
