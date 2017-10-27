const math = require('./math');
const assert = require('assert');

describe('math module', () => {
  describe('sum()', ()=> {
    it('두 수를 더한 값을 반환한다', () => {
      assert.equal(math.sum(1,2), 3)
    });

    it('문자열 정수를 더할 수 있다', () => {
      assert.equal(math.sum(1, '2'), 3)
      assert.equal(math.sum('1', '2'), 3)
      assert.equal(math.sum('1', 2), 3)
    });

    it('정수형식의 문자열이 아닐경우 에러를 던진다', () => {
      try {
        math.sum('one', 2)
      } catch (e) {
        return assert.equal(e.message, math.messages.notNumber)
      }

      try {
        math.sum('1', 'two')
      } catch (e) {
        return assert.equal(e.message, math.messages.notNumber)
      }

      assert.equal(true, false)
    });

    it('인자를 1개만 넣은 경우 그 값을 반환한다', () => {
      assert.equal(math.sum(2), 2)
    })
  });

  describe('subtract()', () => {
    it('두 수를 뺀 값을 반환한다', () => {
      assert.equal(math.substract(2,1), 1)
    });

    it('문자열 값을 뺄수 있다', () => {
      assert.equal(math.substract('2', 1), 1)
      assert.equal(math.substract('2','1'), 1)
      assert.equal(math.substract(2,'1'), 1)
    });

    it('정수형식의 문자열이 아닐경우 에러를 던진다', () => {
      try {
        math.substract('one', 2)
      } catch (e) {
        return assert.equal(e.message, math.messages.notNumber)
      }

      try {
        math.substract(1, 'two')
      } catch (e) {
        return assert.equal(e.message, math.messages.notNumber)
      }
      assert.equal(true, false)
    });

    it('인자를 1개만 넣은 경우 그 값을 반환한다', () => {
      assert.equal(math.substract(2), 2)
    })
  });
});