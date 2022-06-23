var express = require('express')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

mongoose.connect("mongodb+srv://Urvang:U3267168@cluster0.4y2ii.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("DB Connected");

    var app = express();
    app.use(bodyparser.urlencoded({ extended: false }))
    app.use(express.json())
    app.use('/api', router);

    app.listen(process.env.PORT || 3000, () => {
        console.log("server started");
    })

}).catch((err) => {
    console.log(err)
})