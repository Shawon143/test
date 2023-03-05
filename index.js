const express = require("express");
const app = express();
const port = process.env.port || 7000;

app.get("/", (req, res) => {
  res.send("Simple node server");
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
