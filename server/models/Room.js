import mongoose from "mongoose";

const { model, Schema } = mongoose;

export const taskSchema = new Schema({});

export default model("Room", roomSchema);
