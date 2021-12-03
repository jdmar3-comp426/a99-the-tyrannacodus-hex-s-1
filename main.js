var score = 0;

function click() {
    score = score + 1;
    document.getElementById("currentScore").innerHTML = score;
};
document.getElementById("clicker").addEventListener("click", click);