// Pré-visualizar o vídeo ou imagem antes de fazer o upload
document.querySelector('input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPreview = document.getElementById('videoPreview');
    const videoSource = document.getElementById('videoSource');
    const imagePreview = document.getElementById('imagePreview');
    const mediaContainer = document.getElementById('mediaContainer');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        mediaContainer.style.display = 'block';

        if (file.type.startsWith('video/')) {
            // Exibir o vídeo
            videoSource.src = fileURL;
            videoPreview.style.display = 'block';
            imagePreview.style.display = 'none';
            videoPreview.load();
        } else if (file.type.startsWith('image/')) {
            // Exibir a imagem
            imagePreview.src = fileURL;
            imagePreview.style.display = 'block';
            videoPreview.style.display = 'none';
        }
    } else {
        videoPreview.style.display = 'none';
        imagePreview.style.display = 'none';
        mediaContainer.style.display = 'none';
    }
});


document.getElementById('imagemPlantaClose').addEventListener('click', function(){
    document.getElementById('plantaContainer').style.display = 'none'
    
})