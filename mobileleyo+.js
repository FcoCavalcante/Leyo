// mobileleyo+.js
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('show');
});

document.getElementById('search-icon').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('expanded');
    document.querySelector('.search-input').focus(); // Coloca o foco na barra de busca
});