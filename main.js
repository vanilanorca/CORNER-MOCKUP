// Pré-visualizar o vídeo antes de fazer o upload
document.querySelector('input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPreview = document.getElementById('videoPreview');
    const videoSource = document.getElementById('videoSource');

    const videoContainer = document.getElementById('videoContainer');


    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoSource.src = fileURL;
        videoPreview.style.display = 'block';
        videoPreview.load();

        videoContainer.style.display = 'block';
    } else {
        videoPreview.style.display = 'none';
        videoContainer.style.display = 'none';
    }
});