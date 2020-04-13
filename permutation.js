/**
 * Finding all permutations of particular string
 */
const findAllPermutationsOfString = (someString) => {
  if (someString.length < 2) {
    return someString;
  }

  let permutationsArray = [];
  for (let i = 0; i < someString.length; i++) {
    let singleCharachter = someString[i];

    if (someString.indexOf(singleCharachter) != i) continue;

    let remainingChars =
      someString.slice(0, i) + someString.slice(i + 1, someString.length);
    for (let permutation of findAllPermutationsOfString(remainingChars)) {
      permutationsArray.push(singleCharachter + permutation);
    }
  }
  return permutationsArray;
};

// Change the Value of someString to see Permutation in action
// and then run this file using node permutation.js
const someString = "abcd";

findAllPermutationsOfString(someString).forEach((permutatedString) => {
  console.log(permutatedString);
});
