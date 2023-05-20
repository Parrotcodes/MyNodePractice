const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=15ef7a6a1be9a7d5ee3ac78c4c9dbfdf#";

  https.get(url, function (response) {
    // console.log(response)  //console logging the url data
    response.on("data", function (data) {
      //status code
      console.log(response.statusCode);

      //   console.log(data) //Buffer hexa decimal code

      const weatherData = JSON.parse(data);
      console.log(weatherData); //Formatting api into json format like an 3d object

      const mydata = {
        Name: "Rakesh",
        Age: "20",
        Programming: "Node JS",
      };
      console.log(JSON.stringify(mydata)); //converting into string like raw data like a class

      //Getting Info a weather by their particular path
      console.log("Current Temp: ", weatherData.main.temp); //temp from api
      console.log("Min Temp: ", weatherData.main.temp_min); //min temp
      console.log("Max Temp: ", weatherData.main.temp_max); //max temp

      //Path of a api data of a json fromat weatherData
      console.log("Description : ", weatherData.weather[0].description);

      //sending response to the web browser using html write method
     const desc = weatherData.weather[0].description;
     const temp = weatherData.main.temp;
     const icon = weatherData.weather[0].icon;
     const imgURL = "https://openweathermap.org/img/wn/"+icon+".png";

     res.write('<h1 style="color:red">The Current city temp is '+temp+' degrees Celsius.</h1>');
     res.write('<img src='+imgURL+' alt="cloudIcon" style="width:140px" />');
     res.write('<p>The description of a current weather : '+desc);
      res.send();
    });
  });

//   res.send("Live server is up and running..");
});

app.listen(3000, function () {
  console.log("server started at port number 3000.");
});
