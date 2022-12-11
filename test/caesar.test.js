// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  //bad input tests
  it("should return false if shift is zero.", () => {
    const input = ["abcd", 0];
    const expected = false;
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25.", () => {
    const input = ["abcd", 30];
    const expected = false;
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25.", () => {
    const input = ["abcd", -30];
    const expected = false;
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.equal(expected);
  });
  //encoding tests
  it("should properly encode a message by the shift value.", () => {
    const input = ["abcd", 1];
    const expected = "bcde";
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.eql(expected);
  });
  it("should leave spaces and special characters as entered when encoding", () => {
    const input = ["abc! def?", 1];
    const expected = "bcd! efg?";
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters when encoding", () => {
    const input = ["ABC! def?", 1];
    const expected = "bcd! efg?";
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.eql(expected);
  });
  it("should appropriately encode letters at the end of the alphabet", () => {
    const input = ["ZZZ! xyz?", 3];
    const expected = "ccc! abc?";
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.eql(expected);
  });
  it("should allow for a negative shift during encoding, including at ends of alphabet", () => {
    const input = ["ZZZ! aaa?", -3];
    const expected = "www! xxx?";
    const actual = caesarModule.caesar(input[0], input[1]);
    expect(actual).to.eql(expected);
  });
  //decoding tests
  it("should properly decode a message by the shift value.", () => {
    const input = ["bcde", 1, (encode = false)];
    const expected = "abcd";
    const actual = caesarModule.caesar(input[0], input[1], input[2]);
    expect(actual).to.eql(expected);
  });
  it("should leave spaces and special characters as entered when decoding", () => {
    const input = ["bc de!", 1, (encode = false)];
    const expected = "ab cd!";
    const actual = caesarModule.caesar(input[0], input[1], input[2]);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters when decoding", () => {
    const input = ["BCDE", 1, (encode = false)];
    const expected = "abcd";
    const actual = caesarModule.caesar(input[0], input[1], input[2]);
    expect(actual).to.eql(expected);
  });
  it("should appropriately decode letters at the end of the alphabet", () => {
    const input = ["aaaa", 1, (encode = false)];
    const expected = "zzzz";
    const actual = caesarModule.caesar(input[0], input[1], input[2]);
    expect(actual).to.eql(expected);
  });
  it("should allow for a negative shift during decoding, including at ends of alphabet", () => {
    const input = ["abcd", 3, (encode = false)];
    const expected = "xyza";
    const actual = caesarModule.caesar(input[0], input[1], input[2]);
    expect(actual).to.eql(expected);
  });
});
