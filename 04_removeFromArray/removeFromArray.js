// 2 solutions possible
// First one: is simplier (can also be written as Arrow function)

// const removeFromArray = function(array, ...valuesToRemove) {
//     return array.filter(function(item) {
//         return !valuesToRemove.includes(item);
//     });
// };


// Second:

// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator.
const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };


// Do not edit below this line
module.exports = removeFromArray;