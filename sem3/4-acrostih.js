const simpleArray = ["the", "quick", "brown", "fox"];

const sampleText = `
best
read
on
windy
nights
`; //brown

const checkAcrostih = (arr, text) => {
    const word = text.split("\n")
                      .filter(e => e)
                      .map(e => e.trim())
                      .map(e => e.charAt(0))
                      .join("");
    return arr.indexOf(word) !== -1;
}

console.log("Array: " + simpleArray);
console.log("Text: " + sampleText);
console.log("Is acrostih: " + checkAcrostih(simpleArray, sampleText));
