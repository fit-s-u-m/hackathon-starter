import { gql } from '@apollo/client';

// Define the mutation with a variable for the email
export const ADD_EMAIL = gql`
  mutation AddEmployee($email: String!) {
    insert_employees(objects: { email: $email }) {
      returning {
        email
      }
    }
  }
`;
