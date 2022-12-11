// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function transformer(inputLetter, shift) {
    //TRANSFORMER
    dictionary = [
      { letter: "placeholder", position: 0 }, //create the dictionary
      { letter: "a", position: 1 },
      { letter: "b", position: 2 },
      { letter: "c", position: 3 },
      { letter: "d", position: 4 },
      { letter: "e", position: 5 },
      { letter: "f", position: 6 },
      { letter: "g", position: 7 },
      { letter: "h", position: 8 },
      { letter: "i", position: 9 },
      { letter: "j", position: 10 },
      { letter: "k", position: 11 },
      { letter: "l", position: 12 },
      { letter: "m", position: 13 },
      { letter: "n", position: 14 },
      { letter: "o", position: 15 },
      { letter: "p", position: 16 },
      { letter: "q", position: 17 },
      { letter: "r", position: 18 },
      { letter: "s", position: 19 },
      { letter: "t", position: 20 },
      { letter: "u", position: 21 },
      { letter: "v", position: 22 },
      { letter: "w", position: 23 },
      { letter: "x", position: 24 },
      { letter: "y", position: 25 },
      { letter: "z", position: 26 },
    ];
    const workingLetter = dictionary.find(
      (alpha) => alpha.letter === inputLetter
    ); //find the inputLetter in the dictionary
    const workingPosition = workingLetter.position + shift; //move by the shift
    let newPosition = workingPosition; //put that shift in, but the wrap around:
    if (workingPosition > 26) {
      newPosition = workingPosition - 26;
    } //if wrap is too big
    if (workingPosition <= 0) {
      newPosition = workingPosition + 26;
    } //if wrap is too small
    const outputLetter = dictionary.find(
      (alpha) => alpha.position === newPosition
    ); //find the letter in that position
    return outputLetter.letter; //return the letter in that position
  }

  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function encoder(input, shift) {
    //ENCODER
    let outputString = ""; //make the empty output string
    const inputString = input.toLowerCase(); //make the input variable, decapping it
    for (let i = 0; i < inputString.length; i++) {
      //test each string position (not an array, so can't forEach, use the loop instead)
      let inputLetter = inputString[i];
      if (alphabetArray.includes(inputLetter)) {
        //if it's a letter
        transformedLetter = transformer(inputLetter, shift); //run it through the transformer
        outputString += transformedLetter; //then add it to the output string
      } else {
        outputString += inputLetter; //if it's not a letter, just add to the output string
      }
    }
    return outputString; //return the outputString
  }

  function decoder(input, shift) {
    //DECODER
    const reversedShift = shift >= 0 ? -Math.abs(shift) : Math.abs(shift); //reverse the shift
    decodedOutput = encoder(input, reversedShift); //run the encoder with the reversedShift
    return decodedOutput; //return the output
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === undefined || shift === 0 || shift > 25 || shift < -25) {
      //if Bad Cases, return errors
      return false;
    }
    return encode ? encoder(input, shift) : decoder(input, shift); //otherwise, run the decoder or encoder
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
