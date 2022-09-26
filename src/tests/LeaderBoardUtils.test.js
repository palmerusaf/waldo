import { trimData, filterData, padData } from "../utils/LeaderBoardUtils.js";

const oneDataPoint = [{ name: "waldo", time: 40 }];
const twoDataPointsFiltered = [
  { name: "waldo2", time: 20 },
  { name: "waldo1", time: 40 },
];
const nineDataPointsFiltered = [
  { name: "waldo5", time: 10 },
  { name: "waldo4", time: 20 },
  { name: "waldo8", time: 20 },
  { name: "waldo1", time: 30 },
  { name: "waldo3", time: 40 },
  { name: "waldo7", time: 60 },
  { name: "waldo6", time: 70 },
  { name: "waldo2", time: 80 },
  { name: "waldo9", time: 100 },
];
const tenDataPointsFiltered = [
  { name: "waldo10", time: 1 },
  { name: "waldo5", time: 10 },
  { name: "waldo4", time: 20 },
  { name: "waldo8", time: 20 },
  { name: "waldo1", time: 30 },
  { name: "waldo3", time: 40 },
  { name: "waldo7", time: 60 },
  { name: "waldo6", time: 70 },
  { name: "waldo2", time: 80 },
  { name: "waldo9", time: 100 },
];
const overTenDataPointsFiltered = [
  { name: "waldo10", time: 1 },
  { name: "waldo11", time: 2 },
  { name: "waldo12", time: 3 },
  { name: "waldo13", time: 4 },
  { name: "waldo5", time: 10 },
  { name: "waldo4", time: 20 },
  { name: "waldo8", time: 20 },
  { name: "waldo1", time: 30 },
  { name: "waldo3", time: 40 },
  { name: "waldo7", time: 60 },
  { name: "waldo6", time: 70 },
  { name: "waldo2", time: 80 },
  { name: "waldo9", time: 100 },
];

describe("filterData Tests", () => {
  const twoDataPointsUnfiltered = [
    { name: "waldo1", time: 40 },
    { name: "waldo2", time: 20 },
  ];
  const nineDataPointsUnfiltered = [
    { name: "waldo1", time: 30 },
    { name: "waldo2", time: 80 },
    { name: "waldo3", time: 40 },
    { name: "waldo4", time: 20 },
    { name: "waldo5", time: 10 },
    { name: "waldo6", time: 70 },
    { name: "waldo7", time: 60 },
    { name: "waldo8", time: 20 },
    { name: "waldo9", time: 100 },
  ];
  const tenDataPointsUnfiltered = [
    { name: "waldo1", time: 30 },
    { name: "waldo2", time: 80 },
    { name: "waldo3", time: 40 },
    { name: "waldo4", time: 20 },
    { name: "waldo5", time: 10 },
    { name: "waldo6", time: 70 },
    { name: "waldo7", time: 60 },
    { name: "waldo8", time: 20 },
    { name: "waldo9", time: 100 },
    { name: "waldo10", time: 1 },
  ];
  const overTenDataPointsUnfiltered = [
    { name: "waldo1", time: 30 },
    { name: "waldo2", time: 80 },
    { name: "waldo3", time: 40 },
    { name: "waldo4", time: 20 },
    { name: "waldo5", time: 10 },
    { name: "waldo6", time: 70 },
    { name: "waldo7", time: 60 },
    { name: "waldo8", time: 20 },
    { name: "waldo9", time: 100 },
    { name: "waldo10", time: 1 },
    { name: "waldo11", time: 2 },
    { name: "waldo12", time: 3 },
    { name: "waldo13", time: 4 },
  ];
  it("Works with no data points", () => {
    expect(filterData([])).toEqual([]);
  });
  it("Works with one data point", () => {
    expect(filterData(oneDataPoint)).toEqual(oneDataPoint);
  });
  it("Works with two data points", () => {
    expect(filterData(twoDataPointsUnfiltered)).toEqual(twoDataPointsFiltered);
  });
  it("Works with nine data points", () => {
    expect(filterData(nineDataPointsUnfiltered)).toEqual(
      nineDataPointsFiltered
    );
  });
  it("Works with exactly ten data points", () => {
    expect(filterData(tenDataPointsUnfiltered)).toEqual(tenDataPointsFiltered);
  });
  it("Work with over ten data points", () => {
    expect(filterData(overTenDataPointsUnfiltered)).toEqual(
      overTenDataPointsFiltered
    );
  });
});

describe("padData Tests", () => {
  const noDataPointsPadded = [
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
  ];
  const oneDataPointPadded = [
    { name: "waldo", time: 40 },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
  ];
  const twoDataPointsPadded = [
    { name: "waldo2", time: 20 },
    { name: "waldo1", time: 40 },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
    { name: null, time: null },
  ];
  const nineDataPointsPadded = [
    { name: "waldo5", time: 10 },
    { name: "waldo4", time: 20 },
    { name: "waldo8", time: 20 },
    { name: "waldo1", time: 30 },
    { name: "waldo3", time: 40 },
    { name: "waldo7", time: 60 },
    { name: "waldo6", time: 70 },
    { name: "waldo2", time: 80 },
    { name: "waldo9", time: 100 },
    { name: null, time: null },
  ];
  const tenDataPoints = [
    { name: "waldo10", time: 1 },
    { name: "waldo5", time: 10 },
    { name: "waldo4", time: 20 },
    { name: "waldo8", time: 20 },
    { name: "waldo1", time: 30 },
    { name: "waldo3", time: 40 },
    { name: "waldo7", time: 60 },
    { name: "waldo6", time: 70 },
    { name: "waldo2", time: 80 },
    { name: "waldo9", time: 100 },
  ];
  it("Works with no data points", () => {
    expect(padData([])).toEqual(noDataPointsPadded);
  });
  it("Works with one data point", () => {
    expect(padData(oneDataPoint)).toEqual(oneDataPointPadded);
  });
  it("Works with two data points", () => {
    expect(padData(twoDataPointsFiltered)).toEqual(twoDataPointsPadded);
  });
  it("Works with nine data points", () => {
    expect(padData(nineDataPointsFiltered)).toEqual(nineDataPointsPadded);
  });
  it("Works with exactly ten data points", () => {
    expect(padData(tenDataPoints)).toEqual(tenDataPointsFiltered);
  });
});

describe("trimData Tests", () => {
  it("Works with under ten data points", () => {
    expect(trimData(nineDataPointsFiltered).length).toEqual(
      nineDataPointsFiltered.length
    );
  });
  it("Works with exactly ten data points", () => {
    expect(trimData(tenDataPointsFiltered).length).toEqual(10);
  });
  it("Works with over ten data points", () => {
    expect(trimData(overTenDataPointsFiltered).length).toEqual(10);
  });
});
