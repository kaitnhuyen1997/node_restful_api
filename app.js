const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// dotenv
require("dotenv/config");

// Import routes
const postsRoute = require("./routes/posts");

// Middlewares
// app.use(auth);
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to home page !");
});

// app.get("/posts", (req, res) => {
//   res.send("Welcome to posts page !");
// });

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB !")
);

// listening to server port
app.listen(PORT, () => console.log(`Litsening server port ${PORT}`));
