import AboutSection from '@/components/AboutSection';

export const metadata = {
  title: 'Sobre Nós - Vértice Marketing',
  description: 'Conheça a Vértice Marketing e nossa missão de transformar negócios através de estratégias digitais baseadas em dados.',
};

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-navy via-navy-dark to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-30" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 text-gold text-sm font-semibold tracking-widest uppercase">
              Sobre a Vértice
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transformando <span className="text-gold">negócios</span> através de{" "}
              <span className="text-gold">dados e estratégia</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Somos uma agência de marketing digital especializada em tráfego pago e estratégias baseadas em dados.
              Nossa missão é ajudar empresas a crescerem de forma sustentável e previsível.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Missão */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Impulsionar o crescimento de empresas através de estratégias digitais mensuráveis,
                transparentes e baseadas em dados concretos.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em marketing digital orientado por dados, reconhecida pela
                excelência em resultados e transparência com nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                Nossos Valores
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparência total, foco em resultados mensuráveis, inovação constante
                e compromisso com o sucesso de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos Section */}
      <AboutSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-gray-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              Diferenciais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Por que escolher a <span className="text-gold">Vértice</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Diferencial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold/30">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Resultados Mensuráveis
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todas as nossas estratégias são baseadas em métricas claras e KPIs definidos em conjunto com você.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold/30">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                CRM Proprietário
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema desenvolvido internamente para gestão completa e personalizada de leads e campanhas.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold/30">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                ROI Comprovado
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Média de +150% de retorno sobre investimento para nossos clientes ativos.
              </p>
            </div>

            {/* Diferencial 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold/30">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Suporte Contínuo
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Acompanhamento constante, otimizações frequentes e relatórios detalhados em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
        <div className="absolute inset-0 check-pattern opacity-20" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para <span className="text-gold">transformar</span> seu negócio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agende uma conversa gratuita e descubra como podemos ajudar sua empresa a crescer.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 hover:scale-105"
            >
              Fale com a gente
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
