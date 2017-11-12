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

describe('정의 되지 않은 라우팅일 경우', () => {
  it('404 상태코드를 반환', done => {
    request(server)
      .get('/notfount')
      .expect(404)
      .expect(res => {
        assert.equal(res.text, 'not found')
      })
      .end(done)
  })
})