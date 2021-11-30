radio.onReceivedNumber(function (receivedNumber) {
    radio2 = receivedNumber
    if (receivedNumber == 1) {
        Pieton = 1
    }
})
function Cycle_pieton () {
    fin_cycle_pieton = 0
    debut_cycle_pieton = 1
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    debut_cycle_pieton = 0
    fin_cycle_pieton = 1
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    Pieton = 1
    radio.sendNumber(1)
})
function Cycle_lumière () {
    fin_cycle_lumiere = 0
    debut_cycle_lumiere = 1
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(15000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    debut_cycle_lumiere = 0
    fin_cycle_lumiere = 1
    basic.pause(100)
}
let temps = 0
let fin_cycle_pieton = 0
let fin_cycle_lumiere = 0
let debut_cycle_pieton = 0
let debut_cycle_lumiere = 0
let Pieton = 0
let radio2 = 0
radio.setGroup(16)
radio2 = 0
Pieton = 0
debut_cycle_lumiere = 0
debut_cycle_pieton = 0
fin_cycle_lumiere = 0
fin_cycle_pieton = 0
basic.forever(function () {
    if (debut_cycle_pieton == 1) {
        for (let index2 = 0; index2 <= 10; index2++) {
            temps = index2 * -1 + 10
            basic.showNumber(temps)
        }
    }
})
basic.forever(function () {
    let debut_cycle_pieton2 = 0
    let debut_cycle_lumiere2 = 0
    if (Pieton == 1 && debut_cycle_lumiere2 == 0) {
        Cycle_pieton()
        Pieton = 0
    } else if (Pieton == 0 && debut_cycle_pieton2 == 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
