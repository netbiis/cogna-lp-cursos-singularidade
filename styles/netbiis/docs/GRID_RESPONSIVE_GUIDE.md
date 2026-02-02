# 📐 Guia do Sistema de Grid e Responsividade

Este projeto agora possui um sistema completo de Grid CSS e utilitários responsivos para facilitar o desenvolvimento.

## 📱 Breakpoints

```css
--breakpoint-xs: 480px   /* Extra Small */
--breakpoint-sm: 640px   /* Small */
--breakpoint-md: 768px   /* Medium */
--breakpoint-lg: 1024px  /* Large */
--breakpoint-xl: 1280px  /* Extra Large */
--breakpoint-xxl: 1536px /* 2X Large */
```

## 📦 Containers

### Container Padrão
```html
<div class="container">
  <!-- Conteúdo com largura máxima responsiva -->
</div>
```

### Container Fluid (largura total)
```html
<div class="container-fluid">
  <!-- Conteúdo com 100% de largura -->
</div>
```

### Containers com tamanhos fixos
```html
<div class="container-sm">  <!-- Max: 640px -->
<div class="container-md">  <!-- Max: 768px -->
<div class="container-lg">  <!-- Max: 1024px -->
<div class="container-xl">  <!-- Max: 1280px -->
<div class="container-xxl"> <!-- Max: 1536px -->
```

## 🎯 Sistema de Grid CSS

### Grid Básico (12 colunas)
```html
<div class="grid">
  <div class="col-6">Metade da largura</div>
  <div class="col-6">Metade da largura</div>
</div>
```

### Grid Auto (colunas iguais)
```html
<div class="grid grid-cols-3">
  <div>Coluna 1</div>
  <div>Coluna 2</div>
  <div>Coluna 3</div>
</div>
```

### Grid Responsivo
```html
<!-- Mobile: 1 col | Tablet: 2 cols | Desktop: 4 cols -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### Grid Auto-fit (responsivo automático)
```html
<div class="grid grid-cols-auto">
  <!-- Colunas se ajustam automaticamente (min: 250px) -->
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Spans de Colunas
```html
<div class="grid">
  <div class="col-8">Conteúdo principal (8/12)</div>
  <div class="col-4">Sidebar (4/12)</div>
</div>
```

### Grid com Gap personalizado
```html
<div class="grid grid-gap-lg">      <!-- 24px gap -->
<div class="grid grid-gap-xl">      <!-- 32px gap -->
<div class="grid grid-gap-none">    <!-- sem gap -->
```

## 🔄 Flexbox

### Flex básico
```html
<div class="flex justify-between items-center">
  <div>Esquerda</div>
  <div>Direita</div>
</div>
```

### Direção do Flex
```html
<div class="flex flex-row">       <!-- Horizontal -->
<div class="flex flex-col">       <!-- Vertical -->
<div class="flex flex-row-reverse"> <!-- Invertido -->
```

### Alinhamento
```html
<!-- Justify (eixo principal) -->
<div class="flex justify-start">
<div class="flex justify-center">
<div class="flex justify-end">
<div class="flex justify-between">
<div class="flex justify-around">
<div class="flex justify-evenly">

<!-- Align Items (eixo transversal) -->
<div class="flex items-start">
<div class="flex items-center">
<div class="flex items-end">
<div class="flex items-stretch">
```

### Flex Wrap
```html
<div class="flex flex-wrap gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flex Grow/Shrink
```html
<div class="flex">
  <div class="flex-1">Cresce proporcionalmente</div>
  <div class="flex-none">Tamanho fixo</div>
</div>
```

## 📏 Espaçamento

### Scale de Espaçamento
```css
--spacing-xs:   4px
--spacing-sm:   8px
--spacing-md:   16px
--spacing-lg:   24px
--spacing-xl:   32px
--spacing-xxl:  48px
--spacing-xxxl: 64px
```

### Margin
```html
<div class="m-lg">      <!-- Margin em todos os lados -->
<div class="mx-md">     <!-- Margin horizontal -->
<div class="my-xl">     <!-- Margin vertical -->
<div class="mt-lg">     <!-- Margin top -->
<div class="mb-md">     <!-- Margin bottom -->
<div class="mx-auto">   <!-- Centralizar horizontalmente -->
```

### Padding
```html
<div class="p-lg">      <!-- Padding em todos os lados -->
<div class="px-md">     <!-- Padding horizontal -->
<div class="py-xl">     <!-- Padding vertical -->
<div class="pt-lg">     <!-- Padding top -->
<div class="pb-md">     <!-- Padding bottom -->
```

### Gap (para Flex e Grid)
```html
<div class="flex gap-md">    <!-- 16px gap -->
<div class="grid gap-lg">    <!-- 24px gap -->
```

## 📱 Responsividade

### Prefixos Responsivos
Use `sm:`, `md:`, `lg:`, `xl:` para aplicar estilos em breakpoints específicos:

```html
<!-- Esconder em mobile, mostrar em desktop -->
<div class="hidden lg:block">
  Visível apenas em telas grandes
</div>

<!-- Layout responsivo -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Flex responsivo -->
<div class="flex flex-col md:flex-row gap-md">
  <div>Conteúdo 1</div>
  <div>Conteúdo 2</div>
</div>
```

### Display Responsivo
```html
<div class="block md:hidden">     <!-- Mostrar em mobile -->
<div class="hidden md:block">     <!-- Mostrar em desktop -->
<div class="hidden md:flex">      <!-- Flex em desktop -->
```

## 💡 Exemplos Práticos

### Layout de Card Grid
```html
<div class="container">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
    <div class="p-lg">Card 1</div>
    <div class="p-lg">Card 2</div>
    <div class="p-lg">Card 3</div>
  </div>
</div>
```

### Hero Section Responsivo
```html
<section class="container py-xxl">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
    <div>
      <h1 class="mb-lg">Título Principal</h1>
      <p class="mb-md">Descrição do conteúdo...</p>
    </div>
    <div>
      <img src="hero.jpg" alt="Hero">
    </div>
  </div>
</section>
```

### Sidebar Layout
```html
<div class="container">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
    <main class="lg:col-8">
      Conteúdo principal
    </main>
    <aside class="lg:col-4">
      Sidebar
    </aside>
  </div>
</div>
```

### Navbar Responsivo
```html
<nav class="container">
  <div class="flex flex-col md:flex-row justify-between items-center py-md">
    <div class="mb-md md:mb-0">Logo</div>
    <div class="flex gap-lg">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</nav>
```

### Grid Assimétrico
```html
<div class="grid grid-cols-12 gap-md">
  <div class="col-12 md:col-8">Conteúdo grande</div>
  <div class="col-12 md:col-4">Conteúdo pequeno</div>
  <div class="col-12 md:col-6">Metade</div>
  <div class="col-12 md:col-6">Metade</div>
</div>
```

### Centralizar Conteúdo
```html
<!-- Centralizar horizontal -->
<div class="flex justify-center">
  <div>Centralizado</div>
</div>

<!-- Centralizar vertical e horizontal -->
<div class="flex items-center justify-center" style="min-height: 400px;">
  <div>Centro absoluto</div>
</div>
```

## 🎨 Dicas de Uso

1. **Mobile First**: Classes sem prefixo aplicam em todos os tamanhos. Use prefixos para sobrescrever em telas maiores.
   ```html
   <!-- Coluna em mobile, linha em desktop -->
   <div class="flex flex-col md:flex-row">
   ```

2. **Combine Grid e Flex**: Use grid para layouts principais e flex para componentes menores.

3. **Use Gap ao invés de Margin**: Gap é mais consistente para espaçamento entre itens.
   ```html
   <div class="flex gap-md"> <!-- Melhor que margin em cada item -->
   ```

4. **Container para Consistência**: Sempre use `.container` para manter margens consistentes.

5. **Grid Auto para Cards**: Use `grid-cols-auto` para cards que se ajustam automaticamente.

## 🔧 Customização

Você pode ajustar os valores no `:root` em [../netbiis-bootstrap.scss](../netbiis-bootstrap.scss):

```css
:root {
  /* Ajuste os breakpoints */
  --breakpoint-lg: 1024px;

  /* Ajuste o espaçamento */
  --spacing-md: 16px;

  /* Ajuste tamanhos de container */
  --container-xl: 1280px;
}
```

---

## 📚 Recursos Adicionais

- Todo o CSS do sistema Grid está em: [../netbiis-bootstrap.css](../netbiis-bootstrap.css) (compilado) ou [../netbiis-bootstrap.scss](../netbiis-bootstrap.scss) (fonte SASS)
- CSS original do projeto mantido em: [styles/styles.css](styles/styles.css)
- Sistema compatível com Adobe Edge Delivery
- Mantém 100% do CSS original do projeto
- Sistema é extensível e personalizável

## 🔌 Como Usar

Para usar o sistema Grid & Responsivo em suas páginas, inclua o arquivo CSS:

```html
<link rel="stylesheet" href="styles/styles.css">
<link rel="stylesheet" href="styles/netbiis-bootstrap.css">
```
