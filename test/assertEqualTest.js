const expect = require('chai').expect;
const _ = require('../index');

describe("#assertEqual", () => {
  it("returns assertion failed for (Lighthouse Labs, Bootcamp)", () => {
    expect(_.assertEqual("Lighthouse Labs", "Bootcamp")).to.equal(`🛑🛑🛑 assertion failed: Lighthouse Labs != Bootcamp`);
  });
  it("returns assertion passed for (1, 1)", () => {
    expect(_.assertEqual(1, 1)).to.equal(`✅✅✅ assertion passed: 1 === 1`);
  });
});

