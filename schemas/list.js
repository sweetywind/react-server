const mongoose = require("mongoose");

const { Schema } = mongoose;
const listSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("List", listSchema);
