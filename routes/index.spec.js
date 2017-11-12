const assert = require('assert')
const request = require('supertest')
const server = require('../server')

describe('/', () => {
  it('index.html을 응답한다', done => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html')
      .expect(res => {
        assert.equal(res.text.includes('<html>'), true)
        assert.equal(res.text.includes('<body>'), true)
        assert.equal(res.text.includes('</body>'), true)
        assert.equal(res.text.includes('</html>'), true)
        
      })
      .end(done)
  })
})