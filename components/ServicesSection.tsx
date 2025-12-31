import { Target, Database, TrendingUp, Monitor, Search, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego",
    description:
      "Monitoramos o comportamento do seu público diariamente para garantir que estamos atraindo compradores, não apenas curiosos.",
  },
  {
    icon: Database,
    title: "CRM & Tecnologia Própria",
    description:
      "Implementamos nosso CRM exclusivo para organizar sua casa e garantir que nenhum lead fique sem resposta.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria de Performance",
    description:
      "Analisamos os resultados junto com você para corrigir rotas e definir os próximos passos do crescimento.",
  },
  {
    icon: Monitor,
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites modernos e responsivos que transmitem profissionalismo e convertem visitantes em clientes.",
  },
  {
    icon: Search,
    title: "Consultoria de SEO",
    description:
      "Otimizamos seu site para aparecer nas primeiras posições do Google e atrair tráfego orgânico qualificado.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Criamos e gerenciamos lojas virtuais completas, focadas em experiência do usuário e alta conversão.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary geometric-pattern-gold">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Ecossistema <span className="text-gold">Vértice</span>
          </h2>
          <p className="text-muted-foreground">
            Soluções integradas que trabalham juntas para acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-background rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
