namespace SpriteKind {
    export const playerProt = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // player firing
    playerProjectile = sprites.createProjectileFromSprite(assets.image`placeholder2`, player, 0, -50)
    // protjectile different so you dont die when you fire
    playerProjectile.setKind(SpriteKind.playerProt)
    // not spammy projectiles
    pause(250)
    // should destroy the player protjectile after passing top
    playerProjectile.setFlag(SpriteFlag.AutoDestroy, true)
})
info.onLifeZero(function () {
    // gane over when life hits 0
    game.over(false, effects.melt)
})
let playerProjectile: Sprite = null
let player: Sprite = null
// making stars
effects.starField.startScreenEffect()
// the title screen and controls
game.splash("welcome", "arrow keys move, A fire")
// player sprite
player = sprites.create(assets.image`Placeholder`, SpriteKind.Player)
// moving player sprite
controller.moveSprite(player, 75, 0)
// player position at start
player.setPosition(75, 100)
// the player cant go off screen
player.setStayInScreen(true)
// life count
info.setLife(3)
let boss = sprites.create(assets.image`bossplaceholder`, SpriteKind.Enemy)