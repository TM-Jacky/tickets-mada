document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu-volet').classList.toggle('hidden');
    document.body.style.marginLeft = document.getElementById('menu-volet').classList.contains('hidden') ? '0' : '20%';
});

document.getElementById('user-menu-toggle').addEventListener('click', function() {
    document.getElementById('user-menu').classList.toggle('hidden');
});

const banniereImage = document.getElementById('banniere-image');
const images = ['banniere_principale1.png', 'banniere_principale2.png']; // Ajoute plus d'images si nécessaire
let currentImage = 0;

function changeBannerImage() {
    currentImage = (currentImage + 1) % images.length;
    banniereImage.style.backgroundImage = `url('${images[currentImage]}')`;
}

setInterval(changeBannerImage, 5000); // Change l'image toutes les 5 secondes