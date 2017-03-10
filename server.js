const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express();

var userCtrl = require('./userCtrl.js');

app.use(bodyParser.json())

app.listen(port, function(){
  console.log(`Listening on ${port}`)
})

module.exports = app;
