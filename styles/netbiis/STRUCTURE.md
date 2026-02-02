# 📦 Netbiis Bootstrap - Module Structure

```
styles/netbiis/                              # 🎨 Módulo CSS Completo
│
├── README.md                                # 📖 Visão geral do sistema
├── GETTING_STARTED.md                       # 🚀 Guia de início rápido
├── STRUCTURE.md                             # 📊 Estrutura do módulo
├── netbiis-bootstrap.scss                   # 🎯 Arquivo principal SASS
│
├── Arquivos SASS (Partials)                 # 🧩 Componentes modulares
│   ├── _variables.scss                      # 🎨 Variáveis globais
│   ├── _mixins.scss                         # 🔧 Mixins reutilizáveis
│   ├── _functions.scss                      # ⚙️ Funções utilitárias
│   ├── _containers.scss                     # 📦 Sistema de containers
│   ├── _grid.scss                           # 🔲 Grid CSS (12 colunas)
│   ├── _flexbox.scss                        # 💪 Utilitários Flexbox
│   ├── _spacing.scss                        # 📏 Margins, Paddings, Gaps
│   └── _responsive.scss                     # 📱 Utilitários responsivos
│
└── docs/                                    # 📚 Documentação completa
    ├── INDEX.md                             # 📖 Índice geral
    ├── grid-examples.html                   # 🎨 Exemplos visuais interativos
    ├── GRID_RESPONSIVE_GUIDE.md             # 📘 Guia completo (15-20 min)
    ├── GRID_CHEAT_SHEET.md                  # ⚡ Referência rápida (1-2 min)
    ├── SASS_GENERIC_GUIDE.md                # 🎨 SASS para blocos (20-25 min)
    ├── SASS_GUIDE.md                        # 🎯 Exemplo Banner (10-15 min)
    ├── NETBIIS_SETUP.md                     # 📦 Setup e configuração (5-10 min)
    └── MIGRATION_GUIDE.md                   # 🔄 Migração de código (10-15 min)
```

---

## 📊 Module Statistics

### SASS Files
- **9 arquivos** `.scss` (modulares e reutilizáveis)
- **1 arquivo** principal (`netbiis-bootstrap.scss`)
- **3 arquivos** base (`_variables`, `_mixins`, `_functions`)
- **5 arquivos** de componentes (`_containers`, `_grid`, `_flexbox`, `_spacing`, `_responsive`)

### Documentation
- **7 arquivos** Markdown
- **~100 páginas** de documentação (estimado)
- **60+ exemplos** práticos de código
- **Tempo de leitura total:** ~80 minutos

---

## 🎯 Main Files

### 1. `netbiis-bootstrap.scss` (Entry)
Arquivo principal que importa todos os módulos e gera o CSS final.

**Compila para:** `../netbiis-bootstrap.css`

### 2. `_variables.scss` (Base)
Todas as variáveis globais do sistema:
- Cores (primárias, secundárias, grayscale)
- Espaçamentos (xs a xxxl)
- Breakpoints (xs a xxl)
- Containers (sm a xxl)
- Tipografia

### 3. `_mixins.scss` (Tools)
30+ mixins reutilizáveis:
- Responsive helpers
- Flexbox utilities
- Grid helpers
- Card styles
- Typography mixins
- Animation effects

### 4. `_functions.scss` (Utilities)
Funções SASS para cálculos:
- Conversão rem/em
- Multiplicador de spacing
- Z-index layers
- Color manipulation

---

## 📝 Documentation Guides

### For Beginners
1. 📖 [INDEX.md](docs/INDEX.md) - Comece aqui
2. 📘 [GRID_RESPONSIVE_GUIDE.md](docs/GRID_RESPONSIVE_GUIDE.md) - Leitura completa
3. ⚡ [GRID_CHEAT_SHEET.md](docs/GRID_CHEAT_SHEET.md) - Use durante desenvolvimento

### For SASS/SCSS
1. 🎨 [SASS_GENERIC_GUIDE.md](docs/SASS_GENERIC_GUIDE.md) - Guia completo
2. 🎯 [SASS_GUIDE.md](docs/SASS_GUIDE.md) - Exemplo específico

### For Migration
1. 🔄 [MIGRATION_GUIDE.md](docs/MIGRATION_GUIDE.md) - Antes vs Depois
2. 📦 [NETBIIS_SETUP.md](docs/NETBIIS_SETUP.md) - Como foi configurado

---

## 🚀 How to Use This Module

### Option 1: Pure CSS (Simpler)
Use o CSS compilado diretamente em seu HTML:

```html
<link rel="stylesheet" href="styles/netbiis-bootstrap.css">
```

### Option 2: SASS in Blocks (More Powerful)
Importar variáveis e mixins nos seus componentes:

```scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.meu-componente {
  padding: $spacing-lg;
  @include tablet {
    @include flex-center;
  }
}
```

### Option 3: Customize Netbiis
Edite as variáveis em `_variables.scss` e recompile:

```bash
npm run sass:netbiis
```

---

## 🔄 Development Workflow

### During Development
```bash
# Terminal 1: Watch do Netbiis Bootstrap
npm run sass:netbiis:watch

# Terminal 2: Watch dos blocos
npm run sass:watch
```

### Before Deploy
```bash
# Build otimizado (minificado, sem source maps)
npm run sass:build
```

---

## ✅ Module Features

- ✨ **Modular** - 9 arquivos SASS organizados por responsabilidade
- 🔄 **Reutilizável** - Variáveis, mixins e funções para todos os blocos
- 📱 **Responsive** - Mobile-first com breakpoints bem definidos
- 🎨 **Customizável** - Edite variáveis e recompile
- 📚 **Documentado** - 7 guias completos com exemplos
- 🚀 **Performático** - CSS minificado em produção
- 🧩 **Compatível** - Adobe Edge Delivery Services

---

## 📦 Installation and Compilation

```bash
# 1. Instalar SASS (apenas uma vez)
npm install --save-dev sass

# 2. Compilar Netbiis Bootstrap
npm run sass:netbiis

# 3. Resultado
# ✅ styles/netbiis-bootstrap.css criado
```

---

## 🆘 Need Help?

1. 📖 Leia o [INDEX.md](docs/INDEX.md) para navegar na documentação
2. ⚡ Consulte o [GRID_CHEAT_SHEET.md](docs/GRID_CHEAT_SHEET.md) para referência rápida
3. 🎨 Veja exemplos práticos em cada guia

---

**✨ Netbiis Bootstrap - Sistema CSS modular, escalável e profissional!**
