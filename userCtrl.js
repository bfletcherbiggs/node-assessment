var users = require('./users.js');

module.exports={
  readAll : function(){
    users.index()
  },
  findUserById:function(userId){},
  getAdmins:function(){},
  getNonAdmins:function(){},
  getUsersByFavorite:function(favorite){},
  getUsersByAgeLimit:function(age){},
  findUserByQuery:function(param,value){},
  createUser:function(user){},
  updateUser:function(userId,obj){},
  removeUser:function(userId){}
}
