const callUsButton = document.querySelector(".questions__call-us");
const reservationButton = document.querySelector(".questions__reservation");

callUsButton.addEventListener("mouseover", function () {
  callUsButton.classList.add("animate-hover");
});

callUsButton.addEventListener("mouseout", function () {
  callUsButton.classList.remove("animate-hover");
});

reservationButton.addEventListener("mouseover", function () {
  reservationButton.classList.add("animate-hover");
});

reservationButton.addEventListener("mouseout", function () {
  reservationButton.classList.remove("animate-hover");
});
