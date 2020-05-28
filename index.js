const canvas = document.getElementById('mycanvas');

const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight - 200,
    backgroundColor: 0x000333,
    resolution: window.devicePixelRatio,
    autoDensity: true
})

window.addEventListener('resize', resize)

function resize() {
    _w = window.innerWidth;
    _h = window.innerHeight - 200;

    app.renderer.resize(_w, _h)
}

// Create Textures

const archerTexture = PIXI.Texture.from("images/archer.png");
const warriorTexture = PIXI.Texture.from("images/warrior.png");
const wizardTexture = PIXI.Texture.from("images/wizard.png");

const fireballTexture = PIXI.Texture.from("images/fire.png");
const arrowTexture = PIXI.Texture.from("images/arrows.png");
const axeTexture = PIXI.Texture.from("images/axe.png");

const cannonTexture = PIXI.Texture.from("images/cannon.png");
const bombTexture = PIXI.Texture.from("images/bomb.png");
const crossbowTexture = PIXI.Texture.from("images/crossbow.png")

const templeFloorTexture = PIXI.Texture.from("images/templeFloor.jpg")

const woodTexture = PIXI.Texture.from("images/wood.png");


// Create Containers

const startPage = new PIXI.Container();
const classChoicePage = new PIXI.Container();
const actOne = new PIXI.Container();


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

const cannonLeft = new PIXI.Sprite(cannonTexture);
cannonLeft.x = 20;
cannonLeft.y = app.renderer.height;
cannonLeft.anchor.set(1, 1);
cannonLeft.scale.set(-0.2, 0.2);

const cannonRight = new PIXI.Sprite(cannonTexture)
cannonRight.x = app.renderer.width - 20;
cannonRight.y = app.renderer.height;
cannonRight.anchor.set(1, 1);
cannonRight.scale.set(0.2);

const bombLeft = new PIXI.Sprite(bombTexture)
bombLeft.x = cannonLeft.x + 110;
bombLeft.y = cannonLeft.y - 90;
bombLeft.scale.set(0.1);
bombLeft.anchor.set(0.5);

const bombRight = new PIXI.Sprite(bombTexture)
bombRight.x = cannonRight.x - 110;
bombRight.y = cannonRight.y - 90;
bombRight.scale.set(0.1);
bombRight.anchor.set(0.5);

// Messages

const messageStyle = new PIXI.TextStyle({
    fill: 'white'
})
const chooseClassMessage = new PIXI.Text("Choose your class", messageStyle)
chooseClassMessage.x = app.renderer.width / 2;
chooseClassMessage.y = (app.renderer.height / 2) - 100;
chooseClassMessage.anchor.set(0.5);


// Scene Changes

function chooseClass(classChoice){
    chosenClass = classChoice
    app.stage.removeChild(startPage)
    classChoicePage.addChild(chosenClass)
    app.stage.addChild(classChoicePage)
    gsap.to(chosenClass, {duration: 1, x: app.renderer.width / 2, y: app.renderer.height / 2})
}

function actOneStart(){
    
}


// Start stage
startPage.addChild(archer)
startPage.addChild(warrior)
startPage.addChild(wizard)
startPage.addChild(chooseClassMessage)

app.stage.addChild(startPage);


const interface = document.getElementById('interface')
const testButton = document.getElementById('test')                                                                                                  