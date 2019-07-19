var fs = require('fs'),
  jsonServer = require('json-server'),
  server = jsonServer.create(),
  router = jsonServer.router('db.json'),
  middlewares = jsonServer.defaults()
const cors = require('cors')
const bodyParser = require('body-parser')

server.use(cors())
server.use(bodyParser.json())

server.use(middlewares)
server.use(router)

server.listen(3002, function() {
  console.log('json-server started on port ' + 3002)
})
