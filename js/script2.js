function showModal(description, imageUrl) {
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Exemple de gestion du clic pour chaque bouton "Lire plus"
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut
        const description = this.getAttribute('data-description');
        const imageUrl = this.getAttribute('data-image'); // Ajouter un attribut pour l'URL de l'image
        showModal(description, imageUrl);
    });
});

// Sélectionne le bouton de fermeture et ajoute l'événement de clic
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut
        document.getElementById('modal-overlay').style.display = 'none';
    });
});

