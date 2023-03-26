const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./database/connection");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();
connection();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const auth = require("./routes/auth");
const hotels = require("./routes/hotels");
const rooms = require("./routes/rooms");
const users = require("./routes/user");

dotenv.config();

app.use("/api/auth", auth);
app.use("/api/hotel", hotels);
app.use("/api/rooms", rooms);
app.use("/api/users", users);

app.use(bodyParser.json());
app.use(cors());

app.listen(8800, () => {
  console.log("server running on port 8800");
});
