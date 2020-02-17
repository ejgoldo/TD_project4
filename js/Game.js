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
}