var express=require('express')
var router=express.Router();

router.post("/customers",function(req
                                  ,res){

    console.log(req.body);

})