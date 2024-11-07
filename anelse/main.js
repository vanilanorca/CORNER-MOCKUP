// Pré-visualizar o vídeo ou imagem em quatro faixas antes de fazer o upload
document.querySelector('input[type="file"]').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const mediaContainer = document.getElementById('mediaContainer');
    const mediaSections = document.querySelectorAll('.mediaSection');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        mediaContainer.style.display = 'flex';

        if (file.type.startsWith('video/')) {
            // Exibir o vídeo em 4 faixas, sem controles, com autoplay e muted
            mediaSections.forEach((section) => {
                const video = document.createElement('video');
                video.src = fileURL;
                video.style.display = 'block';
                video.autoplay = true;  // Ativa o autoplay
                video.muted = true;     // Ativa o muted
                video.load();
                section.appendChild(video);
            });
        } else if (file.type.startsWith('image/')) {
            // Exibir a imagem em 4 faixas
            mediaSections.forEach((section) => {
                const img = document.createElement('img');
                img.src = fileURL;
                img.style.display = 'block';
                section.appendChild(img);
            });
        }
    } else {
        mediaContainer.style.display = 'none';
    }
});
