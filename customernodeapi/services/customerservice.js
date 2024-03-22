var mongoose = require('mongoose');
var CustomerModel= require('../schemas/customerschema').CustomerModel;

mongoose.connect('mongodb://localhost:27017/chitdb');


//mongoose.connect(config.url, config.mongodb, config.mongoport);
module.exports.Add=function(obj)
{
    var db = mongoose.connection;
    db.once('open', function() {
    });

    var obj = new CustomerModel(
        {
            customerId:0,
            firstName:obj.firstName,
            lastName:obj.lastName,
            middleName:"",
            email:obj.email,
            password:obj.password,
            phone:obj.mobileNo

        });
    obj.save();

}







