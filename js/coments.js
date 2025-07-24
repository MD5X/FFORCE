document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.getElementById("carrusel");
    const totalSlides = document.querySelectorAll(".comentario").length;
    let index = 0;

    function avanzarCarrusel() {
        index = (index + 1) % totalSlides;
        carrusel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(avanzarCarrusel, 4000);
});
