String.prototype.capitalizeWords = function() {
    return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

let sentence = "the quick brown fox jumps over the lazy dog";
console.log(sentence);
console.log(sentence.capitalizeWords());