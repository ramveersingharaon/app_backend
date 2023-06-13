const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name should be Required"],
  },
  email: {
    type: String,
    required: [true, "Email should be Required"],
    unique: [true, "Email should be Unique"],
  },
  password: {
    type: String,
    required: [true, "Password should be Required"],
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
