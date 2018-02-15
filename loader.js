require('./config/database.js')

const server = require('./config/server.js')
require('./config/routes.js')(server)