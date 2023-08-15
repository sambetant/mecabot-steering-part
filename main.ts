radio.setGroup(2)
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        if (input.acceleration(Dimension.Y) < -200 && Math.abs(input.acceleration(Dimension.X)) < 100) {
            basic.clearScreen()
            led.plot(2, 0)
            radio.sendNumber(1)
        }
        if (input.acceleration(Dimension.Y) > 200 && Math.abs(input.acceleration(Dimension.X)) < 100) {
            basic.clearScreen()
            led.plot(2, 4)
            radio.sendNumber(2)
        }
        if (input.acceleration(Dimension.X) > 200 && Math.abs(input.acceleration(Dimension.Y)) < 100) {
            basic.clearScreen()
            led.plot(4, 2)
            radio.sendNumber(3)
        }
        if (input.acceleration(Dimension.X) < -200 && Math.abs(input.acceleration(Dimension.Y)) < 100) {
            basic.clearScreen()
            led.plot(0, 2)
            radio.sendNumber(4)
        }
        if (input.acceleration(Dimension.X) < -200 && input.acceleration(Dimension.Y) > 200) {
            basic.clearScreen()
            led.plot(0, 4)
            radio.sendNumber(5)
        }
        if (input.acceleration(Dimension.X) > 200 && input.acceleration(Dimension.Y) < -200) {
            basic.clearScreen()
            led.plot(4, 0)
            radio.sendNumber(6)
        }
        if (input.acceleration(Dimension.X) < -200 && input.acceleration(Dimension.Y) < -200) {
            basic.clearScreen()
            led.plot(0, 0)
            radio.sendNumber(7)
        }
        if (input.acceleration(Dimension.X) > 200 && input.acceleration(Dimension.Y) > 200) {
            basic.clearScreen()
            led.plot(4, 4)
            radio.sendNumber(8)
        }
        if (Math.abs(input.acceleration(Dimension.X)) < 50 && Math.abs(input.acceleration(Dimension.Y)) < 50) {
            basic.clearScreen()
            led.plot(2, 2)
            radio.sendNumber(0)
        }
        if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
            basic.clearScreen()
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
            radio.sendNumber(9)
        }
        if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
            radio.sendNumber(10)
        }
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        radio.sendNumber(0)
    }
})
