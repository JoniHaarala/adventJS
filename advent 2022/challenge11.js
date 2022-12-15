// version mas optima (320pts)
function getCompleted(part, total) {
    const p = part.split(':');
    const t = total.split(':');
    const ps = (+p[0] * 60 + +p[1]) * 60 + +p[2];
    const ts = (+t[0] * 60 + +t[1]) * 60 + +t[2];
  
    const mcd = (a, b) => {
      while (b) {
        const t = b;
        b = a % b;
        a = t;
      }
      return a;
    };
    const gcd = mcd(ps, ts);
  
    const n1 = ps / gcd;
    const n2 = ts / gcd;
    return `${n1}/${n2}`; 
}
// mi version del problema pero con recursividad... se ve q añade Complejidad cognitiva (180pts)
// function getCompleted(part, total) {
//     let partArr = part.split(':')
//     const partSeg = parseInt(partArr[1],10)*60 + parseInt(partArr[2],10)
//     let partTime = parseInt(partArr[0],10)*3600 + partSeg
  
//     let totalArr = total.split(':')
//     const totSeg = parseInt(totalArr[1],10)*60 + parseInt(totalArr[2],10)
//     let totalTime = parseInt(totalArr[0],10)*3600 + totSeg
  
//     const MCD = (a, b) => b === 0 ? a : MCD(b, a % b)
//     const getMCD = MCD(totalTime, partTime)
//     return `${partTime / getMCD}/${totalTime / getMCD}`
// }

// Main program examples
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5