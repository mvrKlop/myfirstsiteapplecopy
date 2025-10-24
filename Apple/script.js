const galleryHolder = document.getElementById("galleryHolder");
const slides = galleryHolder.querySelectorAll("div");
const totalSlides = slides.length;
let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth + 24; // 24px = jouw gap
  const offset = (window.innerWidth - slideWidth) / 2; // midden van het scherm
  galleryHolder.style.transform = `translateX(${offset - currentIndex * slideWidth}px)`;
}

setInterval(() => {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlidePosition();
}, 3000);

window.addEventListener("resize", updateSlidePosition);