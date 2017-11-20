const Request = req => {
  if (!req) throw Error('req is required')

  const partials = req.url.split('?')
  req.path = partials[0]

  return req
}

module.exports = Request