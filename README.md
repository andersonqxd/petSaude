# 🏥 RIDS Frontend

Interface web do **RIDS — Repositório de Iniciativas Digitais em Saúde**, construída em React a partir do protótipo validado em HTML/CSS.

A aplicação evolui o material de base para uma estrutura componentizada, preparada para crescimento por etapas, com foco em catálogo público, visualização de iniciativas, filtros, interoperabilidade e futuras funcionalidades de comunidade e curadoria.   

## ✨ Visão geral

A homepage entregue nesta etapa representa a base visual e funcional do repositório, preservando a identidade do protótipo original, incluindo hero, barra de estatísticas, navegação superior, filtros laterais e grade de cards das iniciativas.  

A proposta do RIDS prevê uma evolução em fases, começando pelo repositório fundamental com busca, filtros, página de detalhe, cadastro curado e exportação, o que orienta a organização atual do frontend. 

## 🛠️ Tecnologias

- React
- Vite
- JavaScript
- CSS
- React Router DOM

Essa base foi escolhida para facilitar desenvolvimento incremental, componentização da interface e separação entre páginas, componentes visuais e regras de negócio, em linha com os módulos descritos na proposta técnica do RIDS. 

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 3. Acesse no navegador

O Vite exibirá no terminal a URL local, normalmente algo como:

```bash
http://localhost:5173
```

### 4. Gere a versão de produção

```bash
npm run build
```

### 5. Visualize a build localmente

```bash
npm run preview
```

## 📁 Estrutura sugerida

```bash
src/
  assets/              # Ícones, imagens e arquivos estáticos
  components/          # Componentes reutilizáveis
    layout/            # Topbar, containers, seções principais
    ui/                # Botões, badges, chips, inputs, cards-base
    home/              # Componentes específicos da homepage
    catalog/           # Filtros, listagem, grid e tabela
    detail/            # Componentes da página de detalhe
    graph/             # Visualização de interoperabilidade
    forms/             # Cadastro, revisão e formulários futuros
  pages/               # Páginas da aplicação
  routes/              # Configuração de rotas
  services/            # Dados mockados, integração com API futura
  hooks/               # Hooks customizados
  styles/              # Estilos globais, tokens e temas
  App.jsx
  main.jsx
```

Essa organização acompanha a divisão funcional observada no protótipo, que já separa home, detalhe, grafo, formulário multi-step, revisão e elementos de comunidade de prática dentro da mesma base visual.  

## 🧩 Organização da interface

A homepage foi estruturada para refletir os blocos principais já definidos no protótipo:

- **Topbar** com marca, navegação e ações de usuário.  
- **Hero** com mensagem principal, busca e chips de atalho.  
- **StatsBar** com indicadores rápidos do repositório.  
- **Sidebar de filtros** com macrocategoria, interoperabilidade, âmbito, status e tipo.  
- **Área de resultados** com alternância de visualização e listagem das iniciativas.  

Essa base conversa diretamente com o MVP descrito no documento técnico, especialmente com os módulos de busca e descoberta e visualização de iniciativas. 

## 📌 Etapa atual

Nesta fase, o foco foi consolidar a homepage como fundação do projeto, preparando o terreno para as próximas entregas sem perder fidelidade ao protótipo original.  

As próximas evoluções naturais do frontend incluem a página de detalhe da iniciativa, o fluxo de cadastro e curadoria, o grafo de interoperabilidade e os recursos de comunidade previstos na documentação do RIDS. 

## 🗺️ Referência funcional

O repositório foi pensado para suportar uma evolução em três fases:

- **Fase 1:** catálogo público com busca, filtros, detalhe, cadastro curado e exportação. 
- **Fase 2:** grafo de interoperabilidade, API pública e recursos iniciais de colaboração. 
- **Fase 3:** plataforma de conhecimento com especialistas, capacitação e análises avançadas. 

## 📝 Observações

O HTML original serviu como referência de layout, tokens visuais, responsividade, dark mode e comportamento inicial da interface, reduzindo retrabalho na definição da experiência visual.  

A proposta técnica complementa essa base ao definir taxonomia, módulos funcionais, histórias de usuário e roteiro de implementação, orientando a evolução do frontend além da homepage. 
