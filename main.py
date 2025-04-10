def on_button_pressed_a():
    path = [0, 1, 2, 3, 4, 5]
    for i in range(len(path)):
        radio.send_value("step", path[i])
        basic.pause(200)  # Small delay to ensure transmission
input.on_button_pressed(Button.A, on_button_pressed_a)

radio.set_group(1)
