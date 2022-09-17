class Lane extends Street{
    constructor() {
        super()
        this.laneSizeHere = this.sizeHere
        this.laneSizeThere = this.sizeThere
    }
    setLanes() {
        const numberOfLanes = lanes.length
        const streetSizeHere = numberOfLanes*this.laneSizeHere
        const streetSizeThere = numberOfLanes*this.laneSizeThere
        this.laneSizeHere = streetSizeHere/numberOfLanes
        this.laneSizeThere = streetSizeThere/numberOfLanes
        this.lanePointsHere = [streetSizeHere, streetSizeHere+this.laneSizeHere]
        this.lanePointsThere = [streetSizeThere, streetSizeThere+this.laneSizeHere]
    }
}