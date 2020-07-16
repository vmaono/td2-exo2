input.onButtonPressed(Button.A, function () {
    led.unplot(x, x)
    x += -1
    if (x >= 0) {
        led.unplot(x, y)
        x = 4
        led.plot(x, y)
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x > 4) {
        led.unplot(x, y)
        x = 0
        led.plot(x, y)
    }
    led.plot(x, y)
})
let y = 0
let x = 0
led.plot(0, 0)
let dir = 1
basic.forever(function () {
    if (y < 4 && dir == 1) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        basic.pause(1000)
    } else if (y >= 4 || y > 0) {
        dir = -1
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
        basic.pause(1000)
    } else {
        dir = 1
    }
})
