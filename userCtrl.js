var users = require('./users.js');
const userList = users.find()
module.exports={
  readAll : function(){
    return users.find()
  },
  findUserById:function(userId){
    return users.findOne('id',userId)
  },
  getAdmins:function(){
    return users.find('type','admin')
  },
  getNonAdmins:function(){
    return users.find('type', 'user')
  },
  getUsersByFavorite:function(favorite){
    let favUsers =[]
    for(var user of userList){
      for(var f=0; f<user.favorites.length; f++){
        if(user.favorites[f] === favorite){
          favUsers.push(user)
        }
      }
    }
    return favUsers
  },
  getUsersByAgeLimit:function(age){
    if (userList.filter(ele=> ele.age < age) === []){
      return null
    }
    return userList.filter(ele=> ele.age < age)
  },
  findUserByQuery:function(param,value){
    if(param === "email"){
      return users.findOne('email',value)
    }
    return users.find(param.toLowerCase(),value)
  },
  createUser:function(user){
    return users.add(user)
  },
  updateUser:function(userId,obj){
    return users.update('id',userId,obj)
  },
  removeUser:function(userId){
    return users.remove('id',userId)
  }
}
