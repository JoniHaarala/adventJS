function distributeGifts(packOfGifts, reindeers) {
    return (reindeers.join("").length * 2 / packOfGifts.join("").length) >> 0
}

// Main program
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

distributeGifts(packOfGifts, reindeers) // 2