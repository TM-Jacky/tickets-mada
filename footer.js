document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});