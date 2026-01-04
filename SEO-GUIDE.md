# Guia de SEO - Vértice Marketing

## ✅ O que foi implementado

### 1. **Sitemap XML Dinâmico** (`/app/sitemap.ts`)
- Sitemap automático para todas as páginas principais
- Atualizado automaticamente pelo Next.js
- Acessível em: `https://seudominio.com.br/sitemap.xml`

### 2. **Robots.txt** (`/app/robots.ts`)
- Configurado para permitir indexação de todas as páginas públicas
- Bloqueia área administrativa (`/admin/`)
- Referencia o sitemap automaticamente

### 3. **Structured Data (Schema.org)** (`/components/StructuredData.tsx`)
Implementados 3 schemas JSON-LD:
- **Organization Schema**: Informações da empresa
- **Professional Service Schema**: Serviços oferecidos
- **Local Business Schema**: Localização e horários

Benefícios:
- Rich snippets no Google (estrelas, localização, horários)
- Melhor aparência nos resultados de busca
- Maior taxa de clique (CTR)

### 4. **Meta Tags Otimizadas**
Todas as páginas possuem:
- Títulos únicos e descritivos
- Meta descriptions otimizadas (150-160 caracteres)
- Keywords relevantes
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs

### 5. **Otimizações Técnicas**
- `lang="pt-BR"` no HTML
- Meta viewport configurado
- Fontes com `display: swap` para performance
- Imagens otimizadas com Next.js Image

## 🔧 Próximos Passos Importantes

### 1. **Google Search Console**
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade do seu site
3. Verifique a propriedade
4. Copie o código de verificação
5. Cole em `app/layout.tsx` na linha 94: `google: "SEU-CODIGO-AQUI"`
6. Envie o sitemap: `https://seudominio.com.br/sitemap.xml`

### 2. **Google Analytics 4**
```tsx
// Adicionar em app/layout.tsx antes do </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. **Google Business Profile**
- Crie/reivindique seu perfil: https://business.google.com
- Adicione:
  - Endereço: Rua Cequeira Cesar nº 60, Zona Sul, São Paulo - SP
  - Telefone: (62) 99326-5713
  - Horário: Seg-Sex 9h-18h
  - Fotos da empresa
  - Logo
  - Descrição dos serviços

### 4. **Atualizar URLs**
Procure por `verticemarketing.com.br` nos arquivos:
- `app/sitemap.ts` (linha 3)
- `app/robots.ts` (linha 4)
- `app/layout.tsx` (linha 34)
- `components/StructuredData.tsx` (múltiplas linhas)

Substitua pelo seu domínio real quando estiver em produção.

### 5. **Criar Conteúdo de Blog**
- Publique artigos regularmente sobre marketing digital
- Foque em long-tail keywords
- Exemplos de títulos:
  - "Como Configurar Google Ads para Pequenas Empresas em 2024"
  - "5 Estratégias de Tráfego Pago que Funcionam no Brasil"
  - "CRM de Marketing: O que é e Como Usar"

### 6. **Otimização de Imagens**
- Use formato WebP para melhor compressão
- Adicione alt text descritivo em todas as imagens
- Mantenha tamanhos otimizados (máx 200KB por imagem)

### 7. **Link Building**
- Consiga backlinks de sites relevantes
- Cadastre em diretórios de empresas
- Parcerias com outras empresas
- Guest posts em blogs do nicho

### 8. **Performance**
- Use ferramentas:
  - PageSpeed Insights: https://pagespeed.web.dev
  - GTmetrix: https://gtmetrix.com
- Meta: 90+ no mobile e desktop
- Core Web Vitals otimizados

## 📊 Monitoramento

### KPIs Importantes:
1. **Posição no Google** (palavras-chave principais)
2. **Tráfego Orgânico** (Google Analytics)
3. **Taxa de Conversão**
4. **Taxa de Rejeição** (ideal < 50%)
5. **Tempo na Página**
6. **Páginas por Sessão**

### Ferramentas Gratuitas:
- Google Search Console (essencial)
- Google Analytics 4 (essencial)
- Google Business Profile
- Ubersuggest (pesquisa de keywords)
- AnswerThePublic (ideias de conteúdo)

## 🎯 Palavras-chave Principais

### Foco Atual:
- agência de marketing digital são paulo
- gestão de tráfego pago
- consultoria de performance digital
- crm marketing
- consultoria seo sp
- criação de sites sp

### Long-tail (menos competitivas):
- melhor agência de marketing digital zona sul sp
- como fazer gestão de tráfego pago
- crm proprietário para marketing
- consultoria de performance digital são paulo

## 📱 Local SEO

Já implementado:
- ✅ Endereço completo no site
- ✅ Telefone local
- ✅ Horário de funcionamento
- ✅ Schema de Local Business
- ✅ Mapa de localização (pode adicionar Google Maps embed)

Próximos passos:
- [ ] Google Business Profile
- [ ] Avaliações de clientes
- [ ] Fotos do escritório
- [ ] Posts regulares no Google Business

## 🔍 Checklist Mensal

- [ ] Verificar posições no Search Console
- [ ] Analisar páginas com mais impressões
- [ ] Identificar páginas com CTR baixo
- [ ] Publicar 2-4 artigos de blog
- [ ] Atualizar conteúdo antigo
- [ ] Verificar links quebrados
- [ ] Monitorar velocidade do site
- [ ] Responder avaliações no Google Business
- [ ] Verificar Core Web Vitals

## 🚀 Dicas Pro

1. **Títulos**: Use números e poder words
   - ❌ "Marketing Digital"
   - ✅ "7 Estratégias de Marketing Digital que Dobraram Vendas em 2024"

2. **URLs**: Curtas e descritivas
   - ❌ `/blog/post-123-marketing-digital-trafego-pago-crm`
   - ✅ `/blog/estrategias-trafego-pago-2024`

3. **Internal Linking**: Linke páginas relacionadas
   - De "Blog" para "Serviços"
   - De "Serviços" para "Contato"
   - De artigos para serviços relevantes

4. **Mobile First**: 70%+ do tráfego vem de mobile
   - Sempre teste no celular
   - Botões grandes e clicáveis
   - Texto legível sem zoom

## 📞 Suporte

Para dúvidas sobre SEO:
- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog

---

**Última atualização**: Janeiro 2026
**Responsável**: Claude Code - Implementação Inicial
