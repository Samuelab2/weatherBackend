const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)))

app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'Samuel Mata'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Samuel Mata'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    message: 'this is a test to complete the challenge',
    name: 'Samuel Mata'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'some forecast information',
    location: 'location of the request'
  })
})

app.get('/help/*', (req, res) => {
  res.render('notFound', {
    title: '404 page',
    message: 'The help article was not found',
    name: 'Samuel Mata'
  })
})

app.get('*', (req, res) => {
  res.render('notFound', {
    title: '404 page',
    message: 'this page was not found',
    name: 'Samuel Mata'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})