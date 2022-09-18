class Land {
    constructor() {
        this.width = canvas.width*2
        this.startOfLand = 0 - canvas.width
        this.endOfLand = canvas.height - canvas.height/6
        const pointStartLeft = this.startOfLand + this.width/100*45
        const pointStartRight = this.width - this.width/100*45
        const pointEndLeft = this.startOfLand + this.width/100*75
        const pointEndRight = this.width - this.width/100*73
        this.pointsStart = [pointStartLeft, pointStartRight]
        this.pointsEnd = [pointEndLeft, pointEndRight]
        this.velocityX = 0
        // this.velocityZ = 1
    }
    increaseVelocityX() {
        if (this.velocityX+1 < 50) {
            this.velocityX += 2
        }
    }
    decreaseVelocityX() {
        if (this.velocityX-1 > -50) {
            this.velocityX -= 2
        }
    }
    adjustVelocityX() {
        if (this.velocityX > 0) {
            this.velocityX--
        }
        if (this.velocityX < 0) {
            this.velocityX++
        }
    }
    updatePoints() {
        this.pointsStart[0] += this.velocityX
        this.pointsStart[1] += this.velocityX
        this.pointsEnd[0] += this.velocityX/15
        this.pointsEnd[1] += this.velocityX/15
    }
    drawGrass(){
        context.fillStyle='limegreen';
        drawRightGrass()
        drawLeftGrass()
    }
}
function drawLeftGrass () {
    const [streetStartLeft, streetStartRight] = land.pointsStart
    const [streetEndLeft, streetEndRight] = land.pointsEnd
    context.beginPath()
    context.moveTo(0, canvas.height)
    context.lineTo(0, land.endOfLand)
    context.lineTo(streetEndLeft, land.endOfLand)
    context.lineTo(streetStartLeft, canvas.height)
    context.closePath()
    context.fill()
}

function drawRightGrass () {
    const [streetStartLeft, streetStartRight] = land.pointsStart
    const [streetEndLeft, streetEndRight] = land.pointsEnd
    context.beginPath()
    context.moveTo(canvas.width, canvas.height)
    context.lineTo(canvas.width, land.endOfLand)
    context.lineTo(streetEndRight, land.endOfLand)
    context.lineTo(streetStartRight, canvas.height)
    context.closePath()
    context.fill()
}
