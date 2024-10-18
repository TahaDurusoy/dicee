var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
document.querySelector(".diceone img").setAttribute("src","./images/dice" + randomNumber1 + ".png");
document.querySelector(".dicetwo img").setAttribute("src","./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 2 Wins";
}
else {
  document.querySelector("h1").textContent = "🤝Draw!";
}
