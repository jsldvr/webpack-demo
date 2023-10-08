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

export default function _e(tag, attributes = [], appendChild = [], innerHTML) {
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