const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKey');
const map = require('./map');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
  flatten: flatten,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual
};