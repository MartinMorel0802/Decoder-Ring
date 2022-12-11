// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode a word.", () => {
    const input = ["ian"];
    const expected = "421133";
    const actual = polybiusModule.polybius(input[0]);
    expect(actual).to.equal(expected);
  });
  it("should encode a word with both i & j as 42.", () => {
    const input = ["jian"];
    const expected = "42421133";
    const actual = polybiusModule.polybius(input[0]);
    expect(actual).to.equal(expected);
  });
  it("should encode a phrase with space.", () => {
    const input = ["jian jian"];
    const expected = "42421133 42421133";
    const actual = polybiusModule.polybius(input[0]);
    expect(actual).to.equal(expected);
  });
  it("should decode a word.", () => {
    const input = ["112131", (encode = false)];
    const expected = "abc";
    const actual = polybiusModule.polybius(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should decode 42 as 'i/j'.", () => {
    //make sure 'i/j' is what Thinkful wants
    const input = ["42421133", (encode = false)];
    const expected = "(i/j)(i/j)an";
    const actual = polybiusModule.polybius(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should decode spaces as spaces'.", () => {
    const input = ["42421133 42421133", (encode = false)];
    const expected = "(i/j)(i/j)an (i/j)(i/j)an";
    const actual = polybiusModule.polybius(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should return false if the decode string is of an odd length.", () => {
    const input = ["5", (encode = false)];
    const expected = false;
    const actual = polybiusModule.polybius(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should encode a word even if capitals are used on input.", () => {
    const input = ["IAN"];
    const expected = "421133";
    const actual = polybiusModule.polybius(input[0]);
    expect(actual).to.equal(expected);
  });
  it("should return false if the decode string has numerals not in the square.", () => {
    const input = ["92", (encode = false)];
    const expected = false;
    const actual = polybiusModule.polybius(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
});
