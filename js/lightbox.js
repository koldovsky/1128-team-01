function openModal(path) {
    const modal = document.getElementById("myModal");
    const element = document.querySelector('.lightbox-modal__image');
    modal.style.display = "block";
    element.src = path;
}

function attachLightboxEventListeners() {
    const closeButton = document.getElementsByClassName("lightbox-modal__close-button")[0];
    closeButton.addEventListener("click", () => document.getElementById("myModal").style.display = "none");
    
    const lightboxButtons = document.getElementsByClassName("image-wrapper-btn-lightbox");

    Array.from(lightboxButtons).forEach(function(button) {
        button.addEventListener("click", () => {
            const imagePath = button.previousElementSibling.getAttribute("src");
            openModal(imagePath);
        });
    });
}

document.addEventListener("partialsLoaded", function() {
    attachLightboxEventListeners();
});
