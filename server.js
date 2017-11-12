// modules
const debug = require('./modules/debug')('server')
const Application = require('./modules/application')

// middlewares
const serveStatic = require('./middlewares/serve-static')
const morgan = require('./middlewares/morgan')
const errors = require('./middlewares/errors')

// routes
const routes = require('./routes/index')

// app
const app = Application()

app.use(morgan)
app.use(serveStatic)
app.use('/', routes.index)
app.use('/error', (req, res, next) => next(Error('error test')))
app.use(errors.error404)
app.use(errors.error500)

module.exports = app.server
module.exports.app = app
