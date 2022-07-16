// const express = require('express')
const axios = require('axios')
const fs = require('fs')
const express = require('express')
const cors = require('cors');

const app = express()
const port = 9009

const parties = JSON.parse(
  fs.readFileSync(`${__dirname}/py/crawler/api/main.json`)
 );
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/main', (req, res) => {
  res.status(200).json({
    status: 'succes',
    parties
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

