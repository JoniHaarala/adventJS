function checkJump(heights) {

    let maxIndex = heights.indexOf(Math.max(...heights))

    let asc = heights.slice(0, maxIndex)
    let desc = heights.slice(maxIndex + 1, heights.length)
    // check conditions
    const hasAsc = asc.length > 0
    const hasDesc = desc.length > 0
    // 
    const goodAsc = asc.slice(1).every((h, i) => h >= asc[i])
    const goodDesc = desc.slice(1).every((h, i) => h <= desc[i])

    return hasAsc && hasDesc && goodAsc && goodDesc
}


checkJump([1, 3, 8, 5, 2]) // true
/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

checkJump([1, 7, 3, 5]) // false
/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/