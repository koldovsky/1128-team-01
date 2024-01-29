const clientsCount = document.querySelector(".clients__count");
clientsCount.textContent = 1024;

setInterval(changeClientsCount, 5000);

function changeClientsCount() {
  clientsCount.textContent = setClientsCount(
    getRandomInt(6),
    parseInt(clientsCount.textContent, 10)
  );
}

function setClientsCount(value, clientsCount) {
  return (clientsCount += value);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
