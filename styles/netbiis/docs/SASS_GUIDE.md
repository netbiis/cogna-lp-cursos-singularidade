# 🎨 Guia de Uso SASS no Adobe Edge Delivery

## 📦 Instalação

### 1. Instalar SASS
```bash
npm install --save-dev sass
```

### 2. Verificar instalação
```bash
npx sass --version
```

---

## 🚀 Como Usar

### Compilar SASS → CSS

#### Opção 1: Compilar uma vez (Banner)
```bash
npm run sass:banner
```
Este comando compila `blocks/banner/banner.scss` → `blocks/banner/banner.css`

#### Opção 2: Modo Watch (desenvolvimento)
```bash
npm run sass:watch
```
Monitora alterações no `banner.scss` e compila automaticamente.

#### Opção 3: Compilar todos os SCSS
```bash
npm run sass:build
```
Compila todos os arquivos `.scss` em todos os blocos.

---

## 📁 Estrutura de Arquivos

```
blocks/banner/
├── banner.scss      # Arquivo SASS (você edita este)
├── banner.css       # CSS compilado (gerado automaticamente)
└── banner.js        # JavaScript do bloco
```

**⚠️ IMPORTANTE:**
- Edite apenas o arquivo `.scss`
- O arquivo `.css` é gerado automaticamente
- Não edite o `.css` manualmente, suas alterações serão sobrescritas

---

## 💡 Recursos SASS Disponíveis

### 1. Variáveis
```scss
// Definir variáveis
$banner-bg: #f8f8f8;
$banner-padding: 40px;

.banner {
  background: $banner-bg;
  padding: $banner-padding;
}
```

### 2. Aninhamento (Nesting)
```scss
.banner {
  padding: 20px;

  &__title {
    font-size: 24px;

    &:hover {
      color: blue;
    }
  }

  &__content {
    p {
      margin-bottom: 16px;
    }
  }
}
```

Compila para:
```css
.banner { padding: 20px; }
.banner__title { font-size: 24px; }
.banner__title:hover { color: blue; }
.banner__content p { margin-bottom: 16px; }
```

### 3. Mixins (Funções reutilizáveis)
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.banner {
  @include flex-center;

  @include responsive(768px) {
    padding: 40px;
  }
}
```

### 4. Funções
```scss
// Calcular porcentagem
@function percentage($value, $total) {
  @return ($value / $total) * 100%;
}

.banner {
  width: percentage(6, 12); // 50%
}
```

### 5. Operações Matemáticas
```scss
$base-padding: 16px;

.banner {
  padding: $base-padding * 2;        // 32px
  margin: $base-padding / 2;         // 8px
  border-width: $base-padding - 12px; // 4px
}
```

### 6. Importar Arquivos
```scss
// _variables.scss in netbiis
$primary-color: #3b63fb;
$spacing-md: 16px;

// banner.scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.banner {
  color: $primary-color;
  padding: $spacing-md;
}
```

---

## 📐 Integração com Netbiis Bootstrap

Você pode reutilizar as variáveis do `netbiis-bootstrap.css`:

```scss
// Usar as mesmas variáveis
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;

$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;

// Mixin responsivo
@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

// Uso
.banner {
  padding: $spacing-md;

  @include responsive($breakpoint-md) {
    padding: $spacing-lg;
  }

  @include responsive($breakpoint-lg) {
    padding: $spacing-xl;
  }
}
```

---

## 🎯 Exemplo Completo - Banner

### banner.scss
```scss
// Variáveis
$banner-bg-light: #f8f8f8;
$banner-bg-dark: #2c3e50;
$banner-padding: 40px;

// Mixins
@mixin responsive($size) {
  @media (min-width: $size) {
    @content;
  }
}

// Estilos
.banner {
  margin: 0;
  padding: $banner-padding 16px;
  background: $banner-bg-light;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 16px;

    @include responsive(768px) {
      font-size: 32px;
    }

    @include responsive(1024px) {
      font-size: 40px;
    }
  }

  &__content {
    p {
      font-size: 16px;
      line-height: 1.6;

      @include responsive(768px) {
        font-size: 18px;
      }
    }
  }

  // Modificador escuro
  &--dark {
    background: $banner-bg-dark;
    color: white;

    .banner__title {
      color: white;
    }
  }

  // Modificador centralizado
  &--centered {
    text-align: center;
  }
}
```

### Como usar no HTML
```html
<!-- Banner padrão -->
<div class="banner">
  <div class="banner__container">
    <h2 class="banner__title">Título do Banner</h2>
    <div class="banner__content">
      <p>Conteúdo do banner...</p>
    </div>
  </div>
</div>

<!-- Banner escuro -->
<div class="banner banner--dark">
  ...
</div>

<!-- Banner centralizado -->
<div class="banner banner--centered">
  ...
</div>
```

---

## 🔄 Workflow de Desenvolvimento

### Durante o desenvolvimento:

1. **Abra o terminal** e execute:
   ```bash
   npm run sass:watch
   ```

2. **Edite o arquivo** `banner.scss`

3. **SASS compila automaticamente** para `banner.css`

4. **Recarregue a página** no navegador para ver as mudanças

### Antes de fazer commit:

1. **Pare o watch** (Ctrl+C)

2. **Compile uma última vez:**
   ```bash
   npm run sass:banner
   ```

3. **Faça commit** dos arquivos `.scss` E `.css`

---

## 📂 Expandir para Outros Blocos

### Estrutura recomendada:

```
blocks/
├── _shared/
│   ├── _variables.scss    # Variáveis globais
│   ├── _mixins.scss       # Mixins compartilhados
│   └── _functions.scss    # Funções compartilhadas
│
├── banner/
│   ├── banner.scss
│   ├── banner.css
│   └── banner.js
│
├── hero/
│   ├── hero.scss
│   ├── hero.css
│   └── hero.js
│
└── cards/
    ├── cards.scss
    ├── cards.css
    └── cards.js
```

### Importar arquivos compartilhados:

```scss
// blocks/banner/banner.scss
@use '../../styles/netbiis/netbiis-bootstrap' as *;

.banner {
  padding: $spacing-lg;
  @include flex-center;
}
```

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run sass:banner` | Compila apenas o banner.scss |
| `npm run sass:watch` | Monitora e compila automaticamente |
| `npm run sass:build` | Compila todos os .scss do projeto |

---

## 💡 Dicas e Best Practices

### 1. Use BEM (Block Element Modifier)
```scss
.banner {              // Block
  &__title { }         // Element
  &__content { }       // Element
  &--dark { }          // Modifier
  &--centered { }      // Modifier
}
```

### 2. Organize variáveis por categoria
```scss
// Cores
$color-primary: #3b63fb;
$color-secondary: #2c3e50;
$color-text: #131313;

// Espaçamento
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

// Breakpoints
$bp-tablet: 768px;
$bp-desktop: 1024px;
```

### 3. Use mixins para media queries
```scss
@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}

.banner {
  padding: 16px;

  @include tablet {
    padding: 24px;
  }

  @include desktop {
    padding: 32px;
  }
}
```

### 4. Evite aninhamento muito profundo
```scss
// ❌ Evite
.banner {
  .container {
    .content {
      .text {
        p {
          span { }
        }
      }
    }
  }
}

// ✅ Prefira
.banner { }
.banner__container { }
.banner__content { }
.banner__text { }
```

---

## 🎯 Próximos Passos

1. ✅ Instalar SASS: `npm install --save-dev sass`
2. ✅ Editar `banner.scss` conforme necessário
3. ✅ Executar `npm run sass:watch` durante desenvolvimento
4. ✅ Testar no navegador
5. ✅ Compilar antes do commit: `npm run sass:banner`

**Arquivo criado:** [blocks/banner/banner.scss](blocks/banner/banner.scss)

---

**Pronto para usar! 🚀**
