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
  if (input === "") return "Name cannot be blank.";
  if (input.includes(" ")) return "Name cannot contain spaces.";
  if (input.length > 20) return "Name cannot contain over 20 characters.";
  if (!input.match(/^[A-Za-z]+$/)) return "Name must only be letters.";
  if (filter.isProfane(input)) return "Name cannot contain cursing.";
  return null;
};
