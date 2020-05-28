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
const woodTexture = PIXI.Texture.from("images/wood.png");


// Create Containers



// Create Sprites

const archer = new PIXI.Sprite(archerTexture);
archer.x = (app.renderer.width / 2) - 60;
archer.y = app.renderer.height / 2;
archer.anchor.set(1)
archer.scale.set(-0.2, 0.2);
archer.interactive = true;
archer.on('click', archerChoose)


function archerChoose() {
    console.log("click happens")
    archer.y = 200
}

cannonLeft = new PIXI.Sprite(cannonTexture);
cannonLeft.x = 20;
cannonLeft.y = app.renderer.height;
cannonLeft.anchor.set(1, 1);
cannonLeft.scale.set(-0.2, 0.2);

cannonRight = new PIXI.Sprite(cannonTexture)
cannonRight.x = app.renderer.width - 20;
cannonRight.y = app.renderer.height;
cannonRight.anchor.set(1, 1);
cannonRight.scale.set(0.2);

bombLeft = new PIXI.Sprite(bombTexture)
bombLeft.x = cannonLeft.x + 110;
bombLeft.y = cannonLeft.y - 90;
bombLeft.scale.set(0.1);
bombLeft.anchor.set(0.5);

bombRight = new PIXI.Sprite(bombTexture)
bombRight.x = cannonRight.x - 110;
bombRight.y = cannonRight.y - 90;
bombRight.scale.set(0.1);
bombRight.anchor.set(0.5);

// Message Board elements

// const 


app.stage.addChild(archer);


const interface = document.getElementById('interface')
const testButton = document.getElementById('test')