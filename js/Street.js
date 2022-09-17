class Street extends Land{
    constructor() {
        super()
        this.pointsHere = [this.startOfLand + this.width/100*45, this.width - this.width/100*45]
        this.pointsThere = [this.startOfLand + this.width/100*70, this.width - this.width/100*70]
        this.sizeHere = this.pointsHere[1] - this.pointsHere[0]
        this.sizeThere = this.pointsThere[1] - this.pointsThere[0]
        this.velocityX = 0
        this.velocityZ = 1
        this.lanes = []
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
        this.pointsHere[0] += this.velocityX
        this.pointsHere[1] += this.velocityX
        this.pointsThere[0] += this.velocityX/15
        this.pointsThere[1] += this.velocityX/15
    }
    drawStreet() {
        const [hereLeft, hereRight] = this.pointsHere
        const [thereLeft, thereRight] = this.pointsThere
        context.fillStyle = 'white';
        context.beginPath();
        context.moveTo(hereLeft, canvas.height);
        context.lineTo(hereRight, canvas.height);
        context.lineTo(thereRight, this.endOfLand);
        context.lineTo(thereLeft, this.endOfLand);
        context.closePath();
        context.fill()
    }
    setLanes(amount) {
        this.lanes = []
        const [hereLeft, hereRight] = this.pointsHere
        const [thereLeft, thereRight] = this.pointsThere
        for (let i = 0; i <= amount; i++) {
            const lane = new Lane()
            const pieceOfStreetHere = this.sizeHere/(amount+2)
            const pieceOfStreetThere = this.sizeThere/(amount+2)
            lane.sizeHere = pieceOfStreetHere/amount
            lane.sizeThere = pieceOfStreetThere/amount
            const beforeLaneHere = hereLeft + pieceOfStreetHere*(i) + lane.sizeHere*i
            const beforeLaneThere = thereLeft+ pieceOfStreetThere*(i) + lane.sizeThere*i
            lane.pointsHere = [beforeLaneHere, beforeLaneHere + lane.sizeHere*(amount)]
            lane.pointsThere = [beforeLaneThere, beforeLaneThere + lane.sizeThere*(amount)]
            this.lanes.push(lane)
        }
    }
    drawLanes() {
        this.lanes.forEach(lane => {
            const [laneHereLeft, laneHereRight] = lane.pointsHere
            const [laneThereLeft, laneThereRight] = lane.pointsThere
            context.fillStyle = 'grey'
            context.beginPath()
            context.moveTo(laneHereLeft, canvas.height)
            context.lineTo(laneHereRight, canvas.height)
            context.lineTo(laneThereRight, this.endOfLand)
            context.lineTo(laneThereLeft, this.endOfLand)
            context.closePath()
            context.fill()
        })
    }
}
