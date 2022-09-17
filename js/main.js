const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let land = new Land()
let street = new Street()
let lanes = 3

const keysPressed = {}

const keyActions = {
    ArrowLeft() {
        street.decreaseVelocityX()
    },
    ArrowRight() {
        street.increaseVelocityX()
    },
    KeyA() {
        lanes = 3
    },
    KeyS(){
        lanes = 4
    },
    KeyD() {
        lanes = 5
    }
}

document.addEventListener('keydown', ({ code }) => {
    const key = code
    if (keyActions[key] && !keysPressed[key]) {
        keysPressed[key] = true
    }
})

document.addEventListener('keyup', ({ code }) => {
    const key = code
    if (keysPressed[key]) {
        keysPressed[key] = false
    }
})

function handleKeys() {
    Object.keys(keysPressed).forEach(key => {
        if(keysPressed[key]) {
           keyActions[key]()
        }
    })
}

function animate() {
    handleKeys()
    land.drawGrass()
    street.updatePoints()
    street.adjustVelocityX()
    street.drawStreet()
    street.setLanes(lanes)
    street.drawLanes()
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    land = new Land()
    street = new Street()
})