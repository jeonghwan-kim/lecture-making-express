const fs = require('fs')
const path = require('path')
const debug = require('../modules/debug')('routes')

const index = (req, res, next) => {
  const publicPath = path.join(__dirname, '../public')

  fs.readFile(`${publicPath}/index.html`, (err, data) => {
    if (err) return next(err)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end(data)
  })
}

module.exports = {index}