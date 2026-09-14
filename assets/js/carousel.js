function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

document.querySelectorAll('.hero-carousel').forEach((carousel) => {
  const slideCount = carousel.children.length;
  let index = 0;

  function glideTo(targetLeft, duration) {
    const startLeft = carousel.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = performance.now();

    carousel.style.scrollSnapType = 'none';

    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = easeInOutCubic(t);
      carousel.scrollLeft = startLeft + distance * eased;
      carousel.style.opacity = String(1 - Math.sin(t * Math.PI) * 0.1);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        carousel.style.opacity = '1';
        carousel.style.scrollSnapType = 'x mandatory';
      }
    }

    requestAnimationFrame(step);
  }

  setInterval(() => {
    index = (index + 1) % slideCount;
    glideTo(carousel.clientWidth * index, 2400);
  }, 5000);
});
