let count = 0

document.getElementById("ninetyNine_decreaseBtn").onclick = function () {
    count -= 10;
    document.getElementById("ninetyNine_countLabel").innerHTML = count;
}

document.getElementById("ninetyNine_resetBtn").onclick = function () {
    count=0;
    document.getElementById("ninetyNine_countLabel").innerHTML = count;
}

document.getElementById("ninetyNine_increaseBtn").onclick = function () {
    count += 1;
    if (count <= 99 ) {
   return document.getElementById("ninetyNine_countLabel").innerHTML = count;
    } else {
        return document.getElementById("ninetyNine_countLabel").innerHTML = count = 0;
    }
}

document.getElementById("ninetyNine_kingBtn").onclick = function () {
    count = 99;
    document.getElementById("ninetyNine_countLabel").innerHTML = count;
}

