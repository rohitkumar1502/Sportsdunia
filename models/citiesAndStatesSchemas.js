const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = {
  City: mongoose.model("City", CitySchema),
  State: mongoose.model("State", StateSchema),
};
