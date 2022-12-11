// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const dictionary = [
    { letter: "a", position: "11" }, //create the dictionary
    { letter: "b", position: "21" },
    { letter: "c", position: "31" },
    { letter: "d", position: "41" },
    { letter: "e", position: "51" },
    { letter: "f", position: "12" },
    { letter: "g", position: "22" },
    { letter: "h", position: "32" },
    { letter: "i", position: "42" },
    { letter: "j", position: "42" },
    { letter: "k", position: "52" },
    { letter: "l", position: "13" },
    { letter: "m", position: "23" },
    { letter: "n", position: "33" },
    { letter: "o", position: "43" },
    { letter: "p", position: "53" },
    { letter: "q", position: "14" },
    { letter: "r", position: "24" },
    { letter: "s", position: "34" },
    { letter: "t", position: "44" },
    { letter: "u", position: "54" },
    { letter: "v", position: "15" },
    { letter: "w", position: "25" },
    { letter: "x", position: "35" },
    { letter: "y", position: "45" },
    { letter: "z", position: "55" },
  ];

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
  const numeralArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  function encoder(input) {
    //ENCODER
    let outputNumber = ""; //make the empty outputNumber string
    const inputString = input.toLowerCase(); //make the input variable, decapping it
    for (let i = 0; i < inputString.length; i++) {
      //test each string position (not an array, so can't forEach, use the loop instead)
      const workingLetter = inputString[i];
      if (alphabetArray.includes(workingLetter)) {
        //if it's a letter
        const encodedNumber = dictionary.find(
          (element) => element.letter === workingLetter
        ).position; //find it's number in the dictionary
        outputNumber += encodedNumber; //then add it to the output string AS A STRING
      } else {
        outputNumber += workingLetter; //if it's not a letter, just add to the output string
      }
    }
    return outputNumber; //return the outputNumber
  }

  function decoder(input) {
    //DECODER
    if (!evenTester(input)) {
      return false;
    } //first run evenTester on the input, returning False if it's false
    let outputString = ""; //make the empty outputNumber string
    for (let i = 0; i < input.length; i++) {
      //test each string position...
      if (numeralArray.includes(input[i])) {
        //if it's a number...
        const numeralOne = input[i]; //take it and the next number into a variable
        const numeralTwo = input[i + 1];
        i++; //and increase the loop by one to keep it in pairs
        const checkNumber = String(numeralOne) + String(numeralTwo); //then, put those numberals together
        if (checkNumber === "42") {
          //if it's 42, return the special i/j, otherwise...
          outputString += "(i/j)";
        } else {
          const encodedLetter = dictionary.find(
            (element) => element.position === checkNumber
          ).letter; //and find  it's letter in the dictionary
          outputString += encodedLetter;
        }
      } else {
        outputString += " "; //if it's not a number, just add to the output string (it should just be a space)
      }
    }
    return outputString; //return the outputStrings
  }

  function evenTester(input) {
    //helper that tests if the input string
    let justNumbers = ""; //make the justLetters empty string
    for (let i = 0; i < input.length; i++) {
      //cycle through the input, testing for letters
      if (numeralArray.includes(input[i])) {
        justNumbers += input[i]; //if letters, add them to the justLetters string
      }
    }
    if (
      justNumbers.includes(6) ||
      justNumbers.includes(7) ||
      justNumbers.includes(8) ||
      justNumbers.includes(9)
    ) {
      return false;
    } //if the string includes any numerals not in the square (6-9), ALSO return false!!
    return justNumbers.length % 2 != 0 ? false : true; //divide justLetters by 2, using the remainder thingy, if there's a remainder, return false
  }

  function polybius(input, encode = true) {
    // your solution code here
    return encode ? encoder(input) : decoder(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
