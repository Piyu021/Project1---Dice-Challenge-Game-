var n1 = Math.floor(Math.random()*6)+1;
var n2 = Math.floor(Math.random()*6)+1;
console.log(n1);
console.log(n2);
function insertImage1(x) {
    document.querySelector("img.img"+ x).setAttribute("src", "images/dice" + n1 + ".png");
}

function insertImage2(x) {
    document.querySelector("img.img"+ x).setAttribute("src", "images/dice" + n2 + ".png");
}

function getWinner() {
    if(n1>n2) {
        document.querySelector("h1").innerText = "🚩Player 1 won!";
    } 
    else if(n2>n1) {
        document.querySelector("h1").innerText = "Player 2 won!🚩";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}

insertImage1(1);
insertImage2(2);
getWinner();