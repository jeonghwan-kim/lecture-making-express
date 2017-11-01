// modules
const debug = require('./modules/debug')('server')
const Application = require('./modules/application')

// middlewares
const serveStatic = require('./middlewares/serve-static')
const helloWorld = require('./middlewares/hello-world')

// app
const app = Application()

app.use(serveStatic)
app.use(helloWorld)

module.exports = app.server
