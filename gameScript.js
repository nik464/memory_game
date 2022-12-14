const cards = document.querySelectorAll('.memory-card');

let moves = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    moves++;
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click 
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click   secondCard = this;  
    checkForMatch();
    return moves;
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function time() {
    let min = 0,
        sec = 0,
        moves = 0;
    $("#time").html("Time: 00:00");
    $("#moves").html("Moves: 0");
    time = setInterval(function() {
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (sec < 10)
            $("#time").html("Time: 0" + min + ":0" + sec);
        else
            $("#time").html("Time: 0" + min + ":" + sec);
    }, 1000);
}


function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

styles.css code *
    {
        padding: 0;margin: 0;box - sizing: border - box;
    }

body {
    height: 100 vh;display: flex;
    background: #060AB2; 

} 

 

.memory-game { 

  width: 640px;   height: 640px;   margin: auto;   display: flex;   flex-wrap: wrap;   perspective: 1000px; 

} 

 

.memory-card {   width: calc(25% - 10px);   height: calc(33.333% - 10px);   margin: 5px;   position: relative;   transform: scale(1);   transform-style: preserve-3d;   transition: transform .5s;   box-shadow: 1px 1px 1px rgba(0,0,0,.3); 

} 

 

.memory-card:active {   transform: scale(0.97);   transition: transform .2s; 

} 

 

.memory-card.flip {   transform: rotateY(180deg); 

} 

 

.front-face, .back-face {   width: 100%;   height: 100%;   padding: 20px;   position: absolute;   border-radius: 5px;   background: # 1 C7CCC;backface - visibility: hidden;
}

.front - face {
    transform: rotateY(180 deg);
}