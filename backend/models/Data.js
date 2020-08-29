var mongoose = require('mongoose')

module.exports = mongoose.model('Data' , {
    name: String,
    age:Number,
    dept:String,
    rno: Number,
    year:Number
})