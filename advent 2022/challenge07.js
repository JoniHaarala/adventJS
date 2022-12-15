function getGiftsToRefill(a1, a2, a3) {
    const giftsTofill = Array.from(new Set([...a1, ...a2, ...a3]))
    // true = 1, por lo que si sumando todo da solo 1, o menor a 2 entonces significa q falta stock en las 2 otras
    return giftsTofill.filter((item) => { return a1.includes(item) + a2.includes(item) + a3.includes(item) < 2 })
}

// Main program examples
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']