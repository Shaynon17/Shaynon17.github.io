let teamOneScore = 0;
let teamTwoScore = 0;




function team1PlusOne() {
    teamOneScore += 1;
   document.getElementById("team-one-score").innerHTML = teamOneScore;
}

function team1MinusOne() {
    teamOneScore -= 1;
    document.getElementById("team-one-score").innerHTML = teamOneScore;

}

function team2PlusOne() {
    teamTwoScore += 1;
    document.getElementById("team-two-score").innerHTML = teamTwoScore;
}

function team2MinusOne() {
    teamTwoScore -= 1;
    document.getElementById("team-two-score").innerHTML = teamTwoScore;
}

function resetScore() {
    teamOneScore = 0;
    teamTwoScore = 0;
    document.getElementById("team-one-score").innerHTML = teamOneScore;
    document.getElementById("team-two-score").innerHTML = teamTwoScore;
}