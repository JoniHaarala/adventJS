/*
Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

getCompleted('01:00:00', '03:00:00') // '1/3'

Ten en cuenta:
- El formato de la hora es hh:mm:ss.
- El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
- La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
- Si ya se ha completado la tarea, la fracción sería 1/1.
- Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.
*/


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
