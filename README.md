# Vértice Marketing - Landing Page

Landing page da agência de marketing Vértice, construída com Next.js, React, TypeScript, TailwindCSS e shadcn/ui.

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

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start

# Lint do código
npm run lint
```

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

- Design responsivo e moderno
- Otimizado para SEO com metadados do Next.js
- Performance otimizada com Server e Client Components
- Animações suaves e transições
- Tema com cores da marca (Navy Blue e Gold)
- Componentes reutilizáveis e acessíveis

## Migração do Vite para Next.js

Este projeto foi migrado do Vite para Next.js 15 utilizando a App Router. As principais mudanças incluem:

- Remoção do React Router em favor do sistema de roteamento do Next.js
- Conversão de componentes para Server e Client Components
- Atualização das configurações do TypeScript e ESLint
- Otimização de imagens e assets
- Configuração do PostCSS para CommonJS

## Licença

Este projeto é proprietário da Vértice Marketing.
