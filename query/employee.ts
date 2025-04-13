import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployee {
     employees {
        email
        employeeId
        lang_base
        name
      }
  }
`;
