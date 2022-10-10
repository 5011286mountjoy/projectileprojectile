effects.starField.startScreenEffect() //making stars
game.splash("welcome", "arrow keys move, A fire")
let player = sprites.create(assets.image`Placeholder`, SpriteKind.Player)
controller.moveSprite(player, 75, 0)
player.setPosition(75, 100)
