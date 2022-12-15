function wrapping(gifts) {
    let regalo = []

    gifts.map(item => {
        const cubierta = '*'.repeat(item.length + 2)
        const ad = cubierta + '\n*' + item + '*\n' + cubierta;
        regalo.push(ad)
    })

    return regalo
}

// Main program
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)