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


const car3 = document.getElementById("car3")
var c3x = 0
var c3y = 0
var c3z = -25

var c3speed = 0.02
var c3original = c3x
var c3limit = 23

function moveCar3() {
    if (c3x < (c3original + c3limit)) {
        c3x += c3speed
    }
    else {
        c3x = c3original
    }
    car3.setAttribute('position', `${c3x} ${c3y} ${c3z}`)
    requestAnimationFrame(moveCar3)


}
moveCar3()


const car5 = document.getElementById("car5")
var c5x = -35
var c5y = 0
var c5z = -75

var c5speed = 0.25
var c5original = c5x
var c5limit = 40

function moveCar5() {
    if (c5x < (c5original + c5limit)) {
        c5x += c5speed
    }
    else {
        c5x = c5original
    }
    car5.setAttribute('position', `${c5x} ${c5y} ${c5z}`)
    requestAnimationFrame(moveCar5)


}
moveCar5()


const car6 = document.getElementById("car6")
var c6x = 0
var c6y = 0
var c6z = -32

var c6speed = 0.05
var c6original = c6z
var c6limit = 15

function moveCar6() {
    if (c6z < (c6original + c6limit)) {
        c6z += c6speed
    }
    else {
        c6z = c6original
    }
    car6.setAttribute('position', `${c6x} ${c6y} ${c6z}`)
    requestAnimationFrame(moveCar6)


}
moveCar6()

const car7 = document.getElementById("car7")
var c7x = 5
var c7y = 0
var c7z = -25

var c7speed = -0.05
var c7original = c7x
var c7limit = 15

function moveCar7() {
    if (c7x > (c7original - c7limit)) {
        c7x += c7speed
    }
    else {
        c7x = c7original
    }
    car7.setAttribute('position', `${c7x} ${c7y} ${c7z}`)
    requestAnimationFrame(moveCar7)


}
moveCar7()


const car4 = document.getElementById("car4")
var c4x = 0
var c4y = 0
var c4z = -25

var c4speed = 0.01
var c4original = c4x
var c4limit = 20

function moveCar4() {
    if (c4x < (c4original + c4limit)) {
        c4x += c4speed
    }
    else {
        c4x = c4original
    }
    car4.setAttribute('position', `${c4x} ${c4y} ${c4z}`)
    requestAnimationFrame(moveCar4)


}
moveCar4()


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