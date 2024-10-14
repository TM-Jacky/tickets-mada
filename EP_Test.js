document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const loginSection = document.getElementById("login-section");
    const signupSection = document.getElementById("signup-section");

    // Bascule vers l'onglet de connexion
    loginTab.addEventListener("click", function () {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginSection.style.display = "block";
        signupSection.style.display = "none";
    });

    // Bascule vers l'onglet d'inscription
    signupTab.addEventListener("click", function () {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        signupSection.style.display = "block";
        loginSection.style.display = "none";
    });

    // Gestion des icônes de visibilité du mot de passe
    const togglePassword = document.getElementById("toggle-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
    const toggleLoginPassword = document.getElementById("toggle-login-password");
    const passwordInput = document.getElementById("signup-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const loginPasswordInput = document.getElementById("login-password");
    const passwordStrengthIndicator = document.getElementById("password-strength");

    // Afficher ou masquer le mot de passe d'inscription
    togglePassword.addEventListener("click", function () {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Afficher ou masquer la confirmation du mot de passe
    toggleConfirmPassword.addEventListener("click", function () {
        const type = confirmPasswordInput.type === "password" ? "text" : "password";
        confirmPasswordInput.type = type;
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Afficher ou masquer le mot de passe de connexion
    toggleLoginPassword.addEventListener("click", function () {
        const type = loginPasswordInput.type === "password" ? "text" : "password";
        loginPasswordInput.type = type;
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Évaluer la force du mot de passe
    passwordInput.addEventListener("input", function () {
        const password = this.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        passwordStrengthIndicator.style.backgroundColor =
            strength === 4 ? "green" :
            strength === 3 ? "yellow" :
            "red";
    });

    // Gérer l'envoi du formulaire d'inscription
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("signup-email").value;
        const code = Math.floor(100000 + Math.random() * 900000); // Génération d'un code aléatoire à 6 chiffres
        const message = `Merci de vous être inscrit. Votre code de confirmation est : ${code}`;

        // Afficher un message de notification
        const notification = document.getElementById("notification");
        notification.style.display = "block";
        notification.innerText = message;
        notification.style.color = "green";

        // Simulation d'envoi d'un e-mail
        setTimeout(() => {
            alert(`Un e-mail de confirmation a été envoyé à ${email} avec le code : ${code}`);
            signupSection.style.display = "none"; // Masquer la section d'inscription
            loginSection.style.display = "block"; // Afficher la section de connexion
            loginTab.classList.add("active");
            signupTab.classList.remove("active");
        }, 2000);
    });
});


// Gérer l'envoi du formulaire de connexion
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Simulation de la connexion
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Exemple de vérification (remplacez ceci par votre logique réelle)
    if (email === "test@example.com" && password === "password") {
        // Stocker les informations de l'utilisateur dans le localStorage
        localStorage.setItem("userEmail", email);
        
        // Redirection vers l'espace client
        window.location.href = "espace_client.html"; // Changez cette URL selon vos besoins
    } else {
        // Affichez un message d'erreur
        const notification = document.getElementById("notification");
        notification.style.display = "block";
        notification.innerText = "Identifiants incorrects.";
        notification.style.color = "red";
    }
});

// Gérer l'envoi du formulaire d'inscription
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(signupForm);

    // Envoi des données au serveur
    fetch('votre_script_d_inscription.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Afficher un message de notification
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            notification.innerText = "Inscription réussie ! Un e-mail de confirmation a été envoyé.";
            notification.style.color = "green";

            // Passer à la section de connexion après un délai
            setTimeout(() => {
                loginSection.style.display = "block";
                signupSection.style.display = "none";
                loginTab.classList.add("active");
                signupTab.classList.remove("active");
            }, 2000);
        } else {
            // Afficher le message d'erreur
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            notification.innerText = data.message; // Afficher le message d'erreur du serveur
            notification.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});