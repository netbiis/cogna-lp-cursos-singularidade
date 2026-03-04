/**
 * Extracts and trims the text content from the given object.
 * @param {{ textContent: string } | null | undefined} object The object to extract
 * text content from.
 * @returns {string} The trimmed text content, or an empty string if no object is provided.
 */
export function extractComponentContent(element) {
  if (!element) {
    return '';
  }

  return element.textContent.trim();
}

/**
 * Extracts and returns the outer HTML of the first non-DIV child element.
 * Recursively searches through DIV containers to find the actual content element.
 * @param {HTMLElement | null | undefined} element The element to extract HTML from.
 * @returns {string} The outer HTML of the content element, or an empty string if no element
 * is provided.
 */
export function extractComponentHtml(element) {
  if (!element) {
    return '';
  }
  if (element.children[0].tagName === 'DIV') {
    return extractComponentHtml(element.children[0]);
  }
  return element.children[0].outerHTML.trim();
}

/**
 * Recursively searches for and extracts the outer HTML of a specific element type.
 * Traverses the DOM tree until it finds an element matching the specified tag name.
 * @param {HTMLElement | null | undefined} element The starting element to search from.
 * @param {string} elementType The tag name of the element to find (e.g., 'picture', 'a', 'div').
 * @returns {string} The outer HTML of the matching element, or recursively searches children.
 */
export function extractComponentHtmlFrom(element, elementType) {
  if (!element) {
    return '';
  }
  if (element.tagName === elementType.toUpperCase()) {
    return element.outerHTML.trim();
  }
  return extractComponentHtmlFrom(element.children[0], elementType);
}

/**
 * Splits the direct children of a container by <hr> elements
 * and returns an array of <div class="multifield"> nodes.
 *
 * This function does NOT mutate the original container.
 * It only builds and returns the generated wrapper elements.
 *
 * @param {HTMLElement | null | undefined} container
 * The parent element whose direct children will be processed.
 *
 * @returns {HTMLDivElement[]}
 * An array of <div class="multifield"> elements containing
 * the grouped child nodes.
 */
export function transformToMultifield(container) {
  if (!container) return [];

  const groups = [];
  let currentGroup = [];

  Array.from(container.children).forEach((child) => {
    if (child.tagName.toLowerCase() === 'hr') {
      if (currentGroup.length) {
        groups.push([...currentGroup]);
        currentGroup = [];
      }
    } else {
      currentGroup.push(child);
    }
  });

  if (currentGroup.length) {
    groups.push([...currentGroup]);
  }

  // Criar wrappers SEM alterar o container original
  const wrappers = groups.map((group) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('multifield');

    group.forEach((el) => {
      wrapper.appendChild(el.cloneNode(true)); // clone para não remover do original
    });

    return wrapper;
  });

  return wrappers;
}

/**
 * Determines if the current environment is the Universal Editor or Adobe AEM Cloud.
 *
 * Checks the current window location to see if it matches known patterns for the
 * Universal Editor or Adobe AEM Cloud environments. This can be used to conditionally
 * enable or disable features based on the editing context.
 *
 * @returns {boolean} True if the current environment is the Universal Editor or
 * Adobe AEM Cloud, false otherwise.
 */
export function isUniversalEditor() {
  return window.location.href.includes('universal-editor')
    || window.location.hostname.includes('adobeaemcloud.com')
    || window.location.hash.includes('/ui#/');
}
