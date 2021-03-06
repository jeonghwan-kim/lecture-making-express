const debug = require('../modules/debug')('morgan')

const colors = {
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
}

const methodColorMap = {
  get: colors.green,
  post: colors.cyan,
  put: colors.yellow,
  delete: colors.red
}

const coloredMethod = method => {
  return `${methodColorMap[method.toLowerCase()]}${method}${colors.reset}`
}

const morgan = (req, res, next) => {
  console.log(`${coloredMethod(req.method)} ${req.url}`)
  next()
}

module.exports = morgan