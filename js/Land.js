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