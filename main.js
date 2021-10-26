let values = ['14', '12', '7', '9', '5', '6', '3', '8', '4', '11', '10', '2', '13'];
let suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
let cards = [];
let deck = [];
let deck1 = [];
let deck2 = []; 
let player1name = "";
let player2name = "";

setUpMasterDeck();

let player1deck = new Deck(deck1);
let player2deck = new Deck(deck2);

let player1 = new Player({name: player1name, cardCount: player1deck.cards.length, deck: player1deck});
let player2 = new Player({name: player2name, cardCount: player2deck.cards.length, deck: player2deck});


let player1CardCount = document.querySelector('.p1-card-count');
let player2CardCount = document.querySelector('.p2-card-count');
let draw = document.querySelector('.draw');
let newGame = document.querySelector('.new_game');
let player1names = document.querySelector('.player1');
let player2names = document.querySelector('.player2');
let description = document.querySelector('.description');


function Player({cardCount = 0, name = `Player`, deck}){
    this.cardCount = cardCount;
    this.name = name;
    this.deck = deck;
};

function Deck(cards){
    this.cards = cards;
};


function Card(value, suit){
    this.value = value;
    this.suit = suit;
};

function Game(){

    this.player1 = new Player({name: player1name, cardCount: player1deck.cards.length, deck: player1deck});
    this.player2 = new Player({name: player2name, cardCount: player2deck.cards.length, deck: player2deck});
    
};

console.log('deck1',deck1);
console.log('deck2',deck2);



function setUpMasterDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            const suit = suits[i];
            const value = values[j];
            deck.push({value, suit});
            deck = shuffleArray(deck)
            deck1 = deck.slice(26);
            deck2 = deck.slice(0,26);
        }
    }
}

function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
   
    


  


function drawCard(){

         
    let topCard1 = player1.deck.cards[0];
    let topCard2 = player2.deck.cards[0];
    console.log('topcard1',topCard1);
    console.log('topcard2',topCard2);
    if(parseInt(topCard1.value) > parseInt(topCard2.value)) {
        player1.deck.cards.shift()
        player1.deck.cards.push(topCard1, topCard2)
        player2.deck.cards.shift()
        player1.cardCount = player1.deck.cards.length;
        player2.cardCount = player2.deck.cards.length;
        
        console.log('Player 1 wins')
        player1CardCount.innerText = `Cards Remaining: ${player1.deck.cards.length}`
        player2CardCount.innerText = `Cards Remaining: ${player2.deck.cards.length}`
        player1names.innerText = `Player 1 Wins!`;
        player2names.innerText = `Player 2`
        description.innerText = `Player 1 drew ${topCard1.value} of ${topCard1.suit} & Player 2 drew ${topCard2.value} of ${topCard2.suit}`;

    } else if(parseInt(topCard2.value) > parseInt(topCard1.value)) {
        player2.deck.cards.shift()
        player2.deck.cards.push(topCard1, topCard2)
        player1.deck.cards.shift()
        player2.cardCount = player2.deck.cards.length;
        player1.cardCount = player1.deck.cards.length;
        console.log('Player 2 wins')
        player1CardCount.innerText = `Cards Remaining: ${player1.deck.cards.length}`
        player2CardCount.innerText = `Cards Remaining: ${player2.deck.cards.length}`
        player2names.innerText = `Player 2 Wins!`
        player1names.innerText = `Player 1`;
        description.innerText = `Player 1 drew ${topCard1.value} of ${topCard1.suit} & Player 2 drew ${topCard2.value} of ${topCard2.suit}`;
        console.log('player2',{player2})
        console.log('player1',player1);
    } else if(parseInt(topCard1.value) === parseInt(topCard2.value)){
        // get first 3 cards
        let p1FourthCard = player1.deck.cards[3]
        let p2FourthCard = player2.deck.cards[3]
        
        console.log('ply14',{p1FourthCard})
        console.log('play24',{p2FourthCard})
        
        if(parseInt(p1FourthCard.value) > parseInt(p2FourthCard.value)) {
            player1.deck.cards.shift()
            player1.deck.cards.push(topCard1, topCard2)
            player2.deck.cards.shift()
            const winningCards = player2.deck.cards.splice(0,3);
            console.log('winning cards',{winningCards})
            player1.deck.cards.push(...winningCards)
            console.log('play14',{p1FourthCard})
            console.log('ply24',{p2FourthCard})
            player1.cardCount = player1.deck.cards.length;
            player2.cardCount = player2.deck.cards.length;
            console.log('player 1 wins the war')
            player1CardCount.innerText = `Cards Remaining: ${player1.deck.cards.length}`
            player2CardCount.innerText = `Cards Remaining: ${player2.deck.cards.length}`
            player1names.innerText = `Player 1 Wins!`;
            player2names.innerText = `Player 2`
            console.log('player 1 wins war');
            console.log('player2',{player2});
            console.log('player1',{player1});
            description.innerText = `Player 1 drew ${topCard1.value} of ${topCard1.suit} & Player 2 drew ${topCard2.value} of ${topCard2.suit}`;
        } else if (parseInt(p2FourthCard.value) > parseInt(p1FourthCard.value)) {
            player2.deck.cards.shift()
            player2.deck.cards.push(topCard1, topCard2)
            player1.deck.cards.shift()
            const winningCards = player1.deck.cards.splice(0,3);
            console.log('winningcards',{winningCards})
            console.log('player2',{player2})
            console.log('player1',player1);
            player2.deck.cards.push(...winningCards)
        
            console.log('player2',{player2});
            console.log('player1',{player1});

            player2.cardCount = player2.deck.cards.length;
            player1.cardCount = player1.deck.cards.length;
            player1CardCount.innerText = `Cards Remaining: ${player1.deck.cards.length}`
            player2CardCount.innerText = `Cards Remaining: ${player2.deck.cards.length}`
            player2names.innerText = `Player 2 Wins!`
            player1names.innerText = `Player 1`;
            description.innerText = `Player 1 drew ${topCard1.value} of ${topCard1.suit} & Player 2 drew ${topCard2.value} of ${topCard2.suit}`;
        

            console.log('player2 wins the war')
        }
    } else if (player1.deck.cards.length === 0 || player2.deck.cards.length === 0 ){
        if(player1.deck.cards.length === 0 ){
            description.innerText = `Player 1 is out of cards ! Player 2 WINS!`;
            console.log('player2 wins');
        } else {
            `Player 2 is out of cards ! Player 1 WINS!`
            console.log("player1 wins");
        }
    }
}

draw.addEventListener('click', function(){
    drawCard();
})
newGame.addEventListener('click', function(){
    location.reload()
})

