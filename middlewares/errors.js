const debug = require('../modules/debug')('errors')

const error404 = (req, res, next) => {
  debug('error404')
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html');
  res.end('not found')
}

const error500 = (err, req, res, next) => {
  debug('error500 err:', err)
  
  err = err || Error('internal server error')
  res.statusCode = 500
  res.end(err && err.message || 'internal server error')
}

module.exports = {error404, error500}