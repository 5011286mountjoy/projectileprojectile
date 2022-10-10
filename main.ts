namespace SpriteKind {
    export const playerProt = SpriteKind.create() // making a new spritekind to not kill you when you fire
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerProjectile = sprites.createProjectileFromSprite(assets.image`placeholder2`, player, 0, -50) //player firing
    playerProjectile.setKind(SpriteKind.playerProt) //protjectile different so you dont die when you fire
    pause(250) //not spammy projectiles
    playerProjectile.setFlag(SpriteFlag.AutoDestroy, true) //should destroy the player protjectile after passing top
})
info.onLifeZero(function () {
    game.over(false, effects.melt) //gane over when life hits 0
})
let playerProjectile: Sprite = null //dont worry about
let player: Sprite = null //dont worry about
effects.starField.startScreenEffect() //making stars
//the title screen and controls
game.splash("welcome", "arrow keys move, A fire")
player = sprites.create(assets.image`Placeholder`, SpriteKind.Player) //player sprite
controller.moveSprite(player, 75, 0) //moving player sprite
player.setPosition(75, 100) //player position at start
player.setStayInScreen(true) //the player cant go off screen
info.setLife(3) //life count
