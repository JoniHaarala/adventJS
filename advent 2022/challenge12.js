// // solucion optimizada de 360pts
function selectSleigh(distance, sleighs) {
    const res = sleighs.reverse().find(item=>item.consumption*distance<=20)
    return res ? res.name : null
}
  
// Mi primera solucion de 260pts
// function selectSleigh(distance, sleighs) {
//   let trineoArr = sleighs.map((item,i) => sleighs[i].name)
//   const sleighWatt = sleighs.map((item,i) => sleighs[i].consumption*distance)
//   const sleighWattFilter = sleighWatt.filter(item => item <= 20)
//   const getsleigh = sleighWatt.indexOf(Math.max(...sleighWattFilter))
      
//   return trineoArr[getsleigh] ? trineoArr[getsleigh] : null
// }

// Main program examples
const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

selectSleigh(distance, sleighs) // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.