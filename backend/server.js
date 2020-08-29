var express = require('express')
var cors = require('cors')
var BodyParser = require('body-parser')
var Mongoose = require('mongoose')
var jwt = require('jwt-simple')
var app=express()
var mongooseDynamic = require ('mongoose-dynamic-schemas');
var User = require('./models/User.js')
var Data = require('./models/Data.js')


app.use(cors())
app.use(BodyParser.json())


function checkAuthenticated(req,res,next)
{   console.log('here')
    if(!req.header('authorization'))
      return res.status(401).send({message:'Unauthorized '})

    var token = req.header('authorization').split(' ')[1]
    var payload = jwt.decode(token,'123')
    req.userId = payload
    next()
}


app.post('/addDB',checkAuthenticated, (req,res) => {
   console.log(req.body)
   var data = Data (req.body)
   data.save()
})
app.post('/addmanyDB',checkAuthenticated, (req,res) => {
    console.log(req.body)
    req.body.forEach((dat)=> {
       console.log('each',dat)
       var temp = Data (dat)
       temp.save();
    })
    
 })

app.get('/all',checkAuthenticated,async (req,res) => {
    activeUser = req.userId
    var data = await Data.find({} )
    //console.log(bms)
    res.send(data)

})
app.get('/update/:id',checkAuthenticated, async (req,res) => {
    console.log('in')
    var data
    data = await Data.findOne( {_id: req.params.id})
    console.log(data)
   res.send(data)  
})
app.post('/update',checkAuthenticated, async (req,res) => {
     
    // console.log(req.body)
     Data.findOneAndUpdate({_id : req.body._id},{name:req.body.name,
         dept: req.body.dept,
         year: req.body.year,
      age : req.body.age, rno : req.body.rno},function(err,result) {
        //console.log(result)
     })
     
     
 })


app.get('/bmnames',checkAuthenticated,async (req,res) => {
    var bms = await Data.find({ OwnerID : req.userId} ).distinct('name')
    var bmnames =[]
    bms.forEach((item)=> {
     bmnames.push(item.name)
    })
    console.log(bms)
    res.send(bms)

})

app.post('/delete',checkAuthenticated, (req,res) => {
    //console.log(req.body)
    Data.findOneAndDelete({_id: req.body._id}, function(result,err){

    })
     res.send()
 })


app.get('/home',checkAuthenticated, async (req,res) => {
    try{
        if(req.userId)
        {console.log(req.userId)
        var users = await User.find({_id: req.userId})
        res.send(users)}
        else {
            res.redirect('/login')
        }
    }catch (error){
       console.log(error)
       res.redirect('/login')
    }

   
})

app.post('/register', (req,res) => {
    var UserData = req.body;
    var user = new User(UserData)

    user.save( (err, result) => {
        if(err)
         console.log('error')
         var payload = user._id
         var token = jwt.encode(payload, '123')
         res.status(200).send({token})
         
    })
    
})






app.post('/login', async (req,res) => {
    var UserData = req.body;
    var user = await User.findOne({email:UserData.email})
    console.log(user)
    
    if(!user)
       return res.status(401).send({message: "email or password is invalid"})
    
    if(UserData.password != user.password)
       return res.status(401).send({message: "email or password is invalid"})
    var payload = user._id
    var token = jwt.encode(payload, '123')
   res.status(200).send({token})
})

Mongoose.connect('mongodb://127.0.0.1:27017/LiteAdmin', (err)=> {
    if(!err)
    console.log('connected')
})

app.listen(3000)