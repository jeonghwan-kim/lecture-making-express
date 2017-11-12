const assert = require('assert')
const sinon = require('sinon')
const morgan = require('./morgan')

describe('morgan', () => {
  let req, res, next, spy 

  beforeEach(()=> {
    req = {
      method: 'GET',
      url: '/index.html'
    }
    res = {}
    next = () => null
    spy = sinon.spy(console, 'log')
  })

  afterEach(()=> {
    console.log.restore()
  })

  it('req.method와 req.url을 출력한다', () => {
    morgan(req, res, next)
    assert.equal(spy.args[0][0].includes(req.method), true)
    assert.equal(spy.args[0][0].includes(req.url), true)
  })
})