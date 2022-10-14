// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //factor polibusSquare object with letters as keys and numbers as values to save from having to create two objects and combine
  const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };

  //creating reverse of polybiusSquare to simplify code
  const reversePolybiusSquare = {}

  for (let letter in polybiusSquare) {
    //pairedNumber created to clarify the for in loop's if statement
    const pairedNumber = polybiusSquare[letter];

    if (reversePolybiusSquare[pairedNumber]) {
      reversePolybiusSquare[pairedNumber] = `(${reversePolybiusSquare[pairedNumber]}/${letter})`
    } else {
      reversePolybiusSquare[pairedNumber] = letter;
    }

  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function encodeInput(input) {
    //take input and convert it to lower case and into an array
    const startingArray = getArrayFromString(input.toLowerCase());
    //iterate through the startingArray
    //return an array with with letter characters replaced by number values and spaces the same
    return startingArray.map(character => {
      if (character === " ") {
        return character;
      } else {
        return polybiusSquare[character];
      }
      //convert the array into a string
    }).join("");
  }

  function decodeInput(input) {
    const startingArray = getArrayFromString(input);
    const decodedArray = [];
    //for loop to combine two values into one return
    for (let i = 0; i < startingArray.length; i++) {
      const index = startingArray[i];
      if (index === " ") {
        decodedArray.push(index);
      }
      else {
        let tens = index;
        let ones = startingArray[i + 1];
        const numberKey = tens + ones;
        i = i + 1;
        decodedArray.push(reversePolybiusSquare[numberKey]);
      }
    }
    return decodedArray.join("");
  }



  function polybius(input, encode = true) {
    // your solution code here
    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      } else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
