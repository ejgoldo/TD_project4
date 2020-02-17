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

    checkLetter(){

    }

    showMatchedLetter(){

    }
}