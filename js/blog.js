
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
// Cerrar modal al hacer clic fuera
window.onclick = function (e) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
}
