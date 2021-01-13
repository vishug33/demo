var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  //response.end('Hello World: This content is from master branch via KANIKO Build latest 12/23 \n')
  response.end('Hello World: This content is from master branch via KANIKO Build latest 01/13/2021 (deploy) VG 11 22 33 \n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
