const form = document.querySelector(".contact__form");
const message = document.querySelector(".overlaybg")
const phoneField = document.querySelector(".phone-number");
const userNameField = document.querySelector(".name");
const submitButton = document.querySelector(".contact__submit")
const okButton = document.querySelector(".modal-window__button")

const maxUsernameLength = 5

form.addEventListener("submit", showModalWindow);
okButton.addEventListener("click", hideModalWindow)

function showModalWindow(event) {
    event.preventDefault();
    message.style.display = "flex";
}

function hideModalWindow() {
    message.style.display = "none"
}

// function validatPhone {

// }

function validateName() {
    if (userNameField.value.length > maxUsernameLength) {
        console.log('too long name')
    }
}
