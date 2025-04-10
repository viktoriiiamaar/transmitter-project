//  Small delay to ensure transmission
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let path = [0, 1, 2, 3, 4, 5]
    for (let i = 0; i < path.length; i++) {
        radio.sendValue("step", path[i])
        basic.pause(200)
    }
})
radio.setGroup(1)
