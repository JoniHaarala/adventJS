function createCube(size) {
    let finalCube = []
    for (let i = size; i > 0; i--) {
        finalCube.unshift(' '.repeat(size - i).concat('/\\'.repeat(i)).concat('_\\'.repeat(size)))
        finalCube.push(" ".repeat(size - i).concat('\\/'.repeat(i)).concat("_/".repeat(size)));
    }
    return finalCube.join('\n');
}

// Main program examples
const cube = createCube(3)
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/

const cubeOfOne = createCube(1)
// /\_\
// \/_/
const cubeOfTwo = createCube(2)