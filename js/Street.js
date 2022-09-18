class Street {
    constructor() {
        this.sizeStart = land.pointsStart[1] - land.pointsStart[0]
        this.sizeEnd = land.pointsEnd[1] - land.pointsEnd[0]
        this.lanes = []
    }
    drawLanes() {
        let finalOfLane = land.endOfLand
        for (let i = 0; i < 10; i++) {
            context.fillStyle = 'grey'
            if (i % 2 == 1) {
                context.fillStyle = 'white'
            }
            const startOfLane = finalOfLane
            finalOfLane = getPercentageOfStreet((i*i*i)/4)
            context.beginPath()
            context.moveTo(0, startOfLane)
            context.lineTo(0, finalOfLane)
            context.lineTo(canvas.width, finalOfLane)
            context.lineTo(canvas.width, startOfLane)
            context.closePath()
            context.fill()
        }
    }
    setLanes(amountOfLanes) {
        this.lanes = []
        const [hereLeft, hereRight] = land.pointsStart
        const [thereLeft, thereRight] = land.pointsEnd
        for (let i = 0; i <= amountOfLanes; i++) {
            const lane = new Lane()
            const lanesDrawnBefore = i
            const pieceOfStreetHere = this.sizeStart/(amountOfLanes+2) //I don't know why "+2"
            const pieceOfStreetThere = this.sizeEnd/(amountOfLanes+2)
            lane.sizeStart = pieceOfStreetHere/amountOfLanes
            lane.sizeEnd = pieceOfStreetThere/amountOfLanes
            const beforeLaneHere = hereLeft + pieceOfStreetHere*lanesDrawnBefore + lane.sizeStart*lanesDrawnBefore
            const beforeLaneThere = thereLeft+ pieceOfStreetThere*lanesDrawnBefore + lane.sizeEnd*lanesDrawnBefore
            lane.pointsStart = [beforeLaneHere, beforeLaneHere + lane.sizeStart*(amountOfLanes)]
            lane.pointsEnd = [beforeLaneThere, beforeLaneThere + lane.sizeEnd*(amountOfLanes)]
            this.lanes.push(lane)
        }
    }
    drawStreet() {
        this.lanes.forEach(lane => {
            const [laneHereLeft, laneHereRight] = lane.pointsStart
            const [laneThereLeft, laneThereRight] = lane.pointsEnd
            context.fillStyle = 'grey'
            context.beginPath()
            context.moveTo(laneHereLeft, canvas.height)
            context.lineTo(laneHereRight, canvas.height)
            context.lineTo(laneThereRight, land.endOfLand)
            context.lineTo(laneThereLeft, land.endOfLand)
            context.closePath()
            context.fill()
        })
    }
}


function getPercentageOfStreet(percentage) {
    const streetSize = canvas.height - land.endOfLand
    return land.endOfLand + streetSize/100*percentage
}