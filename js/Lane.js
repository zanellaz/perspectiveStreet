class Lane {
    constructor() {
        this.laneSizeHere = land.sizeHere
        this.laneSizeThere = land.sizeThere
    }
    setLanes() {
        this.lanePointsHere = [streetSizeHere, streetSizeHere+this.laneSizeHere]
        this.lanePointsThere = [streetSizeThere, streetSizeThere+this.laneSizeHere]
    }
}