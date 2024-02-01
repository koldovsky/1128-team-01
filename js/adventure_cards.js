const response = await fetch('json/adventure_cards.json');
const adventureCards = await response.json();

function renderAdventureCards(adventureCards) {
    let adventureCardsHtml = '';
    adventureCards.forEach((card) => {
        const {src, alt, description} = card;
        adventureCardsHtml += `
            <div class="adventure__grid-item grid-item">
                <div class="item__image-wrapper image-wrapper">
                    <img
                        class="image-wrapper-img"
                        src="${src}"
                        alt="${alt}"/>
                    <button class="image-wrapper-btn-lightbox"></button>
                </div>
                <div class="grid-item__text-wrapper">
                    <h3 class="grid-item__item-text">
                        ${description}
                    </h3>
                </div>
            </div>`;
    });
    document.querySelector('.adventure__grid')?.insertAdjacentHTML('beforeend', adventureCardsHtml);
}

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


renderAdventureCards(adventureCards);
attachLightboxEventListeners();
