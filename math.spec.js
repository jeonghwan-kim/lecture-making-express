const math = require('./math');
const assert = require('assert');

describe('math module', () => {
  describe('sum()', ()=> {
    it('두 수를 더한 값을 반환한다', () => {
      assert.equal(math.sum(1, 2), 3)
    });

    it('문자열 정수를 더할 수 있다', () => {
      // todo 
    });

    it('정수형식의 문자열이 아닐경우 에러를 던진다', () => {
      // todo
    });

    it('인자를 1개만 넣은 경우 그 값을 반환한다', () => {
      // todo 
    })
  });
});