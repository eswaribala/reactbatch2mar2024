var express=require('express')
var router=express.Router();

router.post('/customers', function(req, res, next) {
    console.log("Testing...")
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(req.body);
    //console.log(request);
    // refAddState.Add(request.query.ID,request.query.Name);

    res.end("Object received successfully");
});
router.get('/customers', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader('Access-Control-Allow-Credentials', true);
    //console.log(req.body);
    //console.log(request);
    // refAddState.Add(request.query.ID,request.query.Name);

    res.end("Ready to Rock!!!!");
});


module.exports = router;