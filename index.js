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

console.log(PIXI.utils.TextureCache);

let loader = PIXI.Loader.shared;
loader.onComplete.add(setup);

loader
    .add("images/archer.png")
    .add("images/cannon.png")
    .add("images/bomb.png")
loader.load();

let archer,
    cannonLeft,
    cannonRight,
    bombLeft,
    bombRight


function setup () {
    let archerTexture = loader.resources["images/archer.png"].texture;
    archer = new PIXI.Sprite(archerTexture);
    archer.anchor.set(0.5)
    archer.scale.set(-0.2, 0.2);
    app.stage.addChild(archer);

    let cannonTexture = loader.resources["images/cannon.png"].texture;
    cannonLeft = new PIXI.Sprite(cannonTexture);
    cannonLeft.x = 20;
    cannonLeft.y = app.renderer.height;
    cannonLeft.anchor.set(1, 1);
    cannonLeft.scale.set(-0.2, 0.2);
    app.stage.addChild(cannonLeft)

    cannonRight = new PIXI.Sprite(cannonTexture)
    cannonRight.x = app.renderer.width - 20;
    cannonRight.y = app.renderer.height;
    cannonRight.anchor.set(1, 1);
    cannonRight.scale.set(0.2);
    app.stage.addChild(cannonRight)

    let bombTexture = loader.resources["images/bomb.png"].texture;
    bombLeft = new PIXI.Sprite(bombTexture)
    bombLeft.x = cannonLeft.x + 110;
    bombLeft.y = cannonLeft.y - 90;
    bombLeft.scale.set(0.1);
    bombLeft.anchor.set(0.5);
    app.stage.addChild(bombLeft)

    bombRight = new PIXI.Sprite(bombTexture)
    bombRight.x = cannonRight.x - 110;
    bombRight.y = cannonRight.y - 90;
    bombRight.scale.set(0.1);
    bombRight.anchor.set(0.5);
    app.stage.addChild(bombRight)

    app.ticker.add(positionsOnResize)
}

function positionsOnResize () {
    archer.x = app.renderer.width / 2;
    archer.y = app.renderer.height / 2;

    cannonLeft.x = 20;
    cannonLeft.y = app.renderer.height;

    cannonRight.x = app.renderer.width - 20;
    cannonRight.y = app.renderer.height;

    bombLeft.x = cannonLeft.x + 110;
    bombLeft.y = cannonLeft.y - 90;

    bombRight.x = cannonRight.x - 110;
    bombRight.y = cannonRight.y - 90;
}

