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
    // Add child item definition
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

    // Model for child item
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
    // Simple model without children
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
     * @param {HTMLElement} block - The ${blockName} block element containing title, description, and image (optional)
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
  /* Block styles for ${blockName} */
  /* Only demo */
  visibility: inherit;
}
`;
}

async function createBlock() {
  try {
    console.log('\n🚀 Adobe Edge Delivery Block Creator\n');

    // Ask for block name
    const blockName = await question('📝 Enter block name: ');

    if (!blockName || blockName.trim() === '') {
      console.error('❌ Block name cannot be empty!');
      rl.close();
      return;
    }

    // Ask if it has image
    const hasImageInput = await question(
      '🖼️  Does the block have an image? (y/n): ',
    );
    const hasImage = hasImageInput.toLowerCase() === 'y';

    // Ask if it has child blocks
    const hasChildrenInput = await question(
      '👶 Does the block have child items? (y/n): ',
    );
    const hasChildren = hasChildrenInput.toLowerCase() === 'y';

    const blockId = toKebabCase(blockName.trim());
    const blockDir = path.join(__dirname, 'blocks', blockId);

    // Check if block already exists
    if (fs.existsSync(blockDir)) {
      console.error(`❌ Block "${blockId}" already exists!`);
      rl.close();
      return;
    }

    // Create block directory
    fs.mkdirSync(blockDir, { recursive: true });
    console.log(`✅ Directory created: blocks/${blockId}/`);

    // Create files
    const jsonContent = createBlockJSON(blockName.trim(), hasChildren, hasImage);
    const jsContent = createBlockJS(blockName.trim());

    const cssContent = createBlockCSS(blockName.trim());

    fs.writeFileSync(path.join(blockDir, `_${blockId}.json`), jsonContent);
    console.log(`✅ File created: _${blockId}.json`);

    fs.writeFileSync(path.join(blockDir, `${blockId}.js`), jsContent);
    console.log(`✅ File created: ${blockId}.js`);

    fs.writeFileSync(path.join(blockDir, `${blockId}.css`), cssContent);
    console.log(`✅ File created: ${blockId}.css`);

    console.log(`\n🎉 Block "${blockId}" created successfully!`);
    console.log(`\n📁 Location: blocks/${blockId}/`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Edit the _${blockId}.json file to configure fields`);
    console.log(`   2. Implement the logic in ${blockId}.js file`);
    console.log(`   3. Style in ${blockId}.css file`);
    console.log(`   4. Run: npm run build:json\n`);

    rl.close();
  } catch (error) {
    console.error('❌ Error creating block:', error.message);
    rl.close();
    process.exit(1);
  }
}

createBlock();