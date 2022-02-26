import { gql } from "apollo-server";

export default gql`
  scalar Date

  type Room {

  }

  type RoomMutationResponse {
    message: String!
    data: User!
  }

  type Query {

  }

  type Mutation {

  }
`;
