huskylens2.I2CInit()
huskylens2.switchAlgorithm(huskylens2.Algorithm.AlgorithmFaceRecognition)
let servo_angle = 90
let servo_angle_2 = 90
servos.P0.setAngle(servo_angle)
servos.P1.setAngle(servo_angle_2)
basic.forever(function () {
    huskylens2.getResultFaceRecognition()
    if (huskylens2.availableFaceRecognition()) {
        basic.showNumber(huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter))
    } else {
        basic.showIcon(IconNames.No)
    }
    huskylens2.getResultFaceRecognition()
    if (huskylens2.availableFaceRecognition()) {
        if (huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter) < 240) {
            servo_angle += 1
        }
        if (380 < huskylens2.cachedCenterResult(huskylens2.BasePropertyId.XCenter)) {
            servo_angle += -1
        }
        servos.P0.setAngle(servo_angle)
        if (huskylens2.cachedCenterResult(huskylens2.BasePropertyId.YCenter) < 180) {
            servo_angle_2 += -1
        }
        if (260 < huskylens2.cachedCenterResult(huskylens2.BasePropertyId.YCenter)) {
            servo_angle_2 += 1
        }
        servos.P1.setAngle(servo_angle_2)
        basic.pause(5)
    } else {
        basic.showIcon(IconNames.No)
    }
})
