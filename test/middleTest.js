const expect = require('chai').expect;
const _ = require('../index')

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    expect(_.middle([1, 2, 3, 4, 5])).to.eql([3]);
  });

});