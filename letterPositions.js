/** Create a function which will return all the indice(zero based postions) in the  string which each chracter is found
 * For each letter, instead of returning just one number to represent its number of occurances, mutliple numbers may be needed to represent all the
 * places that it shows up
 * @param {setence} input your sentence here
 * @return {object} object key-value pair of where positioning string character appears in a sentence
 * TEST
 * console.log(letterPositions("lighthouse in the house"))
 * console.log(eqArrays(letterPositions("hello").e, [1]));
 * STEPS
 * FOR LOOP
 * Input key from string, value is based on index and not a country
 * push value int a value array
 */

//working
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