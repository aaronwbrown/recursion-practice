/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
  // create an object with alphanumeric key value pairs
  var numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "five",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero"
  };
  // create var result set eql to empty string
  var result = "";
  // declare a recursive helper function - it will take in a string as a parameter
  var createNewString = function(string) {
    // Base case: If string.length === 0
    if(string.length === 0) {
      // return result
      return result;
    } else {
      // declare var called currentChar and make that equal to string.charAt(0);
      var currentChar = string.charAt(0);
      // if first char is string in key - add the number property to the result string
      if (numbers[currentChar]) {
        result += numbers[currentChar]; // result = result.concat(numbers[currentChar])
      } else {
        // else add the original character to result
        result += currentChar;
      }
    }
    // return recursive call with sliced string as parameter
    return createNewString(string.slice(1));
  };
  // call recursive helper function with str as the input
  createNewString(str);

  return result;
};
