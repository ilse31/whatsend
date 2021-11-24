import { gql } from "@apollo/client";

const insertData = gql`
  mutation MyMutation($object: phonebook_insert_input!) {
    insert_phonebook_one(object: $object) {
      id
    }
  }
`;
const DeleteData = gql`
  mutation MyMutation($id: Int!) {
    delete_phonebook_by_pk(id: $id) {
      id
      name
      number
    }
  }
`;

export { insertData, DeleteData };
