
let winner = document.querySelector("#result");
let player1 = document.querySelector(".dice-1 img");
let player2 = document.querySelector(".dice-2 img");

document.querySelector('button').addEventListener('click', function(){
      
let dice1 = Math.floor(Math.random()*6+1);
let dice2 = Math.floor(Math.random()*6+1);  

if (dice1 > dice2){
    winner.innerText = "Player 1 wins";
}else if(dice1 === dice2){
    winner.innerText = "Draw match";
}else{
    winner.innerText = " Player 2 wins";
}

if (dice1 === 1){
    player1.setAttribute("src", "./one.png");
}else if (dice1 === 2){
    player1.setAttribute("src", "./two.png");
}else if (dice1 === 3){
    player1.setAttribute("src", "./three.png");
}else if (dice1 === 4){
    player1.setAttribute("src", "./four.png");
}else if (dice1 === 5){
    player1.setAttribute("src", "./five.png");
}else if (dice1 === 6){
    player1.setAttribute("src", "./six.png");
}

if (dice2 === 1){
    player2.setAttribute("src", "./one.png");
}else if (dice2 === 2){
    player2.setAttribute("src", "./two.png");
}else if (dice2 === 3){
    player2.setAttribute("src", "./three.png");
}else if (dice2 === 4){
    player2.setAttribute("src", "./four.png");
}else if (dice2 === 5){
    player2.setAttribute("src", "./five.png");
}else if (dice2 === 6){
    player2.setAttribute("src", "./six.png");
}
});
