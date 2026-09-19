document.querySelectorAll('.hero-carousel').forEach((carousel) => {
  const slides = carousel.querySelectorAll('.hero-slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 5000);
});
