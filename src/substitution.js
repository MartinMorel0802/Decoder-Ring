// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function dictionarium(alphabet) {
    //helper function that maps each character in the alphabet to a normal letter
    const dictionary = [
      { plainText: "a", cipherText: "a" },
      { plainText: "b", cipherText: "b" },
      { plainText: "c", cipherText: "c" },
      { plainText: "d", cipherText: "d" },
      { plainText: "e", cipherText: "e" },
      { plainText: "f", cipherText: "f" },
      { plainText: "g", cipherText: "g" },
      { plainText: "h", cipherText: "h" },
      { plainText: "i", cipherText: "i" },
      { plainText: "j", cipherText: "j" },
      { plainText: "k", cipherText: "k" },
      { plainText: "l", cipherText: "l" },
      { plainText: "m", cipherText: "m" },
      { plainText: "n", cipherText: "n" },
      { plainText: "o", cipherText: "o" },
      { plainText: "p", cipherText: "p" },
      { plainText: "q", cipherText: "q" },
      { plainText: "r", cipherText: "r" },
      { plainText: "s", cipherText: "s" },
      { plainText: "t", cipherText: "t" },
      { plainText: "u", cipherText: "u" },
      { plainText: "v", cipherText: "v" },
      { plainText: "w", cipherText: "w" },
      { plainText: "x", cipherText: "x" },
      { plainText: "y", cipherText: "y" },
      { plainText: "z", cipherText: "z" },
    ]; //create a dictionary of objects like {plainText: "a", cipherText: "a", position: 1}
    for (let i = 0; i < alphabet.length; i++) {
      //loop through the alphabet
      const workingPosition = dictionary[i]; //find the dictionary entry whose position matches the alphabet[i]
      workingPosition.cipherText = alphabet[i]; //make that entry's encodedText = to the letter at alphatbet[i]
    }
    return dictionary; //return the dictionary
  }

  function encoder(input, dictionary) {
    let outputString = ""; //create the empty output string
    for (let i = 0; i < input.length; i++) {
      //for each character in the input string...
      const workingLetter = input[i]; //make the letter at the current position a variable
      if (workingLetter === " ") {
        //if it's a space
        outputString += " "; //add a space to the output string
      } else {
        //otherwise...
        const dictionaryPosition = dictionary.find(
          (element) => element.plainText === workingLetter
        ); //find the entry in the dictionary whose plainText is the input letter
        outputString += dictionaryPosition.cipherText; //add that entry's encodedText to the output string
      }
    }
    return outputString; //return the output string
  }

  function decoder(input, dictionary) {
    let outputString = ""; //create the empty output string
    for (let i = 0; i < input.length; i++) {
      //for each character in the input string...
      const workingLetter = input[i]; //make the letter at the current position a variable
      if (workingLetter === " ") {
        //if it's a space
        outputString += " "; //add a space to the output string
      } else {
        //otherwise...
        const dictionaryPosition = dictionary.find(
          (element) => element.cipherText === workingLetter
        ); //find the entry in the dictionary whose encodedText is the input letter
        outputString += dictionaryPosition.plainText; //add that entry's plainText to the output string
      }
    }
    return outputString; //return the output string
  }

  function uniqueChecker(alphabet) {
    //a helper function to determine that ever character in the alphabet is unique
    const alphabetContainer = {}; //make a container to to check each character against
    for (let i = 0; i < alphabet.length; ++i) {
      //for each character in the alphabet...
      const workingLetter = alphabet[i]; //make the letter at this position a variable
      if (alphabetContainer[workingLetter]) return false; //check if the letter is in the container, and return false if it is
      alphabetContainer[workingLetter] = true; //otherwise, put the working letter into the container
    }
    return true; // and return true if nothing has been duplicated
  }

  function substitution(input, alphabet, encode = true) {
    if (
      alphabet === undefined ||
      alphabet.length === 0 ||
      alphabet.length > 26 ||
      alphabet.length < 26
    ) {
      return false;
    } //check for bad cases and return false
    if (!uniqueChecker(alphabet)) {
      return false;
    } //run uniqueChecker and return false if any doubles
    const dictionary = dictionarium(alphabet); //run the dictionarium to make a dictionary based on the alphabet entered
    const decapInput = input.toLowerCase(); //decapitalise the input string
    return encode
      ? encoder(decapInput, dictionary)
      : decoder(decapInput, dictionary); //run either the encoder or the decoder based on if encode is true
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
