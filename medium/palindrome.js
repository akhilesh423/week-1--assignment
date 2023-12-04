/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLocaleLowerCase()

  let strArray = Array.from(str)
  let newStrArray = strArray.filter((cha) => cha >= 'a' && cha <= 'z' ? cha : '')

  if (JSON.stringify(newStrArray) === JSON.stringify(newStrArray.reverse()))
    return true;
  else
    return false;
}

module.exports = isPalindrome;
