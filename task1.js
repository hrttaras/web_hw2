function toArr(objectValues) {
    let result = [];
    for (let i = 0; i < Object.keys(objectValues).length; i++) {
        result.push([Object.keys(objectValues)[i], Object.values(objectValues)[i]])
    }
    return result;
}

console.log(toArr({number1: "hello", number2: 2}));
