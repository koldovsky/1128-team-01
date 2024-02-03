const form = document.querySelector(".contact__form");
const message = document.querySelector(".overlaybg")
let phoneNum = document.querySelector(".phone-number");
let userName = document.querySelector(".name");
const submitButton = document.querySelector(".contact__submit")
const okButton = document.querySelector(".messagebox__button")

const maxUsernameLength = 5

form.addEventListener("submit", showMessageBox);
okButton.addEventListener("click", hideMessageBox)

function showMessageBox(event) {
    event.preventDefault();
    message.style.display = "flex";
}

function hideMessageBox() {
    message.style.display = "none"
}


