var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: false}));



app.listen(3000,function(){
    console.log("Server started, listening on: "+3000);
  })

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
      }
    let result;
    if(calculatorRequest.operation === 'add'){
        result = `Result: ${calculatorRequest.n1 + calculatorRequest.n2}`;
    }   
    if(calculatorRequest.operation === '*'){
        result = `Result: ${calculatorRequest.n1 * calculatorRequest.n2}`;
    }   
    if(calculatorRequest.operation === '-'){
        result = `Result: ${calculatorRequest.n1 - calculatorRequest.n2}`;
    }   

    res.calResult = result;
    //console.log(res.calResult);
    next();

    })



app.get("/api/calculator/*",function(req,res){
    
    res.send(res.calResult);
  })
  