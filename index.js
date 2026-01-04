let hasBlackJack = false
let isAlive = true


let firstCard=10;
let secondCard=11;
let cards = [firstCard, secondCard] //array
let sum= firstCard+secondCard;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}
function renderGame(){
    sumEl.textContent= "Sum: " + sum
    cardsEl.textContent= "Cards: "+ cards[0] + " " + cards[1]
if (sum<=20)
{
    message = "Do you want to draw a new card?"
}
else if(sum===21){
    message = "You have got BlackJack!"
}
else{
    message = "Oh No! Busted!"
}

messageEl.textContent=message;

}

function newCard(){
    let card = 7;
    sum += card;
    renderGame();
}