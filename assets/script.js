// Hambuger Menu
const navigator = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navigator.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(response => {
    response.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
})
})