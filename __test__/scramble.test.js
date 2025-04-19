const { scrambleWord, isCorrect } = require("../src/scramble");

describe("scrambleWord", () => {
  it("returns the same length as the original word", () => {
    expect(scrambleWord("hello").length).toBe(5);
  });

  it("does not return the identical word most of the time", () => {
    const word = "coding";
    const scrambled = scrambleWord(word);
    // This test has a small chance to fail if shuffle returns original order
    expect(scrambled).not.toBe(word);
  });

  // Additional tests for edge cases
  it("handles single-character words", () => {
    expect(scrambleWord("a")).toBe("a");
  });

  it("handles empty strings", () => {
    expect(scrambleWord("")).toBe("");
  });

  it("preserves all original characters", () => {
    const word = "testing";
    const scrambled = scrambleWord(word);
    expect([...scrambled].sort().join("")).toBe([...word].sort().join(""));
  });
});

describe("isCorrect", () => {
  it("identifies the correct guess (case‑insensitive)", () => {
    expect(isCorrect("JavaScript", "javascript")).toBe(true);
  });

  it("rejects an incorrect guess", () => {
    expect(isCorrect("node", "deno")).toBe(false);
  });

  // Additional tests for edge cases
  it("handles whitespace", () => {
    expect(isCorrect("test", " test ")).toBe(true);
  });

  it("handles empty strings", () => {
    expect(isCorrect("", "")).toBe(true);
  });

  it("handles mixed case", () => {
    expect(isCorrect("TeSt", "tEsT")).toBe(true);
  });
});