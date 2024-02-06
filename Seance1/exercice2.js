let words = ["hello", "goodbye", "the", "Antarctica", "a", "ANIMAL", "dog", "CAT", "zebra", "AAA"];

let findLongestWord = (words) => {
    let longestWord = words.reduce((longest, currentWord) =>
    {

        return currentWord.length > longest.length ? currentWord : longest;

    }
    , "");
    return [longestWord, longestWord.length];
}
console.log(findLongestWord(words));