// code to use constructors in other files

// starts the game
let game;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// interaction of the on-screen keyboard
const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (event) => {
    const e = event.target;
    if(e.classList.contains('key')){
        game.handleInteraction(e);
    }
});