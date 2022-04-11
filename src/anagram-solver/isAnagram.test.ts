import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  it.each([
    ["abcd", "cbda", true],
    ["hello", "hello", true],
    ["aaaba", "abaaa", true],
    ["qwerty", "qwertyy", false],
    ["abdc", "cbaa", false],
  ])("%p and %p is anagram? %p", (strA, strB, expected) => {
    expect(isAnagram(strA, strB)).toBe(expected);
  });
});
