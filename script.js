/* =========================
   CAMBIO DE IDIOMA
========================= */

function setLang(lang) {
  const elements = document.querySelectorAll("[data-pt]");

  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // Guardar idioma
  localStorage.setItem("lang", lang);
}

// Cargar idioma guardado
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  setLang(savedLang);
});


/* =========================
   LIGHTBOX GALERÍA
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

let currentGallery = [];
let currentIndex = 0;

// Abrir imagen
document.querySelectorAll(".gallery img").forEach((img, index) => {
  img.addEventListener("click", () => {
    currentGallery = Array.from(img.closest(".gallery").querySelectorAll("img"));
    currentIndex = currentGallery.indexOf(img);
    openLightbox();
  });
});

function openLightbox() {
  lightbox.classList.add("active");
  updateImage();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function updateImage() {
  lightboxImg.src = currentGallery[currentIndex].src;
  lightboxImg.alt = currentGallery[currentIndex].alt || "Imagem ampliada";
}

// Navegação
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  updateImage();
});

// Fechar
closeBtn.addEventListener("click", closeLightbox);

// Fechar clicando fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Teclado
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
});
