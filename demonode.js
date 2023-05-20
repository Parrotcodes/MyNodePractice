// const superheroes = require('superheroes');
// const msg = require('./module');
// const os = require("os");
// const fs = require("fs");
const http = require("http");

// var names = superheroes.random()
// // var all = superheroes.all

// console.log(names)
// // console.log(all)
// // msg.greetings('Raju')
// msg('Rakesh')
// console.log(module)

// const totoalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totoalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const file = fs.readdirSync('./')
// console.log(file)

// fs.readdir("./", function (err, file) {
//   if (err) console.log("Error: ", err);
//   else console.log("Result: ", file);
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/about") {
    res.write("About Page...");
    res.end();
  }
});

server.listen(3000);
console.log("Listening port 3000....");
