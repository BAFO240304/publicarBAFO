// Navbar scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animaciones fade-up
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Verifica si el clic no fue dentro del menú o en el botón de toggler
    if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
        const collapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        collapse.hide(); // Cierra el menú
    }
});