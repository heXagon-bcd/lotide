/**
 * @param {string} the function takes in a setence as a string and return a count  of the letters int he sequence
 * Step 1 Create Function
 * Step 2 Create an empty Object
 * Step 3 Loop trough each string character
 * EXAMPLE
 * console.log(countLetters('hello shawn'));
 */

const assertEqual = require("./assertEqual");
const countLetters = function(sentence) {
  let sentenceCount = {};
  for (let letter of sentence) {
    sentenceCount[letter] = (sentenceCount[letter] || 0) + 1;
  }
  console.log("expected Object", sentenceCount[' ']);
  delete sentenceCount[' '];
  return sentenceCount;
};



module.exports = {countLetters};