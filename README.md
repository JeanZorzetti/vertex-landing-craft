# Vértice Marketing - Site Institucional

Site institucional da agência de marketing Vértice, construído com Next.js, React, TypeScript, TailwindCSS e shadcn/ui.

## Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones
- **React Query** - Gerenciamento de estado assíncrono

## Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local e adicione seu Google Analytics ID

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start

# Lint do código
npm run lint
```

### Configuração do Google Analytics

1. Crie uma conta em https://analytics.google.com
2. Obtenha seu ID de medição (formato: `G-XXXXXXXXXX`)
3. Crie um arquivo `.env.local` na raiz do projeto
4. Adicione: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

**📖 Para guia completo, veja:** [GUIA-CONFIGURACAO-SEO.md](GUIA-CONFIGURACAO-SEO.md)

## Estrutura do Projeto

```
├── app/                  # Diretório do App Router do Next.js
│   ├── layout.tsx       # Layout principal da aplicação
│   ├── page.tsx         # Página inicial
│   ├── not-found.tsx    # Página 404
│   ├── globals.css      # Estilos globais
│   └── providers.tsx    # Providers (React Query, etc)
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   └── DifferentialsSection.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utilitários e configurações
└── public/             # Arquivos estáticos
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento na porta 3000
- `npm run build` - Cria o build otimizado para produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint para verificar o código

## Características

### Design e UX
- Design responsivo e moderno
- Animações suaves e transições
- Tema com cores da marca (Navy Blue e Gold)
- Componentes reutilizáveis e acessíveis

### SEO e Performance
- ✅ Otimizado para SEO com metadados do Next.js
- ✅ Sitemap.xml dinâmico
- ✅ Robots.txt configurado
- ✅ Structured Data (Schema.org) implementado
- ✅ Google Analytics 4 integrado
- ✅ Meta tags otimizadas (Open Graph, Twitter Cards)
- ✅ Performance otimizada com Server e Client Components

### Funcionalidades
- Sistema administrativo para gerenciar blog
- Formulário de contato com armazenamento
- Seções: Sobre, Serviços, Diferenciais, Blog, Contato
- Painel admin para visualizar contatos recebidos

## Migração do Vite para Next.js

Este projeto foi migrado do Vite para Next.js 15 utilizando a App Router. As principais mudanças incluem:

- Remoção do React Router em favor do sistema de roteamento do Next.js
- Conversão de componentes para Server e Client Components
- Atualização das configurações do TypeScript e ESLint
- Otimização de imagens e assets
- Configuração do PostCSS para CommonJS

## Licença

Este projeto é proprietário da Vértice Marketing.
