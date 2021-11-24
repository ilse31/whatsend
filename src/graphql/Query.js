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
const getById = gql`
  query MyQuery($id: Int!) {
    phonebook(where: { id: { _eq: $id } }) {
      id
      jeniskelamin
      nama
      umur
    }
  }
`;
export { getDataAll, getById };
