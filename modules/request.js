const Request = req => {
  if (!req) throw Error('req is required')

  const partials = req.url.split('?')
  req.path = partials[0]

  let qs = partials[1] || ''
  req.params = qs.split('&').reduce((obj, p) => {
    const pair = p.split('=')
    obj[pair[0]] = pair[1]
    return obj
  }, {})

  return req
}

module.exports = Request