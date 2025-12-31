# 🗺️ Roadmap de Melhorias - Vértice Marketing

## 📋 Visão Geral
Este roadmap documenta todas as melhorias identificadas na análise heurística de Nielsen e solicitações específicas do cliente para transformar a landing page em um site institucional completo e funcional.

---

## 🔴 FASE 1: CORREÇÕES CRÍTICAS (Prioridade Máxima)

### ✅ 1.1 Correções de UI/UX Imediatas
- [ ] **Adicionar contraste/render na primeira seção do site (HeroSection)**
  - Melhorar overlay de gradiente sobre imagem de fundo
  - Garantir legibilidade do texto em todos os tamanhos de tela
  - Aumentar contraste para acessibilidade (WCAG AAA)

- [ ] **Remover badge "Agência de Marketing Boutique"**
  - Arquivo: `components/HeroSection.tsx` (linhas 18-25)
  - Manter título principal e CTA sem o badge

- [ ] **Atualizar logo no Footer**
  - Arquivo: `components/Footer.tsx`
  - Substituir SVG manual pela logo oficial do manual da marca
  - Usar imagem `/logos/logo-white.png` ou `/logos/logo-main.png`

### ✅ 1.2 Implementação de Formulário de Contato
- [ ] **Criar componente ContactForm**
  - Campos: Nome, Email, Telefone, Empresa, Mensagem
  - Validação client-side com React Hook Form + Zod
  - Estados de loading, sucesso e erro
  - Integração com API (Resend, Nodemailer ou serviço externo)

- [ ] **Criar seção ContactSection**
  - Formulário responsivo e acessível
  - Design alinhado com identidade da marca
  - Animações suaves de transição

- [ ] **Substituir botão WhatsApp no Footer por formulário**
  - Remover link direto do WhatsApp
  - Redirecionar para seção de contato (#contato)
  - Manter design gold-shimmer

- [ ] **Corrigir botão "Contato" no Header**
  - Adicionar função de scroll suave para #contato
  - Implementar destaque visual ao clicar
  - Feedback de navegação ativa

- [ ] **Atualizar CTA principal no HeroSection**
  - "Agendar Conversa Gratuita" → redireciona para #contato
  - Scroll suave com offset para header fixo

### ✅ 1.3 Migração: Landing Page → Site Institucional
- [ ] **Estrutura de páginas** (preparação para multi-page)
  - Manter estrutura atual como homepage
  - Preparar arquitetura para futuras páginas:
    - `/sobre` - Quem somos
    - `/servicos` - Detalhamento de serviços
    - `/cases` - Portfólio e resultados
    - `/blog` - Conteúdo educativo
    - `/contato` - Página dedicada de contato

- [ ] **Atualizar metadados**
  - Título: "Landing Page" → "Site Institucional"
  - Descrição otimizada para SEO
  - Schema.org markup (Organization, LocalBusiness)

---

## 🟠 FASE 2: MELHORIAS DE CONVERSÃO (Alta Prioridade)

### ✅ 2.1 Feedback Visual e Estados
- [ ] **Implementar indicadores de navegação ativa**
  - Destacar seção atual no menu Header
  - Scroll spy com Intersection Observer
  - Underline ou background nos links ativos

- [ ] **Loading states em todos os CTAs**
  - Spinner durante submissão de formulário
  - Desabilitar botão durante processamento
  - Mensagens de confirmação após envio

- [ ] **Scroll Progress Bar**
  - Barra de progresso fixa no topo
  - Indicação visual de % da página visualizada
  - Cor gold (#B48C4A)

- [ ] **Botão "Voltar ao Topo" (Back to Top)**
  - Aparece após scroll de 500px
  - Animação suave de fade-in
  - Ícone de seta para cima

### ✅ 2.2 Prova Social e Credibilidade
- [ ] **Criar seção "Resultados"**
  - Cards com números-chave:
    - % de aumento médio em conversões
    - ROI médio dos clientes
    - Número de projetos entregues
    - Anos de experiência
  - Animação de counter ao scroll
  - Design com ícones e destaque visual

- [ ] **Criar seção "Depoimentos"**
  - Mínimo 3 depoimentos reais
  - Foto do cliente, nome, empresa
  - Texto curto (2-3 linhas)
  - Carousel/slider responsivo
  - Star rating visual

- [ ] **Criar seção "Cases de Sucesso"**
  - Formato: Antes/Depois
  - Métricas específicas (%, valores, tempo)
  - Logo do cliente (se autorizado)
  - Link para case completo

### ✅ 2.3 Processo e Transparência
- [ ] **Criar seção "Como Funciona"**
  - Processo em 4-5 etapas visuais
  - Timeline ou step-by-step
  - Ícones ilustrativos
  - Descrição clara de cada fase:
    1. Diagnóstico inicial (call gratuita)
    2. Planejamento estratégico
    3. Implementação
    4. Monitoramento e otimização
    5. Relatórios mensais

- [ ] **FAQ Section**
  - Mínimo 8 perguntas frequentes:
    - Quanto custa?
    - Qual o prazo mínimo de contrato?
    - Como funciona o CRM próprio?
    - Vocês trabalham com qual tipo de negócio?
    - Como são os relatórios?
    - Qual o investimento mínimo em tráfego?
    - Quanto tempo para ver resultados?
    - Como é o suporte?
  - Accordion expansível
  - Design clean e escanável

---

## 🟡 FASE 3: OTIMIZAÇÃO E CONTEÚDO (Média Prioridade)

### ✅ 3.1 Melhorias de Conteúdo
- [ ] **Otimizar AboutSection**
  - Quebrar 3 parágrafos longos em cards visuais
  - Adicionar números/estatísticas
  - Transformar em infográfico ou timeline
  - Manter filosofia oficial da marca

- [ ] **Tooltips explicativos**
  - "CRM & Tecnologia Própria" → tooltip explicando o que é
  - "Ecossistema Vértice" → contexto visual
  - Termos técnicos → micro-copy educativo

- [ ] **Unificar terminologia de CTAs**
  - Padronizar: "Falar com Especialista" ou "Agendar Diagnóstico Gratuito"
  - Remover redundâncias entre Header e Hero

- [ ] **Remover duplicação "Nossa Filosofia"**
  - AboutSection: Foco na história e propósito
  - DifferentialsSection: Renomear para "Nossos Diferenciais" (sem "Filosofia")

### ✅ 3.2 Elementos Visuais
- [ ] **Hospedar imagens localmente**
  - Substituir links Unsplash por imagens próprias
  - Otimizar com next/image
  - Adicionar placeholders blur
  - Fallbacks para erros de carregamento

- [ ] **Adicionar seção "Equipe"**
  - Fotos profissionais do time
  - Nome, cargo, mini-bio
  - Links para LinkedIn
  - Humanizar a marca

- [ ] **Adicionar ícones animados**
  - Micro-interações nos cards de serviço
  - Hover effects mais sofisticados
  - Animações de entrada (fade-in-up)

### ✅ 3.3 SEO e Performance
- [ ] **Otimização de imagens**
  - Formato WebP com fallback
  - Lazy loading
  - Responsive images (srcset)
  - Alt tags descritivos

- [ ] **Structured Data (Schema.org)**
  - Organization markup
  - LocalBusiness markup
  - Service markup
  - BreadcrumbList

- [ ] **Meta tags completos**
  - Open Graph otimizado
  - Twitter Cards
  - Canonical URLs
  - Hreflang (se multi-idioma futuro)

---

## 🟢 FASE 4: FUNCIONALIDADES AVANÇADAS (Baixa Prioridade)

### ✅ 4.1 Interatividade
- [ ] **Sticky CTA Button**
  - Botão flutuante sempre visível
  - "Falar com Especialista" ou ícone WhatsApp
  - Aparece após scroll do Hero
  - Posição: bottom-right, fixo

- [ ] **Chatbot ou Live Chat**
  - Widget de WhatsApp Business
  - Ou Tawk.to / Tidio
  - Horário de atendimento visível
  - Mensagem pré-preenchida

- [ ] **Calendly Integration**
  - Agendamento direto de call
  - Embedded calendar
  - Sincronização automática
  - Confirmação por email

### ✅ 4.2 Conteúdo Educativo
- [ ] **Blog/Insights Section**
  - Estrutura de posts
  - Categorias: Tráfego Pago, CRM, SEO, Cases
  - Sistema de tags
  - Share buttons
  - Comentários (Disqus ou nativo)

- [ ] **Newsletter Signup**
  - Lead magnet (ebook, checklist, diagnóstico)
  - Integração com email marketing (Mailchimp, Brevo)
  - Double opt-in
  - LGPD compliance

- [ ] **Recursos Gratuitos**
  - Calculadora de ROI
  - Checklist de tráfego pago
  - Templates de anúncios
  - Materiais ricos para download

### ✅ 4.3 Analytics e Tracking
- [ ] **Google Analytics 4**
  - Configuração completa
  - Event tracking (CTAs, formulários, scroll)
  - Conversions setup
  - Dashboard customizado

- [ ] **Hotjar ou Microsoft Clarity**
  - Heatmaps
  - Session recordings
  - Feedback polls
  - Identificar pontos de fricção

- [ ] **Facebook Pixel**
  - Tracking de conversões
  - Remarketing audiences
  - Event tracking
  - CAPI (Conversion API)

---

## 🔵 FASE 5: EXPANSÃO E ESCALABILIDADE (Futuro)

### ✅ 5.1 Multi-página
- [ ] **Página "Sobre Nós"**
  - História da empresa
  - Missão, visão, valores
  - Timeline de crescimento
  - Equipe completa

- [ ] **Página "Serviços" detalhada**
  - Página individual por serviço
  - Processo específico
  - Preços/pacotes (se aplicável)
  - CTAs direcionados

- [ ] **Página "Portfólio/Cases"**
  - Grid de cases
  - Filtros por indústria
  - Case study completo (PDF download)
  - Métricas e resultados

- [ ] **Página "Blog"**
  - Listagem de artigos
  - Busca e filtros
  - Categorias sidebar
  - Artigos relacionados

### ✅ 5.2 Recursos Técnicos
- [ ] **Área do Cliente (Portal)**
  - Login seguro
  - Dashboards de resultados
  - Relatórios downloadáveis
  - Chat direto com gestor

- [ ] **Sistema de orçamento online**
  - Formulário multi-step
  - Seleção de serviços
  - Cálculo automático
  - Proposta em PDF

- [ ] **Integração com CRM próprio**
  - Captura automática de leads
  - Webhook para formulários
  - Status de pipeline
  - Automação de follow-up

### ✅ 5.3 Acessibilidade e Inclusão
- [ ] **WCAG 2.1 AAA Compliance**
  - Contraste mínimo 7:1
  - Navegação por teclado completa
  - ARIA labels em todos os elementos
  - Skip links

- [ ] **Modo escuro (Dark mode)**
  - Toggle de tema
  - Persistência de preferência
  - Cores otimizadas para dark
  - Transições suaves

- [ ] **Multi-idioma**
  - Português (pt-BR) - padrão
  - Inglês (en) - internacional
  - Espanhol (es) - LATAM
  - i18n com next-intl

---

## 📊 MÉTRICAS DE SUCESSO

### KPIs a monitorar:
- **Taxa de conversão** (formulário preenchido)
  - Meta: > 3% dos visitantes
- **Tempo médio na página**
  - Meta: > 2 minutos
- **Taxa de rejeição**
  - Meta: < 40%
- **Scroll depth**
  - Meta: > 70% chegam ao footer
- **Páginas por sessão**
  - Meta: > 2 páginas (após multi-page)

### A/B Tests planejados:
1. CTA copy: "Agendar Conversa" vs "Falar com Especialista"
2. Posição do formulário: Seção própria vs Modal
3. Hero com vídeo vs Imagem estática
4. Número de campos no formulário: 3 vs 5 campos

---

## 🛠️ STACK TÉCNICO

### Atual:
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilo**: TailwindCSS + shadcn/ui
- **Ícones**: Lucide React
- **Fontes**: Gotham (local)

### Novas dependências necessárias:
```json
{
  "react-hook-form": "^7.x",
  "zod": "^3.x",
  "@hookform/resolvers": "^3.x",
  "resend": "^3.x" (ou nodemailer),
  "framer-motion": "^11.x" (animações avançadas),
  "react-intersection-observer": "^9.x",
  "swiper": "^11.x" (carousels),
  "next-sitemap": "^4.x",
  "@vercel/analytics": "^1.x",
  "@radix-ui/react-accordion": "^1.x" (FAQ)
}
```

---

## 📅 CRONOGRAMA ESTIMADO

### Sprint 1 (Semana 1-2): Correções Críticas
- ✅ Fase 1 completa
- Formulário funcional
- Logo e UI corrigidos
- Deploy em produção

### Sprint 2 (Semana 3-4): Conversão e Prova Social
- ✅ Fase 2.1 e 2.2
- Seções de Resultados, Depoimentos, Como Funciona
- Feedback visual completo

### Sprint 3 (Semana 5-6): Conteúdo e SEO
- ✅ Fase 2.3 e 3.1
- FAQ, otimização de conteúdo
- SEO técnico

### Sprint 4 (Semana 7-8): Funcionalidades Avançadas
- ✅ Fase 3.2, 3.3 e 4.1
- Sticky CTA, Analytics, Hospedagem de imagens

### Sprint 5+ (Mês 3+): Expansão
- ✅ Fase 4 e 5 conforme demanda
- Multi-página, blog, portal do cliente

---

## 🚀 PRÓXIMOS PASSOS IMEDIATOS

### Para começar AGORA:
1. ✅ Melhorar contraste no HeroSection
2. ✅ Remover badge "Agência de Marketing Boutique"
3. ✅ Atualizar logo do Footer
4. ✅ Criar componente ContactForm completo
5. ✅ Implementar scroll suave nos CTAs do Header
6. ✅ Commit e push de todas as alterações

### Decisões pendentes do cliente:
- [ ] Definir campos obrigatórios do formulário
- [ ] Escolher serviço de email (Resend, Gmail SMTP, outro?)
- [ ] Fornecer depoimentos e cases reais
- [ ] Fornecer fotos da equipe (se aplicável)
- [ ] Definir se quer modal ou seção de contato
- [ ] Aprovar copy dos CTAs

---

## 📝 OBSERVAÇÕES FINAIS

- **Prioridade**: Funcionalidade > Estética (formulário deve funcionar antes de detalhes visuais)
- **Mobile-first**: Todas as melhorias devem ser testadas mobile primeiro
- **Performance**: Manter Lighthouse score > 90 em todas as categorias
- **Acessibilidade**: WCAG 2.1 AA no mínimo (AAA onde possível)
- **SEO**: Garantir indexação correta e meta tags completos
- **LGPD**: Adicionar aviso de cookies e política de privacidade antes de coletar dados

---

**Última atualização**: 31/12/2025
**Versão**: 1.0
**Status**: 🔴 Fase 1 em andamento
