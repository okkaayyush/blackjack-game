let hasBlackJack = false
let isAlive = false


let cards =[]
let sum= 0;
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

    hasBlackJack=false;
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards = [firstCard, secondCard]; //array
    sum = firstCard + secondCard;
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
    hasBlackJack = true;
}
else{
    isAlive = false;
    message = "Oh No! Busted!"
}

messageEl.textContent=message;

}

function newCard(){
    if(!hasBlackJack && isAlive){
    let card = getRandomCard()
    cards.push(card)
    sum += card;
    renderGame();
}
}