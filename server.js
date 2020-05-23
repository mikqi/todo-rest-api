const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/learn-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello Express')
})

app.use('/api', require('./routes/api'))

app.listen(3001, function () {
  console.log('App listen on port 3001')
})