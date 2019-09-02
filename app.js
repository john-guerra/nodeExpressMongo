const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 8080;

function fileCbk(err, data) {
  if (err) throw err;

  console.log("dos");
  const dataParsed = JSON.parse(data);
  console.log("got data", dataParsed.length);
}

fs.readFile("gananLosCorruptos.json", fileCbk);

app.get("/", (req, res) => {
  console.log("Got GET /");
  res.send("Holi John");
});

app.listen(PORT, () => {
  console.log(`My app is running at http://localhost:${PORT}`);
});

