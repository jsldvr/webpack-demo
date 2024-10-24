import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Creates a footer element with a copyright notice.
 * 
 * @returns {HTMLElement} The created footer element.
 */

const createFooter = () => {
    console.log('Create footer');
    const footer = document.createElement('footer');
    footer.className = 'bg-primary text-white text-center p-3';

    const container = document.createElement('div');
    container.className = 'container';

    const text = document.createElement('p');
    text.className = 'm-0';
    text.textContent = '© 2021 My Website';

    container.appendChild(text);
    footer.appendChild(container);

    return footer;
}

document.body.appendChild(createFooter());