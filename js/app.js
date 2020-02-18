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

// allows user to use the keyboard besides the on-screen keyboard
document.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('.key');
    for(let i=0; i<keys.length; i++){
        if(event.key === keys[i].textContent){
            if(keys[i].disabled === false){
                game.handleInteraction(keys[i]);
            } else {
                return false;
            }
        } 
    }
});
