const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const UserRoute = require("./routes/users");

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected successfully"))
  .catch((err) => console.log(err));

app.use("/api/user", UserRoute);

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
