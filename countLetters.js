/**
 * @param {string} the take in a sentence (as a string) and then return a count of each of the letters in 
 * EXAMPLE
 * console.log(countLetters('hello shawn'));
 */

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