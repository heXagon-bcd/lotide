
//ASSERT EQUAL FUNCTION
// const assertEqual = function(actual, expected) {
//   if ((actual === expected)) {
//     console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
//   }

// };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  //console.log(arr1)
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

module.exports = eqObjects;


//TESTS
// const shirtObject = { color: "red", size: "medium" };
// //let arr1 = [Object.keys(shirtObject)];//returns an array for key
// // console.log(arr1)

// const anotherShirtObject= { size: "medium", color: "red" };


// eqObjects(shirtObject , anotherShirtObject); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


/**
 * HANDLING OBJECTS
 * 
  const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}

 */

// const eqObjects = function(object1, object2) {
//   let arr1 = Object.keys(object1); //returns keys in array
//   //console.log(arr1)
//   let arr2 = Object.keys(object2);
//   for(ky in object1) {
//     if ((object1[ky].isArray) && (JSON.stringify(object1[ky]) === JSON.stringify(object2[ky])))  {
//       return true;
//   } else if (object1[ky] === object2[ky] && arr1.length === arr2.length ) { //if the key in arr1 = all the keys in arr2 and the length are the same, then pass the test
//       console.log("string", true);
//   } else {
//       console.log("string", false);
//   }
//   }
// }
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false