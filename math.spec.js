const math = require('./math');
const assert = require('assert');

describe('math module', () => {
  describe('sum()', ()=> {
    it('두 수를 더한 값을 반환한다', () => {
      assert.equal(math.sum(1,2), 3)
    });
  });
});