const assert = require('assert')
const sinon = require('sinon')
const Response = require('./response')

describe('Response', () => {
  let originRes
  let res

  beforeEach(()=> {
    originRes = {
      end: sinon.spy(),
      setHeader: sinon.spy()
    }
    res = Response(originRes)
  })

  it('json 함수를 반환한다', () => {
    assert.equal(typeof res.json, 'function')
  })

  describe('json()', () => {
    it('setHeader("Content-Type", "application/json")을 호출한다', () => {
      res.json()
      assert.equal(originRes.setHeader.calledWith('Content-Type', 'application/json'), true)
    })
    it('end(JSON.stringify())를 호출한다', () => {
      const data = {}
      res.json(data)
      assert.equal(originRes.end.calledWith(JSON.stringify(data)), true)
    })
  })
})