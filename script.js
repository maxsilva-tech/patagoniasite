/* ===============================
   CAMBIO DE IDIOMA
================================ */
function setLang(lang) {
  document.querySelectorAll("[data-" + lang + "]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}


/* ===============================
   LIGHTBOX + SLIDER
================================ */
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox .prev");
const nextBtn = document.querySelector(".lightbox .next");

let currentIndex = 0;

/* Abrir lightbox */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

/* Mostrar imagen actual */
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

/* Cerrar */
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* Navegación */
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

/* Cerrar tocando fondo */
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

/* ===============================
   SWIPE EN CELULAR
================================ */
let startX = 0;

lightboxImg.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

lightboxImg.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    nextBtn.click();
  } else if (endX - startX > 50) {
    prevBtn.click();
  }
});


