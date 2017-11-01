const assert = require('assert')
const sinon = require('sinon')
const Application = require('./application')

describe('Application', () => {
  let app

  beforeEach(()=> {
    app = Application()
  })

  it('listen 메소드를 가진 객체를 반환한다', () => {
    assert.equal(typeof app.listen, 'function')
  })
  it('use 메소드를 가진 객체를 반환한다', () => {
    assert.equal(typeof app.use, 'function')
  })


  describe('listen()', () => {
    let spy
    beforeEach(()=> {
      spy = sinon.spy(app.server, 'listen')
    })
    afterEach(()=> {
      app.server.listen.restore()
    })
    it('server.listen(port, domain, callback)을 호출한다', () => {
      const port = 3000
      const domain = 'localhost'
      const callback = () => null

      app.listen(port, domain, callback)

      assert.equal(spy.calledWith(port, domain, callback), true)
    })
  })

  describe('use()', () => {
    it('추가한 함수를 내부 스택에 쌓는다', () => {
      app.use((req, res, next) => null)
      assert.equal(app.middlewares.length, 1)
    })
  })

  describe('runMw()', () => {
    const req = {}, res = {}

    describe('미들웨어 함수 1개인 경우', () => {
      it('미들웨어 함수 하나인 경우 실행한다', () => {
        const spy = sinon.spy()
        app.runMw(req, res, [spy])
        assert.equal(spy.called, true)
      })
    })

    describe('미들웨어 함수가 2개인 경우', () =>{
      it('1번 미들웨어가 next()를 호출하면 2번 미들웨어를 실행한다', () => {
        const mw1 = (req, res, next) => next()
        const mw2 = (req, res, next) => null
        
        const spy1 = sinon.spy(mw1)
        const spy2 = sinon.spy(mw2)

        app.runMw(req, res, [spy1, spy2])

        assert.equal(spy1.called, true)
        assert.equal(spy2.called, true)
      })
      it('1번 미들웨어가 next()를 호출하지 않으면 2번 미들웨어를 실행 안한다', () => {
        const mw1 = (req, res, next) => null
        const mw2 = (req, res, next) => null
        
        const spy1 = sinon.spy(mw1)
        const spy2 = sinon.spy(mw2)

        app.runMw(req, res, [spy1, spy2])

        assert.equal(spy1.called, true)
        assert.equal(spy2.called, false)
      })
    })

    describe('미들웨어 함수가 3개인 경우', () => {
      it('1번 미들웨어가 next(err)로 에러를 전달한 경우 2번 에러 미들웨어를 실행한다', () => {
        const errorMsg = 'error msg'
        const mw1 = (req, res, next) => next(errorMsg)
        const mw2 = (err, req, res, next) => assert.equal(err, errorMsg)
        const mw3 = (req, res, next) => null

        const spy1 = sinon.spy(mw1)
        const spy2 = sinon.spy(mw2)
        const spy3 = sinon.spy(mw3)


        app.runMw(req, res, [spy1, spy2, spy3])
        
        assert.equal(spy1.called, true)
        assert.equal(spy2.called, true)
        assert.equal(spy3.called, false)
      })

      it('1번 미들웨어가 next(err)로 에러를 전달하여 2번 에러 미들웨어가 이를 수행하고 next() 호출할 경우, 3번 미들웨어를 실행한다', () => {
        const errorMsg = 'error msg'
        const mw1 = (req, res, next) => next(errorMsg)
        const mw2 = (err, req, res, next) => {
          assert.equal(err, errorMsg)
          next()
        }
        const mw3 = (req, res, next) => null

        const spy1 = sinon.spy(mw1)
        const spy2 = sinon.spy(mw2)
        const spy3 = sinon.spy(mw3)


        app.runMw(req, res, [spy1, spy2, spy3])
        
        assert.equal(spy1.called, true)
        assert.equal(spy2.called, true)
        assert.equal(spy3.called, true)
      })
    })
  })
})