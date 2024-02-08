const form = document.querySelector(".contact__form");
const message = document.querySelector(".modal-window__wrapper");
const phoneField = document.querySelector(".phone-number");
const userNameField = document.querySelector(".name");
const submitButton = document.querySelector(".contact__submit");
const okButton = document.querySelector(".modal-window__button");
const closeButton = document.querySelector(".modal-window__close-btn");
const overlay = document.querySelector(".fullscreen-overlay")
const maxUsernameLength = 5;

form.addEventListener("submit", handleSubmit);
okButton.addEventListener("click", hideModalWindow);
closeButton.addEventListener("click", hideModalWindow);

async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch(event.target.action, {
    method: form.method,
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    showModalWindow();
    form.reset();
  }
}

// function handleSubmit(event) {
//   event.preventDefault();
//   showModalWindow();
// }

function showModalWindow() {
  overlay.style.display = "block"
  message.style.transform = "scale(1)";
  message.style.top = "0vh";
}

function hideModalWindow() {
  message.style.transform = "scale(0)";
  message.style.top = "-100vh";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 250);
}

function validateName() {
  if (userNameField.value.length > maxUsernameLength) {
    console.log("too long name");
  }
}

