function openModal(path) {
    const modal = document.getElementById("myModal");
    const element = document.querySelector('.modal-image');
    modal.style.display = "block";
    element.src = path;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}