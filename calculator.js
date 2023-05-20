const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/calculator", function (req, res) {
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;
  res.send(`Your Result is ${result}`);
  //   res.send("Thank you for posting data..");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/BMICalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var bmical_result = w / (h * h);

  res.send(`The BMI Calculator result is ${bmical_result}`);
});

app.listen(3000, function () {
  console.log("Sever Port 3000 started running.....");
});
