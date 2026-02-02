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
