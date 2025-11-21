
// Capturar nodos del formulario para agregar nueva tarjeta (DECLARAR PRIMERO)
const articleForm = document.getElementById('article-form-submit');
const articlesContainer = document.querySelector('.articles-container');
const imageURLInputForm = document.getElementById('image-url');
const titleInputForm = document.getElementById('title');
const descriptionInputForm = document.getElementById('description');
const dateInputForm = document.getElementById('date');
const categoryInputForm = document.getElementById('category');

// Escuchar el evento submit del formulario
articleForm.addEventListener('submit', listenerSubmitEvent);

function listenerSubmitEvent(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario (RECARGA)

    // Capturamos los valores al enviar el formulario
    const imageURL = imageURLInputForm.value;
    let title = titleInputForm.value.charAt(0).toUpperCase() + titleInputForm.value.slice(1);
    let description = descriptionInputForm.value.charAt(0).toUpperCase() + descriptionInputForm.value.slice(1);
    const date = dateInputForm.value;
    const category = categoryInputForm.value;

    // Restringir título a máximo 60 caracteres
    if (title.length > 60) {
        title = title.substring(0, 60) + '...';
    }

    // Restringir descripción a máximo 120 caracteres
    if (description.length > 120) {
        description = description.substring(0, 120) + '...';
    }

    // Parsear fecha al formato "Month Day, Year"
    const dateObject = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    // Crear nueva tarjeta de artículo
    const newArticleCard = document.createElement('article');
    newArticleCard.classList.add('article-card');
    newArticleCard.innerHTML = `
        <button class="delete-card-btn" aria-label="Delete article">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
        <header>
            <img src="${imageURL}" alt="${title}">
        </header>
                    
        <h2>${title}</h2>

        <p>${description}</p>

        <footer>
            <time datetime="${date}">${formattedDate}</time>
            <span aria-hidden="true">•</span>
            <span>${category}</span>
        </footer>
    `;

    // Agregar la nueva tarjeta al contenedor de artículos
    articlesContainer.appendChild(newArticleCard);

    // Funcionalidad de eliminar a la tarjeta
    const deleteBtn = newArticleCard.querySelector('.delete-card-btn');
    deleteBtn.addEventListener('click', deleteCard);
    
    function deleteCard(event) {
        event.stopPropagation();
        setTimeout(() => {
            newArticleCard.remove();
        }, 400);
    }

    // Resetear el formulario después de agregar la tarjeta
    articleForm.reset();
}





// ============================================
// APP.JS - INTERACTIVITY FOR MOBILE MENU & DROPDOWNS
// ============================================
// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const headerNav = document.querySelector('.header-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    headerNav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.header-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!headerNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    }
});

// Category dropdown toggle
const categoryDropdownBtn = document.querySelector('.category-dropdown-btn');
const categoryDropdownMenu = document.querySelector('.category-dropdown-menu');

if (categoryDropdownBtn && categoryDropdownMenu) {
    categoryDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = categoryDropdownBtn.getAttribute('aria-expanded') === 'true';
        categoryDropdownBtn.setAttribute('aria-expanded', !isExpanded);
        categoryDropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking on a category
    const categoryButtons = categoryDropdownMenu.querySelectorAll('button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryDropdownBtn.setAttribute('aria-expanded', 'false');
            categoryDropdownMenu.classList.remove('active');
            // Update button text with selected category
            const selectedCategory = button.textContent;
            categoryDropdownBtn.querySelector('span').textContent = selectedCategory;
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!categoryDropdownBtn.contains(e.target) && !categoryDropdownMenu.contains(e.target)) {
            categoryDropdownBtn.setAttribute('aria-expanded', 'false');
            categoryDropdownMenu.classList.remove('active');
        }
    });
}
