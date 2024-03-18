import { filterData, sortData } from "../src/dataFunctions.js";

import { data as fakeData } from "./data.js";
//test
describe("Check that filter function works", () => {
  it("returns All of singer who main genre is Pop", () => {
    expect(filterData(fakeData, "mainGenre", "Pop")).toHaveLength(3);
  });
  it("returns All of singer who main genre is Rock", () => {
    expect(filterData(fakeData, "mainGenre", "Rock")).toHaveLength(1);
  });
  it("returns All of singer who main genre is Latino", () => {
    expect(filterData(fakeData, "mainGenre", "Latino")).toHaveLength(1);
  });
});

describe("Check that SortData function works",() => {
  it("Return All singer Sorted from filter function increasingly", () => {
    const sortedData = sortData(fakeData, "yearOfBirth", "asc");
    expect(sortedData[0].facts.yearOfBirth).toEqual(1975);
  });
  it("Return All singer Sorted from filter function descendently", () => {
    const sortedData = sortData(fakeData, "yearOfBirth", "desc");
    expect(sortedData[0].facts.yearOfBirth).toEqual(1994);
  });
}); 