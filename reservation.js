document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const notification = document.getElementById("notification");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const logoutLink = document.getElementById("logout-link");

    // Gestion de l'inscription
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.email === email)) {
            showNotification("Cet email est déjà utilisé.", "error");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        signupForm.reset();
        showNotification("Inscription réussie !", "success");
        popup.style.display = "block"; // Affiche le pop-up de confirmation
        setTimeout(() => {
            popup.style.display = "none"; // Cache le pop-up après 3 secondes
        }, 3000);
        // Rediriger vers le formulaire de connexion
        showSection("login");
    });

    // Gestion de la connexion
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const storedUser = users.find(user => user.email === email && user.password === password);

        if (storedUser) {
            showNotification("Connexion réussie !");
            localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
            loginForm.reset();
            // Redirection vers la page de réservation
            window.location.href = "reservation.html"; // Redirection vers reservation.html
        } else {
            showNotification("Email ou mot de passe incorrect.", "error");
        }
    });

    // Gestion de la déconnexion
    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        window.location.href = "EP_Test.html"; // Rediriger vers la page de connexion
    });

    // Fonction de notification
    function showNotification(message, type = "success") {
        notification.textContent = message;
        notification.className = type === "success" ? "success" : "error";
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);
    }

    // Gestion du pop-up
    closePopup.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});