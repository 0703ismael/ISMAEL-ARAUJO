AOS.init({
    duration: 1000,
    once: true,
    offset: 100 // Ativa a animação 100px antes de o elemento entrar na tela
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica se o modo escuro foi salvo anteriormente
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    }
});

// Realce da Seção Ativa na Navegação
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

function highlightNavLink() {
    let current = '';
    const scrollY = window.pageYOffset + header.offsetHeight + 50;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
document.addEventListener('DOMContentLoaded', highlightNavLink);