//implementati o fc care returneaza nr de caractere diferite dintre 2 stringuri cu ac lungime, primite ca si parametrii
//daca stringurile sunt lungimi diferite fc va returna -1

function diff(str1, str2) {
    if (str1.length !== str2.length) {
        return -1;
    }
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}

console.log(diff("abcd", "abcf")); // 1
console.log(diff("abcd", "abxy")); // 2
console.log(diff("abcd", "abcd")); // 0
console.log(diff("abc", "abcd")); // -1

