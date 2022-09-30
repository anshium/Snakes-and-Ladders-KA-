/**
 * Leaving for a few months (13th April, 2022)
 * 
 * To Do:
 * 
 * Main Game Structure [ ]
 * --Base [x]
 * --Snakes [x]
 * --Ladders [x]
 * --Make it such so that no two ladders have feet at the same location and no two snakes have thier heads at the same location [ ]
 * --Players [ ]
 * 
 * Game Functioning [ ]
 * --Player Movement algo thinking + imlementation [ ]
 * --Snake and ladder detection + suitable movement implementation [ ]
 * --Movement logs (like player one got bit by a snake, etc.) in println) [ ]
 * --Dice Roll [ ]
 * --Two Player Implementation (New player, player change, etc.) [ ]
 * --Appropriate calculation of possible moves in the last [ ]
 * --Winning instance
 * 
 * UI [ ]
 * --Start Menu [ ]
 * (Not thinking of allowing a lot of customisation through UI. Users might just do it with the code)
 * --Dice roll on click [ ]
 * 
 * UX [ ]
 * --Changing the size of the program. 400x400 is fine for the gameboard but for dice, other things, 600x600 would be fine [ ]
 * --Nice cover image on start menu [ ]
 * --Cool Snake design(s) (This might be curvy) [ ]
 * --Cool Ladder Design [ ]
 * --Improving Board and background colour scheme [ ]
 * --Improving Dice [ ]
 * --Maybe bringing movement logs on the canvas without println [ ]
 * 
 * Any other things I think of in the future [ ]
 * 
 * **/

//Red ones are snakes and orange ones are ladders

random();

println("Board Loading...");
var startMillis = millis();

/*Game Board*/
//@Creation
var n = 10;
var oneMoveWidth = 35;
var oneMoveHeight = 35;

var widthIterate = 1;
var heightIterate = 0;

var loopDirection = 1;

var baseMatrix = [];

var x = 36;
var y = 356;

//Base Matrix Generation that has all the player holders
for(var i = 1; i <= n*n; i++){
    baseMatrix.push([x, y]); 
    if(i % n !== 0){
        x = x + oneMoveWidth*loopDirection;
    }
    else if(i % n === 0){
        y = y - oneMoveHeight*1;
        loopDirection = - loopDirection;
    }
}

//Snake Layer Matrix Generation
var snakeMatrix = [];
var totalSnakeNumber = 5;

for(var i = 1; i <= totalSnakeNumber; i++){
    var headRow = floor(random(2, n + 1));
    var tailRow = floor(random(1, headRow));
    
    var headIndex = floor(random((headRow - 1)*n, (headRow - 1)*n + n)); //I think I might forget what I did here
    var headX = baseMatrix[headIndex][0];
    var headY = baseMatrix[headIndex][1];
    
    var tailIndex = floor(random((tailRow - 1)*n, (tailRow - 1)*n + n));
    var tailX = baseMatrix[tailIndex][0];
    var tailY = baseMatrix[tailIndex][1];
    
    snakeMatrix.push([headX, headY, tailX, tailY]);
}

//Ladder Layer Matrix Generation
var ladderMatrix = [];
var totalLadderNumber = 5;

for(var i = 1; i <= totalLadderNumber; i++){
    var topRow = floor(random(2, n + 1));
    var footRow = floor(random(1, headRow));
    
    var topIndex = floor(random((topRow - 1)*n, (topRow - 1)*n + n)); //I think I might forget what I did here
    var topX = baseMatrix[topIndex][0];
    var topY = baseMatrix[topIndex][1];
    
    var footIndex = floor(random((footRow - 1)*n, (footRow - 1)*n + n));
    var footX = baseMatrix[footIndex][0];
    var footY = baseMatrix[footIndex][1];
    
    ladderMatrix.push([topX, topY, footX, footY]);
}

//@Display

var playerHolderRadius = 22;

//Base
function baseLayer(){
    for(var i = 0; i < baseMatrix.length; i++){
        strokeWeight(2);
        ellipse(baseMatrix[i][0], baseMatrix[i][1], playerHolderRadius, playerHolderRadius);
    }
}

//Snake Layer
function snakeLayer(){
    for(var i = 0; i < snakeMatrix.length; i++){
        stroke(217, 20, 20, 170);
        strokeWeight(5);
        line(snakeMatrix[i][0], snakeMatrix[i][1], snakeMatrix[i][2], snakeMatrix[i][3]);
        
        stroke(0, 0, 0);
        strokeWeight(9);
        point(snakeMatrix[i][0], snakeMatrix[i][1]); //head of snakes
    }
}

//Ladder Layer
function ladderLayer(){
    for(var i = 0; i < ladderMatrix.length; i++){
        stroke(217, 126, 21, 200);
        strokeWeight(5);
        line(ladderMatrix[i][0], ladderMatrix[i][1], ladderMatrix[i][2], ladderMatrix[i][3]);
        
        stroke(0, 0, 0);
        strokeWeight(9);
        point(ladderMatrix[i][2], ladderMatrix[i][3]); //head of snakes
    }
}

//println(snakeMatrix);
// println(millis() - startMillis);
println("Loaded! (~ " +  (millis() - startMillis).toString() + " milliseconds)");

baseLayer();
snakeLayer();
ladderLayer();





























// //Game making in Progress

// var t = 0;

// var k = 0;

// var posX = 20;
// var posY = 380;

// var positions = [
// //1st row
//     [20, 380],
//     [60, 380],
//     [100, 380],
//     [140, 380],
//     [180, 380],
//     [220, 380],
//     [260, 380],
//     [300, 380],
//     [340, 380],
//     [380, 380],
    
// //2nd row    
//     [380, 340],
//     [340, 340],
//     [300, 340],
//     [260, 340],
//     [220, 340],
//     [180, 340],
//     [140, 340],
//     [100, 340],
//     [60, 340],
//     [20, 340],

// //3rd row    
//     [20, 300],
//     [60, 300],
//     [100, 300],
//     [140, 300],
//     [180, 300],
//     [220, 300],
//     [260, 300],
//     [300, 300],
//     [340, 300],
//     [380, 300],
    
// //4th row    
//     [380, 260],
//     [340, 260],
//     [300, 260],
//     [260, 260],
//     [220, 260],
//     [180, 260],
//     [140, 260],
//     [100, 260],
//     [60, 260],
//     [20, 260],

// //5th row
//     [20, 220],
//     [60, 220],
//     [100, 220],
//     [140, 220],
//     [180, 220],
//     [220, 220],
//     [260, 220],
//     [300, 220],
//     [340, 220],
//     [380, 220],

// //6th row
//     [380, 180],
//     [340, 180],
//     [300, 180],
//     [260, 180],
//     [220, 180],
//     [180, 180],
//     [140, 180],
//     [100, 180],
//     [60, 180],
//     [20, 180],

// //7th row
//     [20, 140],
//     [60, 140],
//     [100, 140],
//     [140, 140],
//     [180, 140],
//     [220, 140],
//     [260, 140],
//     [300, 140],
//     [340, 140],
//     [380, 140],

// //8th row   
//     [380, 100],
//     [340, 100],
//     [300, 100],
//     [260, 100],
//     [220, 100],
//     [180, 100],
//     [140, 100],
//     [100, 100],
//     [60, 100],
//     [20, 100],

// //9th row
//     [20, 60],
//     [60, 60],
//     [100, 60],
//     [140, 60],
//     [180, 60],
//     [220, 60],
//     [260, 60],
//     [300, 60],
//     [340, 60],
//     [380, 60],

// //10 row
//     [380, 20],
//     [340, 20],
//     [300, 20],
//     [260, 20],
//     [220, 20],
//     [180, 20],
//     [140, 20],
//     [100, 20],
//     [60, 20],
//     [20, 20]
    
//     ];

// draw = function() {
    
// background(255, 255, 255);

// strokeWeight(1);
// //rect(0, 0, 40, 40);

// strokeWeight(5);
// point(20, 20);
// point(20+40, 20);

// for(var i = 20; i<=400; i+=40){
//     for(var j = 20; j<=400; j+=40){
//         point(i, j);
//     }
// }

// noFill();
// ellipse(positions[k][0], positions[k][1], 20, 20);

// t++;
// //println(t + " " + t%100);
// };
// mouseClicked = function(){
//     /**
//     if(posY === 380){
//         posY-=
//     }
//     **/
//     //var f = frameCount();
//     var r = floor(random(1, 6));
    
//     for(var c = 1; c<=r; c++){
//         k=k+1;
//         if((t%100 === 0) === true){
//             continue;
//         }
//     }
    
// };
