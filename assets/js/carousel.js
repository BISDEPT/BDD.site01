document.querySelectorAll('.hero-carousel').forEach((carousel) => {
  const slideCount = carousel.children.length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slideCount;
    carousel.scrollTo({ left: carousel.clientWidth * index, behavior: 'smooth' });
  }, 3000);
});
