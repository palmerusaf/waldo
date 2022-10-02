const Filter = require("bad-words");
const filter = new Filter();
export const isInputValid = (input) =>
  !(
    input == 0 ||
    input.includes(" ") ||
    input.length > 20 ||
    !input.match(/^[A-Za-z]+$/) ||
    filter.isProfane(input)
  );

export const getErrorMsg = (input) => {
  if (input == 0) return "Input cannot be blank.";
  if (input.includes(" ")) return "Input cannot contain spaces.";
  if (input.length > 20) return "Input cannot contain over 20 characters.";
  if (!input.match(/^[A-Za-z]+$/)) return "Input must only be letters.";
  if (filter.isProfane(input)) return "Input cannot contain cursing.";
  return null;
};
