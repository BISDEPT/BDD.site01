const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

document.querySelectorAll('.hero-image').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add('is-open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
}

lightbox.addEventListener('click', closeLightbox);
