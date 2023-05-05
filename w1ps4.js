// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array){
    for(let i = 0; i < array.length; i++){
        console.log(i + ": " + array[i])
    }
}
// console.log(logEach(["Anthony", "John", "Carson"]))

/// Problem 2
// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end){
    let arr = []
    for(let i = start; i <= end; i++){
        arr.push(i)
    }
    return arr
}
// console.log(range(1,4))
// console.log(range(4,2))

// problem 3

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array){
    sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
// console.log(sumArray([5, 6, 4]))
// console.log(sumArray([7, 3, 9, 11]))

// prioblem 4
// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']
function capWords(words){
    let arr = []
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        arr.push(word.toUpperCase())
    }
    return arr
}
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))

/// Probelm 5
// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
function wordPeriods(sentence){
    let splitSentence = sentence.split(" ")
    let joinSentence = splitSentence.join(". ") + (".")
    return joinSentence


}
console.log(wordPeriods('what is the weather today'))