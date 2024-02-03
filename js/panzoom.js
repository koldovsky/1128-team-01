const modal = document.getElementById("lightboxModal");
const modalImage = document.getElementById('modalImage');
const panzoom = new Panzoom(modalImage, {
  maxZoom: 2,
  contain: 'outside',
});

function openModal(path) {
  modal.style.display = "flex";
  modalImage.src = path;
  panzoom.reset();
  panzoom.resume();
}

function closeModal() {
  modal.style.display = "none";
  panzoom.pause();
}

function changeImage(direction) {
  const images = document.querySelectorAll('.gallery img');
  let currentImageIndex = Array.from(images).indexOf(modalImage);
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  openModal(images[currentImageIndex].src);
}
