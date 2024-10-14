document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout");

    // Récupérer l'email de l'utilisateur stocké
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        // Afficher un message de bienvenue
        const welcomeMessage = document.createElement("p");
        welcomeMessage.textContent = `Bienvenue, ${userEmail}!`;
        document.getElementById("main-content").prepend(welcomeMessage);
    }

    logoutButton.addEventListener("click", function() {
        // Supprimer les informations utilisateur de localStorage
        localStorage.removeItem("userEmail");

        // Ajoutez ici la logique pour déconnecter l'utilisateur
        alert("Vous avez été déconnecté.");
        window.location.href = "index.html"; // Redirigez vers la page de connexion ou une autre page
    });
});