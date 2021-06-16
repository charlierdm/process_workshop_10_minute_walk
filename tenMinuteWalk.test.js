const tenMinuteWalk = require("./tenMinuteWalk");

describe("tenMinuteWalk", () => {
  it("returns true if the directions equal 10 minutes and return to start", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "e", "n", "n", "e", "s", "w", "w"])
    ).toBe(true);
  });

  it("returns false when the walk does not finish where it started", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "n", "n", "e", "s", "w", "w", "w"])
    ).toBe(false);
  });

  it("returns false when the walk does not finish where it started", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "s", "s", "e", "s", "w", "n", "n"])
    ).toBe(false);
  });

  it("returns false when the walk length is not 10 minutes", () => {
    expect(tenMinuteWalk(["w", "s"])).toBe(false);
  });
});
