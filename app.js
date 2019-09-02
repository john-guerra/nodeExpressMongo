const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 8080;


function readData(fnCBK) {
  fs.readFile(
    "gananLosCorruptos.json",
    (err, data) => {
      if (err) throw err;

      console.log("dos");
      const dataParsed = JSON.parse(data);
      console.log("got data", dataParsed.length);

      fnCBK(dataParsed);
    }
  );
}


app.get("/", (req, res) => {
  console.log("Got GET /");

  function fnCallbackData(data) {
    res.send(data);
  }

  readData(fnCallbackData);

});

app.listen(PORT, () => {
  console.log(`My app is running at http://localhost:${PORT}`);
});

