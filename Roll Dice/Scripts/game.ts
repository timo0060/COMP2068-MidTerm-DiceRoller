var canvas;
var stage: createjs.Stage;

//Game Objects
var game: createjs.Container;
var dice1: createjs.Bitmap;
var dice2: createjs.Bitmap;
var dice1Label: createjs.Bitmap;
var dice2Label: createjs.Bitmap;
var dice1ResultNum: createjs.Bitmap;
var dice2ResultNum: createjs.Bitmap;
var background: createjs.Bitmap;
var rollButton: createjs.Bitmap;

var titleText: createjs.Text;

//Game Variables
var dice1Value;
var dice2Value;


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop() {
    stage.update();
}

function rollDice() {
    //Set value for Dice 1
    var dice1Result = 0;

    dice1Result = Math.floor((Math.random() * 6) + 1);

    //Set Value for Dice 2
    var dice2Result = 0;

    dice2Result = Math.floor((Math.random() * 6) + 1);

    showDice(dice1Result, dice2Result);
}

function showDice (dice1Result, dice2Result) {
    //Set the image for Dice 1
    switch (dice1Result) {
        case 1:
            dice1 = new createjs.Bitmap("assets/images/one.png");            
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/oneLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
        case 2:
            dice1 = new createjs.Bitmap("assets/images/two.png");
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/twoLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
        case 3:
            dice1 = new createjs.Bitmap("assets/images/three.png");
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/threeLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
        case 4:
            dice1 = new createjs.Bitmap("assets/images/four.png");
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/fourLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
        case 5:
            dice1 = new createjs.Bitmap("assets/images/five.png");
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/fiveLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
        case 6:
            dice1 = new createjs.Bitmap("assets/images/six.png");
            dice1.x = 200;
            dice1.y = 120;
            dice1ResultNum = new createjs.Bitmap("assets/images/sixLabel.png");
            dice1ResultNum.x = 224;
            dice1ResultNum.y = 242;
            break;
    }

    //Set the image for Dice 1
    switch (dice2Result) {
        case 1:
            dice2 = new createjs.Bitmap("assets/images/one.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/oneLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
        case 2:
            dice2 = new createjs.Bitmap("assets/images/two.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/twoLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
        case 3:
            dice2 = new createjs.Bitmap("assets/images/three.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/threeLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
        case 4:
            dice2 = new createjs.Bitmap("assets/images/four.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/fourLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
        case 5:
            dice2 = new createjs.Bitmap("assets/images/five.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/fiveLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
        case 6:
            dice2 = new createjs.Bitmap("assets/images/six.png");
            dice2.x = 350;
            dice2.y = 120;
            dice2ResultNum = new createjs.Bitmap("assets/images/sixLabel.png");
            dice2ResultNum.x = 374;
            dice2ResultNum.y = 242;
            break;
    }

    //Remove previous dice and labels
    if(dice1) {
        game.removeChild(dice1);
    } 
    if (dice2) {
        game.removeChild(dice2);
    }
    if (dice1ResultNum) {
        game.removeChild(dice1ResultNum);
    }
    if (dice2ResultNum) {
        game.removeChild(dice2ResultNum);
    }

    //Add the Dice and the result labels
    game.addChild(dice1);
    game.addChild(dice2);
    game.addChild(dice1ResultNum);
    game.addChild(dice2ResultNum);
}
function createUI() {
    //Set Background Image
    background = new createjs.Bitmap("assets/images/table.png");
    game.addChild(background);

    //Set Dice Labels
    dice1Label = new createjs.Bitmap("assets/images/dice1Label.png");
    dice1Label.x = 195;
    dice1Label.y = 40;
    game.addChild(dice1Label);

    dice2Label = new createjs.Bitmap("assets/images/dice2Label.png");
    dice2Label.x = 345;
    dice2Label.y = 40;
    game.addChild(dice2Label);

    //Set up the Roll Button
    rollButton = new createjs.Bitmap("assets/images/roll_button.png");
    rollButton.x = 270;
    rollButton.y = 350;
    //Add button to the Stage
    game.addChild(rollButton);

    //Initialze Dice
    rollDice();

    //Add Roll Button event Listeners
    rollButton.addEventListener("click", rollDice);
}

function main() {
    game = new createjs.Container();
    game.x = 23;
    game.y = 23;

    //Create the user interface
    createUI();

    stage.addChild(game);
}