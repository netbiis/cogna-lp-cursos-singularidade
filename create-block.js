#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createBlockJSON(blockName, hasChildren = false, hasImage = false) {
  const blockId = toKebabCase(blockName);
  const blockTitle = blockName
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const json = {
    definitions: [
      {
        title: blockTitle,
        id: blockId,
        plugins: {
          xwalk: {
            page: {
              resourceType: 'core/franklin/components/block/v1/block',
              template: {
                name: blockTitle,
                ...(hasChildren ? { filter: blockId } : { model: blockId }),
              },
            },
          },
        },
      },
    ],
    models: [],
    filters: [],
  };

  if (hasChildren) {
    // Adiciona definição do item filho
    json.definitions.push({
      title: `${blockTitle} Item`,
      id: `${blockId}-item`,
      plugins: {
        xwalk: {
          page: {
            resourceType: 'core/franklin/components/block/v1/block/item',
            template: {
              name: `${blockTitle} Item`,
              model: `${blockId}-item`,
            },
          },
        },
      },
    });

    // Modelo para o item filho
    const models = {
      id: `${blockId}-item`,
      fields: [
        {
          component: 'text',
          valueType: 'string',
          name: 'title',
          label: 'Title',
          value: '',
        },
        {
          component: 'richtext',
          name: 'description',
          value: '',
          label: 'Description',
          valueType: 'string',
        },
      ],
    };

    if (hasImage) {
      models.fields.push({
        component: 'reference',
        name: 'image',
        value: '',
        label: 'Image',
        valueType: 'string',
        multi: false,
      });
    }

    json.models.push(models);

  } else {
    // Modelo simples sem filhos
    json.models.push({
      id: blockId,
      fields: [
        {
          component: 'text',
          valueType: 'string',
          name: 'title',
          label: 'Title',
          value: '',
        },
        {
          component: 'richtext',
          name: 'description',
          value: '',
          label: 'Description',
          valueType: 'string',
        },
      ],
    });

    if (hasImage) {
      json.models[0].fields.push({
        component: 'reference',
        name: 'image',
        value: '',
        label: 'Image',
        valueType: 'string',
        multi: false,
      });
    }
  }

  return JSON.stringify(json, null, 2);
}

function createBlockJS(blockName) {
  const functionName = toCamelCase(blockName);
  return `
    // Import helper functions for extracting content from block elements
    import { extractComponentContent, extractComponentHtmlFrom } from '../../scripts/block-helpers.js';

    /**
     * Decorates the ${blockName} block
     *
     * This function transforms the raw ${blockName} block into a structured layout with:
     *
     * @param {HTMLElement} block - The ${blockName} block element containing title, description, and image(optional),
     *
     * Block structure expected:
     * - children[0]: title element (h1)
     * - children[1]: description element (p)
     * - children[2]: image element (picture)
     */
    export default function decorate(block) {
      // Destructure block children into semantic variables
      const [title, description, image] = block.children;

      // Single column on mobile, two columns on large screens (lg breakpoint)
      const grid = document.createElement('div');
      grid.className = '${functionName} grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mt-md py-xl';

      // Create content column (left side)
      const content = document.createElement('div');
      content.className = 'grid-item p-lg';
      content.innerHTML = \`
        <h1 class="mb-md"> \${ extractComponentContent(title) }</h1 >
        <p class="mb-lg">\${ extractComponentContent(description) }</p>
      \`;
      grid.appendChild(content);

      // Create image column (right side)
      const img = document.createElement('div');
      img.className = 'grid-item p-lg';
      img.innerHTML = extractComponentHtmlFrom(image, 'picture');

      grid.appendChild(img);

      // Replace original block content with the new decorated structure
      block.replaceChildren(grid);
  }`;
}

function createBlockCSS(blockName) {
  const blockClass = toKebabCase(blockName);
  return `.${blockClass} {
  /* Estilos do bloco ${blockName} */
  /* Only demo */
  visibility: inherit;
}
`;
}

async function createBlock() {
  try {
    console.log('\n🚀 Criador de Blocos Adobe Edge Delivery\n');

    // Pergunta o nome do bloco
    const blockName = await question('📝 Digite o nome do bloco: ');

    if (!blockName || blockName.trim() === '') {
      console.error('❌ Nome do bloco não pode ser vazio!');
      rl.close();
      return;
    }

    // Pergunta se tem imagem
    const hasImageInput = await question(
      '🖼️  O bloco tem imagem? (s/n): ',
    );
    const hasImage = hasImageInput.toLowerCase() === 's';

    // Pergunta se tem blocos filhos
    const hasChildrenInput = await question(
      '👶 O bloco tem itens filhos? (s/n): ',
    );
    const hasChildren = hasChildrenInput.toLowerCase() === 's';

    const blockId = toKebabCase(blockName.trim());
    const blockDir = path.join(__dirname, 'blocks', blockId);

    // Verifica se o bloco já existe
    if (fs.existsSync(blockDir)) {
      console.error(`❌ O bloco "${blockId}" já existe!`);
      rl.close();
      return;
    }

    // Cria o diretório do bloco
    fs.mkdirSync(blockDir, { recursive: true });
    console.log(`✅ Diretório criado: blocks/${blockId}/`);

    // Cria os arquivos
    const jsonContent = createBlockJSON(blockName.trim(), hasChildren, hasImage);
    const jsContent = createBlockJS(blockName.trim());

    const cssContent = createBlockCSS(blockName.trim());

    fs.writeFileSync(path.join(blockDir, `_${blockId}.json`), jsonContent);
    console.log(`✅ Arquivo criado: _${blockId}.json`);

    fs.writeFileSync(path.join(blockDir, `${blockId}.js`), jsContent);
    console.log(`✅ Arquivo criado: ${blockId}.js`);

    fs.writeFileSync(path.join(blockDir, `${blockId}.css`), cssContent);
    console.log(`✅ Arquivo criado: ${blockId}.css`);

    console.log(`\n🎉 Bloco "${blockId}" criado com sucesso!`);
    console.log(`\n📁 Localização: blocks/${blockId}/`);
    console.log(`\n💡 Próximos passos:`);
    console.log(`   1. Edite o arquivo _${blockId}.json para configurar os campos`);
    console.log(`   2. Implemente a lógica no arquivo ${blockId}.js`);
    console.log(`   3. Estilize no arquivo ${blockId}.css`);
    console.log(`   4. Execute: npm run build:json\n`);

    rl.close();
  } catch (error) {
    console.error('❌ Erro ao criar bloco:', error.message);
    rl.close();
    process.exit(1);
  }
}

createBlock();