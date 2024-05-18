// Let's store these HTML elements
let button = document.querySelector('.play');
let heading = document.querySelector("h1");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

// Creating a function to get a random number each time its called
function number() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDiceNumbers() {
    const n1 = number(); // getting a random number
    const n2 = number(); // we get a different number even if we call the same function again

    img1.setAttribute("src", "images/dice" + n1 + ".png");
    img2.setAttribute("src", "images/dice" + n2 + ".png");

    // We need to return the value of the random numbers
    // so we can compare them below
    return { n1, n2 }
}

function getWinner() {
    // Getting values from the previous function
    const { n1, n2 } = getDiceNumbers();

    if (n1 > n2) {
        heading.innerText = "🚩Player 1 won!";
    }
    else if (n2 > n1) {
        heading.innerText = "Player 2 won!🚩";
    } else {
        heading.innerText = "Draw!";
    }
}

button.addEventListener('click', getWinner)