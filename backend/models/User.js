var mongoose = require('mongoose')
var schema = mongoose.Schema
const user = new schema({
     email: {type: String ,
    require: true,
    unique:true
},
    name:{type: String ,
        require: true},
    password : {type: String ,
        require: true}
})
user.statics.addprop = function (){
   user.add(user).add({helo:Number})
}

module.exports = mongoose.model('User' , user)