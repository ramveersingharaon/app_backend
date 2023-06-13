const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRouter");
const app = express();
dotenv.config();
require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`The server is running port http://localhost:${port}`);
});
