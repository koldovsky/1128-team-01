// const response = await fetch('json/adventure_cards.json');
// const adventureCards = await response.json();
const adventureCards =[
    {
        "id": 1,
        "src": "img/adventures/getaway.webp",
        "alt": "Yosemite Gateway Horse Ranch",
        "description": "Yosemite Gateway Horse Ranch \"Getaway\" Cottage"
    },
    {
        "id": 2,
        "src": "img/adventures/toulumne.webp",
        "alt": "Tuolumne Meadows Lodge",
        "description": "Tuolumne Meadows Lodge"
    },
    {
        "id": 3,
        "src": "img/adventures/sierra.webp",
        "alt": "Sierra Sunrise Vacation Rentale",
        "description": "Sierra Sunrise Vacation Rentale"
    },
    {
        "id": 4,
        "src": "img/adventures/evergreen.webp",
        "alt": "Donya Marie's Cottage on Evergreen",
        "description": "Donya Marie's Cottage on Evergreen"
    },
    {
        "id": 5,
        "src": "img/adventures/sierra-cottage.webp",
        "alt": "Sierra Meadow Cottage",
        "description": "Sierra Meadow Cottage"
    },
    {
        "id": 6,
        "src": "img/adventures/river-house.webp",
        "alt": "Yosemite’s River House",
        "description": "Yosemite’s River House"
    }
];
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
