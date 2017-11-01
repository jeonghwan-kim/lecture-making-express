const helloWorld = (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');    
  res.statusCode = 200;
  res.end('Hello World\n');
}

module.exports = helloWorld