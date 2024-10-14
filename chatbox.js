function getChatbotResponse(userMessage) {
    var messageLower = userMessage.toLowerCase();

    if (messageLower.includes("bonjour")) {
        return "Bonjour! Comment puis-je vous aider ?";
    } else if (messageLower.includes("prix")) {
        return "Les prix dépendent de la destination. Pour quelle ville souhaitez-vous obtenir des informations ?";
    } else if (messageLower.includes("reservation")) {
        return "Vous pouvez réserver vos billets sur notre page de réservation en ligne.";
    } else if (messageLower.includes("horaire")) {
        return "Les horaires de nos bus sont disponibles sur la page des horaires. Souhaitez-vous le lien ?";
    } else if (messageLower.includes("contact")) {
        return "Vous pouvez nous contacter par email à info@ticketsmada.com ou par téléphone au +261 34 000 0000.";
    } else if (messageLower.includes("au revoir")) {
        return "Au revoir ! Revenez si vous avez d'autres questions.";
    } else {
        return "Je suis désolé, je ne comprends pas votre demande.";
    }
}