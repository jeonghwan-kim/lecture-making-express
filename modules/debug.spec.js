const assert = require('assert');
const sinon = require('sinon');
const debug = require('./debug')

describe('debug 모듈', () => {
  let spy

  beforeEach(()=> {
    process.env.DEBUG = '*'
    spy = sinon.spy(console, 'log')
  })

  afterEach(()=> {
    delete process.env.DEBUG
    console.log.restore()
  })

  it('함수를 반환한다', () => {
    assert.equal(typeof debug(), 'function')
  })

  it('반환한 함수는 console.log()를 실행한다', () => {
    const dbg = debug()
    dbg()
    assert.equal(spy.called, true)
    
  })

  it('설정한 태그와 메세지로 로그를 출력한다', () => {
    const tag = 'tag 1'
    const msg = 'msg 1'
    const dbg = debug(tag)
    dbg(msg)
    assert.equal(spy.calledWith(dbg.coloredTag, msg), true)
    assert.equal(dbg.coloredTag.includes(tag), true)
  })
})