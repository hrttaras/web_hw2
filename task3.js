function sortNum(a, b) {
    return b - a;
}

function maxTotal(arr) {
    let sum = 0;
    arr.sort(sortNum);
    for (let i = 0; i < 5; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
