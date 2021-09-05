// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});


//api endpoint


app.get("/api/:text" , function (req ,res)
{
  //const d = req.params.text ;


 
        res.json({name: "api" ,content : "Yoda"}) ;
    
         

})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log("http://localhost:"+listener.address().port) ;
});