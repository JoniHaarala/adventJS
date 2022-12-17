/*
Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.

Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.

Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. Visualmente, la pirámide se ve así:

    0
   / \
  7   4
 / \ / \
2   4   6
En código la representamos así:

[
  [0],
  [7, 4],
  [2, 4, 6]
]
Santa Claus necesita un programa que le dice cuál es el tiempo mínimo que puede tomar cada reno para deslizarse por la pirámide usando el camino más óptimo.

En el ejemplo anterior, el camino más óptimo es 0 -> 4 -> 4, que toma un total de 0 + 4 + 4 = 8 unidades de tiempo. El resultado sería: 8.

¿Por qué no es 6? No es 0 -> 4 -> 2 porque al bajar a la posición del 4 ya no puede diagonalmente llegar a la posición del 2. Así que el camino más corto posible es 8. Más ejemplos:

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

A tener en cuenta:
- Ten en cuenta que sólo puedes bajar en diagonal y hacia abajo desde cualquier posición.
- La primera posición de la pirámide puede ser diferente a 0.
- Las pirámides pueden tener hasta 10 niveles.
- Los números en las pirámides pueden ser negativos.
*/


// EXPLICACION DEL EJERCICIO

// tenemos q tener en cuenta q cada array es array.length + 1 mayor al anterior.

// por lo seria mejor ver desde el ultimo al final cual es el mejor para asi
// poder armar el camino teniendo en cuenta el valor del array de mayor nivel.

// en resumen
// 1 - invertimos el arreglo
// 2 - tomando como arreglo inicial la primera
//     fila del arreglo invertido sumamos hacia abajo
// 3 - en cada iteración obtendremos un arreglo con los 
//     valores mínimos del camino acumlado
// 4 - el resultado final sería el elemento 0 del
//     arreglo obtenido en la última iteración

// mi primera version q me dio 260pts sin spamear
// function getOptimalPath(path) {
//   const p = path.slice();
//   for (let i = p.length - 2; i >= 0; i--) {
//     p[i].forEach((item, j) => {
//       p[i][j] += Math.min(p[i + 1][j], p[i + 1][j + 1]);
//     });
//   }
//   return p[0][0];
// }
// otra version mucho mas comprensible sobre lo que se quiere 
// hacer(180pts normal, 280pts spameando)
// function getOptimalPath(path) {
//   for (let i = path.length - 2; i >= 0; i--) {
//     for (let j = 0; j <= i; j++) {
//       path[i][j] += Math.min(path[i + 1][j], path[i + 1][j + 1]);
//     }
//   }
//   return path[0][0];
// }

// solucion final optima(300pts normal, 400pts y 3000ops spameando)
function getOptimalPath(path) {
    return path.reduceRight((previous, current) => {
        return current.map((val, index) => {
            return val + Math.min(previous[index], previous[index + 1])
        })
    })[0];
}

// Main program examples
getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
