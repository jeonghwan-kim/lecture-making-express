const Response = res => {
  res.set = (key, val) => {
    res.setHeader(key, val)
    return res
  }
  
  res.json = (data) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
  return res
}

module.exports = Response