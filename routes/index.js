const fs = require('fs')
const path = require('path')
const debug = require('../modules/debug')('routes')

const index = (req, res, next) => {
  const publicPath = path.join(__dirname, '../public')

  fs.readFile(`${publicPath}/index.html`, (err, data) => {
    if (err) throw err

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end(data)
  })
}

const notFound = (req, res, next) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html');
  res.end('not found')
}

module.exports = {index, notFound}