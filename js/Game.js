// Game constructor
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates 5 phrases for use in the game
    * @return {array} An array of phrases that will be used in the game
    */
    createPhrases() {
        const fivePhrases = [
            new Phrase('May the force be with you'),
            new Phrase('Im the king of the world'),
            new Phrase('Keep your friends close but your enemies closer'),
            new Phrase('Just keep swimming'),
            new Phrase('You talking to me')
        ];

        return fivePhrases;
    };

    /**
    * Selects random phrase from the phrases property
    * @return {Object} Phrase object chosen by random through function is used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };

    /**
    * Begins the game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        const matched = document.querySelectorAll('.show');

        if(letters.length === matched.length){
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        let hearts = document.querySelector('.tries');
        let heartsImg = hearts.firstChild;
        hearts.classList.remove('tries');
        heartsImg.src = 'images/lostHeart.png';

        if(this.missed === 5){
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        overlay.classList.remove('start');
        const h1 = document.getElementById('game-over-message');

        if(gameWon){
            overlay.classList.add('win');
            overlay.classList.remove('lose');
            let message = 'Congrats, you won!';
            h1.textContent = message;
        } else {
            overlay.classList.add('lose');
            overlay.classList.remove('win');
            let message = 'You lose, better luck next time';
            h1.textContent = message;
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button);
    };
}