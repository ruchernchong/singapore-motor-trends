import { capitaliseWords } from "@/utils/capitaliseWords";

describe("capitaliseWords", () => {
  it("should return as it is when words are already capitalised", () => {
    expect(capitaliseWords("Hello World")).toBe("Hello World");
  });

  it("should return a capitalised format for all lowercase words", () => {
    expect(capitaliseWords("hello world")).toBe("Hello World");
  });

  it("should return a capitalised format for all uppercase words", () => {
    expect(capitaliseWords("HELLO WORLD")).toBe("Hello World");
  });

  it("should return a capitalised format for a single word", () => {
    expect(capitaliseWords("hello")).toBe("Hello");
    expect(capitaliseWords("HELLO")).toBe("Hello");
  });
});
