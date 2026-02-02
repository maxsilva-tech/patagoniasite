/* =========================
   MULTIIDIOMA
========================= */

function setLang(lang) {
  const elements = document.querySelectorAll('[data-' + lang + ']');

  elements.forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      el.textContent = text;
    }
  });
}

/* Idioma por defecto */
document.addEventListener('DOMContentLoaded', () => {
  setLang('pt');
});


/* =========================
   LIGHTBOX + GALERÍAS
========================= */

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

let currentIndex = 0;
let currentGallery = [];

/* Abrir lightbox */
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentGallery = Array.from(img.parentElement.querySelectorAll('img'));
    currentIndex = currentGallery.indexOf(img);
    openLightbox();
  });
});

function openLightbox() {
  lightboxImg.src = currentGallery[currentIndex].src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* Cerrar lightbox */
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

/* Navegación */
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex].src;
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex + 1) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex].src;
});

/* Teclado (PC) */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// =======================
// CONTADOR DE VISITAS
// =======================
(function () {
  let visits = localStorage.getItem("patagonia_visits");

  if (!visits) {
    visits = 1;
  } else {
    visits = parseInt(visits, 10) + 1;
  }

  localStorage.setItem("patagonia_visits", visits);

  const counter = document.getElementById("visit-count");
  if (counter) {
    counter.textContent = visits;
  }
})();

  /* =======================
   BUSCADOR – ESTILO FINAL
======================= */

.search-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 360px;
  margin: 20px auto 30px;
  padding: 10px 16px;
  background: #f3e6b5;
  border-radius: 999px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

.search-icon {
  font-size: 20px;
  color: #1f5b3b;
}

#search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.95em;
  font-weight: 600;
  color: #1f5b3b;
}

#search-input::placeholder {
  color: #6b6b6b;
  font-weight: 500;
}

/* Hover / focus */
.search-wrapper:focus-within {
  box-shadow: 0 8px 20px rgba(31,91,59,0.45);
  transform: translateY(-1px);
  transition: all 0.25s ease;
}

/* Mobile */
@media (max-width: 600px) {
  .search-wrapper {
    max-width: 300px;
  }
}





