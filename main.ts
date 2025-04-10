//  Small delay to ensure transmission
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.pause(1000)
    let path = [1, 2, 3, 1, 2, 3, 1]
    for (let i = 0; i < path.length; i++) {
        radio.sendValue("step", path[i])
        basic.pause(2000)
    }
})
radio.setGroup(1)
