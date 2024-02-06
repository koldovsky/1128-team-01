const form = document.getElementById("orderACallForm");

const openModal = () => {
    const modal = document.getElementById("orderCallFormModal");
    modal.style.display = "flex";
}

const closeModal = () => {
    const modal = document.getElementById("orderCallFormModal");
    modal.style.display = "none";
}  

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("orderACallForm-status");
    const response = await fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        openModal();
        form.reset();
    }
}

function attachFormEventListeners() {
    form.addEventListener("submit", handleSubmit)

    const closeButtons = document.getElementsByClassName("order-call-modal__message-btn-fro-close");
    
    Array.from(closeButtons).forEach(button => {
        button.addEventListener("click", () => {
            closeModal();
        });
    });
}

attachFormEventListeners();