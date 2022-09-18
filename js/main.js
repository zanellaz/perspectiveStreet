const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const land = new Land()
const street = new Street()
let lanes = 3

const keysPressed = {}

const keyActions = {
    ArrowLeft() {
        land.decreaseVelocityX()
    },
    ArrowRight() {
        land.increaseVelocityX()
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

function handleLanes() {
    street.setLanes(lanes)
    street.drawLanes()
}

function handleStreet() {
    land.drawGrass()
    street.drawStreet()
}

function handleVeloX() {
    land.updatePoints()
    land.adjustVelocityX()
}

function handleVeloZ() {

}

function animate() {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    handleKeys()
    handleVeloX()
    handleLanes()
    handleStreet()
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    land = new Land()
    street = new Street()
})