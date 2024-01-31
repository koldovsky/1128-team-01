const form = document.getElementById("orderACallForm");
    
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
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }
}
form.addEventListener("submit", handleSubmit)