const assert = require('assert')
const debug = require('./debug')('tag')

const spy = {
  on (obj, method) {
    const originalFn = obj[method]
    this.method = method
    this.haveBeenCalled = false

    obj[method] = () => {
      this.haveBeenCalled = true
      obj[method] = originalFn
    }
  },
  expect(target) {
    this.target = target
    return this
  },
  toHaveBeenCalled () {
    if (!this.haveBeenCalled) throw Error(`${this.method}() 호출되지 않았음`)
  }
}

describe('debug 모듈', () => {
  it('함수를 반환한다', () => {
    assert.equal(typeof debug, 'function')
  })

  it('반환한 함수는 console.log()를 실행한다', () => {
    spy.on(console, 'log')
    debug()
    spy.expect(console.log).toHaveBeenCalled()
  })

  // it('설정한 태그로 로그를 기록한다', () => {
  //   const tag = 'tag 1'
  //   const msg = 'msg 1'
  //   const debug = require('./debug')(tag)
  //   spy.on(console, 'log')
  //   debug(msg)
  //   spy.Expect()toHaveBeenCalledWith(console.log)
  // })
})