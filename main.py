def Cycle_pieton():
    global debut_cycle_pieton
    debut_cycle_pieton = 1
    pins.digital_write_pin(DigitalPin.P2, 1)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P16, 0)
    for index in range(5):
        pins.digital_write_pin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P8, 0)
        basic.pause(500)
    pins.digital_write_pin(DigitalPin.P2, 0)
    debut_cycle_pieton = 0

def on_button_pressed_a():
    global Pieton
    Pieton = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def Cycle_lumière():
    global debut_cycle_lumiere
    debut_cycle_lumiere = 1
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P2, 0)
    debut_cycle_lumiere = 0
    basic.pause(100)
debut_cycle_pieton = 0
debut_cycle_lumiere = 0
Pieton = 0
Pieton = 0
debut_cycle_lumiere = 0
debut_cycle_pieton = 0

def on_forever():
    global Pieton
    if Pieton == 1 and debut_cycle_lumiere == 0:
        Cycle_pieton()
        Pieton = 0
    elif Pieton == 0 and debut_cycle_pieton == 0:
        Cycle_lumière()
    else:
        pass
basic.forever(on_forever)
