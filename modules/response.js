const Response = res => {
  res.set = (key, val) => {
    res.setHeader(key, val)
    return res
  }
  
  res.send = data => {
    if (!res.getHeader('Content-Type')) {
      res.setHeader('Content-Type', 'text/plain')
    }
    
    res.end(data)
  }

  res.json = (data) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
  
  return res
}

module.exports = Response