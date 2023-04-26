const expect = require('chai').expect;
const _ =  require('../index');

describe("#eqArrays", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    expect(_.eqArrays([1, 2, 3], [1, 2, 3])).to.eql(true);
  });

});