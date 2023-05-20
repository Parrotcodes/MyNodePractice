const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", function (req, res) {
  res.sendFile(__dirname+'/Home.html');
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname+'/calculator.html');

  // res.send("<h1>About Page!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact Page!</h1>");
});


app.get("/profile", function (req, res) {
  // res.send("<h1>Profile Page!</h1> <a href='/'>Home</a>");
  res.sendFile(__dirname+'/signup.html')
});

app.get("/projects", function (req, res) {
  // res.send("<h1>Profile Page!</h1> <a href='/'>Home</a>");
  res.sendFile(__dirname+'/public/pages/Projects.html')
});


app.get("/settings", function (req, res) {
  res.send("<h1>Settings Page!</h1>");
});



app.post('/',function(req,res){
  res.redirect('/home')
})

app.listen(3000, function () {
  console.log("Sever listing port 3000... started running....");
});
