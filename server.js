// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

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