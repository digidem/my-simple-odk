var express = require('express')
var extend = require('xtend/mutable')

var formStores = {
  github: require('simple-odk/routes/github'),
  firebase: require('simple-odk/routes/firebase'),
  gist: require('simple-odk/routes/gist')
}

var error = require('simple-odk/controllers/error-handler')

var app = express()

var config = {
  formStore: process.env.FORM_STORE,
  user: process.env.GITHUB_USER,
  repo: process.env.GITHUB_REPO,
  appname: process.env.FIREBASE_APP,
  gist_id: process.env.GIST_ID,
  s3bucket: process.env.S3_BUCKET
}

app.get('/', function (req, res) {
  res.sendStatus(200)
})

app.use('/', function (req, res, next) {
  extend(req.params, config)
  formStores[config.formStore](req, res, next)
})

// Handle errors
app.use(error)

module.exports = app
