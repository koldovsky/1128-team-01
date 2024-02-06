const response = await fetch('json/adventure_cards.json');
const adventureCards = await response.json();

const HOVER_BUTTON_CLASS = 'toolbar-button-hover';
const MIN_SCALE = 1;
const MAX_SCALE = 2;
let cur_scale = 1;

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

const openModal = path => {
    const modal = document.getElementById("lightboxModal");
    const element = document.querySelector('.lightbox-modal__image');
    modal.style.display = "grid";
    element.src = path;
}

const closeModal = () => {
    const modal = document.getElementById("lightboxModal");
    const imageWrapper = document.querySelector(".lightbox-modal__image-wrapper");
    modal.style.display = "none";
    imageWrapper.style.transform = "scale(1)";
}



function zoomInImage() {
    const imageWrapper = document.querySelector(".lightbox-modal__image-wrapper");
    let scale_value = cur_scale + 0.3;
    if ( scale_value !== MAX_SCALE && scale_value < MAX_SCALE ) {
        imageWrapper.style.transform = `scale(${scale_value})`;  
        cur_scale = scale_value; 
    } else {
        cur_scale = MAX_SCALE
        imageWrapper.style.transform = `scale(${cur_scale})`;
    }
    updateZoomButtonHover();

}

function zoomOutImage() {
    const imageWrapper = document.querySelector(".lightbox-modal__image-wrapper");
    let scale_value = cur_scale - 0.3;
    if ( scale_value !== MIN_SCALE && scale_value > MIN_SCALE ) {
        imageWrapper.style.transform = `scale(${scale_value})`; 
        cur_scale = scale_value;
    } else {
        cur_scale = MIN_SCALE
        imageWrapper.style.transform = `scale(${cur_scale})`;
    }
    updateZoomButtonHover();
}

function updateZoomButtonHover() {
    const zoomInButton = document.getElementById("lightboxZoomInButton");
    const zoomOutButton = document.getElementById("lightboxZoomOutButton");

    if (cur_scale === MAX_SCALE) {
        zoomInButton.classList.remove(HOVER_BUTTON_CLASS);
    } else {
        zoomInButton.classList.add(HOVER_BUTTON_CLASS);
    }

    if (cur_scale === MIN_SCALE) {
        zoomOutButton.classList.remove(HOVER_BUTTON_CLASS);
    } else {
        zoomOutButton.classList.add(HOVER_BUTTON_CLASS);
    }
}

function attachLightboxEventListeners() {
    const closeButton = document.getElementsByClassName("lightbox-modal__close-button")[0];
    closeButton.addEventListener("click", closeModal);
   
    const lightboxButtons = document.getElementsByClassName("image-wrapper-btn-lightbox");
    
    Array.from(lightboxButtons).forEach(button => {
        button.addEventListener("click", () => {
            const imagePath = button.previousElementSibling.getAttribute("src");
            openModal(imagePath);
        });
    });


    const zoomInButton = document.getElementById("lightboxZoomInButton");
    const zoomOutButton = document.getElementById("lightboxZoomOutButton");

    zoomInButton.addEventListener("click", zoomInImage);
    zoomOutButton.addEventListener("click", zoomOutImage);

}


renderAdventureCards(adventureCards);
attachLightboxEventListeners();
