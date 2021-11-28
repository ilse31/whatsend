import { gql } from "@apollo/client";
const getDataAll = gql`
  query MyQuery {
    phonebook {
      id
      name
      number
    }
  }
`;
export { getDataAll };
