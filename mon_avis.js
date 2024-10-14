// Fonction pour ouvrir le pop-up d'avis
function openFeedbackPopup() {
    document.getElementById('feedback-popup').classList.remove('hidden');
}

// Fonction pour fermer le pop-up d'avis
function closeFeedbackPopup() {
    document.getElementById('feedback-popup').classList.add('hidden');
}

// Fonction pour ouvrir le pop-up de remerciement
function openThankYouPopup() {
    document.getElementById('thank-you-popup').classList.remove('hidden');
}

// Fonction pour fermer le pop-up de remerciement
function closeThankYouPopup() {
    document.getElementById('thank-you-popup').classList.add('hidden');
}

// Gestion des émojis
document.querySelectorAll('.emoji').forEach(function(emoji) {
    emoji.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.getElementById('feedback-form').classList.remove('hidden');
        document.querySelectorAll('.feedback-options input').forEach(input => {
            input.addEventListener('change', function() {
                if (this.value === 'problemes') {
                    document.getElementById('problemes-form').classList.remove('hidden');
                    document.getElementById('suggestions-compliments').classList.add('hidden');
                } else {
                    document.getElementById('problemes-form').classList.add('hidden');
                    document.getElementById('suggestions-compliments').classList.remove('hidden');
                }
            });
        });
    });
});

// Bouton envoyer
document.getElementById('send-feedback').addEventListener('click', function() {
    // Ici tu peux ajouter le code pour envoyer les données du formulaire
    closeFeedbackPopup();
    openThankYouPopup();
});