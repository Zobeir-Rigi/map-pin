const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema(
  {
   // every pin has a userName
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //add automaticly create and update
);

module.exports = mongoose.model("pin", pinSchema);
// user is my modelName
