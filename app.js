let mongoose = require('mongoose');
let express=require('express');
let app=express();

let User = require('./models/user');
let Car = require('./models/car');

global.aValue="Hello";

let url = "mongodb://localhost:27017/week6lec1";

mongoose.connect(url, function (err) {
    if (err) console.log(err);
    else {

        let user = new User({
            name: 'Max',
            age: 30,
            address: 'Melbourne'
        });
        user.save(function (err) {


            if (err) console.log(err);
            else {
                console.log('Saved!!!!');
                let car = new Car({
                    maker: 'BMW',
                    year: 2015,
                    user: user._id
                });
                car.save(function(err){
                    if(err) console.log(err);
                    else console.log('Car Saved !!! :)');
                    
                    
                })
            }
        });
    }
});

app.get('/getusers',function(req,res){
    User.find().limit(3).sort({age:-1}).exec(function(err,data){
        res.send(data);
    })
})
app.get('/getcars',function(req,res){
    Car.find().populate('user').exec(function(err,data){
        res.send(data);
    })
});

app.get('/deleteall',function(req,res){
    User.deleteMany({},function(err,obj){
       Car.deleteMany({},function(err,obj){

       }) 
    });
})

app.listen(8080);
