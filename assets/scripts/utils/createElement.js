/**
 * Create element
 * 
 * @param {string} tag
 * @param {array} attributes
 * @param {array} appendChild
 * @param {string} innerHTML
 * @returns {object}
 * @example createElement('div', [['class', 'container']], [createElement('h1', [], [], 'Hello World!')]);
 * @example createElement('div', [['class', 'container']], [], 'Hello World!');
 * @example createElement('div', [['class', 'container']]);
 * @example createElement('div');
 */

export function createElement(tag, attributes = [], appendChild = [], innerHTML) {
    let element = document.createElement(tag);

    if (attributes.length > 0) {
        attributes.forEach(attribute => {
            element.setAttribute(attribute[0], attribute[1]);
        });
    }

    if (appendChild.length > 0) {
        appendChild.forEach(child => {
            element.appendChild(child);
        });
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}