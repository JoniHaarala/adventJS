function listGifts(letter) {
    let splittedLetter = letter.trim().split(' ').filter(elem => elem[0] !== '_')
    return splittedLetter.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta)
console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/