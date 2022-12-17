// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

// Por ejemplo, si tenemos los siguientes almacenes:

// const a1 = ['bici', 'coche', 'bici', 'bici']
// const a2 = ['coche', 'bici', 'muñeca', 'coche']
// const a3 = ['bici', 'pc', 'pc']

// /* El almacén a1 tiene "bici" y "coche".
// El almacén a2 tiene "coche", "bici" y "muñeca".
// El almacén a3 tiene "bici" y "pc".

// El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
// */

// const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
// Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

// 📝 Summary
// - Crea una función getGiftsToRefill que reciba tres Array como parámetros.
// - La función debe devolver un Array con los regalos que hay que reponer.
// - Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
// - Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
// - Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.

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
