const http = require('http');
const path = require('path');
const fs = require('fs');
const response = require('./response')
const request = require('./request')
const debug = require('./debug')('application')

const Application = () => {
  const middlewares = []
  
  const runMw = (req, res, middlewares, i, err) => {
    if (!middlewares.length) return 
    if (i < 0 || i >= middlewares.length) return
    i = i || 0

    const mw = middlewares[i]

    if (typeof mw !== 'function') throw Error(`${mw.name} should be function`)
    const next = () => e => runMw(req, res, middlewares, i + 1, e)

    debug('mw.length:', mw.length, 'mw.name:', mw.name, 'err:', err)

    if (err) {
      const isErrorMw = mw => mw.length === 4
      if (isErrorMw(mw)) return mw(err, req, res, next())
      
      return runMw(req, res, middlewares, i + 1, err)
    } 
   
    if (mw._path) {
      if (req.path === mw._path) return mw(req, res, next())
      return runMw(req, res, middlewares, i + 1)
    }

    mw(req, res, next())
  }

  const server = http.createServer((req, res) => {
    runMw(request(req), response(res), middlewares)
  })
  
  return {
    // 유닛 테스트 용
    server,
    middlewares,
    runMw,

    // API 용 
    listen(port, domain, callback) {
      debug(`listen(${port}, ${domain}, callback)`)
      server.listen(port, domain, callback)
    },
    use(path, fn) {
      debug('use()', typeof path, typeof fn)

      if (typeof path === 'string' && typeof fn === 'function') {
        fn._path = path
      } else if (typeof path === 'function') {
        fn = path 
      } else {
        throw Error('Usage: use(path, fn) or use(fn)')
      }

      middlewares.push(fn)
    }
  }
}

module.exports = Application