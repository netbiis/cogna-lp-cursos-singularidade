# 🎨 Netbiis Bootstrap - SASS System

**Modular Grid CSS system and responsive utilities for Adobe Edge Delivery Services**

[![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![CSS Grid](https://img.shields.io/badge/CSS-Grid-1572B6?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
[![Responsive](https://img.shields.io/badge/Mobile-First-success)](https://www.w3.org/TR/css-mobile/)

---

## 🚀 Quick Start

```bash
# 1. Instalar SASS
npm install --save-dev sass

# 2. Compilar Netbiis Bootstrap
npm run sass:netbiis

# 3. Watch mode (desenvolvimento)
npm run sass:netbiis:watch
```

**Resultado:** `styles/netbiis-bootstrap.css` pronto para uso!

---

## 📁 Module Structure

```
styles/netbiis/
├── netbiis-bootstrap.scss    # Main file (compiles to ../netbiis-bootstrap.css)
├── _variables.scss            # Variáveis globais (cores, espaçamentos, breakpoints)
├── _mixins.scss               # Mixins reutilizáveis (responsive, flexbox, grid, etc)
├── _functions.scss            # Funções utilitárias (rem, em, spacing, etc)
├── _containers.scss           # Sistema de containers responsivos
├── _grid.scss                 # Sistema Grid CSS (12 colunas)
├── _flexbox.scss              # Utilitários Flexbox
├── _spacing.scss              # Margins, Paddings e Gaps
└── _responsive.scss           # Utilitários responsivos (sm:, md:, lg:, xl:)
```

## 🚀 How to Compile

### Compile once
```bash
npm run sass:netbiis
```

### Watch mode (development)
```bash
npm run sass:netbiis:watch
```

### Production build (minified)
```bash
npm run sass:netbiis:build
```

## 💡 How to Use in Blocks

Blocks can import everything from Netbiis Bootstrap with a single import:

```scss
// blocks/YOUR_BLOCK/YOUR_BLOCK.scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.your-block {
  padding: $spacing-lg;
  background: $primary-color;

  @include tablet {
    @include flex-center;
  }

  &__title {
    font-size: rem(24);
    margin-bottom: spacing(3);
  }
}
```

## 📦 Available Modules

### `_variables.scss`
- **Cores**: `$primary-color`, `$gray-100` a `$gray-900`, etc
- **Espaçamentos**: `$spacing-xs` (4px) a `$spacing-xxxl` (64px)
- **Breakpoints**: `$bp-xs` a `$bp-xxl`
- **Containers**: `$container-sm` a `$container-xxl`
- **Tipografia**: `$font-size-xs` a `$font-size-xl`

### `_mixins.scss`
- **Responsive**: `@include responsive($bp-md)`, `@include tablet`, `@include desktop`
- **Flexbox**: `@include flex-center`, `@include flex-between`
- **Grid**: `@include grid-auto(280px)`, `@include grid-columns(3)`
- **Cards**: `@include card`, `@include card-hover`
- **Efeitos**: `@include hover-lift`, `@include fade-in`

### `_functions.scss`
- **Conversão**: `rem(16)` → `1rem`, `em(20)` → `1.25em`
- **Espaçamento**: `spacing(3)` → `12px`
- **Z-index**: `z('modal')` → `1000`

## 🔄 Recommended Workflow

### During Development
```bash
# Terminal 1: Watch do Netbiis Bootstrap
npm run sass:netbiis:watch

# Terminal 2: Watch dos blocos
npm run sass:watch
```

### Before Deploy
```bash
# Compilar tudo otimizado
npm run sass:build
```

## 📚 Complete Documentation

- [📖 Getting Started](GETTING_STARTED.md) - Guia de início rápido
- [📖 Índice Geral](docs/INDEX.md) - Todos os guias e referências
- [📘 Guia Grid & Responsive](docs/GRID_RESPONSIVE_GUIDE.md) - Sistema Grid completo
- [⚡ Cheat Sheet](docs/GRID_CHEAT_SHEET.md) - Referência rápida
- [🎨 Exemplos Visuais](docs/grid-examples.html) - Demonstrações interativas
- [🎨 Guia SASS Genérico](docs/SASS_GENERIC_GUIDE.md) - SASS para blocos
- [🎯 Guia SASS Banner](docs/SASS_GUIDE.md) - Exemplo específico
- [📦 Setup Netbiis](docs/NETBIIS_SETUP.md) - Configuração inicial
- [🔄 Guia de Migração](docs/MIGRATION_GUIDE.md) - Exemplos antes/depois

---

**✨ Sistema modular, reutilizável e compatível com Adobe Edge Delivery!**
