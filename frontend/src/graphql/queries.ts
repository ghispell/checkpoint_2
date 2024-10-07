import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      code
      emoji
      id
      name
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      emoji
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query Query($code: String!) {
    country(code: $code) {
      code
      emoji
      name
      continent {
        name
      }
    }
  }
`;
