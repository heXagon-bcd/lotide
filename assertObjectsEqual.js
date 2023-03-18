//const eqObjects = require ('./eqObjects');
//Eq objects
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  console.log(arr1)
  let arr2 = Object.keys(object2);
  for(ky in object1) {
    console.log(object1[ky], object2[ky])
    if (object1[ky] === object2[ky] && arr1.length === arr2.length ) {
      return true
    } else {
      return false
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
 
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `)
  } else (
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `)
  )
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);

// assertObjectsEqual(shirtObject , anotherShirtObject);

//console.log(`Example label: ${inspect(actual)}`);


//✅✅✅ Assertion Passed: [object Object] === [object Object]
//🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]