radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(987)
})
radio.setGroup(1)
basic.forever(function () {
	
})
