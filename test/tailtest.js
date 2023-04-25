const expect = require('chai').expect;
const _ = require('../index');


describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    expect(_.tail([1, 2, 3])).to.eql([2, 3]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(_.tail(['5']), '5'); 
  // });
});