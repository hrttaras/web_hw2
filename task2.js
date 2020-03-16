function roundByTwo(number) {
    return +(Math.round(number + "e+2")  + "e-2");
}

function avgWordLengthCalc(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
    let allWordsSum = 0;
    let allWordsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length !== 0) {
            allWordsCount++;
            allWordsSum += str[i].length;
        }
    }
    return roundByTwo(allWordsSum/allWordsCount);
}

console.log(avgWordLengthCalc("The reduce method executes a reducer function."));
