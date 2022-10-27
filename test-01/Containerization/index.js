// content of index.js
const http = require('http')
const port = 8021

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Nong Kai Mai Chai Nong Ped')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Nong Kai Error', err)
  }

  console.log(`server is listening on ${port}`)
})
