const car = document.getElementById("car")
var x = 5
var y = 0
var z = -90

var speed = 0.25
var original = z
var limit = 20

function moveCar() {
    if (z < (original + limit)) {
        z += speed
    }
    else {
        z = original
    }
    car.setAttribute('position', `${x} ${y} ${z}`)
    requestAnimationFrame(moveCar)


}
moveCar()

const car2 = document.getElementById("car2")
var c2x = 0
var c2y = 0
var c2z = -23

var c2speed = 0.10
var c2original = c2z
var c2limit = 16

function moveCar2() {
    if (c2z < (c2original + c2limit)) {
        c2z += c2speed
    }
    else {
        c2z = c2original
    }
    car2.setAttribute('position', `${c2x} ${c2y} ${c2z}`)
    requestAnimationFrame(moveCar2)


}
moveCar2()



const rocket = document.getElementById("rocket")
var rx = 0
var ry = 0
var rz = 0

var rspeed = 0.15
var roriginal = ry
var rlimit = 150

function moveRocket() {
    if (ry < (roriginal + rlimit)) {
        ry += rspeed
    }
    else {
        ry = roriginal
    }
    rocket.setAttribute('position', `${rx} ${ry} ${rz}`)
    requestAnimationFrame(moveRocket)

}
moveRocket()
