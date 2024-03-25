var mongoose = require('mongoose');
var CustomerModel= require('../schemas/customerschema').CustomerModel;

mongoose.connect('mongodb://localhost:27017/chitdb?directConnection=true');


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


module.exports.FetchCustomers=function(req,res){
    CustomerModel.find().then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:
                err.message || 'Some error occurred while reading customer data'
        });
    });
}

module.exports.FetchCustomerById=function(req,res){
    CustomerModel.findById(req.body.cistomerId). then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:
                err.message || 'Some error occurred while reading customer data'
        });
    });
}


