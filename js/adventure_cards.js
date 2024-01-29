const response = await fetch('json/adventure_cards.json');
const adventureCards = await response.json();
renderAdventureCards(adventureCards);

function renderAdventureCards(adventureCards) {
    let adventureCardsHtml = '';
    for (const card of adventureCards) {
      adventureCardsHtml += `
        <div class="adventure__grid-item grid-item">
            <div class="item__image-wrapper image-wrapper">
                <img
                    class="image-wrapper-img"
                    src="${card.src}"
                    alt="${card.alt}"/>
                <button class="image-wrapper-btn-lightbox"></button>
            </div>
            <div class="grid-item__text-wrapper">
                <h3 class="grid-item__item-text">
                    ${card.description}
                </h3>
            </div>
        </div>`;
    }
    document.querySelector('.adventure__grid').innerHTML = adventureCardsHtml;
}
