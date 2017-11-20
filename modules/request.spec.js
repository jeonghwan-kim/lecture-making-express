const assert = require('assert')
const sinon = require('sinon')
const Request = require('./request')

describe('Request', () => {
  let originReq
  let req

  beforeEach(()=> {
    originReq = {
      url: '/path?key=value',
    }
    req = Request(originReq)
  })

  it('req.path는 경로 문자열을 담는다', () => {
    assert.equal(req.path, '/path')
  })
});