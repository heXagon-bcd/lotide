

//RECURSIVE FUNC


const isObject = (val) => val !== null && typeof val === 'object' && !Array.isArray(val);

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (isObject(val1) && isObject(val2)) {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

const a = { a: { z: 1 }, b: 2 };
const b = { a: { z: 1 }, b: 2 };

console.log(eqObjects(a, b));
eqObjects(a, b);