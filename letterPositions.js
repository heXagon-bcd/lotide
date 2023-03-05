/** Create a function which will return all the indice(zero based postions) in the  string which each chracter is found
 * For each letter, instead of returning just one number to represent its number of occurances, mutliple numbers may be needed to represent all the
 * places that it shows up
 * @param {setence} input your sentence here
 * @return {object} object key-value pair of where positioning string character appears in a sentence
 * 
 * 
 * STEPS
 * FOR LOOP
 * Input key from string, value is based on index and not a country
 * push value int a value array
 * 
 */

// array equal function
const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}

//woorking
const letterPositions = function(sentence) {
  const results = {};
  for(var i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (results[element] === undefined || results[element] === null) { //conditional statement -> see if a key exists, if not, create a key value pair.
      results[element] = [];//value is a blank arrah
    }
    results[element].push(i)//push i which is a representation of the indext position
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
console.log(eqArrays(letterPositions("hello").e, [1]));


//TESTs below
// const letterPositions = function(sentence) {
//   let results = {};
//   console.log(sentence.indexOf("l"))
//   results["l"] = 0
//   // results.push(sentence.indexOf("l"));
//   // for(i = 0; i < sentence.length; i++) {
//   //   //const element = sentence[i];
//   //   if(sentence.indexOf(i) !== -1) {
//   //     results.push(sentence.indexOf(i));
//   //     sentence.indexOf(i,sentence.indexOf(i) + 1);
//   //   }
//   // }
//   return results;
// };

// console.log(letterPositions("lighthouse in the house"))


// const letterPositions = function(sentence) {
//   const results = {};
//   for(i = 0; i < sentence.length; i++) {
//       const element = sentence[i];
//       results[element] = sentence.indexOf(element)
//   }
//   return results;
// };

// console.log(letterPositions("lighthouse in the house"))


// names = ["shawn", "jessica", "jasmine", "sharon", "kevin", "shawn"];
// names.push(0);
// console.log(names);
// console.log(names.indexOf('shawn'));

// results[sentence[i]] = sentence.indexOf(sentence[i], sentence.indexOf(sentence[i]) + 1 )