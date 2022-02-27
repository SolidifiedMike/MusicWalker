const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const RoomSchema = new Schema({
  roomName: String,
  BGM: String,
  limit: Number,
  author: String,
  roads: [
    {
      author: String,
      instrument: String,
      road: [{ color: String, note: String }],
    },
  ],
});

// Export the Mongoose model
module.exports = mongoose.model("Room", RoomSchema);
