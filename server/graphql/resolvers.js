import Room from "../models/Room.js";
import { UserInputError } from "apollo-server";
export default {
  Query: {
    async getRoomInfo(_, { id }) {
      const current = await Room.findOne({ _id: id });
      if (!current) {
        throw new UserInputError("Room not found.");
      }
      try {
        return current;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    async addRoom(parent, { roomName, BGM, authors }, context, info) {},
  },
};
