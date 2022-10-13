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
    pause(20)
})
info.onScore(60, function () {
    game.splash("CONGRATS", "You have defeated the space coffee van")
    // Game Win
    game.over(true, effects.splatter)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
})
info.onLifeZero(function () {
    // game over when life hits 0
    game.over(false, effects.melt)
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (game.runtime() >= 5000) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        // player firing
        playerProjectile = sprites.createProjectileFromSprite(assets.image`Laser`, player, 0, -50)
        // protjectile different so you dont die when you fire
        playerProjectile.setKind(SpriteKind.playerProt)
        // should destroy the player protjectile after passing top
        playerProjectile.setFlag(SpriteFlag.AutoDestroy, true)
        // not spammy projectiles
        pause(20)
    }
})
sprites.onOverlap(SpriteKind.playerProt, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy(effects.disintegrate, 150)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossProt, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 150)
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
game.splash("Generic Space Game", "arrow keys move, A fire")
pause(500)
game.splash("rules", "get 60 hits to win")
pause(500)
info.startCountdown(5)
// life count
info.setLife(3)
music.setVolume(51)
// player sprite
player = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
// boss stuff
let boss = sprites.create(assets.image`BOSS`, SpriteKind.Enemy)
// player position at start
player.setPosition(75, 100)
// the player cant go off screen
player.setStayInScreen(true)
boss.setPosition(75, 25)
boss.setStayInScreen(true)
pause(5000)
// moving player sprite
controller.moveSprite(player, 75, 0)
game.onUpdate(function () {
    if (info.score() == 60) {
        game.over(true, effects.splatter)
    }
})
game.onUpdateInterval(5500, function () {
    bossProjectile = sprites.createProjectileFromSprite(assets.image`Lime`, boss, -15, 50)
    bossProjectile = sprites.createProjectileFromSprite(assets.image`Lime`, boss, 0, 50)
    bossProjectile = sprites.createProjectileFromSprite(assets.image`Lime`, boss, 15, 50)
    bossProjectile.setKind(SpriteKind.bossProt)
})
game.onUpdateInterval(1000, function () {
    bossProjectile = sprites.createProjectileFromSprite(assets.image`BOSSPROJECTILE`, boss, randint(-15, 15), 50)
    bossProjectile.setKind(SpriteKind.bossProt)
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 125)
})
game.onUpdateInterval(500, function () {
    boss.x += randint(-5, 5)
})
