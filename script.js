document.addEventListener('DOMContentLoaded', () => {
    // Activar animaciones en los divs
    const sections = document.querySelectorAll('.content-section');
    
    const showSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(showSection, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Mostrar/ocultar el menú en móviles
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Cambiar color de fondo del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});




