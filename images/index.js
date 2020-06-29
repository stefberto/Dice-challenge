function randomDicePlayer1() {
var n1 = math.random()*6;
var n2 = math.random()*6;
  var n1 = Math.floor(Math.random() * 6) + 1;
  var n2 = Math.floor(Math.random() * 6) + 1;
  return n1;
  return n2;

  if (n1 === 1) {
    document.querySelector(".img-player1").src = "dice1.png";
  } else if (n1 === 2) {
    document.querySelector(".img-player1").src = "dice2.png";
  } else if (n1 === 3) {
    document.querySelector(".img-player1").src = "dice3.png";
  } else if (n1 === 4) {
    document.querySelector(".img-player1").src = "dice4.png";
  } else if (n1 === 5) {
    document.querySelector(".img-player1").src = "dice5.png";
  } else if (n1 === 6) {
    document.querySelector(".img-player1").src = "dice6.png";
  }


  if (n2 === 1) {
    document.querySelector(".img-player2").src = "dice1.png";
  } else if (n2 === 2) {
    document.querySelector(".img-player2").src = "dice2.png";
  } else if (n2 === 3) {
    document.querySelector(".img-player2").src = "dice3.png";
  } else if (n2 === 4) {
    document.querySelector(".img-player2").src = "dice4.png";
  } else if (n2 === 5) {
    document.querySelector(".img-player2").src = "dice5.png";
  } else if (n2 === 6) {
    document.querySelector(".img-player2").src = "dice6.png";
  }
}

if (n1 > n2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (n1 === n2) {
  document.querySelector("h1").innerHTML = "Draw!";
}




DiceGame();
