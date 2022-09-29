import { isCharacterLocationCorrect } from "../utils/TargetingUtils";

describe("isCharacterLocationCorrect Tests", () => {
  const characterLocations = [
    { name: "waldo", minX: 1, maxX: 2, minY: 15, maxY: 18 },
    { name: "winda", minX: 6, maxX: 7, minY: 20, maxY: 23 },
    { name: "wizard", minX: 9, maxX: 10, minY: 23, maxY: 26 },
    { name: "odlaw", minX: 21, maxX: 22, minY: 35, maxY: 38 },
  ];
  const matchingNameAndLocation1 = { name: "waldo", x: 1, y: 16 };
  const matchingNameAndLocation2 = { name: "winda", x: 7, y: 26 };

  const matchingNameOnly1 = { name: "waldo", x: 21, y: 16 };
  const matchingNameOnly2 = { name: "winda", x: 27, y: 26 };

  const matchingLocationOnly1 = { name: "winda", x: 1, y: 16 };
  const matchingLocationOnly2 = { name: "waldo", x: 7, y: 26 };

  it("Returns true is name match and coordinates within range", () => {
    expect(isCharacterLocationCorrect(matchingNameAndLocation1,characterLocations)).toBe(true)
    expect(isCharacterLocationCorrect(matchingNameAndLocation2,characterLocations)).toBe(true)
  });

  it("Returns false if name is correct but coordinates out of range", () => {
    expect(isCharacterLocationCorrect(matchingNameOnly1,characterLocations)).toBe(false)
    expect(isCharacterLocationCorrect(matchingNameOnly2,characterLocations)).toBe(false)
  });

  it("Returns false if coordinates within range but name incorrect", () => {
    expect(isCharacterLocationCorrect(matchingLocationOnly1,characterLocations)).toBe(false)
    expect(isCharacterLocationCorrect(matchingLocationOnly2,characterLocations)).toBe(false)
  });
});
