/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowles = ["a", "e", "i", "o", "u"]
  let vowlesCount = 0
  for (let i = 0; i < str.length; i++) {
    let smallLetter = str[i].toLowerCase()
    if (vowles.includes(smallLetter)) {
      vowlesCount = vowlesCount + 1
    }
  }
  return vowlesCount
}

module.exports = countVowels;