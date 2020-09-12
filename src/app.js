const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(path.join(publicDirectoryPath)))

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'some forecast information',
    location: 'location of the request'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})