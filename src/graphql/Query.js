import { gql } from "@apollo/client";
const getData = gql`
  query MyQuery {
    phonebook {
      id
      name
      number
    }
  }
`;
export { getData };
