# 🚀 Guia de Configuração SEO - Vértice Marketing

Este guia vai te ajudar a configurar todas as ferramentas de SEO e análise do site passo a passo.

---

## 📊 1. Google Analytics 4 (GA4)

### Por que é importante?
- Monitorar quantas pessoas visitam seu site
- Ver de onde vem o tráfego (Google, redes sociais, direto)
- Entender quais páginas são mais visitadas
- Acompanhar conversões (formulários enviados, cliques em botões)

### Passo a passo:

#### 1.1. Criar conta no Google Analytics
1. Acesse: https://analytics.google.com
2. Clique em **"Começar a medir"**
3. Preencha:
   - Nome da conta: `Vértice Marketing`
   - Nome da propriedade: `Site Vértice Marketing`
   - Fuso horário: `(GMT-03:00) Brasília`
   - Moeda: `Real brasileiro (R$)`
4. Configure os dados de negócio:
   - Categoria: `Marketing e publicidade`
   - Tamanho da empresa: `Pequeno (1-10 funcionários)`
5. Aceite os termos de serviço

#### 1.2. Configurar coleta de dados
1. Escolha **"Web"** como plataforma
2. Configure o fluxo de dados:
   - URL do site: `https://seudominio.com.br` (seu domínio real)
   - Nome do fluxo: `Site principal`
3. Clique em **"Criar fluxo"**
4. **COPIE O ID DE MEDIÇÃO** (formato: `G-XXXXXXXXXX`)

#### 1.3. Adicionar o ID ao site
1. No seu projeto, crie um arquivo `.env.local` na raiz (mesma pasta do package.json)
2. Adicione esta linha:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
(Substitua `G-XXXXXXXXXX` pelo ID que você copiou)

3. Salve o arquivo
4. Reinicie o servidor de desenvolvimento (`npm run dev`)

✅ **Pronto!** O Google Analytics já está funcionando.

#### 1.4. Configurar eventos importantes (opcional mas recomendado)
No Google Analytics, configure eventos para rastrear:
- Envio de formulário de contato
- Cliques no botão "Saiba mais"
- Visualizações de páginas de serviços
- Tempo gasto em cada página

---

## 🔍 2. Google Search Console

### Por que é importante?
- Ver quais palavras-chave trazem visitantes do Google
- Identificar problemas de indexação
- Enviar o sitemap para o Google encontrar suas páginas
- Monitorar desempenho nas buscas

### Passo a passo:

#### 2.1. Adicionar propriedade
1. Acesse: https://search.google.com/search-console
2. Clique em **"Adicionar propriedade"**
3. Escolha **"Prefixo do URL"**
4. Digite: `https://seudominio.com.br` (seu domínio completo)
5. Clique em **"Continuar"**

#### 2.2. Verificar propriedade
Escolha o método **"Tag HTML"**:

1. O Google vai mostrar um código como este:
```html
<meta name="google-site-verification" content="ABC123XYZ..." />
```

2. Copie apenas a parte `ABC123XYZ...` (entre aspas do content)

3. Abra o arquivo `app/layout.tsx` no seu projeto

4. Na linha 93, substitua `"seu-codigo-google-search-console"` pelo código que você copiou:
```typescript
verification: {
  google: "ABC123XYZ...", // Cole seu código aqui
},
```

5. Salve o arquivo

6. Faça o deploy do site (publique as alterações)

7. Volte ao Search Console e clique em **"Verificar"**

✅ **Verificado!** Aguarde 24-48h para os dados começarem a aparecer.

#### 2.3. Enviar sitemap
1. No Search Console, vá em **"Sitemaps"** no menu lateral
2. Digite: `sitemap.xml`
3. Clique em **"Enviar"**

O Google vai começar a indexar suas páginas automaticamente.

---

## 📍 3. Google Business Profile (Google Meu Negócio)

### Por que é importante?
- Aparecer no Google Maps
- Aparecer nos resultados de busca local ("agência marketing perto de mim")
- Receber avaliações de clientes
- Mostrar fotos, horários e informações de contato

### Passo a passo:

#### 3.1. Criar/Reivindicar perfil
1. Acesse: https://business.google.com
2. Clique em **"Gerenciar agora"**
3. Pesquise: `Vértice Marketing`
   - Se já existir, clique em **"Reivindicar esta empresa"**
   - Se não existir, clique em **"Adicionar sua empresa ao Google"**

#### 3.2. Preencher informações
Complete TODOS os campos:

**Informações básicas:**
- Nome: `Vértice Marketing`
- Categoria: `Agência de marketing` (principal)
- Categorias adicionais: `Consultoria de marketing`, `Serviço de publicidade`

**Localização:**
- Endereço: `Rua Cequeira Cesar, 60`
- Bairro: `Zona Sul`
- Cidade: `São Paulo`
- Estado: `SP`
- CEP: (seu CEP real)

**Contato:**
- Telefone: `(62) 99326-5713`
- Site: `https://seudominio.com.br`
- WhatsApp: `(62) 99326-5713` (se usar para negócios)

**Horário de funcionamento:**
- Segunda a Sexta: `09:00 - 18:00`
- Sábado e Domingo: `Fechado`

#### 3.3. Verificação
O Google vai pedir para verificar seu negócio:
- **Por correio**: Cartão postal enviado ao endereço (5-14 dias)
- **Por telefone**: Se disponível (imediato)
- **Por email**: Se disponível (imediato)

Escolha o método disponível e siga as instruções.

#### 3.4. Otimizar o perfil

**Adicionar fotos (mínimo 10):**
- Logo da empresa
- Foto da fachada/escritório
- Fotos da equipe
- Fotos de eventos ou projetos
- Espaço de trabalho

**Criar descrição:**
```
A Vértice Marketing é uma agência de marketing digital especializada em tráfego pago, CRM proprietário e consultoria de performance.

Oferecemos:
• Gestão de Tráfego Pago (Google Ads, Meta Ads)
• CRM & Tecnologia Própria
• Consultoria de Performance Digital
• SEO e Otimização
• Criação de Sites
• E-commerce

Localização: Zona Sul, São Paulo - SP
Atendimento: Segunda a Sexta, 9h às 18h

Transformamos negócios através de estratégias digitais baseadas em dados e resultados mensuráveis.
```

**Adicionar produtos/serviços:**
- Gestão de Tráfego Pago
- CRM & Tecnologia Própria
- Consultoria de Performance
- Consultoria de SEO
- Criação de Sites
- E-commerce

#### 3.5. Pedir avaliações
Após cada projeto bem-sucedido:
1. Envie o link do seu perfil para o cliente
2. Peça uma avaliação honesta
3. **SEMPRE responda às avaliações** (positivas e negativas)

Link para compartilhar:
`https://g.page/r/[SEU_CODIGO]/review`

---

## 📈 4. Monitoramento e Manutenção

### Checklist Semanal:

**Google Analytics:**
- [ ] Verificar número de visitantes
- [ ] Identificar páginas mais visitadas
- [ ] Ver de onde vem o tráfego
- [ ] Verificar taxa de rejeição (ideal < 60%)

**Google Search Console:**
- [ ] Ver palavras-chave que trazem tráfego
- [ ] Verificar erros de indexação
- [ ] Analisar CTR (taxa de clique)
- [ ] Identificar páginas com baixo desempenho

**Google Business Profile:**
- [ ] Responder avaliações (se houver)
- [ ] Verificar mensagens de clientes
- [ ] Postar atualizações (1-2x por semana)
- [ ] Adicionar fotos novas

### Checklist Mensal:

- [ ] Publicar 2-4 artigos de blog
- [ ] Atualizar conteúdo antigo
- [ ] Verificar links quebrados
- [ ] Testar velocidade do site (PageSpeed Insights)
- [ ] Revisar e otimizar meta descriptions
- [ ] Analisar concorrentes
- [ ] Verificar posicionamento de palavras-chave

---

## 🎯 Metas de SEO (Primeiros 6 meses)

### Mês 1-2: Fundação
- ✅ Google Analytics instalado
- ✅ Search Console configurado
- ✅ Google Business verificado
- ✅ Sitemap enviado
- 🎯 Meta: 100-200 visitantes/mês

### Mês 3-4: Crescimento
- 🎯 10+ artigos de blog publicados
- 🎯 5+ avaliações no Google Business
- 🎯 Aparecer na primeira página para 3-5 palavras-chave long-tail
- 🎯 Meta: 300-500 visitantes/mês

### Mês 5-6: Consolidação
- 🎯 20+ artigos de blog
- 🎯 15+ backlinks de qualidade
- 🎯 Aparecer na primeira página para 10+ palavras-chave
- 🎯 Meta: 500-1000 visitantes/mês

---

## 🔧 Ferramentas Úteis (Grátis)

### Pesquisa de Palavras-chave:
- **Google Keyword Planner**: https://ads.google.com/keywordplanner
- **Ubersuggest**: https://neilpatel.com/ubersuggest/
- **Answer The Public**: https://answerthepublic.com/
- **Google Trends**: https://trends.google.com.br/

### Análise de Performance:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### Análise de Concorrentes:
- **SimilarWeb**: https://www.similarweb.com/
- **Ahrefs (free)**: https://ahrefs.com/backlink-checker

### SEO On-Page:
- **Yoast SEO Checker**: https://yoast.com/page-speed/
- **SEO Minion** (extensão Chrome)

---

## 💡 Dicas Importantes

### ✅ Faça:
- Publique conteúdo regularmente (mínimo 2x/mês)
- Use palavras-chave naturalmente no texto
- Otimize imagens (compressão e alt text)
- Responda todas as avaliações
- Monitore suas métricas semanalmente
- Teste o site em dispositivos móveis

### ❌ Não faça:
- Comprar backlinks
- Copiar conteúdo de outros sites
- Usar keywords stuffing (excesso de palavras-chave)
- Ignorar avaliações negativas
- Esquecer de atualizar informações de contato
- Negligenciar a velocidade do site

---

## 📞 Suporte

**Dúvidas sobre Google Analytics?**
- Central de Ajuda: https://support.google.com/analytics

**Dúvidas sobre Search Console?**
- Central de Ajuda: https://support.google.com/webmasters

**Dúvidas sobre Google Business?**
- Central de Ajuda: https://support.google.com/business

**Aprenda mais sobre SEO:**
- Google SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog

---

## ✅ Checklist Final

Antes de considerar a configuração completa, confirme:

- [ ] Google Analytics instalado e recebendo dados
- [ ] Search Console verificado e sitemap enviado
- [ ] Google Business criado e verificado
- [ ] Todas as informações de contato estão corretas
- [ ] Pelo menos 5 fotos adicionadas ao Google Business
- [ ] Descrição completa do negócio preenchida
- [ ] Horário de funcionamento configurado
- [ ] .env.local criado com GA_ID
- [ ] Site publicado com as alterações

---

**Última atualização:** Janeiro 2026
**Criado por:** Claude Code

**Próximo passo:** Comece publicando seu primeiro artigo de blog! 🚀
