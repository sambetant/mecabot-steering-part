let HoekX = 0
radio.setGroup(1)
basic.forever(function () {
    HoekX = input.acceleration(Dimension.X)
    basic.showNumber(HoekX)
})
