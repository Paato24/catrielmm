// Función para alternar imágenes de comparación
function alternateComparisonImages(image1Id, image2Id) {
    const image1 = document.getElementById(image1Id);
    const image2 = document.getElementById(image2Id);

    let isImage1Visible = true; // Controla cuál imagen está visible

    setInterval(() => {
        if (isImage1Visible) {
            image1.classList.remove('visible');
            image1.classList.add('hidden');
            image2.classList.remove('hidden');
            image2.classList.add('visible');
        } else {
            image2.classList.remove('visible');
            image2.classList.add('hidden');
            image1.classList.remove('hidden');
            image1.classList.add('visible');
        }
        isImage1Visible = !isImage1Visible; // Alternar visibilidad
    }, 5000); // Cambiar cada 5 segundos
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    alternateComparisonImages('comparison1-image1', 'comparison1-image2', 'comparison1-image3');
});
