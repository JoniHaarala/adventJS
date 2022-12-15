function checkPart(part) {
    // revision estandar de palindromo
    if (part === part.split('').reverse().join('')) return true;
    // revision quitando un elemento por si existe un palindromo oculto
    return part.split('').some((e, i, array) => {
        let testArray = [...array]
        testArray.splice(i, 1)
        return testArray.join('') === testArray.reverse().join('');
    })
}

// Main program examples
checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter