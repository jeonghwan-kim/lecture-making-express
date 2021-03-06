const assert = require('assert')
const request = require('supertest')
const server = require('../../server')

describe('GET /api/posts', () => {
  let body

  beforeEach(done => {
    request(server)
    .get('/api/posts')
    .expect(200)
    .expect('Content-Type', 'application/json')
    .expect(res => {
      body = res.body
    })
    .end(done)
  })

  it('list, pagination 키를 같는 json객체를 응답한다', () => {
    assert.equal(body.hasOwnProperty('list'), true)
    assert.equal(body.hasOwnProperty('pagination'), true)
  })
  it('글 목록을 json 형식으로 응답한다', () => {
    assert.equal(body.list instanceof Array, true)
  })
  it('pagination 객체는 total, limit, page 키를 갖는다', () => {
    assert.equal(body.pagination.hasOwnProperty('total'), true)
    assert.equal(body.pagination.hasOwnProperty('limit'), true)
    assert.equal(body.pagination.hasOwnProperty('page'), true)
  })
})