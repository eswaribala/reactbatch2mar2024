const mongoose = require('mongoose')
Schema = mongoose.Schema;

var stateSchema = new mongoose.Schema({
    customerId:Number,
    firstName: String,
    lastName:String,
    middleName: String,
    email:String,
    password:String,
    phone:Number
})