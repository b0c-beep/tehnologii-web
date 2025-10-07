function checkDivizibilitate(numar, divizor) {
    if (divizor === 0) {
        return "Impartire la 0";
    }
    return numar % divizor == 0 ? true : false;
}
console.log(checkDivizibilitate(10, 2)); // true
console.log(checkDivizibilitate(10, 3)); // false
console.log(checkDivizibilitate(10, 0)); // "Impartire la 0"    


function charFreq(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            count++;
        }   
    }
    return count;
}

console.log(charFreq("abca", "a")); // 2
console.log(charFreq("abca", "b")); // 1
console.log(charFreq("abca", "z")); // 0
console.log(charFreq("", "a")); // 0

