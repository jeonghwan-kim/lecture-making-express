// modules
const debug = require('./modules/debug')('server')
const Application = require('./modules/application')

// middlewares
const serveStatic = require('./middlewares/serve-static')
const helloWorld = require('./middlewares/hello-world')
const morgan = require('./middlewares/morgan')

// routes
const routes = require('./routes/index')

// app
const app = Application()

app.use(morgan)
app.use(serveStatic)
app.use('/', routes)

module.exports = app.server
