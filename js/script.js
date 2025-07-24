const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === i) slide.classList.add("active");
    });
}

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000); // cambia cada 5 segundos


