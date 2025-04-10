def on_button_pressed_a():
    basic.pause(1000)
    path = [1, 2, 3, 1, 2, 3, 1]
    for i in range(len(path)):
        radio.send_value("step", path[i])
        basic.pause(700)  # Small delay for good transmission
input.on_button_pressed(Button.A, on_button_pressed_a)

radio.set_group(1)
