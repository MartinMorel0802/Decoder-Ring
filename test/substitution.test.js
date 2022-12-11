// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  //encoding tests
  it("should encode a word using an identical alphabet.", () => {
    const input = ["ian", "abcdefghijklmnopqrstuvwxyz"];
    const expected = "ian";
    const actual = substitutionModule.substitution(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should encode a word using different  alphabet.", () => {
    const input = ["ian", "zyxwvutsrqponmlkjihgfedcba"];
    const expected = "rzm";
    const actual = substitutionModule.substitution(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should encode a word using an alphabet with special characters.", () => {
    const input = ["ian", "!yxwvutsrqpon&lkjihgf^dcba"];
    const expected = "r!&";
    const actual = substitutionModule.substitution(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should encode a phrse while preserving spaces.", () => {
    const input = ["ian ian", "zyxwvutsrqponmlkjihgfedcba"];
    const expected = "rzm rzm";
    const actual = substitutionModule.substitution(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should encode a word using even if caps are used in the input.", () => {
    const input = ["IAN", "zyxwvutsrqponmlkjihgfedcba"];
    const expected = "rzm";
    const actual = substitutionModule.substitution(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  //decoding tests
  it("should decode a word using an identical alphabet.", () => {
    const input = ["ian", "abcdefghijklmnopqrstuvwxyz", (encode = false)];
    const expected = "ian";
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should decode a word using different  alphabet.", () => {
    const input = ["rzm", "zyxwvutsrqponmlkjihgfedcba", (encode = false)];
    const expected = "ian";
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should decode a word using an alphabet with special characters.", () => {
    const input = ["r!&", "!yxwvutsrqpon&lkjihgf^dcba", (encode = false)];
    const expected = "ian";
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should decode a phrse while preserving spaces.", () => {
    const input = ["rzm rzm", "zyxwvutsrqponmlkjihgfedcba", (encode = false)];
    const expected = "ian ian";
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should encode a word using even if caps are used in the input.", () => {
    const input = ["RZM", "zyxwvutsrqponmlkjihgfedcba", (encode = false)];
    const expected = "ian";
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  //bad case tests
  it("should return false if the alphabet is missing.", () => {
    const input = ["RZM"];
    const expected = false;
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if the alphabet is over 26 characters.", () => {
    const input = ["RZM", "zyxwvutsrqponmlkjihgfedcba%^$", (encode = false)];
    const expected = false;
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if the alphabet is under 26 characters.", () => {
    const input = ["RZM", "zyxwvutsrqponmlkji", (encode = false)];
    const expected = false;
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if the alphabet contains duplicate characters", () => {
    const input = ["RZM", "zzxwvutsrqpoomlkjihgtedcba", (encode = false)];
    const expected = false;
    const actual = substitutionModule.substitution(
      input[0],
      input[1],
      input[2]
    );
    expect(actual).to.equal(expected);
  });
});
