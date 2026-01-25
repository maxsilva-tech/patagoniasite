function setLang(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}

const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

