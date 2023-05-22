input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showNumber(_1 - _2)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showNumber(_1 + _2)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.showNumber(_1 * _2)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.showNumber(_1 / _2)
})
let _2 = 0
let _1 = 0
let LLLL = randint(1, 9)
LLLL = randint(1, 9)
basic.showNumber(_1)
basic.showNumber(_2)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
