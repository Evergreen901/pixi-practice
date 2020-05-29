const canvas = document.getElementById('mycanvas');

const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight - 150,
    backgroundColor: 0x000333,
    //resolution: window.devicePixelRatio,
    autoDensity: true
})

window.addEventListener('resize', resize)

function resize() {
    _w = window.innerWidth;
    _h = window.innerHeight - 200;

    app.renderer.resize(_w, _h)
}

const interface = document.getElementById('interface')

// Create Textures

const archerTexture = PIXI.Texture.from("images/archer.png");
const warriorTexture = PIXI.Texture.from("images/warrior.png");
const wizardTexture = PIXI.Texture.from("images/wizard.png");

const heartTexture = PIXI.Texture.from("images/heart.png")
const fireballTexture = PIXI.Texture.from("images/fire.png");
const arrowTexture = PIXI.Texture.from("images/arrows.png");
const axeTexture = PIXI.Texture.from("images/axe.png");

const cannonTexture = PIXI.Texture.from("images/cannon.png");
const bombTexture = PIXI.Texture.from("images/bomb.png");
const crossbowTexture = PIXI.Texture.from("images/crossbow.png")

const templeFloorTexture = PIXI.Texture.from("images/templeFloor.jpg")
const dungeonDoorTexture = PIXI.Texture.from("images/dungeon.png")

const woodTexture = PIXI.Texture.from("images/wood.png");
const navArrowTexture = PIXI.Texture.from("images/next.png")


// Create Containers

const startPage = new PIXI.Container();
const classChoicePage = new PIXI.Container();
const actOne = new PIXI.Container();
const livesContainer = new PIXI.Container();


// Create Sprites

let chosenClass = null;

const archer = new PIXI.Sprite(archerTexture);
archer.x = (app.renderer.width / 2) - 300;
archer.y = (app.renderer.height / 2) + 100;
archer.anchor.set(0.5)
archer.scale.set(-0.2, 0.2);
archer.interactive = true;
archer.on('click', () => {
    chooseClass(archer)
})

const warrior = new PIXI.Sprite(warriorTexture);
warrior.x = (app.renderer.width / 2);
warrior.y = (app.renderer.height / 2) + 100;
warrior.anchor.set(0.5);
warrior.scale.set(-0.2, 0.2);
warrior.interactive = true;
warrior.on('click', () => {
    chooseClass(warrior)
})

const wizard = new PIXI.Sprite(wizardTexture);
wizard.x = (app.renderer.width / 2) + 300;
wizard.y = (app.renderer.height / 2) + 100;
wizard.anchor.set(0.5);
wizard.scale.set(-0.2, 0.2);
wizard.interactive = true;
wizard.on('click', () => {
    chooseClass(wizard)
})

const navArrowBack = new PIXI.Sprite(navArrowTexture)
navArrowBack.scale.set(-0.05)
navArrowBack.anchor.set(0.5)
navArrowBack.interactive = true;

const navArrowContinue = new PIXI.Sprite(navArrowTexture)
navArrowContinue.scale.set(0.05)
navArrowContinue.anchor.set(0.5)
navArrowContinue.interactive = true;

const templeFloor = new PIXI.Sprite(templeFloorTexture);
templeFloor.anchor.set(0.5);
templeFloor.x = app.renderer.width / 2;
templeFloor.y = app.renderer.height / 2;
templeFloor.scale.set(0.5)
actOne.addChild(templeFloor)

let livesCount = 3;
let hearts = []

for(let i = 0; i < livesCount; i++){
    let heart = new PIXI.Sprite(heartTexture);
    heart.scale.set(0.1)
    heart.x = 100 * i;
    heart.y = 100;

    livesContainer.addChild(heart)
    hearts.push(heart)
}



const dungeonDoor = new PIXI.Sprite(dungeonDoorTexture);
dungeonDoor.x = (app.renderer.width / 2) + 300;
dungeonDoor.y = (app.renderer.height / 2);
dungeonDoor.anchor.set(0.5)
dungeonDoor.scale.set(0.2)

const crossbows = []

const crossbow1 = new PIXI.Sprite(crossbowTexture)
crossbow1.x = (app.renderer.width / 2) - 200;
crossbow1.y = (app.renderer.height / 2) - 300;
crossbow1.anchor.set(0.5)
crossbow1.scale.set(0.1, -0.1)
crossbows.push(crossbow1);

const crossbow2 = new PIXI.Sprite(crossbowTexture)
crossbow2.x = (app.renderer.width / 2) - 200;
crossbow2.y = (app.renderer.height / 2) + 300;
crossbow2.anchor.set(0.5)
crossbow2.scale.set(0.1)
crossbows.push(crossbow2);

const crossbow3 = new PIXI.Sprite(crossbowTexture)
crossbow3.x = app.renderer.width / 2;
crossbow3.y = (app.renderer.height / 2) - 300;
crossbow3.anchor.set(0.5)
crossbow3.scale.set(0.1, -0.1)
crossbows.push(crossbow3);

const crossbow4 = new PIXI.Sprite(crossbowTexture)
crossbow4.x = app.renderer.width / 2;
crossbow4.y = (app.renderer.height / 2) + 300;
crossbow4.anchor.set(0.5)
crossbow4.scale.set(0.1)
crossbows.push(crossbow4);

const crossbow5 = new PIXI.Sprite(crossbowTexture)
crossbow5.x = (app.renderer.width / 2) + 200;
crossbow5.y = (app.renderer.height / 2) - 300;
crossbow5.anchor.set(0.5)
crossbow5.scale.set(0.1, -0.1)
crossbows.push(crossbow5);

const crossbow6 = new PIXI.Sprite(crossbowTexture)
crossbow6.x = (app.renderer.width / 2) + 200;
crossbow6.y = (app.renderer.height / 2) + 300;
crossbow6.anchor.set(0.5)
crossbow6.scale.set(0.1)
crossbows.push(crossbow6);



// Messages

const messageStyle = new PIXI.TextStyle({
    fill: 'white'
})
const chooseClassMessage = new PIXI.Text("Choose a class", messageStyle)
chooseClassMessage.x = app.renderer.width / 2;
chooseClassMessage.y = (app.renderer.height / 2) - 100;
chooseClassMessage.anchor.set(0.5);

const changeClassMessage = new PIXI.Text("choose different class", messageStyle)
changeClassMessage.x = (app.renderer.width / 2) - 300;
changeClassMessage.y = (app.renderer.height / 2) + 100;
changeClassMessage.anchor.set(0, 0.5)

const continueMessage = new PIXI.Text("Start your adventure", messageStyle);
continueMessage.x = (app.renderer.width / 2) + 300;
continueMessage.y = (app.renderer.height / 2) + 100;
continueMessage.anchor.set(1, 0.5)


// Scene Changes

function chooseClass(classChoice){

    chosenClass = classChoice

    app.stage.removeChild(startPage)

    classChoicePage.addChild(chosenClass)
    classChoicePage.addChild(chooseClassMessage)
    classChoicePage.addChild(changeClassMessage)
    classChoicePage.addChild(navArrowBack)
        navArrowBack.x = changeClassMessage.x - 20;
        navArrowBack.y = changeClassMessage.y;
        navArrowBack.on('click', () => {
            app.stage.removeChild(classChoicePage)
            startPage.addChild(chosenClass)
            startPage.addChild(chooseClassMessage)
            chooseClassMessage.text = "Choose a class"
            app.stage.addChild(startPage)
            switch (chosenClass){
                case archer:
                    gsap.to(archer, {duration: 1, x: (app.renderer.width / 2) - 300, y: (app.renderer.height / 2) + 100})
                case warrior:
                    gsap.to(warrior, {duration: 1, x: app.renderer.width / 2, y: (app.renderer.height / 2) + 100})
                case wizard:
                    gsap.to(wizard, {duration: 1, x: (app.renderer.width / 2) + 300, y: (app.renderer.height / 2) + 100})
            }
        })
    classChoicePage.addChild(continueMessage)
    classChoicePage.addChild(navArrowContinue)
        navArrowContinue.x = continueMessage.x + 20;
        navArrowContinue.y = continueMessage.y
        navArrowContinue.on('click', actOneStart)


    if(chosenClass === archer){
        chooseClassMessage.text = "Archer"
    } else if(chosenClass === warrior){
        chooseClassMessage.text = "Warrior"
    } else if(chosenClass === wizard){
        chooseClassMessage.text = "Wizard"
    }
    app.stage.addChild(classChoicePage)

    gsap.to(chosenClass, {duration: 1, x: app.renderer.width / 2, y: app.renderer.height / 2})
}

const instructions = document.getElementById('instructions');
const readyButton = document.getElementById('readyButton')

function actOneStart(){
    app.stage.removeChild(classChoicePage)
    actOne.addChild(chosenClass)
    app.stage.addChild(actOne)
    setTimeout(() => {
        gsap.to(chosenClass, {duration: 1, x: (app.renderer.width / 2) - 300});
        crossbows.forEach(crossbow => actOne.addChild(crossbow))
        actOne.addChild(dungeonDoor);
        actOne.addChild(livesContainer);
            livesContainer.x = 100;
        instructions.style.display = 'block';
        readyButton.style.display = 'block'
    }, 1500)
}

readyButton.addEventListener('click', actOneBegins)

let num1 = Math.round(Math.random() * 10)
let num2 = Math.round(Math.random() * 10)
let operator = '+';
let equation = document.getElementById("equation");
let answer = document.getElementById("answer");
let num1Display = document.getElementById('num1')
let num2Display = document.getElementById('num2')
let operatorDisplay = document.getElementById('operator')
let guess = document.getElementById('guess')
let correct = document.getElementById('correct')
let wrong = document.getElementById('wrong')

function actOneBegins(){
    instructions.style.display = 'none';
    readyButton.style.display = 'none';
    num1Display.innerHTML = num1;
    operatorDisplay.innerHTML = operator;
    num2Display.innerHTML = num2;
    equation.style.display = 'flex';
}

answer.addEventListener('submit', checkAnswer)

function checkAnswer(e){
    e.preventDefault()
    console.log(guess.value)
    console.log(num1 + num2)
    if(num1 + num2 === parseInt(guess.value)){
        correct.style.display = 'block'
    } else {
        wrong.style.display = 'block'
    }
}


// Start stage
startPage.addChild(archer)
startPage.addChild(warrior)
startPage.addChild(wizard)
startPage.addChild(chooseClassMessage)

app.stage.addChild(startPage);



                                                                                               