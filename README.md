# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm i lotid-shawnnhe`

**Require it:**

`const _ = require('lotid-shawnnhe');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions`: return all the indices (zero-based positions) in the string where each character is found
* `eqArraysAssert`: pull first index of array.
* `findKey`: which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `tail`: determines the tail values of an array.
* `assertObjectsEqual`: take in two objects and returns true or false, based on a perfect match.
* `eqArraysAssert`: this method takes in two arrays of numbers and strings and returns true or false.
* `eqArrays`: takes in two arrays and returns true or false, based on a perfect match.
* `middle`: Will take in an array and return the middle-most element(s) of the given array.
