// do not edit these lines
const hello = 'hello'
const vowels = 'AEIOU'
const animal = 'dog'

const numOne = 20
const numTwo = 10

// TODO: 1. Update the code below using string operations on the variables
// above so that the tests pass.
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello);
const secondCharacterOfDog = animal.charAt(1)
console.log(secondCharacterOfDog);
const howManyVowels = vowels.length
console.log(howManyVowels);
// TODO: 2. Update the code below using numeric operators so that the tests
// pass
const numOneMultipliedByNumTwo = 20 * 10;
console.log(numOneMultipliedByNumTwo);

// do not edit the exported object.
module.exports = {
  a: upperCaseHello,
  b: secondCharacterOfDog,
  c: howManyVowels,
  d: numOneMultipliedByNumTwo
}
