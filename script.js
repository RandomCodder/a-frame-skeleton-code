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
