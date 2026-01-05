let hasBlackJack = false
let isAlive = false

let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards = [firstCard, secondCard] //array
let sum= firstCard+secondCard;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber===1)
    {
        return 11
    }
    else if(randomNumber>=10)
    {
        return 10;
    }
    else return randomNumber;

}

function startGame(){
    
    renderGame()
}
function renderGame(){

    sumEl.textContent= "Sum: " + sum
    cardsEl.textContent= "Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" ";
    }

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
    let card = getRandomCard()
    cards.push(card)
    sum += card;
    renderGame();
}