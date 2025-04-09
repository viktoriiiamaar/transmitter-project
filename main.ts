basic.forever(function on_forever() {
    let path = [0, 1, 2, 3, 4, 5]
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        for (let i = 0; i < path.length; i++) {
            radio.sendValue("Do this:", path[i])
        }
    })
    radio.setGroup(1)
})
