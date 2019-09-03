const fs = require("fs");
const express = require("express");

const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = 8080;

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client.connect((err) => {
  if (err) throw err;

  console.log("Conectado con monguito!!!");

  const db = client.db("nodeExpress3");
  const colTweets = db.collection("tweets");

  colTweets.find({})
    .limit(20)
    .toArray((err, tweets) => {
      if (err) throw err;

      console.log("# tweets ", tweets.length);

      client.close();
    });



});


function readData(fnCBK, errCBK) {
  fs.readFile(
    "gananLosCorruptos.json",
    (err, data) => {
      if (err) {
        errCBK(err);
        return;
      }

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

  function errCBK(err) {
    res.send(err);
  }

  readData(fnCallbackData, errCBK);

});

app.listen(PORT, () => {
  console.log(`My app is running at http://localhost:${PORT}`);
});

