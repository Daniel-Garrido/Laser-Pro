document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".rslides li");
  const totalSlides = slides.length;
  let currentIndex = 0;

  const nextButton = document.querySelector(".slider-next");
  const prevButton = document.querySelector(".slider-prev");

  // Función para mostrar el slide actual
  function showSlide(index) {
    const offset = -index * 100; // Calcula el desplazamiento en %
    const slideContainer = document.querySelector(".rslides");
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  // Evento para el botón siguiente
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Cicla al primer slide si es el último
    showSlide(currentIndex);
  });

  // Evento para el botón anterior
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Cicla al último slide si es el primero
    showSlide(currentIndex);
  });

  // Inicializar el primer slide
  showSlide(currentIndex);
});

