/**
 * Create element
 * 
 * @param {string} tag
 * @param {array} attributes
 * @param {array} appendChild
 * @param {string} innerHTML
 * @returns {object}
 * @example _e('div', [['class', 'container']], [_e('h1', [], [], 'Hello World!')]);
 * @example _e('div', [['class', 'container']], [], 'Hello World!');
 * @example _e('div', [['class', 'container']]);
 * @example _e('div');
 */

export function _e(tag, attributes = {}, children = [], innerHTML) {
    const element = document.createElement(tag);

    for (const [attr, value] of Object.entries(attributes)) {
        element.setAttribute(attr, value);
    }

    for (const child of children) {
        element.appendChild(child);
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

