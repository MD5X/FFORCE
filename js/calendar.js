document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: [
            {
                title: 'Rutina HIIT',
                start: '2025-07-16',
                extendedProps: {
                    pdfUrl: '/pdfs/hit.pdf'
                }
            },
            {
                title: 'Cardio',
                start: '2025-07-17',
                extendedProps: {
                    pdfUrl: '/pdfs/wod.pdf'
                }
            },
            {
                title: 'Fuerza',
                start: '2025-07-18',
                extendedProps: {
                    pdfUrl: '/pdfs/fuerza.pdf'
                }
            }
        ],
        eventClick: function (info) {
            const pdfUrl = info.event.extendedProps.pdfUrl;
            document.getElementById('pdfViewer').src = pdfUrl;
            document.getElementById('downloadBtn').href = pdfUrl;
            document.getElementById('pdfModal').style.display = 'block';
        }
    });

    calendar.render();

    // Abrir modal
    document.getElementById("abrirModal").addEventListener("click", function () {
        document.getElementById("miModal").style.display = "block";
    });

    // Cerrar modal con la X
    document.querySelector(".cerrar").addEventListener("click", function () {
        document.getElementById("miModal").style.display = "none";
    });

    // Cerrar si hace clic fuera de la ventana
    window.addEventListener("click", function (e) {
        const modal = document.getElementById("miModal");
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});

