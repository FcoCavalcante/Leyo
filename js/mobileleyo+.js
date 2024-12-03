document.addEventListener('DOMContentLoaded', () => {
    // Alternar menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    // Expansão do campo de busca
    const searchIcon = document.querySelector('#search-icon');
    const searchContainer = document.querySelector('.search-container');

    searchIcon.addEventListener('click', () => {
        searchContainer.classList.toggle('expanded');
    });

    // Botão flutuante para rolar até o topo
    const btnFlutuante = document.querySelector('.btn-flutuante');
    
    btnFlutuante.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
