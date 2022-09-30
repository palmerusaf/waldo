import {
  isCharacterLocationCorrect,
  getMarkerCoordinates,
} from "../utils/TargetingUtils";

describe("isCharacterLocationCorrect Tests", () => {
  const characterLocations = [
    { name: "waldo", minX: 1, maxX: 2, minY: 15, maxY: 18 },
    { name: "winda", minX: 6, maxX: 7, minY: 20, maxY: 23 },
    { name: "wizard", minX: 9, maxX: 10, minY: 23, maxY: 26 },
    { name: "odlaw", minX: 21, maxX: 22, minY: 35, maxY: 38 },
  ];
  const matchingNameAndLocation1 = { name: "waldo", x: 1, y: 16 };
  const matchingNameAndLocation2 = { name: "winda", x: 7, y: 22 };

  const matchingNameOnly1 = { name: "waldo", x: 21, y: 16 };
  const matchingNameOnly2 = { name: "winda", x: 27, y: 22 };

  const matchingLocationOnly1 = { name: "winda", x: 1, y: 16 };
  const matchingLocationOnly2 = { name: "waldo", x: 7, y: 22 };

  it("Returns true is name match and coordinates within range", () => {
    expect(
      isCharacterLocationCorrect(matchingNameAndLocation1, characterLocations)
    ).toBe(true);
    expect(
      isCharacterLocationCorrect(matchingNameAndLocation2, characterLocations)
    ).toBe(true);
  });

  it("Returns false if name is correct but coordinates out of range", () => {
    expect(
      isCharacterLocationCorrect(matchingNameOnly1, characterLocations)
    ).toBe(false);
    expect(
      isCharacterLocationCorrect(matchingNameOnly2, characterLocations)
    ).toBe(false);
  });

  it("Returns false if coordinates within range but name incorrect", () => {
    expect(
      isCharacterLocationCorrect(matchingLocationOnly1, characterLocations)
    ).toBe(false);
    expect(
      isCharacterLocationCorrect(matchingLocationOnly2, characterLocations)
    ).toBe(false);
  });
});

describe("getMarkerCoordinates Tests", () => {
  const characterLocations = [
    { name: "waldo", minX: 1, maxX: 2, minY: 1, maxY: 2 },
    { name: "winda", minX: 1, maxX: 4, minY: 1, maxY: 4 },
    { name: "wizard", minX: 20, maxX: 30, minY: 30, maxY: 40 },
    { name: "odlaw", minX: 10, maxX: 20, minY: 10, maxY: 20 },
  ];
  it("When coordinate is divisible by 2 returns correct", () => {
    const foundCharacters = [{ name: "odlaw" }];
    const result = [{ x: 15, y: 15 }];
    expect(getMarkerCoordinates({foundCharacters, characterLocations})).toEqual(
      result
    );
  });
  it("When coordinate is not divisible by 2 returns coordinates rounded down", () => {
    const foundCharacters = [{ name: "winda" }];
    const result = [{ x: 2, y: 2 }];
    expect(getMarkerCoordinates({foundCharacters, characterLocations})).toEqual(
      result
    );
  });
  it("When coordinates are one digit apart returns lower digits", () => {
    const foundCharacters = [{ name: "waldo" }];
    const result = [{ x: 1, y: 1 }];
    expect(getMarkerCoordinates({foundCharacters, characterLocations})).toEqual(
      result
    );
  });
  it("Finds all coordinates correctly", () => {
    const foundCharacters = [
      { name: "waldo" },
      { name: "winda" },
      { name: "wizard" },
      { name: "odlaw" },
    ];
    const result = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 25, y: 35 },
      { x: 15, y: 15 },
    ];
    expect(getMarkerCoordinates({foundCharacters, characterLocations})).toEqual(
      result
    );
  });
});
