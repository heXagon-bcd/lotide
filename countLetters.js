//function that takes in a sentence and returns a count of each of the letters in the sentence
const countLetters = function(sentence) {
  let sentenceCount = {};
  for (let letter of sentence) {
    sentenceCount[letter] = (sentenceCount[letter] || 0) + 1;
  }
  delete sentenceCount[' '];
  return sentenceCount;
};



module.exports = {countLetters};