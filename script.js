const menuToggle = document.querySelector(".menu-toggle");
const slidebar = document.querySelector(".menu-slide");
const containerScale = document.querySelector(".container-scale");
const slide = document.querySelectorAll(".slide-page");

menuToggle.addEventListener("click", function () {
  slidebar.classList.toggle("menu-toggle-active");
  containerScale.classList.toggle("container-scale-active");
});

// buat variable
let vSlide = slide.length;
let slideIni = 0;

// Set Waktu

const setWaktu = setInterval(() => {
  let jumlahslide = slideIni++;
  if (jumlahslide >= vSlide - 1) {
    slideIni = 0;
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("page-slider-active");
      slide[i].classList.remove("slide-scale-active"); // i dari 0 - 4 sedangkan kita hapus dari 0 - 3
    }
  } else {
    setTimeout(() => {
      slide[slideIni].classList.add("page-slider-active");
    }, 1000);
    slide[slideIni - 1].classList.add("slide-scale-active");
  }
}, 5000);
