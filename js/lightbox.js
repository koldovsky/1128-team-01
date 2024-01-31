function openModal(path) {
    const modal = document.getElementById("lightboxModal");
    const element = document.querySelector('.lightbox-modal__image');
    modal.style.display = "grid";
    element.src = path;
}

function attachLightboxEventListeners() {
    const closeButton = document.getElementsByClassName("lightbox-modal__close-button")[0];
    closeButton.addEventListener("click", () => document.getElementById("lightboxModal").style.display = "none");
   
    const lightboxButtons = document.getElementsByClassName("image-wrapper-btn-lightbox");
    
    Array.from(lightboxButtons).forEach(button => {
        button.addEventListener("click", () => {
            const imagePath = button.previousElementSibling.getAttribute("src");
            openModal(imagePath);
        });
    });
}

attachLightboxEventListeners();
