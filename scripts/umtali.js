let playerOneScore = 0;
let playerTwoScore = 0;

function player1PlusFive() {
    playerOneScore += 5;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
}

function player1PlusOne() {
    playerOneScore += 1;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
}

function player1MinusOne() {
    playerOneScore -= 1;
    document.getElementById("player-one-score").innerHTML = playerOneScore;

}


function player2PlusFive() {
    playerTwoScore += 5;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
}

function player2PlusOne() {
    playerTwoScore += 1;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
}

function player2MinusOne() {
    playerTwoScore -= 1;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
}



function resetScore() {
    playerOneScore = 0;
    playerTwoScore = 0;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
}