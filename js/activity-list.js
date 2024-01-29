const activityList = [
  {
    id: "1",
    title: "Horse Riding",
    image: "img/horse_riding.webp",
    description:
      "Take a measured romantic horseback riding tour and enjoy our unforgettable picturesque surroundings.",
    price: "$4/hour",
  },
  {
    id: "2",
    title: "Rock Climbing",
    image: "img/rock_climbing.webp",
    description:
      "Whether you are a professional mountaineer or it’s your first time, Yosemite is one of the best places for this kind of sport.",
    price: "$2/hour",
  },
  {
    id: "3",
    title: "Biking",
    image: "img/biking.webp",
    description:
      "Rent a bike and take a fun and easy two-wheel tour over Yosemite Valley. It usually takes 2 hours.",
    price: "$1/hour",
  },
  {
    id: "4",
    title: "Rafting",
    image: "img/rafting.webp",
    description:
      "You have a perfect choice to combine your river rafting adventure with a visit to the park. Test our waters.",
    price: "$3/hour",
  },
  {
    id: "5",
    title: "Fishing",
    image: "img/fishing.webp",
    description:
      "With a number of permanent streams and mountain lakes, we offer anglers of all levels a diverse variety of opportunities for fishing.",
    price: "$2/hour",
  },
  {
    id: "6",
    title: "Spas and Wellness",
    image: "img/spa_well.webp",
    description:
      "After a long exhausting day, you can relax and pamper yourself in our unique spa and wellness center.",
    price: "$2/hour",
  },
];

function renderActivitiesList(activities) {
  let activitiesDomString = "";
  for (const activity of activities) {
    activitiesDomString += `
        <div class="activities__item activity">
            <div class="image-container">
                <div class="activity__content">
                    <img class="activity__image" src="${activity.image}" alt="${activity.description}" />
                    <h3 class="activity__title">${activity.title}</h3>
                    <p class="activity__price">${activity.price}</p>
                    <p class="activity__description">${activity.description}</p>
                </div>
            </div>
        </div>`;
  }
  document.querySelector(".activities__group").innerHTML = activitiesDomString;
}

renderActivitiesList(activityList);
