// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 8000); // Change slide every 8 seconds

    // Affiche la navigation au défilement
    window.addEventListener('scroll', function () {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 4.5 * 37.8) { // 4.5 cm en pixels (~37.8 pixels par cm)
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
});