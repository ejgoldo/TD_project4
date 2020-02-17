// code to use constructors in other files

let game;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});