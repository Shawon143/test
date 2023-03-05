const express = require("express");
const { MongoClient } = require("mongodb");
const objectID = require("mongodb").ObjectId;

require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 7000;
// middle ware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://AsonsServer:shawon646@cluster0.sfpfh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("CarPackage");
    const carCollection = database.collection("cars");

    // get cars api
    app.get("/cars", async (req, res) => {
      const cursor = carCollection.find({});
      const cars = await cursor.toArray();
      res.send(cars);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(" car server");
});

const user = [
  { id: 100, name: "shaon" },
  { id: 101, name: "rahim" },
];
app.get("/users", (req, res) => {
  res.send(user);
});
app.listen(port, () => {
  console.log(`simple node server running on ${port}`);
});
