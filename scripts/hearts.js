let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;




function player1PlusThirteen() {
    playerOneScore += 13;
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



function player2PlusThirteen() {
    playerTwoScore += 13;
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




function player3PlusThirteen() {
    playerThreeScore += 13;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
}

function player3PlusOne() {
    playerThreeScore += 1;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
}

function player3MinusOne() {
    playerThreeScore -= 1;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
}



function player4PlusThirteen() {
    playerFourScore += 13;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}

function player4PlusOne() {
    playerFourScore += 1;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}

function player4MinusOne() {
    playerFourScore -= 1;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}




function resetScore() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerThreeScore = 0;
    playerFourScore = 0;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}