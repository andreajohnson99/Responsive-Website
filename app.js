const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('nav.bar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-action');
    menuLinks.classList.toggle('active');
});


