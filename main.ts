controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`placeholder2`, player, 0, -50)
})
let projectile: Sprite = null
let player: Sprite = null
// making stars
effects.starField.startScreenEffect()
game.splash("welcome", "arrow keys move, A fire")
player = sprites.create(assets.image`Placeholder`, SpriteKind.Player)
controller.moveSprite(player, 75, 0)
player.setPosition(75, 100)
player.setStayInScreen(true)
info.setLife(3) 