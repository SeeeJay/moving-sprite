input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    basic.pause(500)
    sprite.delete()
    basic.pause(500)
    sprite = game.createSprite(4, 4)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Heart)
sprite = game.createSprite(3, 3)
