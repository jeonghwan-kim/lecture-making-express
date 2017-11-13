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

  it('json 함수를 반환한다', () => assert.equal(typeof res.json, 'function'))
  it('set 함수를 반환한다', () => assert.equal(typeof res.set, 'function'))

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

  describe('set()', () => {
    let key
    let val
    let ret
    beforeEach(()=> {
      key = 'key'
      val = 'val'
      ret = res.set(key, val)
    })
    it('setHeader(key, val)을 호출한다', () => {
      assert.equal(originRes.setHeader.calledWith(key, val), true)
    })  
    it('this를 리턴한다', () => {
      assert.equal(ret, res)
    })  
  })
})