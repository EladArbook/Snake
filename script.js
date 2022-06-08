const row1 = document.querySelector(`#r1`);
const row2 = document.querySelector(`#r2`);
const row3 = document.querySelector(`#r3`);
const row4 = document.querySelector(`#r4`);
const row5 = document.querySelector(`#r5`);
const row6 = document.querySelector(`#r6`);
const row7 = document.querySelector(`#r7`);
const row8 = document.querySelector(`#r8`);
const row9 = document.querySelector(`#r9`);
const row10 = document.querySelector(`#r10`);
const row11 = document.querySelector(`#r11`);
const row12 = document.querySelector(`#r12`);
const row13 = document.querySelector(`#r13`);
const data = [  //          13 x 25
    [row1.querySelector(`.d1`), row1.querySelector(`.d2`), row1.querySelector(`.d3`),
    row1.querySelector(`.d4`), row1.querySelector(`.d5`), row1.querySelector(`.d6`),
    row1.querySelector(`.d7`), row1.querySelector(`.d8`), row1.querySelector(`.d9`),
    row1.querySelector(`.d10`), row1.querySelector(`.d11`), row1.querySelector(`.d12`),
    row1.querySelector(`.d13`), row1.querySelector(`.d14`), row1.querySelector(`.d15`),
    row1.querySelector(`.d16`), row1.querySelector(`.d17`), row1.querySelector(`.d18`),
    row1.querySelector(`.d19`), row1.querySelector(`.d20`), row1.querySelector(`.d21`),
    row1.querySelector(`.d22`), row1.querySelector(`.d23`), row1.querySelector(`.d24`),
    row1.querySelector(`.d25`)],
    [row2.querySelector(`.d1`), row2.querySelector(`.d2`), row2.querySelector(`.d3`),
    row2.querySelector(`.d4`), row2.querySelector(`.d5`), row2.querySelector(`.d6`),
    row2.querySelector(`.d7`), row2.querySelector(`.d8`), row2.querySelector(`.d9`),
    row2.querySelector(`.d10`), row2.querySelector(`.d11`), row2.querySelector(`.d12`),
    row2.querySelector(`.d13`), row2.querySelector(`.d14`), row2.querySelector(`.d15`),
    row2.querySelector(`.d16`), row2.querySelector(`.d17`), row2.querySelector(`.d18`),
    row2.querySelector(`.d19`), row2.querySelector(`.d20`), row2.querySelector(`.d21`),
    row2.querySelector(`.d22`), row2.querySelector(`.d23`), row2.querySelector(`.d24`),
    row2.querySelector(`.d25`)],
    [row3.querySelector(`.d1`), row3.querySelector(`.d2`), row3.querySelector(`.d3`),
    row3.querySelector(`.d4`), row3.querySelector(`.d5`), row3.querySelector(`.d6`),
    row3.querySelector(`.d7`), row3.querySelector(`.d8`), row3.querySelector(`.d9`),
    row3.querySelector(`.d10`), row3.querySelector(`.d11`), row3.querySelector(`.d12`),
    row3.querySelector(`.d13`), row3.querySelector(`.d14`), row3.querySelector(`.d15`),
    row3.querySelector(`.d16`), row3.querySelector(`.d17`), row3.querySelector(`.d18`),
    row3.querySelector(`.d19`), row3.querySelector(`.d20`), row3.querySelector(`.d21`),
    row3.querySelector(`.d22`), row3.querySelector(`.d23`), row3.querySelector(`.d24`),
    row3.querySelector(`.d25`)],
    [row4.querySelector(`.d1`), row4.querySelector(`.d2`), row4.querySelector(`.d3`),
    row4.querySelector(`.d4`), row4.querySelector(`.d5`), row4.querySelector(`.d6`),
    row4.querySelector(`.d7`), row4.querySelector(`.d8`), row4.querySelector(`.d9`),
    row4.querySelector(`.d10`), row4.querySelector(`.d11`), row4.querySelector(`.d12`),
    row4.querySelector(`.d13`), row4.querySelector(`.d14`), row4.querySelector(`.d15`),
    row4.querySelector(`.d16`), row4.querySelector(`.d17`), row4.querySelector(`.d18`),
    row4.querySelector(`.d19`), row4.querySelector(`.d20`), row4.querySelector(`.d21`),
    row4.querySelector(`.d22`), row4.querySelector(`.d23`), row4.querySelector(`.d24`),
    row4.querySelector(`.d25`)],
    [row5.querySelector(`.d1`), row5.querySelector(`.d2`), row5.querySelector(`.d3`),
    row5.querySelector(`.d4`), row5.querySelector(`.d5`), row5.querySelector(`.d6`),
    row5.querySelector(`.d7`), row5.querySelector(`.d8`), row5.querySelector(`.d9`),
    row5.querySelector(`.d10`), row5.querySelector(`.d11`), row5.querySelector(`.d12`),
    row5.querySelector(`.d13`), row5.querySelector(`.d14`), row5.querySelector(`.d15`),
    row5.querySelector(`.d16`), row5.querySelector(`.d17`), row5.querySelector(`.d18`),
    row5.querySelector(`.d19`), row5.querySelector(`.d20`), row5.querySelector(`.d21`),
    row5.querySelector(`.d22`), row5.querySelector(`.d23`), row5.querySelector(`.d24`),
    row5.querySelector(`.d25`)],
    [row6.querySelector(`.d1`), row6.querySelector(`.d2`), row6.querySelector(`.d3`),
    row6.querySelector(`.d4`), row6.querySelector(`.d5`), row6.querySelector(`.d6`),
    row6.querySelector(`.d7`), row6.querySelector(`.d8`), row6.querySelector(`.d9`),
    row6.querySelector(`.d10`), row6.querySelector(`.d11`), row6.querySelector(`.d12`),
    row6.querySelector(`.d13`), row6.querySelector(`.d14`), row6.querySelector(`.d15`),
    row6.querySelector(`.d16`), row6.querySelector(`.d17`), row6.querySelector(`.d18`),
    row6.querySelector(`.d19`), row6.querySelector(`.d20`), row6.querySelector(`.d21`),
    row6.querySelector(`.d22`), row6.querySelector(`.d23`), row6.querySelector(`.d24`),
    row6.querySelector(`.d25`)],
    [row7.querySelector(`.d1`), row7.querySelector(`.d2`), row7.querySelector(`.d3`),
    row7.querySelector(`.d4`), row7.querySelector(`.d5`), row7.querySelector(`.d6`),
    row7.querySelector(`.d7`), row7.querySelector(`.d8`), row7.querySelector(`.d9`),
    row7.querySelector(`.d10`), row7.querySelector(`.d11`), row7.querySelector(`.d12`),
    row7.querySelector(`.d13`), row7.querySelector(`.d14`), row7.querySelector(`.d15`),
    row7.querySelector(`.d16`), row7.querySelector(`.d17`), row7.querySelector(`.d18`),
    row7.querySelector(`.d19`), row7.querySelector(`.d20`), row7.querySelector(`.d21`),
    row7.querySelector(`.d22`), row7.querySelector(`.d23`), row7.querySelector(`.d24`),
    row7.querySelector(`.d25`)],
    [row8.querySelector(`.d1`), row8.querySelector(`.d2`), row8.querySelector(`.d3`),
    row8.querySelector(`.d4`), row8.querySelector(`.d5`), row8.querySelector(`.d6`),
    row8.querySelector(`.d7`), row8.querySelector(`.d8`), row8.querySelector(`.d9`),
    row8.querySelector(`.d10`), row8.querySelector(`.d11`), row8.querySelector(`.d12`),
    row8.querySelector(`.d13`), row8.querySelector(`.d14`), row8.querySelector(`.d15`),
    row8.querySelector(`.d16`), row8.querySelector(`.d17`), row8.querySelector(`.d18`),
    row8.querySelector(`.d19`), row8.querySelector(`.d20`), row8.querySelector(`.d21`),
    row8.querySelector(`.d22`), row8.querySelector(`.d23`), row8.querySelector(`.d24`),
    row8.querySelector(`.d25`)],
    [row9.querySelector(`.d1`), row9.querySelector(`.d2`), row9.querySelector(`.d3`),
    row9.querySelector(`.d4`), row9.querySelector(`.d5`), row9.querySelector(`.d6`),
    row9.querySelector(`.d7`), row9.querySelector(`.d8`), row9.querySelector(`.d9`),
    row9.querySelector(`.d10`), row9.querySelector(`.d11`), row9.querySelector(`.d12`),
    row9.querySelector(`.d13`), row9.querySelector(`.d14`), row9.querySelector(`.d15`),
    row9.querySelector(`.d16`), row9.querySelector(`.d17`), row9.querySelector(`.d18`),
    row9.querySelector(`.d19`), row9.querySelector(`.d20`), row9.querySelector(`.d21`),
    row9.querySelector(`.d22`), row9.querySelector(`.d23`), row9.querySelector(`.d24`),
    row9.querySelector(`.d25`)],
    [row10.querySelector(`.d1`), row10.querySelector(`.d2`), row10.querySelector(`.d3`),
    row10.querySelector(`.d4`), row10.querySelector(`.d5`), row10.querySelector(`.d6`),
    row10.querySelector(`.d7`), row10.querySelector(`.d8`), row10.querySelector(`.d9`),
    row10.querySelector(`.d10`), row10.querySelector(`.d11`), row10.querySelector(`.d12`),
    row10.querySelector(`.d13`), row10.querySelector(`.d14`), row10.querySelector(`.d15`),
    row10.querySelector(`.d16`), row10.querySelector(`.d17`), row10.querySelector(`.d18`),
    row10.querySelector(`.d19`), row10.querySelector(`.d20`), row10.querySelector(`.d21`),
    row10.querySelector(`.d22`), row10.querySelector(`.d23`), row10.querySelector(`.d24`),
    row10.querySelector(`.d25`)],
    [row11.querySelector(`.d1`), row11.querySelector(`.d2`), row11.querySelector(`.d3`),
    row11.querySelector(`.d4`), row11.querySelector(`.d5`), row11.querySelector(`.d6`),
    row11.querySelector(`.d7`), row11.querySelector(`.d8`), row11.querySelector(`.d9`),
    row11.querySelector(`.d10`), row11.querySelector(`.d11`), row11.querySelector(`.d12`),
    row11.querySelector(`.d13`), row11.querySelector(`.d14`), row11.querySelector(`.d15`),
    row11.querySelector(`.d16`), row11.querySelector(`.d17`), row11.querySelector(`.d18`),
    row11.querySelector(`.d19`), row11.querySelector(`.d20`), row11.querySelector(`.d21`),
    row11.querySelector(`.d22`), row11.querySelector(`.d23`), row11.querySelector(`.d24`),
    row11.querySelector(`.d25`)],
    [row12.querySelector(`.d1`), row12.querySelector(`.d2`), row12.querySelector(`.d3`),
    row12.querySelector(`.d4`), row12.querySelector(`.d5`), row12.querySelector(`.d6`),
    row12.querySelector(`.d7`), row12.querySelector(`.d8`), row12.querySelector(`.d9`),
    row12.querySelector(`.d10`), row12.querySelector(`.d11`), row12.querySelector(`.d12`),
    row12.querySelector(`.d13`), row12.querySelector(`.d14`), row12.querySelector(`.d15`),
    row12.querySelector(`.d16`), row12.querySelector(`.d17`), row12.querySelector(`.d18`),
    row12.querySelector(`.d19`), row12.querySelector(`.d20`), row12.querySelector(`.d21`),
    row12.querySelector(`.d22`), row12.querySelector(`.d23`), row12.querySelector(`.d24`),
    row12.querySelector(`.d25`)],
    [row13.querySelector(`.d1`), row13.querySelector(`.d2`), row13.querySelector(`.d3`),
    row13.querySelector(`.d4`), row13.querySelector(`.d5`), row13.querySelector(`.d6`),
    row13.querySelector(`.d7`), row13.querySelector(`.d8`), row13.querySelector(`.d9`),
    row13.querySelector(`.d10`), row13.querySelector(`.d11`), row13.querySelector(`.d12`),
    row13.querySelector(`.d13`), row13.querySelector(`.d14`), row13.querySelector(`.d15`),
    row13.querySelector(`.d16`), row13.querySelector(`.d17`), row13.querySelector(`.d18`),
    row13.querySelector(`.d19`), row13.querySelector(`.d20`), row13.querySelector(`.d21`),
    row13.querySelector(`.d22`), row13.querySelector(`.d23`), row13.querySelector(`.d24`),
    row13.querySelector(`.d25`)]
];
const scoreDis = document.getElementById("scoreDis");
const map = document.getElementById("map");


var lastDir = 3;
var dir = 3;
var speed = 0;
var score = 0;
var x = 1; //0-24 
var y = 6; //0-12
let appleX = 0;
let appleY = 0;
map.style.lineHeight = "0";
var lost = 0;

var curLocation = [[y, x], [y, x + 1]];
var pretLocation = []; //copy in move !
var isRunning = 1;

getApple();
var myInterval = setInterval(game, 300 - speed);



document.addEventListener('keydown', (e) => {
    e = e || window.event;


    if (e.keyCode === 37) {
        if (lastDir != 3)
            dir = 1;
    }
    else if (e.keyCode === 38) {
        if (lastDir != 4)
            dir = 2;
    }
    else if (e.keyCode === 39) {
        if (lastDir != 1)
            dir = 3;
    }
    else if (e.keyCode === 40) {
        if (lastDir != 2)
            dir = 4;
    }
    else if (e.keyCode === 32) {
        if (isRunning == 1)
            pause();
        else if (isRunning == 0)
            resume();
    }
    e.preventDefault();
    console.log(dir);
})







function pause() {
    /*     let map = document.getElementById("map");
        document.getElementById("map").style.lineHeight = "100%";
        map.lineHeight = "normal";
     */
    // document.getElementById("myDiv").style.lineHeight = "3";

    map.style.lineHeight = "14px";
    clearInterval(myInterval);
    isRunning = 0;

    data[5][9].innerHTML = `P`;
    data[5][10].innerHTML = `a`;
    data[5][11].innerHTML = `u`;
    data[5][12].innerHTML = `s`;
    data[5][13].innerHTML = `e`;
    data[5][14].innerHTML = `d`;


    data[5][8].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][9].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][10].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][11].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][12].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][13].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][14].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][15].style.backgroundColor = "rgba(0,0,0, 0.5)";

    data[6][8].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][9].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][10].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][11].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][12].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][13].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][14].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[6][15].style.backgroundColor = "rgba(0,0,0, 0.5)";

    data[7][8].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][9].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][10].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][11].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][12].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][13].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][14].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[7][15].style.backgroundColor = "rgba(0,0,0, 0.5)";

    data[7][11].innerHTML = `<button id="leftRes" class="resButton" onclick="resume()">G</button>`;
    data[7][12].innerHTML = `<button id="rightRes" class="resButton" onclick="resume()">O</button>`;

}

function resume() {
    isRunning = 1;

    data[5][8].innerHTML = ``;
    data[5][9].innerHTML = ``;
    data[5][10].innerHTML = ``;
    data[5][11].innerHTML = ``;
    data[5][12].innerHTML = ``;
    data[5][13].innerHTML = ``;
    data[5][14].innerHTML = ``;
    data[5][15].innerHTML = ``;
    data[5][16].innerHTML = ``;


    data[5][16].style.backgroundColor = "transparent";

    data[5][8].style.backgroundColor = "transparent";
    data[5][9].style.backgroundColor = "transparent";
    data[5][10].style.backgroundColor = "transparent";
    data[5][11].style.backgroundColor = "transparent";
    data[5][12].style.backgroundColor = "transparent";
    data[5][13].style.backgroundColor = "transparent";
    data[5][14].style.backgroundColor = "transparent";
    data[5][15].style.backgroundColor = "transparent";

    data[6][8].style.backgroundColor = "transparent";
    data[6][9].style.backgroundColor = "transparent";
    data[6][10].style.backgroundColor = "transparent";
    data[6][11].style.backgroundColor = "transparent";
    data[6][12].style.backgroundColor = "transparent";
    data[6][13].style.backgroundColor = "transparent";
    data[6][14].style.backgroundColor = "transparent";
    data[6][15].style.backgroundColor = "transparent";

    data[7][8].style.backgroundColor = "transparent";
    data[7][9].style.backgroundColor = "transparent";
    data[7][10].style.backgroundColor = "transparent";
    data[7][11].style.backgroundColor = "transparent";
    data[7][12].style.backgroundColor = "transparent";
    data[7][13].style.backgroundColor = "transparent";
    data[7][14].style.backgroundColor = "transparent";
    data[7][15].style.backgroundColor = "transparent";

    data[7][11].innerHTML = ``;
    data[7][12].innerHTML = ``;

    if (lost == 1) {
        start();
        lost = 0;
    }
    else {
        map.style.lineHeight = "0"; ///////////////////////////  /!\  ////////////////////////
        myInterval = setInterval(game, 300 - speed);
    }
}

function getApple() {
    data[appleY][appleX].style.backgroundImage = "none";
    let lastX = appleX;
    let lastY = appleY;
    while (lastX == appleX && lastY == appleY) {
        randomSpot();
    }
    data[appleY][appleX].style.backgroundImage = "url(Assets/apple.png)";

}

function randomSpot() {
    appleX = Math.floor(Math.random() * 25);
    appleY = Math.floor(Math.random() * 13);
}



function drawSnake() {
    for (let i in curLocation) {
        data[curLocation[i][0]][curLocation[i][1]].style.backgroundColor = "red";
    }
}

function clearSnake() {    //check
    for (let i in pretLocation) {
        data[pretLocation[i][0]][pretLocation[i][1]].style.backgroundColor = "transparent";

    }
}

function moveSnake() {
    switch (dir) {
        case 1: // left
            x--;
            break;
        case 2: // up
            y--;
            break;
        case 3: // right
            x++;
            break;
        case 4: // down
            y++;
            break;
    }
    if (x < 0 || x > 24 || y < 0 || y > 12)
        throw "Crushed in wall";

    if (eatItself()) {
        throw "Ate itself"
    }

    clearSnake();

    for (let i = curLocation.length - 1; i > 0; i--) {
        curLocation[i] = curLocation[i - 1];
    }
    curLocation[0] = [y, x];

    pretLocation = curLocation;

    lastDir = dir;
    drawSnake();
}

function game() {
    try {
        moveSnake();
        if (x == appleX && y == appleY) { // SCORED //
            if (speed < 240)
                speed += 10;
            clearInterval(myInterval);
            myInterval = setInterval(game, 300 - speed);
            getApple();
            score += (1 + (speed / 10));
            scoreDis.innerHTML = score;
            curLocation[curLocation.length] = curLocation[curLocation.length - 1];
        }
    }
    catch {
        if (isRunning == 1) {
            clearInterval(myInterval);
            isRunning = 0;
        }
        lost = 1;
        drawSnake();                         // flash snake
        gameOver();
    }
}

function eatItself() {

    if (curLocation.length == 1)
        return false;
    for (let o = 0; o < pretLocation.length - 1; o++) {
        if (pretLocation[o][0] == y && pretLocation[o][1] == x) {
            return true;
        }

    }
    return false;



}

function gameOver() {
    map.style.lineHeight = "14px";

    addGameOver();
}


function addGameOver() {


    data[5][8].innerHTML = `G`;
    data[5][9].innerHTML = `A`;
    data[5][10].innerHTML = `M`;
    data[5][11].innerHTML = `E`;

    data[5][13].innerHTML = `O`;
    data[5][14].innerHTML = `V`;
    data[5][15].innerHTML = `E`;
    data[5][16].innerHTML = `R`;


    data[5][8].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][9].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][10].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][11].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][12].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][13].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][14].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][15].style.backgroundColor = "rgba(0,0,0, 0.5)";
    data[5][16].style.backgroundColor = "rgba(0,0,0, 0.5)";
}


function cleanGameOver() {
    data[5][8].innerHTML = ``;
    data[5][9].innerHTML = ``;
    data[5][10].innerHTML = ``;
    data[5][11].innerHTML = ``;

    data[5][13].innerHTML = ``;
    data[5][14].innerHTML = ``;
    data[5][15].innerHTML = ``;
    data[5][16].innerHTML = ``;

    data[5][8].style.backgroundColor = "transparent";
    data[5][9].style.backgroundColor = "transparent";
    data[5][10].style.backgroundColor = "transparent";
    data[5][11].style.backgroundColor = "transparent";
    data[5][12].style.backgroundColor = "transparent";
    data[5][13].style.backgroundColor = "transparent";
    data[5][14].style.backgroundColor = "transparent";
    data[5][15].style.backgroundColor = "transparent";
    data[5][16].style.backgroundColor = "transparent";
}


function start() {

    score = 0;
    speed = 0;
    if (isRunning == 1) {
        isRunning = 0;
        clearInterval(myInterval);
    }

    clearSnake();
    cleanGameOver();

    lastDir = 1;
    dir = 3;

    score = 0;
    x = 1; //0-24
    y = 6; //0-12

    curLocation = [[y, x], [y, x]];
    pretLocation = []; //copy in move !

    scoreDis.innerHTML = score;

    getApple();

    isRunning = 1;
    myInterval = setInterval(game, 300 - speed);
}

/* 
for (let i = 0; ine < 13; i++) {
 for (let j = 0; j < 25; j++) {
     data[i][j].style.backgroundColor = "blue ";
 }
}
*/

