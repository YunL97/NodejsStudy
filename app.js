const { Server } = require('http')
const http = require('http')
console.log('asd' + a)
function rqListener(req, res) {
    console.log('asc')
}

http.createServer(rqListener).listen(3000)

