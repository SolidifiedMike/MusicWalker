import { gql } from "apollo-server";

export default gql`

  type Room {
    _id: String!,
    roomName: String!,
    BGM: String!,
    authors: [String],
  }

  type RoomMutationResponse {
    message: String!
    data: Room!
  }

  type Query {

  }

  type Mutation {

  }
`;
