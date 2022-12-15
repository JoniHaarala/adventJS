function fitsInOneBox(boxes) {
    return boxes.sort((b1, b2) => b1.l - b2.l).every((box, i) => i === 0 || box.l > boxes[i - 1].l && box.w > boxes[i - 1].w && box.h > boxes[i - 1].h)
}

// Main program examples
let boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false

boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
  fitsInOneBox(boxes) // true