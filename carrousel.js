const slides = document.querySelectorAll('.carousel-slide'); // Selecciona todos los slides
let currentIndex = 0; // Índice del slide actual

// Función para mostrar el siguiente slide
function showNextSlide() {
  // Oculta el slide actual
  slides[currentIndex].classList.remove('active');

  // Mueve al siguiente slide (y reinicia si llega al final)
  currentIndex = (currentIndex + 1) % slides.length;

  // Muestra el nuevo slide
  slides[currentIndex].classList.add('active');
}

// Asegura que la primera imagen se muestre inmediatamente
slides[currentIndex].classList.add('active');

// Inicia el intervalo después de mostrar la primera imagen
setTimeout(() => {
  setInterval(showNextSlide, 3000); // Cambia la imagen cada 3 segundos
}, 1000); // Espera un ciclo completo antes de iniciar el cambio automático
