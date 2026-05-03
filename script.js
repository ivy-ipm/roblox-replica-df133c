document.addEventListener('DOMContentLoaded', () => {
    const gameModal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    const modalGameTitle = document.getElementById('modalGameTitle');
    const closeButton = document.querySelector('.close-button');
    const playButtons = document.querySelectorAll('.btn-play');

    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const gameUrl = event.target.dataset.gameUrl;
            const gameTitle = event.target.closest('.game-card').querySelector('h4').textContent;
            
            if (gameUrl) {
                modalGameTitle.textContent = gameTitle;
                gameFrame.src = gameUrl;
                gameModal.classList.add('show'); // Use class to toggle visibility
                document.body.style.overflow = 'hidden'; // Prevent scrolling background
            }
        });
    });

    closeButton.addEventListener('click', () => {
        gameModal.classList.remove('show');
        gameFrame.src = ''; // Stop the game by clearing the iframe src
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === gameModal) {
            gameModal.classList.remove('show');
            gameFrame.src = '';
            document.body.style.overflow = '';
        }
    });
});
