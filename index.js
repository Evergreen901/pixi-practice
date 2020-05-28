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
loader.onComplete.add(handleLoadComplete);

loader.add("images/archer.png");
loader.load();

let archer;

function handleLoadComplete () {
    let archerTexture = loader.resources["images/archer.png"].texture;
    archer = new PIXI.Sprite(archerTexture);
    archer.anchor.set(0.5)
    archer.scale.set(-0.2, 0.2);
    app.stage.addChild(archer)

    app.ticker.add(archerPositionOnResize)
}

function archerPositionOnResize () {
    archer.x = app.renderer.screen.width / 2;
    archer.y = app.renderer.screen.height / 2;
}