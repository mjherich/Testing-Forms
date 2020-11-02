const express = require('express')
const app = express()
const express = require('express');
req
const port = 8000

app.use(log)

app.get('/', log, hello)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'))
// })

function log(req, res, next) {
  console.log(new Date(), req.method, req.url)
  next()
}

function hello(req, res, next) {
  res.write(`Hello \n World`)
  res.end()
  next()
}

app.listen(port, function() {
  console.log('Server started on port 8000')
})