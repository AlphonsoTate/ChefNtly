const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eaterSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  cuisine: { type: String, required: true },
  favorites: String,
});

const Eater = mongoose.model("Eater", eaterSchema);

module.exports = Eater;