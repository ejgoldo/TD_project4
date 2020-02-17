// Phrase contructor
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseSection = document.querySelector('#phrase ul');
        phraseSection.innerHTML = '';

        const phrase = this.phrase.split('');
        phrase.forEach(letter => {
            let li = document.createElement('li');
            let phraseLetters = document.createTextNode(letter);
            li.appendChild(phraseLetters);
            if(letter === ' '){
                li.classList.add('space');
            } else {
                li.classList.add('hide', 'letter', `${letter}`);
            }
            
            phraseSection.appendChild(li);
        });
    }

    /**
    * Checks if passed letter is in the phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display after match
    */
    showMatchedLetter(letter){
        const lettersInPhrase = document.querySelectorAll(`.${letter}`);
        if(this.checkLetter(letter)){
            for(let i=0; i<lettersInPhrase.length; i++){
                lettersInPhrase[i].classList.add('show');
                lettersInPhrase[i].classList.remove('hide');
            }
        }
    }
}