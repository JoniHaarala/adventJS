/*
¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

W: Es una pared, no se puede pasar por ahí.
S: Punto de entrada al almacén.
E: Punto de salida del almacén.
: Los espacios en blanco es por donde se puede pasar.
Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

Recuerda que:

 - Sólo tienes que devolver si se puede salir del laberinto con un booleano.
 - Las paredes W no se pueden saltar.
 - No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.
*/

function canExit(maze) {
  const r = ([x, y]) => {
    const val = maze[x][y];
    delete maze[x][y];
    return (
      ['E'].includes(val) +
      [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
      ]
        .filter((arr) => maze[arr[0]])
        .filter(arr => ['E', ' '].includes(maze[arr[0]][arr[1]]))
        .some(r)
    );
  };

  const n = maze.flat().join('').indexOf('S');
  const x = ~~(n / maze[0].length);
  const y = n % maze[0].length;

  return !!r([x, y]);
}

/*
solucion de 2400 pts
  function canExit(maze) {
    const r = ([x, y]) => {
      const val = maze[x][y];
      maze[x][y] = 'X';
      return !!(
        ['E'].includes(val) +
        [
          [x + 1, y],
          [x - 1, y],
          [x, y + 1],
          [x, y - 1]
        ]
          .filter(arr => {
            const cell = maze[arr[0]] && maze[arr[0]][arr[1]];
            return ['E', ' '].includes(cell);
          })
          .some(r)
      );
    };
  
    const n = maze.flat().join('').indexOf('S');
    const x = parseInt(n / maze[0].length, 10);
    const y = n % maze[0].length;
  
    const result = r([x, y]);
  
    return result;
  }
*/