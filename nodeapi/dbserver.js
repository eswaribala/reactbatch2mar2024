const config=require('config');
const mongoose=require('mongoose');
//read the url
mongoUrl=config.get('mongodb.url');
const db={}
db.mongoose=mongoose;
db.url=mongoUrl;
db.customers=require('./models')(mongoose);
module.exports=db;
