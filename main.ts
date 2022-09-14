input.onButtonPressed(Button.A, function () {
    basic.showNumber(걸음수)
    if (걸음수 >= 5000) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showString(" WOW!")
    } else {
        basic.showString(" CHEER UP!")
    }
})
input.onGesture(Gesture.Shake, function () {
    걸음수 += 1
    if (걸음수 == 5000) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0.7 * 걸음수)
    basic.showString("m")
})
input.onButtonPressed(Button.B, function () {
    걸음수 = 0
    basic.showString("NEW!")
})
let 걸음수 = 0
걸음수 = 0
