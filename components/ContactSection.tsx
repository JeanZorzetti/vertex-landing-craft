import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "verticecomp@gmail.com",
    href: "mailto:verticecomp@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(62) 99326-5713",
    href: "tel:+556299326571 3",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 9h às 18h",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background check-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Conversar sobre o seu <span className="text-gold">Crescimento</span>
          </h2>
          <p className="text-muted-foreground">
            Agende uma conversa gratuita de 30 minutos. Sem compromisso, sem pressão.
            Apenas uma análise honesta do que podemos fazer pelo seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="order-2 lg:order-1">
            {/* Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-6 bg-secondary rounded-xl border border-border/50 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-gold transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA adicional */}
            <div className="p-8 bg-gradient-to-br from-primary to-navy-dark rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Prefere uma call rápida?
              </h3>
              <p className="text-primary-foreground/70 mb-4 leading-relaxed">
                Agende diretamente um horário na nossa agenda e vamos
                entender como podemos ajudar o seu negócio a crescer.
              </p>
              <a
                href="#"
                className="inline-block text-gold font-semibold hover:underline"
              >
                Ver agenda disponível →
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-background rounded-xl border border-border/50 p-8 shadow-soft">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Envie sua mensagem
                </h3>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
