const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/submit-form', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})