radio.setGroup(1)
basic.showString("S")
basic.forever(function () {
    basic.showNumber(Math.floor(input.temperature() / 10))
    radio.sendNumber(input.temperature() % 10)
})
