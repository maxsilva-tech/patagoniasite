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


// 🔍 Toggle buscador
const searchToggle = document.getElementById("search-toggle");
const searchInput = document.getElementById("search-input");

searchToggle.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchInput.focus();
});

// 🔎 Filtro de productos
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
});

/* =========================
   BUSCADOR DE INGREDIENTES
========================= */

const searchInput = document.getElementById('search-input');
const menuItems = document.querySelectorAll('.item');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  menuItems.forEach(item => {
    const text = item.innerText.toLowerCase();

    if (text.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});

