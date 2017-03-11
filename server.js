const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express();

var userCtrl = require('./userCtrl.js');

app.use(bodyParser.json())

app.get('/api/users', function(req,res){

  if(req.query.favorites){
    return res.status(200).json(userCtrl.getUsersByFavorite(req.query.favorites))
  }
  else if (req.query.age){
    return res.status(200).json(userCtrl.getUsersByAgeLimit(req.query.age))
  }
  else if (req.query.lastname){
    return res.status(200).json(userCtrl.findUserByQuery('last_name',req.query.lastname))
  }
  else if (req.query.email){
    return res.status(200).json(userCtrl.findUserByQuery('email',req.query.email))
  }
  res.status(200).json(userCtrl.readAll())
})
app.get('/api/users/:id', function(req,res){
  let userById = userCtrl.findUserById(parseInt(req.params.id))
  if(!userById){
    return res.status(404).json("User not found")
  }
  else res.status(200).json(userById)
})
app.get('/api/admins', function(req,res){
  res.status(200).json(userCtrl.getAdmins())
})
app.get('/api/nonadmins', function(req,res){
  res.status(200).json(userCtrl.getNonAdmins())
})
app.put('/api/users/:id', function(req,res){
  let userId = parseInt(req.params.id)
  let userObj = req.body

  res.status(200).json(userCtrl.updateUser(userId,userObj))
})
app.post('/api/users', function(req,res){
  res.status(200).json(userCtrl.createUser(req.body))
})
app.delete('/api/users/:userId', function(req,res){
  let userId = parseInt(req.params.userId)
  res.status(200).json(userCtrl.removeUser(userId))
})

//
app.listen(port, function(){
  console.log(`Listening on ${port}`)
})

// module.exports = app;
