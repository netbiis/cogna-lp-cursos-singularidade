# SASS Generic Guide - Adobe Edge Delivery

## 📚 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Arquivos Compartilhados](#arquivos-compartilhados)
4. [Como Usar SASS em Qualquer Bloco](#como-usar-sass-em-qualquer-bloco)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Exemplo Completo](#exemplo-completo)
7. [Variáveis Disponíveis](#variáveis-disponíveis)
8. [Mixins Disponíveis](#mixins-disponíveis)
9. [Funções Disponíveis](#funções-disponíveis)
10. [Melhores Práticas](#melhores-práticas)

---

## Visão Geral

Este projeto está configurado para usar SASS (SCSS) de forma **genérica** em qualquer bloco. Você pode criar arquivos `.scss` para qualquer componente e compilar automaticamente para `.css`.

### Benefícios
- ✅ **Variáveis centralizadas** - Cores, espaçamentos, breakpoints em um só lugar
- ✅ **Mixins reutilizáveis** - Padrões comuns prontos para uso
- ✅ **Funções utilitárias** - Conversões e cálculos automáticos
- ✅ **BEM automatizado** - Nomenclatura consistente com nesting
- ✅ **Responsividade fácil** - Mixins para breakpoints
- ✅ **DRY (Don't Repeat Yourself)** - Elimina duplicação de código

---

## Estrutura de Arquivos

```
blocks/
├── _shared/                    # Arquivos compartilhados por todos os blocos
│   ├── _variables.scss         # Variáveis globais (cores, espaçamentos, etc)
│   ├── _mixins.scss            # Mixins reutilizáveis (responsive, flexbox, etc)
│   └── _functions.scss         # Funções utilitárias (rem(), lighten(), etc)
│
├── banner/
│   ├── banner.scss             # SASS do banner (compila para banner.css)
│   ├── banner.css              # CSS gerado automaticamente
│   └── banner.js
│
├── cards/
│   ├── cards.scss              # SASS das cards
│   ├── cards.css               # CSS gerado
│   └── cards.js
│
└── [qualquer-bloco]/
    ├── [bloco].scss            # Seu SASS
    ├── [bloco].css             # CSS gerado
    └── [bloco].js
```

---

## Arquivos Compartilhados

### 📁 `_variables.scss`
Contém todas as variáveis globais:
- **Cores**: primárias, secundárias, grayscale, estados
- **Espaçamentos**: escala de xs (4px) a xxxl (64px)
- **Breakpoints**: xs, sm, md, lg, xl, xxl
- **Tipografia**: tamanhos de fonte, line-heights, pesos
- **Bordas**: border-radius, espessuras
- **Transições**: durações e easings
- **Sombras**: níveis de box-shadow
- **Z-index**: camadas de empilhamento

### 📁 `_mixins.scss`
Mixins prontos para uso:
- **Responsivos**: `@include responsive($bp-md)`
- **Flexbox**: `@include flex-center`, `@include flex-between`
- **Grid**: `@include grid-auto`, `@include grid-columns(3)`
- **Cards**: `@include card`, `@include card-hover`
- **Tipografia**: `@include heading`, `@include text-truncate`
- **Efeitos**: `@include hover-lift`, `@include fade-in`

### 📁 `_functions.scss`
Funções utilitárias:
- **Conversão**: `rem(16)` → `1rem`, `em(20)` → `1.25em`
- **Cores**: `lighten($color, 20%)`, `darken($color, 10%)`
- **Espaçamento**: `spacing(2)` → `8px`
- **Z-index**: `z($layer)` → valor numérico

---

## Como Usar SASS em Qualquer Bloco

### 🚀 Passo 1: Instalar SASS
```bash
npm install --save-dev sass
```

### 📝 Passo 2: Criar Arquivo SCSS
Crie um arquivo `[nome-do-bloco].scss` dentro da pasta do bloco:

```bash
# Exemplo: criar SASS para o bloco "cards"
touch blocks/cards/cards.scss
```

### 💡 Passo 3: Escrever SCSS

```scss
// blocks/cards/cards.scss

// Importar arquivos compartilhados
@use '../../styles/netbiis/netbiis-bootstrap' as *;

// Variáveis locais (se necessário)
$card-padding: $spacing-md;

// Estilos do componente
.cards {
  @include grid-auto(280px);
  gap: $spacing-lg;
  padding: $spacing-xl 0;

  &__card {
    @include card;
    padding: $card-padding;

    &:hover {
      @include card-hover;
    }
  }

  &__title {
    @include heading;
    font-size: rem(24);
    margin-bottom: $spacing-sm;
  }

  &__content {
    font-size: $font-size-sm;
    color: $gray-700;
    line-height: $line-height-normal;
  }

  // Responsivo
  @include tablet {
    gap: $spacing-xl;
  }

  @include desktop {
    @include grid-columns(3);
  }
}
```

### ⚙️ Passo 4: Compilar

**Opção A: Compilar bloco específico**
```bash
npm run sass:compile --block=cards
```

**Opção B: Watch de bloco específico**
```bash
npm run sass:watch:block --block=cards
```

**Opção C: Watch de todos os blocos**
```bash
npm run sass:watch
```

**Opção D: Build de produção (sem source maps)**
```bash
npm run sass:build
```

---

## Scripts Disponíveis

### 1. `sass:compile --block=NOME`
Compila um bloco específico uma vez.

```bash
npm run sass:compile --block=banner
npm run sass:compile --block=cards
npm run sass:compile --block=hero
```

**Resultado**: Gera `blocks/[NOME]/[NOME].css`

---

### 2. `sass:watch:block --block=NOME`
Monitora um bloco específico e recompila automaticamente ao salvar.

```bash
npm run sass:watch:block --block=banner
```

**Resultado**: Fica em modo watch, recompilando ao detectar mudanças.

---

### 3. `sass:watch`
Monitora **TODOS** os blocos simultaneamente.

```bash
npm run sass:watch
```

**Resultado**: Qualquer alteração em qualquer arquivo `.scss` dentro de `blocks/` será recompilada automaticamente.

---

### 4. `sass:build`
Compila todos os arquivos `.scss` para produção (sem source maps).

```bash
npm run sass:build
```

**Resultado**: Compila todos os blocos de uma vez, otimizado para deploy.

---

## Exemplo Completo

### Cenário: Criar SASS para bloco "hero"

#### 1. Criar arquivo SCSS
```bash
touch blocks/hero/hero.scss
```

#### 2. Escrever o SCSS
```scss
// blocks/hero/hero.scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.hero {
  @include gradient-primary;
  padding: spacing(10) $spacing-md;
  color: white;
  text-align: center;

  @include desktop {
    padding: spacing(15) $spacing-xl;
  }

  &__container {
    @include container;
  }

  &__title {
    @include heading;
    font-size: rem(36);
    margin-bottom: $spacing-lg;

    @include desktop {
      font-size: rem(48);
    }
  }

  &__subtitle {
    font-size: rem(18);
    margin-bottom: $spacing-xl;
    opacity: 0.9;
  }

  &__cta {
    @include button;
    @include button-large;

    &:hover {
      @include hover-lift;
    }
  }
}
```

#### 3. Compilar
```bash
npm run sass:compile --block=hero
```

#### 4. Resultado
Arquivo `blocks/hero/hero.css` criado e pronto para uso!

---

## Variáveis Disponíveis

### Cores
```scss
$primary-color       // Cor primária (#007bff)
$secondary-color     // Cor secundária (#6c757d)
$success-color       // Verde (#28a745)
$danger-color        // Vermelho (#dc3545)
$warning-color       // Amarelo (#ffc107)
$info-color          // Azul claro (#17a2b8)

// Grayscale
$gray-100 até $gray-900

// Backgrounds
$bg-light, $bg-dark, $bg-muted

// Texto
$text-color, $text-muted
```

### Espaçamentos
```scss
$spacing-xs      // 4px
$spacing-sm      // 8px
$spacing-md      // 16px
$spacing-lg      // 24px
$spacing-xl      // 32px
$spacing-xxl     // 40px
$spacing-xxxl    // 64px
```

### Breakpoints
```scss
$bp-xs    // 480px
$bp-sm    // 640px
$bp-md    // 768px
$bp-lg    // 1024px
$bp-xl    // 1280px
$bp-xxl   // 1536px
```

### Tipografia
```scss
$font-size-xs    // 12px
$font-size-sm    // 14px
$font-size-md    // 16px
$font-size-lg    // 18px
$font-size-xl    // 24px

$line-height-tight   // 1.25
$line-height-normal  // 1.5
$line-height-relaxed // 1.75
```

---

## Mixins Disponíveis

### Responsivos
```scss
@include responsive($bp-md) {
  // Estilos para tablets e acima
}

@include mobile {
  // Apenas mobile (max-width: 767px)
}

@include tablet {
  // Tablets e acima
}

@include desktop {
  // Desktops e acima
}
```

### Flexbox
```scss
@include flex-center        // Centraliza vertical e horizontal
@include flex-between       // Espaço entre itens
@include flex-column        // Direção coluna
@include flex-wrap          // Permite quebra de linha
```

### Grid
```scss
@include grid-auto(280px)   // Grid com auto-fit de 280px
@include grid-columns(3)    // Grid de 3 colunas
@include grid-rows(2)       // Grid de 2 linhas
```

### Cards
```scss
@include card               // Estilo básico de card
@include card-hover         // Efeito hover em card
```

### Tipografia
```scss
@include heading            // Estilo de título
@include text-ellipsis      // Trunca texto com "..."
@include text-truncate($lines)  // Trunca após X linhas
```

### Efeitos
```scss
@include hover-lift         // Efeito de elevação no hover
@include fade-in($duration) // Animação de fade-in
@include slide-in($direction, $distance)  // Slide-in animado
```

### Posicionamento
```scss
@include absolute-center    // Centraliza com position absolute
@include absolute-full      // Ocupa toda a área do pai
```

### Outros
```scss
@include gradient-primary   // Gradiente com cor primária
@include gradient($from, $to, $direction)  // Gradiente customizado
@include button             // Estilo base de botão
@include button-large       // Botão maior
@include image-cover        // Imagem cover responsiva
```

---

## Funções Disponíveis

### Conversão
```scss
font-size: rem(16);         // → 1rem
padding: em(20);            // → 1.25em
margin: spacing(3);         // → 12px (3 × 4px)
```

### Cores
```scss
background: lighten($primary-color, 20%);
border-color: darken($primary-color, 10%);
```

### Z-index
```scss
z-index: z('modal');        // → 1000
z-index: z('dropdown');     // → 900
```

---

## Melhores Práticas

### ✅ DO's

1. **Sempre importe os arquivos compartilhados**
```scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;
```

2. **Use variáveis globais**
```scss
// ✅ BOM
padding: $spacing-md;
color: $primary-color;

// ❌ EVITE
padding: 16px;
color: #007bff;
```

3. **Use mixins para responsividade**
```scss
// ✅ BOM
@include tablet {
  font-size: rem(24);
}

// ❌ EVITE
@media (min-width: 768px) {
  font-size: 1.5rem;
}
```

4. **Siga BEM com nesting**
```scss
.block {
  &__element {
    // estilos
  }

  &--modifier {
    // estilos
  }
}
```

5. **Use funções de conversão**
```scss
// ✅ BOM
font-size: rem(18);
margin: spacing(2);

// ❌ EVITE
font-size: 18px;
margin: 8px;
```

---

### ❌ DON'Ts

1. **Não duplique variáveis**
```scss
// ❌ EVITE criar variáveis locais iguais às globais
$primary-color: #007bff;  // Já existe em _variables.scss

// ✅ BOM - Use variáveis locais apenas para valores específicos do bloco
$card-specific-padding: $spacing-lg;
```

2. **Não hardcode breakpoints**
```scss
// ❌ EVITE
@media (min-width: 768px) { }

// ✅ BOM
@include tablet { }
// ou
@include responsive($bp-md) { }
```

3. **Não ignore source maps em desenvolvimento**
```bash
# ❌ EVITE em dev
npm run sass:build

# ✅ BOM em dev
npm run sass:watch
```

4. **Não misture pixels e rem aleatoriamente**
```scss
// ❌ EVITE
font-size: 18px;
padding: 1rem;
margin: 20px;

// ✅ BOM - Seja consistente
font-size: rem(18);
padding: rem(16);
margin: spacing(3);
```

---

## 🎯 Workflow Recomendado

### Desenvolvimento
```bash
# Terminal 1: Roda o servidor local
npm run up

# Terminal 2: Watch SASS
npm run sass:watch
```

### Deploy
```bash
# Antes do deploy, compile tudo sem source maps
npm run sass:build
git add .
git commit -m "Update styles"
git push
```

---

## 🆘 Troubleshooting

### "SASS não compila"
```bash
# Reinstale o SASS
npm install --save-dev sass
```

### "Variáveis não encontradas"
```scss
// Certifique-se de importar no topo do arquivo
@use '../../styles/netbiis/netbiis-bootstrap' as *;
```

### "Comando não encontrado"
```bash
# Verifique se o script existe no package.json
npm run sass:compile --block=SEU_BLOCO
```

### "CSS não atualiza no navegador"
```bash
# Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
# Certifique-se de que o CSS está sendo gerado
ls -la blocks/SEU_BLOCO/SEU_BLOCO.css
```

---

## 📚 Referências

- [Documentação Oficial SASS](https://sass-lang.com/documentation)
- [BEM Methodology](http://getbem.com/)
- [Guia CSS Grid](./GRID_RESPONSIVE_GUIDE.md)
- [Cheat Sheet](./GRID_CHEAT_SHEET.md)
- [Netbiis Bootstrap](./NETBIIS_SETUP.md)

---

**🎉 Agora você pode usar SASS em qualquer bloco do projeto!**

Para criar SASS em um novo bloco:
1. Crie `blocks/[nome]/[nome].scss`
2. Importe os arquivos compartilhados
3. Escreva seus estilos
4. Compile com `npm run sass:compile --block=[nome]`
5. Pronto! ✨
