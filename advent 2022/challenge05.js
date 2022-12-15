// otra version mas optimizada(197pts)
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return Math.max(
      ...giftsCities
        .sort((a, b) => b - a)
        .reduce((result, _, i) => {
          if (i) giftsCities.unshift(giftsCities.pop());
          i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0);
          i <= maxGifts && result.push(i);
          i - giftsCities[maxCities - 1] <= maxGifts &&
            result.push(i - giftsCities[maxCities - 1]);
          return result;
        }, []),
      0
    );
}

// main program examples
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
  // mi primer idea (130pts)
  // function getMaxGifts(giftsCities, maxGifts, maxCities) {
    
  //   const getCombinations = (arr) => {
  //     let combos = []
  
  //     const getCombination = (prefix, arr) => {
  //       for(let i = 0; i<arr.length; i++){
  //         combos.push(prefix.concat(arr[i]))
  //         getCombination(prefix.concat(arr[i]),arr.slice(i+1))
  //       }
  //     };
  //     getCombination([], arr);
  //     return combos;
  //   }
    
  //   let maxSum = Math.max(...getCombinations(giftsCities)
  //     .filter(item => item.length <= maxCities)
  //     .map(arr => arr.reduce((a,b) => a+b, 0))
  //     .filter(num => num <= maxGifts)
  //     .sort((a,b)=> b-a, [0] || 0),0)
  
  //   return maxSum
  // }