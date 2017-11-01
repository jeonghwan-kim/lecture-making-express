const debug = require('./modules/debug')('server')
const Application = require('./modules/application')
const app = Application()

module.exports = app.server
