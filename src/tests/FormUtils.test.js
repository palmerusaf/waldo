import { getErrorMsg, isInputValid } from "../utils/FormUtils";

const inputBlank = "";
const inputWithSpace1 = "a a";
const inputWithSpace2 = " a a d fwe";
const inputWithCursing1 = "bitch";
const inputWithCursing2 = "asshole";
const inputWithOver20Chars1 = "aaaaaaaaaaaaaaaaaaaaaa";
const inputWithOver20Chars2 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const inputNotLetters1 = "aaa!@#$%^&*()aaaa";
const inputNotLetters2 = "<script></script>";
const inputCorrect1 = "correct";
const inputCorrect2 = "hello";

describe("isInputValid Tests", () => {
  it("Returns false if input blank", () => {
    expect(isInputValid(inputBlank)).toBe(false);
  });
  it("Returns false if input has space", () => {
    expect(isInputValid(inputWithSpace1)).toBe(false);
    expect(isInputValid(inputWithSpace2)).toBe(false);
  });
  it("Returns false if input has cursing", () => {
    expect(isInputValid(inputWithCursing1)).toBe(false);
    expect(isInputValid(inputWithCursing2)).toBe(false);
  });
  it("Returns false if input has >20 chars", () => {
    expect(isInputValid(inputWithOver20Chars1)).toBe(false);
    expect(isInputValid(inputWithOver20Chars2)).toBe(false);
  });
  it("Returns false if input is other than letters", () => {
    expect(isInputValid(inputNotLetters1)).toBe(false);
    expect(isInputValid(inputNotLetters2)).toBe(false);
  });
  it("Otherwise returns true", () => {
    expect(isInputValid(inputCorrect1)).toBe(true);
    expect(isInputValid(inputCorrect2)).toBe(true);
  });
});

describe("getErrorMsg Tests", () => {
  it("Returns msg if input blank", () => {
    expect(getErrorMsg(inputBlank)).toBe("Name cannot be blank.");
  });
  it("Returns msg if input has space", () => {
    expect(getErrorMsg(inputWithSpace1)).toBe("Name cannot contain spaces.");
    expect(getErrorMsg(inputWithSpace2)).toBe("Name cannot contain spaces.");
  });
  it("Returns msg if input has cursing", () => {
    expect(getErrorMsg(inputWithCursing1)).toBe("Name cannot contain cursing.");
    expect(getErrorMsg(inputWithCursing2)).toBe("Name cannot contain cursing.");
  });
  it("Returns msg if input has >20 chars", () => {
    expect(getErrorMsg(inputWithOver20Chars1)).toBe(
      "Name cannot contain over 20 characters."
    );
    expect(getErrorMsg(inputWithOver20Chars2)).toBe(
      "Name cannot contain over 20 characters."
    );
  });
  it("Returns msg if input is other than letters", () => {
    expect(getErrorMsg(inputNotLetters1)).toBe("Name must only be letters.");
    expect(getErrorMsg(inputNotLetters2)).toBe("Name must only be letters.");
  });
  it("Otherwise returns null", () => {
    expect(getErrorMsg(inputCorrect1)).toBe(null);
    expect(getErrorMsg(inputCorrect2)).toBe(null);
  });
});
