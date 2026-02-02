# 📚 Netbiis Bootstrap - Documentation

This project uses **Netbiis Bootstrap**, a modular Grid CSS system and responsive utilities built with SASS.

## 📖 Complete Documentation

Toda a documentação está organizada em: **[`styles/netbiis/`](styles/netbiis/)**

### 🚀 Quick Links

- 📖 **[Índice de Documentação](styles/netbiis/docs/INDEX.md)** - Comece aqui!
- 📘 **[README do Netbiis](styles/netbiis/README.md)** - Visão geral do sistema
- ⚡ **[Cheat Sheet](styles/netbiis/docs/GRID_CHEAT_SHEET.md)** - Referência rápida
- 🎨 **[Guia SASS](styles/netbiis/docs/SASS_GENERIC_GUIDE.md)** - Como usar SASS nos blocos

---

## 🎯 Quick Start

### 1. Use ready-made CSS classes

The file `styles/netbiis-bootstrap.css` is already compiled and ready to use:

```html
<div class="container">
  <div class="grid grid-cols-3 gap-lg">
    <div class="col-12 md:col-6 lg:col-4">Item 1</div>
    <div class="col-12 md:col-6 lg:col-4">Item 2</div>
    <div class="col-12 md:col-6 lg:col-4">Item 3</div>
  </div>
</div>
```

### 2. Use SASS in blocks

```scss
// blocks/meu-bloco/meu-bloco.scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.meu-bloco {
  padding: $spacing-lg;

  @include tablet {
    @include flex-center;
  }
}
```

Compilar:
```bash
npm run sass:compile:block --block=meu-bloco
```

---

## 📦 Available Scripts

```bash
# Compilar Netbiis Bootstrap
npm run sass:netbiis

# Watch Netbiis Bootstrap
npm run sass:netbiis:watch

# Compilar todos os blocos
npm run sass:compile

# Watch completo (Netbiis + Blocos)
npm run sass:watch

# Build de produção (minificado)
npm run sass:build
```

---

## 📁 Structure

```
styles/
└── netbiis/                      # Módulo Netbiis Bootstrap
    ├── README.md                 # Visão geral do sistema
    ├── netbiis-bootstrap.scss    # Arquivo principal SASS
    ├── _variables.scss           # Variáveis globais
    ├── _mixins.scss              # Mixins reutilizáveis
    ├── _functions.scss           # Funções utilitárias
    ├── _containers.scss          # Sistema de containers
    ├── _grid.scss                # Grid CSS
    ├── _flexbox.scss             # Utilitários Flexbox
    ├── _spacing.scss             # Margins, Paddings, Gaps
    ├── _responsive.scss          # Utilitários responsivos
    └── docs/                     # Documentação completa
        ├── INDEX.md              # Índice geral
        ├── GRID_RESPONSIVE_GUIDE.md
        ├── GRID_CHEAT_SHEET.md
        ├── SASS_GENERIC_GUIDE.md
        ├── SASS_GUIDE.md
        ├── NETBIIS_SETUP.md
        └── MIGRATION_GUIDE.md
```

---

## 🎨 Features

- ✅ **Grid CSS** - Sistema de 12 colunas com auto-fit
- ✅ **Flexbox** - Utilitários completos
- ✅ **Responsive** - Mobile-first com prefixos (sm:, md:, lg:, xl:)
- ✅ **Spacing** - Margins, paddings e gaps (xs a xxxl)
- ✅ **Containers** - Responsivos com max-widths
- ✅ **SASS Modular** - Variáveis, mixins e funções reutilizáveis
- ✅ **Documentação** - Guias completos e exemplos

---

## 📖 Read More

- [📖 Índice Completo](styles/netbiis/docs/INDEX.md)
- [📘 Guia Grid & Responsive](styles/netbiis/docs/GRID_RESPONSIVE_GUIDE.md)
- [🎨 Guia SASS Genérico](styles/netbiis/docs/SASS_GENERIC_GUIDE.md)

---

**✨ Desenvolvido para Adobe Edge Delivery Services**
