namespace SpriteKind {
    export const playerProt = SpriteKind.create()
    export const bossProt = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    // player firing
    playerProjectile = sprites.createProjectileFromSprite(assets.image`Laser`, player, 0, -50)
    // protjectile different so you dont die when you fire
    playerProjectile.setKind(SpriteKind.playerProt)
    // should destroy the player protjectile after passing top
    playerProjectile.setFlag(SpriteFlag.AutoDestroy, true)
    // not spammy projectiles
    pause(250)
})
info.onLifeZero(function () {
    // game over when life hits 0
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossProt, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    player.setFlag(SpriteFlag.Ghost, true)
    pause(2000)
    player.setFlag(SpriteFlag.Ghost, false)
})
let bossProjectile: Sprite = null
let playerProjectile: Sprite = null
let player: Sprite = null
// making stars
effects.starField.startScreenEffect()
// the title screen and controls
game.splash("welcome", "arrow keys move, A fire")
// player sprite
player = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
// moving player sprite
controller.moveSprite(player, 75, 0)
// player position at start
player.setPosition(75, 100)
// the player cant go off screen
player.setStayInScreen(true)
// life count
info.setLife(3)
// boss stuff
let boss = sprites.create(assets.image`BOSS`, SpriteKind.Enemy)
boss.setPosition(75, 25)
boss.setStayInScreen(true)
music.setVolume(51)
game.onUpdateInterval(1000, function () {
    bossProjectile = sprites.createProjectileFromSprite(assets.image`BOSSPROJECTILE`, boss, 0, 50)
    bossProjectile.setKind(SpriteKind.bossProt)
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 125)
})
game.onUpdateInterval(500, function () {
    boss.x += randint(-5, 5)
})
