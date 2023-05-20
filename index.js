const express = require("express");
const https = require("https");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "15ef7a6a1be9a7d5ee3ac78c4c9dbfdf#"
    const url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+query+"&appid="+apiKey;

  https.get(url, function (response) {
    response.on("data", function (data) {

    //   console.log(weatherData); //Formatting api into json format like an 3d object

    //   //Getting Info a weather by their particular path
    //   res.write("Current Temp: ", weatherData.main.temp); //temp from api
    //   res.write("Min Temp: ", weatherData.main.temp_min); //min temp
    //   res.write("Max Temp: ", weatherData.main.temp_max); //max temp

    //   //Path of a api data of a json fromat weatherData
    //   res.write("Description : ", weatherData.weather[0].description);

      //sending response to the web browser using html write method
     const weatherData = JSON.parse(data);
     const desc = weatherData.weather[0].description;
     const temp = weatherData.main.temp;
     const icon = weatherData.weather[0].icon;
     const imgURL = "https://openweathermap.org/img/wn/"+icon+".png";

    //  const query = 'London';


     res.write('<h1 style="color:red">The Current '+query+' city temp is '+temp+' degrees Celsius.</h1>');
     res.write('<img src='+imgURL+' alt="cloudIcon" style="width:140px" />');
     res.write('<p>The description of a current weather : '+desc);

     
     //Getting Info a weather by their particular path
     res.write("<p>Current Temp: "+ weatherData.main.temp+"</p>"); //temp from api
     res.write("<p>Min Temp: "+ weatherData.main.temp_min+"</p>"); //min temp
     res.write("<p>Max Temp: "+ weatherData.main.temp_max+"</p>"); //max temp

     //Path of a api data of a json fromat weatherData
     res.write("<p>Description : "+ weatherData.weather[0].description+"</p>");

     res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server started at port number 3000.");
});
