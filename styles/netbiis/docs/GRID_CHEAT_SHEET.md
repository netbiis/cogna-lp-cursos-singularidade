# 🚀 Grid & Responsive - Cheat Sheet

## Containers
```html
<div class="container">         <!-- Responsivo: 640px → 1536px -->
<div class="container-fluid">   <!-- 100% largura -->
<div class="container-lg">      <!-- Max 1024px -->
```

## Grid System
```html
<!-- Grid básico 12 colunas -->
<div class="grid">
  <div class="col-6">50%</div>
  <div class="col-6">50%</div>
</div>

<!-- Grid auto (colunas iguais) -->
<div class="grid grid-cols-3 gap-md">
  <div>33%</div>
  <div>33%</div>
  <div>33%</div>
</div>

<!-- Grid responsivo -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 1 col mobile, 2 tablet, 4 desktop -->
</div>

<!-- Grid auto-fit -->
<div class="grid grid-cols-auto gap-lg">
  <!-- Colunas automáticas min 250px -->
</div>
```

## Flexbox
```html
<!-- Flex básico -->
<div class="flex gap-md">
<div class="flex justify-between items-center">
<div class="flex flex-col md:flex-row">

<!-- Direções -->
flex-row | flex-col | flex-row-reverse | flex-col-reverse

<!-- Justify -->
justify-start | justify-center | justify-end
justify-between | justify-around | justify-evenly

<!-- Align Items -->
items-start | items-center | items-end
items-baseline | items-stretch

<!-- Wrap -->
flex-wrap | flex-nowrap

<!-- Grow/Shrink -->
flex-1 | flex-auto | flex-none | grow | shrink
```

## Espaçamento

### Tamanhos
`xs:4px | sm:8px | md:16px | lg:24px | xl:32px | xxl:48px | xxxl:64px`

### Margin
```html
m-{tamanho}   <!-- todos os lados -->
mx-{tamanho}  <!-- horizontal -->
my-{tamanho}  <!-- vertical -->
mt-{tamanho}  <!-- top -->
mb-{tamanho}  <!-- bottom -->
ml-auto       <!-- left auto -->
mr-auto       <!-- right auto -->
mx-auto       <!-- centralizar horizontal -->
```

### Padding
```html
p-{tamanho}   <!-- todos os lados -->
px-{tamanho}  <!-- horizontal -->
py-{tamanho}  <!-- vertical -->
pt-{tamanho}  <!-- top -->
pb-{tamanho}  <!-- bottom -->
```

### Gap (Grid/Flex)
```html
gap-{tamanho}      <!-- ambos os eixos -->
grid-gap-{tamanho} <!-- para grid -->
```

## Responsividade

### Breakpoints
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

### Uso
```html
<!-- Prefixo aplicado em breakpoint específico -->
<div class="col-12 md:col-6 lg:col-4">
  <!-- 100% mobile, 50% tablet, 33% desktop -->
</div>

<!-- Visibilidade -->
<div class="block md:hidden">      <!-- só mobile -->
<div class="hidden md:block">      <!-- só desktop -->
<div class="hidden md:flex">       <!-- flex desktop -->

<!-- Grid responsivo -->
<div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

<!-- Flex responsivo -->
<div class="flex-col md:flex-row">
```

## Display
```html
block | inline-block | inline | hidden
flex | inline-flex | grid
```

## Exemplos Rápidos

### Hero Section
```html
<div class="container py-xxl">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
    <div>Conteúdo</div>
    <div>Imagem</div>
  </div>
</div>
```

### Cards Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  <div class="p-lg">Card 1</div>
  <div class="p-lg">Card 2</div>
  <div class="p-lg">Card 3</div>
</div>
```

### Layout com Sidebar
```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-lg">
  <main class="lg:col-8">Principal</main>
  <aside class="lg:col-4">Sidebar</aside>
</div>
```

### Navbar
```html
<nav class="flex flex-col md:flex-row justify-between items-center py-md">
  <div>Logo</div>
  <div class="flex gap-lg">
    <a>Link</a>
    <a>Link</a>
  </div>
</nav>
```

### Centralizar
```html
<!-- Horizontal -->
<div class="flex justify-center">
  <div>Centro</div>
</div>

<!-- Vertical + Horizontal -->
<div class="flex items-center justify-center" style="min-height: 400px;">
  <div>Centro absoluto</div>
</div>
```

## Dicas Importantes

1. **Mobile First**: Classes sem prefixo = todos os tamanhos
   ```html
   class="col-12 md:col-6" <!-- 100% mobile, 50% desktop -->
   ```

2. **Use Gap**: Melhor que margin entre items
   ```html
   <div class="flex gap-md"> <!-- ✅ -->
   vs
   <div><div class="mr-md"> <!-- ❌ -->
   ```

3. **Container sempre**: Para margens consistentes
   ```html
   <section class="container"> <!-- ✅ -->
   ```

4. **Grid Auto**: Para cards responsivos
   ```html
   <div class="grid grid-cols-auto gap-lg"> <!-- ✅ -->
   ```

5. **Combine classes**: Máximo controle
   ```html
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md p-lg">
   ```

---

📖 **Documentação completa**: [GRID_RESPONSIVE_GUIDE.md](GRID_RESPONSIVE_GUIDE.md)
🎨 **Exemplos visuais**: [grid-examples.html](grid-examples.html)
💻 **CSS fonte**: [styles/netbiis-bootstrap.css](styles/netbiis-bootstrap.css)

```html
<link rel="stylesheet" href="styles/styles.css">
<link rel="stylesheet" href="styles/netbiis-bootstrap.css">
```
