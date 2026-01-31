"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { useBehavioralTracking } from "@/hooks/use-behavioral-tracking";
import { trackConversion } from "@/lib/analytics";
import { submitLead } from "@/lib/actions/submit-lead";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("Email inválido")
    .min(1, "Email é obrigatório"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^[\d\s\-\(\)\+]+$/, "Formato de telefone inválido"),
  company: z
    .string()
    .min(2, "Nome da empresa muito curto")
    .max(100, "Nome da empresa muito longo")
    .optional()
    .or(z.literal("")),
  annualRevenue: z
    .string()
    .min(1, "Selecione uma opção")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  // Behavioral Tracking (Invisible Sales)
  const {
    onFormStart,
    onFormFieldFocus,
    onFormFieldBlur,
    onFormSubmit,
    onFormError,
    getCRMData,
  } = useBehavioralTracking();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      annualRevenue: "",
      message: "",
    },
  });

  // Rastrear início do preenchimento do formulário
  useEffect(() => {
    const subscription = form.watch(() => {
      if (!formStarted) {
        setFormStarted(true);
        onFormStart('contact-form');
      }
    });
    return () => subscription.unsubscribe();
  }, [form, formStarted, onFormStart]);

  // Handler para focus em campos
  const handleFieldFocus = (fieldName: string) => {
    onFormFieldFocus('contact-form', fieldName);
  };

  // Handler para blur em campos
  const handleFieldBlur = (fieldName: string) => {
    onFormFieldBlur('contact-form', fieldName);
  };

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      // Rastrear envio do formulário
      onFormSubmit('contact-form');

      // Obter dados comportamentais do Invisible Sales
      const behavioralData = getCRMData();

      // Usar Server Action para enviar ao Sirius CRM (mais seguro que API route)
      const result = await submitLead(
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "",
          annualRevenue: data.annualRevenue || "",
          message: data.message,
        },
        behavioralData || undefined
      );

      // Rastrear conversão
      trackConversion('lead_form_submission', undefined, {
        hasEmail: true,
        hasPhone: !!data.phone,
        hasCompany: !!data.company,
        revenue: data.annualRevenue,
      });

      // Salvar no localStorage como backup para o admin visualizar
      const contactSubmission = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || "",
        revenue: data.annualRevenue || "",
        message: data.message,
        date: new Date().toISOString(),
        syncedToCRM: result.success && !result.error,
        // Adicionar dados comportamentais ao backup local
        behavioral: behavioralData,
      };

      const savedContacts = localStorage.getItem("contactSubmissions");
      const contacts = savedContacts ? JSON.parse(savedContacts) : [];
      contacts.unshift(contactSubmission);
      localStorage.setItem("contactSubmissions", JSON.stringify(contacts));

      // Mostrar resultado ao usuário
      if (result.success) {
        toast.success("Mensagem enviada com sucesso!", {
          description: result.message,
        });
        form.reset();
        setFormStarted(false);
      } else {
        toast.error("Erro ao enviar mensagem", {
          description: result.message,
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      onFormError('contact-form', 'submit', 'Erro ao enviar formulário');
      toast.error("Erro ao enviar mensagem", {
        description: "Por favor, tente novamente ou entre em contato diretamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">
                Nome completo <span className="text-gold">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  {...field}
                  className="bg-background border-border focus:border-gold focus:ring-gold"
                  disabled={isSubmitting}
                  onFocus={() => handleFieldFocus('name')}
                  onBlur={() => handleFieldBlur('name')}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        {/* Email e Telefone em grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Email <span className="text-gold">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    {...field}
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                    disabled={isSubmitting}
                    onFocus={() => handleFieldFocus('email')}
                    onBlur={() => handleFieldBlur('email')}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Telefone <span className="text-gold">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    {...field}
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                    disabled={isSubmitting}
                    onFocus={() => handleFieldFocus('phone')}
                    onBlur={() => handleFieldBlur('phone')}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>

        {/* Empresa e Faturamento Anual em grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Empresa <span className="text-muted-foreground text-sm">(opcional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nome da sua empresa"
                    {...field}
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                    disabled={isSubmitting}
                    onFocus={() => handleFieldFocus('company')}
                    onBlur={() => handleFieldBlur('company')}
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="annualRevenue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Faturamento Anual <span className="text-muted-foreground text-sm">(opcional)</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                  <FormControl>
                    <SelectTrigger className="bg-background border-border focus:border-gold focus:ring-gold">
                      <SelectValue placeholder="Selecione uma faixa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ate-100k">Até R$ 100 mil</SelectItem>
                    <SelectItem value="100k-500k">R$ 100 mil - R$ 500 mil</SelectItem>
                    <SelectItem value="500k-1m">R$ 500 mil - R$ 1 milhão</SelectItem>
                    <SelectItem value="1m-5m">R$ 1 milhão - R$ 5 milhões</SelectItem>
                    <SelectItem value="acima-5m">Acima de R$ 5 milhões</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </div>

        {/* Mensagem */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">
                Mensagem <span className="text-gold">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  className="bg-background border-border focus:border-gold focus:ring-gold min-h-[150px] resize-none"
                  {...field}
                  disabled={isSubmitting}
                  onFocus={() => handleFieldFocus('message')}
                  onBlur={() => handleFieldBlur('message')}
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />

        {/* Botão Submit */}
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full gold-shimmer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          Ao enviar este formulário, você concorda em ser contatado pela Vértice Marketing.
        </p>
      </form>
    </Form>
  );
}
