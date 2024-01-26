let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let playerFiveScore = 0;



function player1PlusTen() {
    playerOneScore += 10;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
}

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

function player1MinusTen() {
    playerOneScore -= 10;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
}





function player2PlusTen() {
    playerTwoScore += 10;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
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

function player2MinusTen() {
    playerTwoScore -= 10;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
}






function player3PlusTen() {
    playerThreeScore += 10;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
}

function player3PlusFive() {
    playerThreeScore += 5;
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

function player3MinusTen() {
    playerThreeScore -= 10;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
}




function player4PlusTen() {
    playerFourScore += 10;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}

function player4PlusFive() {
    playerFourScore += 5;
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

function player4MinusTen() {
    playerFourScore -= 10;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
}






function player5PlusTen() {
    playerFiveScore += 10;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}

function player5PlusFive() {
    playerFiveScore += 5;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}

function player5PlusOne() {
    playerFiveScore += 1;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}

function player5MinusOne() {
    playerFiveScore -= 1;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}

function player5MinusTen() {
    playerFiveScore -= 10;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}




function resetScore() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerThreeScore = 0;
    playerFourScore = 0;
    playerFiveScore = 0;
    document.getElementById("player-one-score").innerHTML = playerOneScore;
    document.getElementById("player-two-score").innerHTML = playerTwoScore;
    document.getElementById("player-three-score").innerHTML = playerThreeScore;
    document.getElementById("player-four-score").innerHTML = playerFourScore;
    document.getElementById("player-five-score").innerHTML = playerFiveScore;
}