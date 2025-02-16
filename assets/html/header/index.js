import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Creates a header element with a navigation bar.
 * 
 * The header includes a brand link, a toggle button for collapsing the navigation on smaller screens,
 * and a list of navigation items.
 * 
 * @returns {HTMLElement} The created header element.
 */
const createHeader = () => {
    console.log('Create header');
    const header = document.createElement('header');
    header.className = 'bg-primary text-white p-3';

    const container = document.createElement('div');
    container.className = 'container';

    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light';

    const brand = document.createElement('a');
    brand.className = 'navbar-brand text-white';
    brand.href = '#';
    brand.textContent = 'My Website';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarNav');
    toggleButton.setAttribute('aria-controls', 'navbarNav');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'navbar-toggler-icon';

    toggleButton.appendChild(toggleIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarNav';

    const navList = document.createElement('ul');
    navList.className = 'navbar-nav';

    const navItems = [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Contact', href: '#' },
    ];

    navItems.forEach(item => {
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';

        const navLink = document.createElement('a');
        navLink.className = 'nav-link text-white';
        navLink.href = item.href;
        navLink.textContent = item.text;

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    collapseDiv.appendChild(navList);
    navbar.appendChild(brand);
    navbar.appendChild(toggleButton);
    navbar.appendChild(collapseDiv);
    container.appendChild(navbar);
    header.appendChild(container);

    return header;
};
// Prepend the header to the body
document.body.prepend(createHeader());