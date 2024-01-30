const clientsCount = document.querySelector(".clients__count");
const maxClientsIncrement = 6;

clientsCount.textContent = 1024;

const changeClientsCount = () => {
  clientsCount.textContent = Number(clientsCount.textContent) + getRandomInt(maxClientsIncrement);
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

setInterval(changeClientsCount, 5000);