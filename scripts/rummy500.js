let count = 0

document.getElementById("rummy500_minusTenBtn").onclick = function () {
    count -= 10;
    document.getElementById("rummy500_countLabel").innerHTML = count;
}

document.getElementById("rummy500_minusFiveBtn").onclick = function () {
    count -= 5;
    document.getElementById("rummy500_countLabel").innerHTML = count;
}

document.getElementById("rummy500_addFiveBtn").onclick = function () {
    count += 5;
    document.getElementById("rummy500_countLabel").innerHTML = count;
}

document.getElementById("rummy500_addTenBtn").onclick = function () {
    count += 10;
    document.getElementById("rummy500_countLabel").innerHTML = count;
}

document.getElementById("rummy500_resetBtn").onclick = function () {
    count = 0;
    document.getElementById("rummy500_countLabel").innerHTML = count;
}