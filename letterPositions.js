//function that takes in an object and a value and returns the first key that corresponds to that value.
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (results[element] === undefined || results[element] === null) { //conditional statement -> see if a key exists, if not, create a key value pair.
      results[element] = [];//value is a blank arrah
    }
    results[element].push(i);//push i which is a representation of the indext position
  }
  return results;
};

module.exports = letterPositions;