const expect = require('chai').expect;
const tail = require('../tail');


describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.eql([2, 3]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(tail(['5']), '5'); 
  // });
});