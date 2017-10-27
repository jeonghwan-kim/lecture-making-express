const assert = require('assert')
const request = require('supertest')
const server = require('./server')

describe('server', () => {
  it('hello world를 응답한다', done => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/plain')
      .expect(res => {
        assert.equal(res.text, 'Hello World\n')
      })
      .end(done)
  })
})