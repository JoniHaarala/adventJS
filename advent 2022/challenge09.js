function countTime(leds) {
    const arr = leds.join('').split('1');
    let max = 0;
    arr.forEach((el) => {
        const time = el.length;
        time > max && (max = time);
    })
    return Math.max(max * 7, (arr[0].length + arr[arr.length - 1].length) * 7);
}

countTime([0, 1, 1, 0, 1]) // 7
countTime([0, 0, 0, 1]) // 21
countTime([0, 0, 1, 0, 0]) // 28