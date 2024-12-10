// Background Music Controls
const bgMusic = document.getElementById("bgMusic");
const toggleButton = document.getElementById("toggleMusic");

toggleButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        toggleButton.textContent = "Mute";
    } else {
        bgMusic.pause();
        toggleButton.textContent = "Play";
    }
});

// Carousel Functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
});
