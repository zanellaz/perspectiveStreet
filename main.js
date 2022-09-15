const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Land {
    constructor() {
        this.width = canvas.width*2
        this.height = canvas.height/3
        this.startOfLand = 0 - canvas.width
        this.endOfLand = canvas.height - canvas.height/3
    }
    drawGrass(){
        const { width, height, startOfLand, endOfLand} = this
        context.fillStyle='green';
        context.fillRect(startOfLand, endOfLand, width, height)
    }
}

class Street extends Land{
    constructor() {
        super()
        this.pointsHere = [this.startOfLand + this.width/4*1.8, this.width - this.width/4*1.8]
        this.pointsThere = [this.startOfLand + this.width/3*2.2, this.width - this.width/3*2.2]
    }
    updatePoints(value) {
        this.pointsHere[0] += value
        this.pointsHere[1] += value
        this.pointsThere[0] += value/3
        this.pointsThere[1] += value/3
    }
    drawStreet() {
        const [hereLeft, hereRight] = this.pointsHere
        const [thereLeft, thereRight] = this.pointsThere
        context.fillStyle='grey';
        context.beginPath();
        context.moveTo(hereLeft, canvas.height);
        context.lineTo(hereRight, canvas.height);
        context.lineTo(thereRight, this.endOfLand);
        context.lineTo(thereLeft, this.endOfLand);
        context.closePath();
        context.fill()
    }
}

let land = new Land()
let street = new Street()

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight
    land = new Land()
    street = new Street()
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowLeft') {
        street.updatePoints(-50)
    }
    if (event.key == 'ArrowRight') {
        street.updatePoints(50)
    }
})


function animate() {
    land.drawGrass()
    street.drawStreet()
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)