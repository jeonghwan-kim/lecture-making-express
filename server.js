const http = require('http');
const path = require('path');
const fs = require('fs');
const debug = require('./modules/debug')('server')

const server = http.createServer((req, res) => {
  const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt'
  };
  const ext = path.parse(req.url).ext;
  const publicPath = path.join(__dirname, './public')

  debug('ext:', ext)

  if (Object.keys(mimeType).includes(ext)) {
    fs.readFile(`${publicPath}${req.url}`, (err, data) => {
      if (err) {
        res.statusCode = 404;
        return res.end('Not found');    
      }

      res.statusCode = 200
      res.setHeader('Content-Type', mimeType[ext]);
      res.end(data)
    })
    return 
  } 
    
  res.statusCode = 404;
  res.end('Not found');
});

module.exports = server
