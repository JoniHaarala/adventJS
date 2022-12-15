function contarOvejas(ovejas) {
    return ovejas.filter(item => (item.name.search(/[aA]+/)!==-1 && item.name.search(/[nN]+/)!==-1) && item.color == 'rojo') 
}

// Programa main

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
