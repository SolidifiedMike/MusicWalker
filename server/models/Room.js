import mongoose from "mongoose";

const { model, Schema } = mongoose;

export const roomSchema = new Schema({
  _id: String,
  roomName: String,
  BGM: String,
  authors: [String],
});

export default model("Room", roomSchema);
