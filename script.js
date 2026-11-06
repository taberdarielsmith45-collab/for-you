const voiceNote = document.getElementById('voiceNote');
const playToggle = document.getElementById('playToggle');
const playerContainer = document.getElementById('playerContainer');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const statusText = document.getElementById('statusText');

playToggle.addEventListener('click', () => {
    if (voiceNote.paused) {
        voiceNote.play();
        playerContainer.classList.add('playing');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        statusText.innerText = 'Now Playing...';
    } else {
        voiceNote.pause();
        playerContainer.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        statusText.innerText = 'Paused';
    }
});

// Reset UI automatically when the voice message ends
voiceNote.addEventListener('ended', () => {
    playerContainer.classList.remove('playing');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    statusText.innerText = 'Listen Again';
});
