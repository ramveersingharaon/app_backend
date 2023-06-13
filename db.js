const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("the server is connected successfully");
  })
  .catch((e) => {
    console.log("The server connection is failed" + e);
  });
