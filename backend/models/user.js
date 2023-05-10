const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // creating atribute
    username: {
      type: String,
      require: true, // because we can't creat any user without userName
      min: 3, // min or max characters
      max: 20,
      unique: true, // because we dont want any user with same username
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true } //add aoyomaticly create and update
);

module.exports = mongoose.model("User", UserSchema);
// user is my modelName