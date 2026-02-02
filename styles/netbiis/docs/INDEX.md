# 📚 Netbiis Bootstrap - Documentation Index

Welcome to **Netbiis Bootstrap** - Modular Grid CSS and Responsive system for Adobe Edge Delivery!

---

## 🚀 Getting Started

### For New Developers
1. 📖 Leia o [**Getting Started**](../GETTING_STARTED.md) - Quick start
2. 📘 Leia o [**Guia Completo**](GRID_RESPONSIVE_GUIDE.md) - 15 min
3. ⚡ Consulte o [**Cheat Sheet**](GRID_CHEAT_SHEET.md) - Referência rápida
4. 🎨 Veja o [**grid-examples.html**](grid-examples.html) - Exemplos visuais

### For Experienced Developers
1. 🚀 [**Cheat Sheet**](GRID_CHEAT_SHEET.md) - Comece aqui!
2. 🎨 [**SASS Generic Guide**](SASS_GENERIC_GUIDE.md) - SASS nos blocos
3. 📖 [**Guia Completo**](GRID_RESPONSIVE_GUIDE.md) - Quando precisar de detalhes

### For Existing Project Migration
1. 🔄 [**Guia de Migração**](MIGRATION_GUIDE.md) - Passo a passo
2. 📖 [**Guia Completo**](GRID_RESPONSIVE_GUIDE.md) - Referência completa
3. 🎯 [**Setup Netbiis**](NETBIIS_SETUP.md) - Como configurar

---

## 📖 Available Documentation

### 1. 📘 [GRID_RESPONSIVE_GUIDE.md](GRID_RESPONSIVE_GUIDE.md)
**Complete Grid & Responsive System Guide** _(reading time: 15-20 min)_

📋 **Conteúdo:**
- ✅ Breakpoints e sistema de containers
- ✅ Grid CSS (12 colunas + auto-fit)
- ✅ Flexbox completo
- ✅ Sistema de espaçamento
- ✅ Responsividade com prefixos
- ✅ Exemplos práticos detalhados
- ✅ Dicas de uso e customização

**Quando usar:** Primeira leitura, aprendizado detalhado, consulta de referência.

---

### 2. 🚀 [GRID_CHEAT_SHEET.md](GRID_CHEAT_SHEET.md)
**Referência Rápida** _(consulta: 1-2 min)_

📋 **Conteúdo:**
- ✅ Todas as classes em formato condensado
- ✅ Exemplos de código rápidos
- ✅ Padrões mais usados
- ✅ Dicas importantes

**Quando usar:** Durante o desenvolvimento, para consultas rápidas de classes.

---

### 3. 🔄 [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)
**Guia de Migração de Código Existente** _(leitura: 10-15 min)_

📋 **Conteúdo:**
- ✅ Comparações "Antes vs Depois"
- ✅ Estratégia de migração em fases
- ✅ Checklist de migração
- ✅ Dicas práticas
- ✅ Benefícios mensuráveis

**Quando usar:** Ao migrar componentes existentes para o novo sistema.

---

### 4. 🎨 [SASS_GENERIC_GUIDE.md](SASS_GENERIC_GUIDE.md)
**Guia SASS Genérico para Blocos** _(leitura: 20-25 min)_

📋 **Conteúdo:**
- ✅ Como usar SASS em qualquer bloco
- ✅ Arquivos compartilhados (_variables, _mixins, _functions)
- ✅ Scripts disponíveis (compile, watch, build)
- ✅ Variáveis, Mixins e Funções disponíveis
- ✅ Exemplos completos (hero, cards, accordion)
- ✅ Melhores práticas e workflow

**Quando usar:** Ao criar ou converter blocos para SASS.

---

### 5. 🎯 [SASS_GUIDE.md](SASS_GUIDE.md)
**Guia SASS Específico do Banner** _(leitura: 10-15 min)_

📋 **Conteúdo:**
- ✅ Setup SASS para o bloco banner
- ✅ Estrutura BEM com nesting
- ✅ Variáveis e mixins
- ✅ Como compilar

**Quando usar:** Exemplo específico de implementação SASS em bloco.

---

### 6. 📦 [NETBIIS_SETUP.md](NETBIIS_SETUP.md)
**Documentação de Setup do Netbiis Bootstrap** _(leitura: 5-10 min)_

📋 **Conteúdo:**
- ✅ Resumo da implementação
- ✅ Estrutura de arquivos
- ✅ Como foi configurado
- ✅ Arquivos criados

**Quando usar:** Para entender a estrutura geral do sistema.

---

### 7. 💻 [../netbiis-bootstrap.css](../netbiis-bootstrap.css)
**Código Fonte CSS Compilado** _(referência técnica)_

📋 **Conteúdo:**
- ✅ Todo o código CSS do sistema Grid & Responsivo
- ✅ Variáveis CSS customizáveis
- ✅ Media queries
- ✅ Todas as classes utilitárias

**Quando usar:** Para entender implementação, customizar variáveis, debugging.

**Nota:** O arquivo [styles/styles.css](styles/styles.css) contém o CSS original do projeto Adobe Edge Delivery.

---

## 🎯 Fluxos de Trabalho Recomendados

### Fluxo 1: Novo no Sistema
```
📖 GRID_RESPONSIVE_GUIDE.md (leitura completa)
    ↓
🎨 grid-examples.html (explorar exemplos)
    ↓
🚀 GRID_CHEAT_SHEET.md (marcar como favorito)
    ↓
💻 Começar a desenvolver!
```

### Fluxo 2: Desenvolvimento Diário
```
🚀 GRID_CHEAT_SHEET.md (consulta rápida)
    ↓
🎨 grid-examples.html (quando precisar de inspiração)
    ↓
📖 GRID_RESPONSIVE_GUIDE.md (para casos específicos)
```

### Fluxo 3: Migração de Projeto
```
🔄 MIGRATION_GUIDE.md (ler estratégia)
    ↓
📖 GRID_RESPONSIVE_GUIDE.md (entender sistema)
    ↓
🎨 grid-examples.html (ver padrões)
    ↓
🚀 GRID_CHEAT_SHEET.md (usar durante migração)
```

---

## 🔑 Conceitos-Chave

### Breakpoints
```
sm:  640px+  (tablets pequenos)
md:  768px+  (tablets)
lg:  1024px+ (desktops)
xl:  1280px+ (desktops grandes)
```

### Mobile First
```html
<!-- Classes sem prefixo = mobile -->
<!-- Adicione prefixos para telas maiores -->
<div class="col-12 md:col-6 lg:col-4">
```

### Combinação de Classes
```html
<!-- Você pode combinar múltiplas classes -->
<div class="container py-xxl">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-lg">
    <div class="p-lg">...</div>
  </div>
</div>
```

---

## 📊 Comparação Rápida

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **CSS Customizado** | ~500 linhas | ~100 linhas |
| **Responsividade** | Manual (@media) | Prefixos (sm:, md:) |
| **Manutenção** | Difícil | Fácil |
| **Consistência** | Variável | 100% |
| **Velocidade Dev** | Lenta | Rápida |
| **Curva Aprendizado** | Alta | Baixa |

---

## 💡 Dicas Rápidas

1. **Use Container sempre**
   ```html
   <section class="container">...</section>
   ```

2. **Gap > Margin** (entre items)
   ```html
   <div class="flex gap-md">...</div>
   ```

3. **Mobile First**
   ```html
   <div class="col-12 md:col-6">...</div>
   ```

4. **Grid Auto para Cards**
   ```html
   <div class="grid grid-cols-auto gap-lg">...</div>
   ```

5. **Consulte Cheat Sheet**
   - Tenha aberto durante desenvolvimento
   - Ctrl+F para buscar rapidamente

---

## 🛠️ Ferramentas e Recursos

### Arquivos do Sistema
- 📄 [styles/netbiis-bootstrap.css](styles/netbiis-bootstrap.css) - CSS do sistema Grid
- 📄 [styles/styles.css](styles/styles.css) - CSS original do projeto
- 📄 [grid-examples.html](grid-examples.html) - Exemplos HTML

### Documentação
- 📘 [GRID_RESPONSIVE_GUIDE.md](GRID_RESPONSIVE_GUIDE.md) - Guia completo
- 📗 [GRID_CHEAT_SHEET.md](GRID_CHEAT_SHEET.md) - Referência rápida
- 📙 [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - Migração
- 📕 [INDEX.md](INDEX.md) - Este índice

### README Principal
- 📖 [README.md](README.md) - Informações do projeto

---

## 🎓 Próximos Passos

### Iniciante
1. ✅ Ler o Guia Completo
2. ✅ Abrir exemplos no navegador
3. ✅ Criar seu primeiro componente usando o sistema
4. ✅ Praticar com diferentes layouts

### Intermediário
1. ✅ Dominar classes responsivas
2. ✅ Combinar Grid + Flexbox
3. ✅ Customizar variáveis CSS
4. ✅ Criar componentes complexos

### Avançado
1. ✅ Migrar projeto existente
2. ✅ Otimizar performance
3. ✅ Criar padrões do projeto
4. ✅ Contribuir com melhorias

---

## 📞 Suporte

Encontrou um problema ou tem sugestões?

1. Consulte a documentação relevante acima
2. Verifique os exemplos visuais
3. Revise o código fonte em `styles/styles.css`
4. Abra uma issue no repositório

---

## 📌 Links Rápidos

| Documento | Para que serve | Link |
|-----------|----------------|------|
| 🚀 **Cheat Sheet** | Consulta rápida diária | [Abrir](GRID_CHEAT_SHEET.md) |
| 📖 **Guia Completo** | Aprendizado e referência | [Abrir](GRID_RESPONSIVE_GUIDE.md) |
| 🎨 **Exemplos** | Ver funcionando | [Abrir](grid-examples.html) |
| 🔄 **Migração** | Atualizar código existente | [Abrir](MIGRATION_GUIDE.md) |
| 💻 **CSS Grid** | Código do sistema | [Abrir](styles/netbiis-bootstrap.css) |
| 📄 **CSS Original** | CSS base do projeto | [Abrir](styles/styles.css) |

---

**Bom desenvolvimento! 🚀**

*Sistema de Grid & Responsividade v1.0*
*Adobe Edge Delivery Compatible*
