import usersResolvers from "./users.js";
import customScalars from "./customScalars.js";

export default {
  ...customScalars,
  Query: {
    ...roomResolvers.Query,
  },
  Mutation: {
    ...roomResolvers.Mutation,
  },
};
