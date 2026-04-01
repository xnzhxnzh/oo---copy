huskylens2.I2CInit()
huskylens2.switchAlgorithm(huskylens2.Algorithm.AlgorithmFaceRecognition)
I2C_LCD1602.LcdInit(2)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
let servo_angle = 90
servos.P0.setAngle(servo_angle)
basic.forever(function () {
    if (huskylens2.availableFaceRecognition()) {
        basic.showNumber(huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter))
    } else {
        basic.showIcon(IconNames.No)
    }
    huskylens2.getResultFaceRecognition()
    if (huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter) < 300) {
        servo_angle += 1
    }
    if (340 < huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter)) {
        servo_angle += -1
    }
    servos.P0.setAngle(servo_angle)
    basic.pause(100)
})
