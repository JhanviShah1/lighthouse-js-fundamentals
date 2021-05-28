const numberOfVowels = function(data) {
    const vowels = [];
    var total = 0;
    for (let letter of data) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowels.push(letter);
            total = vowels.length;
        }
    }
    return total;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));