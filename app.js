const fs = require("fs");


fs.readFile("gananLosCorruptos.json",
  (err, data) => {
    if (err) throw err;

    const dataParsed = JSON.parse(data);
    console.log("got data", dataParsed.length);
  }
);






let a = 1 + 2;


console.log("a=", a);