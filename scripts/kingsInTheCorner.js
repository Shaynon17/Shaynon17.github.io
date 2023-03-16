let player1Count = 0
document.getElementById("rummy500_minusTenBtn").onclick = function () {
    player1Count -= 10;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}

document.getElementById("rummy500_minusFiveBtn").onclick = function () {
    player1Count -= 5;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}

document.getElementById("rummy500_minusOneBtn").onclick = function () {
    player1Count -= 1;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}

document.getElementById("rummy500_addOneBtn").onclick = function () {
    player1Count += 1;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}

document.getElementById("rummy500_addFiveBtn").onclick = function () {
    player1Count += 5;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}

document.getElementById("rummy500_addTenBtn").onclick = function () {
    player1Count += 10;
    document.getElementById("rummy500_countLabel").innerHTML = player1Count;
}





// const node = document.getElementById("scoreboard_player1")

// // Get the element
// const elem = document.querySelector('#elem1');

// // Create a copy of it
// let clone = elem.cloneNode(true);

// // Update the ID and add a class
// clone.id = 'elem2';
// clone.classList.add('text-large');

// // Inject it into the DOM
// elem.after(clone);