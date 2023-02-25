const express = require("express");
const app = express();

app.get("/demo", (req, res) => {
  console.log("demo route");
  res.send("demo");
});

app.listen(8800, () => {
  console.log("server running on port 8800");
});
