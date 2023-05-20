const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
// const request = require('request')

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function (req, res) {
  console.log("First Name: " + req.body.fName);
  console.log("Last Name: " + req.body.lName);
  console.log("Email: " + req.body.uMail);
  // res.write('<p>First Name: '+req.body.fName+'</p>')
  // res.write('<p>Last Name: '+req.body.lName+'</p>')
  // res.write('<p>Email: '+req.body.uMail+'</p>')

  var fistName = req.body.fName;
  var lastName = req.body.lName;
  var uEmail = req.body.uMail;
  const data = {
    members: [
      {
        email_address: uEmail,
        status: "subscribed",
        merge_fields: {
          FNAME: fistName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us11.api.mailchimp.com/3.0/lists/7fc5c54cbf";
  const options = {
    method: "POST",
    auth: "parrot:a4d9fab88039a785d5540e3b47bcd6940-us11",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
  //   res.send("recieved data from user");
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/", function (req, res) {
  res.redirect("/calculator");
});


app.listen(process.env.PORT || 3000, function () {
  console.log("Server started signup page at prot ...");
});

// API key
//mysignup 4d9fab88039a785d5540e3b47bcd6940-us11

// ListId
// 7fc5c54cbf
