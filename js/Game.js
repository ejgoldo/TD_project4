// Game constructor
class Game {
    constructor(missed, phrases, activePhrase){
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

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    };
    removeLife() {

    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

    }
}