let player1Count = 0;
let player2Count = 0;


function resetScore () {
    player1Count = 0;
    player2Count = 0;
    document.getElementById("playerOneScore").innerHTML = player1Count;
    document.getElementById("playerTwoScore").innerHTML = player2Count;
}

// function resetNames () {

// }

function player1PlusFive () {
    player1Count += 5;
    document.getElementById("playerOneScore").innerHTML = player1Count;
}

function player1PlusOne() {
    player1Count += 1;
    document.getElementById("playerOneScore").innerHTML = player1Count;
}

function player1MinusOne() {
    player1Count -= 1;
    document.getElementById("playerOneScore").innerHTML = player1Count;
}

function player1MinusFive() {
    player1Count -= 5;
    document.getElementById("playerOneScore").innerHTML = player1Count;
}



function player2PlusFive() {
    player2Count += 5;
    document.getElementById("playerTwoScore").innerHTML = player2Count;
}

function player2PlusOne() {
    player2Count += 1;
    document.getElementById("playerTwoScore").innerHTML = player2Count;
}

function player2MinusOne() {
    player2Count -= 1;
    document.getElementById("playerTwoScore").innerHTML = player2Count;
}

function player2MinusFive() {
    player2Count -= 5;
    document.getElementById("playerTwoScore").innerHTML = player2Count;
}



