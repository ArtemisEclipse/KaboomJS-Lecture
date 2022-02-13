//First import the Kaboom library
kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    // clearColor: [0,0,0,1]
})

//Let's add a sprite
loadSprite('Sprites/bean.png')
add([
    sprite('bean'),
    pos(200,200)
])