/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack McNulty
 * Created on: Oct 2025
 * This program uses a distance sensor
*/

// variables
let distanceToObject: number = 0
let neopixelStrip: neopixel .Strip = null

// setup
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// getting distance
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)

    // checking if the distance is more or less than 10cm
    if (distanceToObject > 10) {
        basic.clearScreen()
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
    } else (distanceToObject < 10) 
        basic.clearScreen()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
    })
