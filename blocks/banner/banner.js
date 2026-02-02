// Import helper functions for extracting content from block elements
import { extractComponentContent, extractComponentHtmlFrom } from '../../scripts/block-helpers.js';

/**
 * Decorates the banner block with a responsive grid layout
 *
 * This function transforms the raw banner block into a structured layout with:
 * - A responsive grid that displays single column on mobile and two columns on large screens
 * - Left column: Contains the title, subtitle, and call-to-action button
 * - Right column: Contains the banner image
 *
 * @param {HTMLElement} block - The banner block element containing image, title, subtitle, and CTA
 *
 * Block structure expected:
 * - children[0]: image element (picture)
 * - children[1]: title element (h1)
 * - children[2]: subtitle element (paragraph)
 * - children[3]: cta element (call-to-action link/button)
 */
export default function decorate(block) {
  // Destructure block children into semantic variables
  const [image, title, subtitle, cta] = block.children;

  // Single column on mobile, two columns on large screens (lg breakpoint)
  const grid = document.createElement('div');
  grid.className = 'banner grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mt-md py-xl';

  // Create content column (left side)
  const content = document.createElement('div');
  content.className = 'grid-item p-lg';
  content.innerHTML = `
    <h1 class="mb-md">${extractComponentContent(title)}</h1>
    <p class="mb-lg">${extractComponentContent(subtitle)}</p>
    ${extractComponentHtmlFrom(cta, 'a')}
  `;
  grid.appendChild(content);

  // Create image column (right side)
  const img = document.createElement('div');
  img.className = 'grid-item p-lg';
  img.innerHTML = extractComponentHtmlFrom(image, 'picture');

  grid.appendChild(img);

  // Replace original block content with the new decorated structure
  block.replaceChildren(grid);
}
