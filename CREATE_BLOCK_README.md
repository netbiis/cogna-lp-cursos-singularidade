# Criador de Blocos - Adobe Edge Delivery

Este script CLI facilita a criação de novos blocos para o Adobe Edge Delivery.

## Como usar

### Comando rápido:
```bash
npm run create-block
```

### Ou diretamente:
```bash
node create-block.js
```

## O que o script faz

O script vai fazer algumas perguntas e criar automaticamente:

1. 📁 Uma pasta para o bloco em `blocks/[nome-do-bloco]/`
2. 📄 Arquivo JSON de configuração: `_[nome-do-bloco].json`
3. 💻 Arquivo JavaScript: `[nome-do-bloco].js`
4. 🎨 Arquivo CSS: `[nome-do-bloco].css`

## Exemplo de uso

```bash
$ npm run create-block

🚀 Criador de Blocos Adobe Edge Delivery

📝 Digite o nome do bloco: Feature List
👶 O bloco tem itens filhos? (s/n): s

✅ Diretório criado: blocks/feature-list/
✅ Arquivo criado: _feature-list.json
✅ Arquivo criado: feature-list.js
✅ Arquivo criado: feature-list.css

🎉 Bloco "feature-list" criado com sucesso!

📁 Localização: blocks/feature-list/

💡 Próximos passos:
   1. Edite o arquivo _feature-list.json para configurar os campos
   2. Implemente a lógica no arquivo feature-list.js
   3. Estilize no arquivo feature-list.css
   4. Execute: npm run build:json
```

## Tipos de blocos

### Bloco simples (sem filhos)
- Ideal para blocos como hero, banner, etc.
- Cria um modelo simples com campos básicos

### Bloco com itens filhos (com filhos)
- Ideal para blocos como cards, accordion, tabs, etc.
- Cria dois modelos: um para o container e outro para os itens filhos

## Estrutura gerada

### Para bloco simples:
```
blocks/
  meu-bloco/
    _meu-bloco.json    # Configuração do bloco
    meu-bloco.js       # Lógica JavaScript
    meu-bloco.css      # Estilos CSS
```

### Para bloco com filhos:
```
blocks/
  meu-bloco/
    _meu-bloco.json    # Configuração do bloco + modelo de itens filhos
    meu-bloco.js       # Lógica JavaScript
    meu-bloco.css      # Estilos CSS
```

## Após criar o bloco

1. **Personalize o JSON**: Edite `_[bloco].json` para adicionar os campos específicos que seu bloco precisa
2. **Implemente o JavaScript**: Adicione a lógica de renderização em `[bloco].js`
3. **Estilize**: Customize os estilos em `[bloco].css`
4. **Build**: Execute `npm run build:json` para compilar as configurações
5. **Teste**: Use o bloco no seu site Edge Delivery

## Dicas

- Use nomes descritivos para os blocos (ex: "Product Grid", "Testimonial Slider")
- O script converte automaticamente o nome para kebab-case (ex: "Product Grid" → "product-grid")
- Sempre execute `npm run build:json` após criar ou modificar blocos