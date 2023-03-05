// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
  }

};

/**
 * @param {string} the function takes in a setence as a string and return a count  of the letters int he sequence
 * Step 1 Create Function
 * Step 2 Create an empty Object
 * Step 3 Loop trough each string character
 */
const countLetters = function(sentence) {
let sentenceCount = {};
  for(letter of sentence) {
    const element = sentence[letter];
    sentenceCount[letter] = (sentenceCount[letter] || 0) + 1;
  }
   console.log("expected Object", sentenceCount[' '])
  // for(space of Object.keys(sentenceCount)) {
  //   if((' ' in sentenceCount) === true) {
  //     // delete sentenceCount[space];
  //     console.log(sentenceCount[space]);
  //   }
  //}
  if((Object.keys(sentenceCount)) === ' ') {
    delete sentenceCount[space];
  }
return sentenceCount
}

console.log(countLetters('hello shawn'));